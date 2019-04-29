import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ReactDOM from 'react-dom';
import {GMNodeTypes, ModalID} from './Constants';

class AddChildButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [],
      childNodeType: '',
      isOpen: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.addCustomChoice = this.addCustomChoice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNodeTypeChange = this.handleNodeTypeChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateOpenState = this.updateOpenState.bind(this);
  }

  componentDidMount() {
    this.addCustomChoice(0);
  }

  /**
   * Invert the state defining the openness of the modal.
   */
  updateOpenState() {
    this.setState({isOpen: !this.state.isOpen});
  }

  /**
   * Open or close the modal.
   */
  toggleModal() {
    this.props.onEditNode(); // Make sure the modal will be visible or invisible again
    this.props.onClick(); // Center the clicked node
    // Depending on the animation, you have to wait before the state is changed.
    // The content of #modalSpace is deleted when the this.state.isOpen = false.
    // Hence, we have to wait to delete it until the animation is finished.
    setTimeout(() => this.updateOpenState(), this.state.isOpen ? 600 : 0);
  }

  /**
   * Update the state each time the node type of the node-to-add is changed.
   */
  handleNodeTypeChange() {
    const e = document.getElementById('nodeType');
    this.setState({childNodeType: e.options[e.selectedIndex].value});
  }

  /**
   * When the form with the information about the node-to-add is submitted,
   * the submitted data should be handled in order to create the correct node.
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    // The current node will be the parent of the node that is added.
    const parent = this.props.node;

    // First detect the node type to be added.
    const nodeType = this.state.childNodeType;
    if (nodeType === '') {
      // If the nodeType is not specified, the node cannot be created.
      alert('The node type is required.');
      return;
    }

    // Get the title, description and optional-property of the new node.
    const title = event.target.title.value;
    const description = event.target.description.value;
    const optional = event.target.optionalNode.checked;

    // 2 cases: the nodeType = DEFAULT and the nodeType = CHOICE.
    if (nodeType === GMNodeTypes.DEFAULT) {
      this.props.onAddNode(
        null, // id (not necessary to pass it here, it is computed in App.js)
        parent, // parent node
        nodeType, // type of the node (GMNodeTypes.DEFAULT)
        null, // choices (null in case nodeType != CHOICE)
        title, // the title (aka name) of the node
        description, // the description of the node
        optional, // boolean to indicate whether the node is optional or not
      );
    } else if (nodeType === GMNodeTypes.CHOICE) {
      // Second case
      let choices = {};
      const lowerLimit = event.target.lowerLimit.value;
      const upperLimit = event.target.upperLimit.value;

      // Collect the choices prepared by the map creator.
      for (let i = 0; i < this.state.choices.length; i++) {
        const choiceTitle = event.target['titleChoice' + i].value;
        const choiceDescription = event.target['descriptionChoice' + i].value;
        choices[choiceTitle] = {
          description: choiceDescription,
          name: choiceTitle,
          type: GMNodeTypes.DEFAULT,
        };
      }
      // Take as id of the node-to-add the number of nodes the visualization already contains.
      // We need this id later once more.
      const nextId = this.props.nrOfNodes;
      this.props.onAddNode(
        nextId, // id
        parent, // parent node
        nodeType, // type of the node (GMNodeTypes.CHOICE)
        choices, // choices prepared by the map creator
        title, // the title (aka name) of the node
        description, // the description of the node
        optional, // boolean to indicate whether the node is optional or not
      );
      // Because it is not possible to do this immediately, we set a timeout.
      setTimeout(
        () =>
          this.props.onNodeChoicesUpdate(
            nextId, // id (because we need it here, we had to store it in a const)
            choices, // the choices created by the map creator
            lowerLimit,
            upperLimit,
          ),
        200,
      );
    }

    this.toggleModal(); // Close the modal after finish.
    // Restore initial state.
    this.setState({childNodeType: ''});
  }

  /**
   * Construct an additional choice for the choice node.
   * This function makes sure that additional html-elements are added
   * such that the user can insert additional choice possibilities.
   * @param id: the id (number) of the choice possibility.
   */
  addCustomChoice(id) {
    this.setState({
      choices: [
        ...this.state.choices,
        <div
          className={'border border-solid mb-4 p-4 rounded'}
          key={'choice' + id}>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice ' + id + ' title'}
            </label>
            <input
              className={
                'appearance-none border leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              name={'titleChoice' + id}
              placeholder={'Choice ' + id + ' title'}
              type={'text'}
            />
          </div>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice ' + id + ' description'}
            </label>
            <input
              className={
                'appearance-none border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              name={'descriptionChoice' + id}
              placeholder={'Choice ' + id + ' description'}
              type={'text'}
            />
          </div>
        </div>,
      ],
    });
  }

  render() {
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          className={
            'block text-grey-darkest font-bold ' +
            'py-1 px-1 ' +
            'rounded-bl items-center invertColors w-full ' +
            (!this.props.locked ? 'cursor-pointer' : 'cursor-default')
          }
          style={{
            borderTop: '1px solid',
            borderRight: '1px solid',
            borderColor: this.props.node.backgroundColor,
            color: this.props.node.backgroundColor, // inverted by invertColors (class)
            outline: 'none',
          }}
          /* the button should not be clickable when the node is locked */
          onClick={!this.props.locked ? this.toggleModal : undefined}>
          <FontAwesomeIcon icon={'plus'} />
        </button>
        {/* the tooltip should only be shown when the node is not locked */}
        <span className={!this.props.locked ? 'tooltiptext' : ''}>
          {!this.props.locked && 'Add child node'}
        </span>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <div
              className={'backdrop overflow-y-scroll'}
              style={{
                height: window.innerHeight,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.3)', // gray background
                paddingTop: 50,
                paddingLeft: 50,
                paddingRight: 50,
                zIndex: 5000,
              }}>
              <div
                className={'modal overflow-y-scroll rounded'}
                style={{
                  backgroundColor: '#fff',
                  border: '2px solid black',
                  maxHeight: '80%',
                  margin: '0 auto',
                  marginTop: '2%',
                  padding: 15,
                  width: '100%',
                  maxWidth: '750px',
                }}>
                <div className={'flex'}>
                  <h1 style={{width: '90%'}}>Insert child node</h1>
                  <button
                    className={
                      'bg-grey hover:bg-grey-dark mb-2 mr-2 px-4 py-2 rounded'
                    }
                    style={{width: '10%'}}
                    onClick={() => this.toggleModal()}>
                    X
                  </button>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <label
                    className={'block text-grey-darker text-lg font-bold mb-2'}>
                    Node Type
                  </label>
                  <select
                    className={'border border-solid mb-4'}
                    id={'nodeType'}
                    onChange={this.handleNodeTypeChange}
                    style={{height: '35px', outline: 'none', width: '150px'}}>
                    <option disabled={true} selected={'selected'}>
                      Select node type
                    </option>
                    {Object.keys(GMNodeTypes).map(function(type) {
                      return (
                        <option
                          key={type}
                          className={'cursor-pointer text-center w-full'}
                          style={{height: '50px'}}>
                          {GMNodeTypes[type]}
                        </option>
                      );
                    })}
                  </select>
                  <div className={'mb-4'}>
                    <label
                      className={
                        'block text-grey-darker text-lg font-bold mb-2'
                      }>
                      Title
                    </label>
                    <input
                      className={
                        'mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ' +
                        'leading-tight focus:outline-none focus:shadow-outline'
                      }
                      name={'title'}
                      //onChange={this.handleTitleChange}
                      placeholder={'Node title'}
                      type={'text'}
                    />
                    <label
                      className={
                        'block font-bold mb-2 text-grey-darker text-lg'
                      }>
                      Description
                    </label>
                    <input
                      className={
                        'appearance-none border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 ' +
                        'rounded shadow text-grey-darker w-full'
                      }
                      name={'description'}
                      //onChange={this.handleDescriptionChange}
                      placeholder={'Node description'}
                      type={'text'}
                    />
                  </div>
                  {this.state.childNodeType === GMNodeTypes.CHOICE && (
                    <React.Fragment>
                      <div id={'custom-choices'}>{this.state.choices}</div>
                      {'Lower limit: '}
                      <select
                        className={'border border-solid mb-4'}
                        defaultValue={0}
                        id={'lowerLimit'}
                        name={'lowerLimit'}
                        style={{
                          height: '35px',
                          outline: 'none',
                          width: '150px',
                        }}>
                        {this.state.choices.map(function(c, index) {
                          return (
                            <option
                              className={'cursor-pointer text-center w-full'}
                              key={c.name}
                              value={index}>
                              {index}
                            </option>
                          );
                        })}
                      </select>
                      <br />
                      Upper limit:{' '}
                      <select
                        className={'border border-solid mb-4'}
                        defaultValue={this.state.choices.length}
                        id={'upperLimit'}
                        name={'upperLimit'}
                        style={{
                          height: '35px',
                          outline: 'none',
                          width: '150px',
                        }}>
                        {this.state.choices.map(function(c, index) {
                          if (index > 0) {
                            return (
                              <option
                                className={'cursor-pointer text-center w-full'}
                                key={c.name}
                                value={index}>
                                {index}
                              </option>
                            );
                          }
                        })}
                        <option className={'cursor-pointer text-center w-full'}>
                          {this.state.choices.length}
                        </option>
                      </select>
                    </React.Fragment>
                  )}
                  <div
                    className={'mb-4'}
                    style={{
                      display: this.props.node.data.optional ? 'none' : 'block',
                    }}>
                    <input
                      defaultChecked={this.props.node.data.optional}
                      id={'optionalNode'}
                      name={'optionalNode'}
                      type={'checkbox'}
                    />
                    <label htmlFor={'optionalNode'}> Optional?</label>
                  </div>
                  <div className={'mb-4 text-center'}>
                    {this.state.childNodeType === GMNodeTypes.CHOICE && (
                      <button
                        className={
                          'bg-blue hover:bg-blue-dark mr-4 px-4 py-2 rounded text-white'
                        }
                        onClick={e => {
                          e.preventDefault();
                          this.addCustomChoice(this.state.choices.length);
                        }}
                        style={{minWidth: '30%', outline: 'none'}}>
                        Add extra choice
                      </button>
                    )}
                    <button
                      className={
                        'bg-blue hover:bg-blue-dark ' +
                        (this.state.childNodeType === GMNodeTypes.CHOICE
                          ? 'ml-4 '
                          : '') +
                        'px-4 py-2 rounded text-white'
                      }
                      style={{
                        minWidth:
                          this.state.childNodeType === GMNodeTypes.CHOICE
                            ? '30%'
                            : '50%',
                        outline: 'none',
                      }}>
                      <FontAwesomeIcon icon={['far', 'save']} />
                      &nbsp;Create node!
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.getElementById(ModalID),
          )}
      </div>
    );
  }
}

export default AddChildButton;
