import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ReactDOM from 'react-dom';
import {GMNodeTypes, ModalID} from './Constants';
import {ChoiceNodeData} from './ChoiceNodeData';

class AddChildButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childNodeType: '',
      choiceNodeType: '',
      choiceNodeCategory: '',
      isOpen: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChoiceTypeChange = this.handleChoiceTypeChange.bind(this);
    this.handleNodeTypeChange = this.handleNodeTypeChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.updateOpenState = this.updateOpenState.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    this.setState({isOpen: true});
    //this.props.onAddNode(this.props.node);
  }

  /**
   * Invert the state defining the openness of the modal.
   */
  updateOpenState() {
    this.setState({isOpen: !this.state.isOpen});
  }

  /**
   * Do some important stuff when the modal is toggled (opened or closed).
   */
  toggleModal() {
    this.props.onEditNode();
    this.props.onClick();
    // Depending on the animation, you have to wait before the state is changed.
    // The content of #modalSpace is deleted when the this.state.isOpen = false.
    // Hence, we have to wait to delete it until the animation is finished.
    setTimeout(() => this.updateOpenState(), this.state.isOpen ? 600 : 0);
  }

  handleChoiceTypeChange() {
    const e = document.getElementById('choiceType');
    this.setState({
      choiceNodeCategory: e.options[e.selectedIndex].parentNode.label,
      choiceNodeType: e.options[e.selectedIndex].value,
    });
  }

  handleNodeTypeChange() {
    const e = document.getElementById('nodeType');
    this.setState({childNodeType: e.options[e.selectedIndex].value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const parent = this.props.node;
    let description = '';
    if (event.target.description !== undefined) {
      description = event.target.description.value;
    }
    const title = event.target.title.value;
    const nodeType = this.state.childNodeType;
    if (nodeType === '') {
      alert('The node type is required.');
      return;
    }
    let choiceNodeType = null;
    let choiceNodeCategory = null;
    if (nodeType === GMNodeTypes.CHOICE) {
      choiceNodeType = this.state.choiceNodeType;
      choiceNodeCategory = this.state.choiceNodeCategory;
      if (choiceNodeType === '') {
        alert('The type of choice node is required.');
        return;
      }
    }
    const optional = event.target.optionalNode.checked;
    this.props.onAddNode(
      parent,
      nodeType,
      choiceNodeCategory,
      choiceNodeType,
      title,
      description,
      optional,
    );
    this.toggleModal();
    // Restore initial state.
    this.setState({
      childNodeType: '',
      choiceNodeCategory: '',
      choiceNodeType: '',
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
            color: this.props.node.backgroundColor,
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
                  //maxHeight: 500,
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
                  {this.state.childNodeType === GMNodeTypes.CHOICE && (
                    <div className={'mb-4'}>
                      <label
                        className={
                          'block text-grey-darker text-lg font-bold mb-2'
                        }>
                        Choice Type
                      </label>
                      <select
                        className={'border border-solid'}
                        id={'choiceType'}
                        onChange={this.handleChoiceTypeChange}
                        style={{
                          height: '35px',
                          outline: 'none',
                          width: '150px',
                        }}>
                        <option disabled={true} selected={'selected'}>
                          Choose here
                        </option>
                        {Object.keys(ChoiceNodeData).map(function(category) {
                          return (
                            <optgroup key={category} label={category}>
                              {Object.keys(ChoiceNodeData[category]).map(
                                function(type) {
                                  return (
                                    <option
                                      key={type}
                                      className={
                                        'cursor-pointer text-center w-full'
                                      }
                                      selected={''}
                                      style={{height: '50px'}}>
                                      {ChoiceNodeData[category][type].name}
                                    </option>
                                  );
                                },
                              )}
                            </optgroup>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  {this.state.childNodeType === GMNodeTypes.DEFAULT && (
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
                    <button
                      className={
                        'bg-blue hover:bg-blue-dark px-4 py-2 rounded text-white'
                      }
                      style={{minWidth: '50%', outline: 'none'}}>
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
