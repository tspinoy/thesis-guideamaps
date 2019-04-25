import React from 'react';
import PropTypes from 'prop-types';
import {GMNodeTypes, ItemTypes, Modes} from './Constants';
import {DragSource, DropTarget} from 'react-dnd';
import flow from 'lodash/flow';

import './css/App.css';
import {GMNodeWidth, GMNodeHeight} from './Constants';
import AddChildButton from './AddChildButton';
import EditButton from './EditButton';
import ExpandCollapseButton from './ExpandCollapseButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ReactDOM from 'react-dom';

const nodeSource = {
  beginDrag(props, monitor, component) {
    console.log(monitor.getItem());
    return {
      nodeId: props.id,
    };
  },
  endDrag(props, monitor, component) {
    console.log(props);
    console.log(monitor);
    console.log(component);
    let newPositions = monitor.getClientOffset();
    console.log(newPositions);
  },
};

const nodeTarget = {
  drop(props, monitor) {
    console.log(props);
    console.log(monitor);
  },
};

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class GMNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      customChoices: [],
      activeChoices: [], // to keep track of which choices are selected
      checkedChoices: 0,
    };
    this.addCustomChoice = this.addCustomChoice.bind(this);
    this.addChoiceChildNodes = this.addChoiceChildNodes.bind(this);
    this.completeNode = this.completeNode.bind(this);
    this.emptyChildren = this.emptyChildren.bind(this);
    this.getAllChildren = this.getAllChildren.bind(this);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.handleChoiceNodeClick = this.handleChoiceNodeClick.bind(this);
    this.loadChoices = this.loadChoices.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.loadChoices(this.props.node);
    let node = document.getElementById('node' + this.props.node.data.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 600);
  }

  componentDidUpdate() {
    let node = document.getElementById('node' + this.props.node.data.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 600);
  }

  /*
  setInterval(() => {
    if (this.state.last === 'in') {
      if (this.props.node.visible) {
        setTimeout(() => this.setState({keyframesFinished: true}), 2000);
      } else {
        this.setState({keyframesFinished: false, last: 'out'});
      }
    } else {
      if (this.props.node.visible) {
        this.setState({keyframesFinished: false, last: 'in'});
      } else {
        setTimeout(() => this.setState({keyframesFinished: true}), 2000);
      }
    }
  }, 100);
  */

  /*
  offsetWidth;
  offsetHeight;

  componentDidMount() {
    //this.offsetWidth = document.getElementById('node' + this.props.node.id).offsetWidth;
    //this.offsetHeight = document.getElementById('node' + this.props.node.id).offsetHeight;
    this.offsetHeight = document.getElementById('node' + this.props.node.id).getBoundingClientRect().top;
    this.offsetWidth = document.getElementById('node' + this.props.node.id).getBoundingClientRect().left;
    document
      .getElementById('node' + this.props.node.id)
      .addEventListener('pointerdown', this.handleMouseDown);
    document.addEventListener('pointermove', this.handleMouseMove);
    document.addEventListener('pointerup', this.handleMouseUp);
  }

  componentWillUnmount() {
    //Don't forget to unlisten!
    document
      .getElementById('node' + this.props.node.id)
      .removeEventListener('pointerdown', this.handleMouseDown);
    document.removeEventListener('pointermove', this.handleMouseMove);
    document
      .getElementById('node' + this.props.node.id)
      .removeEventListener('pointerup', this.handleMouseUp);
  }

  handleMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log('mousedown');
    this.setState({dragging: true, x: e.pageX, y: e.pageY});
  }

  handleMouseUp(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log('mouseup');
    this.setState({dragging: false});
  }

  handleMouseMove(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.state.dragging) {
      var x =
        this.props.node.x - e.pageX / 2 + this.props.width / 2 - GMNodeWidth;
      var y =
        this.props.node.y - (this.props.node.y - e.pageY) - GMNodeHeight;

      console.log(this.state.x, this.state.y, e.pageX, e.pageY, x, y);

      this.props.onNodePositionChange(this.props.node.id, x, y);
      //document.getElementById('node' + this.props.node.id).style.transform = `translate(${x}px, ${y}px)`
    }
  }
  */

  /**
   * A {@param node} is defined as complete if the "content"-field is filled in.
   * @param node
   * @return {boolean}
   */
  completeNode(node) {
    return node.content !== '';
    /*
    if (node.data.type === GMNodeTypes.CHOICE) {
      return node.title !== '';
    } else if (node.data.type === GMNodeTypes.DEFAULT) {
      return node.content !== '';
    }
    */
  }

  /**
   * A {@param node} is defined as empty if the "content"-field is empty.
   * @param node
   * @return {boolean}
   */
  emptyNode(node) {
    return node.content === '';
    /*
    if (node.data.type === GMNodeTypes.CHOICE) {
      return node.title === '';
    } else if (node.data.type === GMNodeTypes.DEFAULT) {
      return node.content === '';
    }
    */
  }

  /**
   * A helper function for {@see completenessIcon}
   * to get all the children of a {@param node}.
   * @param node: the node of which we want all children
   * @param result: the result is built into the array in this argument
   * @return {Array}: an array with all children of the {@param node}
   */
  getAllChildren(node, result = []) {
    if (node.children === undefined) {
      return result;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        result.push(child);
        this.getAllChildren(child, result);
      }
      return result;
    }
  }

  /**
   * A helper function for {@see completenessIcon} to check the completeness
   * of the children of a {@param node}.
   * @param node: the node of which we will check the children for completeness
   * @return {boolean}: the children are complete (true) or not (false)
   */
  completeChildren(node) {
    if (node.children === undefined) {
      return true;
    } else {
      // run over all children
      let children = this.getAllChildren(node);
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // you don't have to check optional child nodes for completeness
        if (child.data.optional) {
          continue;
        }
        if (child.data.type === GMNodeTypes.CHOICE) {
          if (!this.completeChildren(child)) {
            return false;
          }
        } else if (!this.completeNode(child)) {
          // When an incomplete node is detected, false is immediately returned
          return false;
        }
      }
      // All nodes are complete => return true
      return true;
    }
  }

  /**
   * A helper function for {@see completenessIcon} to check the emptyness
   * of the children of a {@param node}.
   * @param node: the node of which we will check the children for emptyness
   * @return {boolean}: the children are empty (true) or not (false)
   */
  emptyChildren(node) {
    if (node.children === undefined) {
      return true;
    } else {
      // run over all children
      let children = this.getAllChildren(node);
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // you don't have to check optional child nodes for completeness
        if (child.data.optional) {
          continue;
        }
        if (child.data.type === GMNodeTypes.CHOICE) {
          if (!this.emptyChildren(child)) {
            return false;
          }
        } else if (this.completeNode(child)) {
          // When an (partially) complete node is detected, false is immediately returned
          return false;
        }
      }
      // All nodes are empty => return true
      return true;
    }
  }

  /**
   * Check what the completeness-icon should look like. If the node itself and all
   * children are completed, a solid filled circle should be visible.
   * Otherwise (if the node and/or one or more of its children is incomplete),
   * a half filled circle should be visible.
   * @param node: the node to check for completeness
   * @return {string[]}: the specifications of the icon
   */
  completenessIcon(node) {
    switch (node.data.type) {
      case GMNodeTypes.CHOICE:
        if (node.children !== undefined) {
          if (this.emptyChildren(node)) {
            return ['far', 'circle'];
          } else if (this.completeChildren(node)) {
            return ['fas', 'circle'];
          } else {
            return ['fas', 'adjust'];
          }
        } else {
          return ['far', 'circle'];
        }
      default:
        if (this.emptyNode(node)) {
          if (this.emptyChildren(node)) {
            return ['far', 'circle'];
          } else {
            return ['fas', 'adjust'];
          }
        } else if (this.completeNode(node)) {
          // The node itself is complete, now check the children
          if (this.completeChildren(node)) {
            // Complete children
            return ['fas', 'circle'];
          } else {
            // At least one of the children is incomplete
            return ['fas', 'adjust'];
          }
        } else {
          return ['fas', 'adjust'];
        }
    }
  }

  /**
   * Find the x- and y- coordinates of the root.
   * @param node
   * @return {*[]}: an array with the x- and y- coordinates
   */
  getRootXY(node) {
    let current = node;
    while (current.parent !== null) {
      current = current.parent;
    }
    return [current.x, current.y];
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

  handleChoiceNodeClick() {
    this.toggleModal();
  }

  addChoiceChildNodes(event, node) {
    if (this.props.mode === Modes.END_USER) {
      if (this.state.checkedChoices < parseInt(node.choiceLowerLimit)) {
        alert(
          'You have to select at least ' + node.choiceLowerLimit + ' choices.',
        );
        return;
      } else if (this.state.checkedChoices > parseInt(node.choiceUpperLimit)) {
        alert(
          'You selected more than the maximum of ' +
            node.choiceUpperLimit +
            ' choices.',
        );
        return;
      }

      const choices = node.choices;
      // Check all checkboxes and add the selected nodes
      Object.values(choices).forEach((c, index) => {
        const el = document.getElementById(c.name);
        const id = this.props.node.data.id * 1000 + index;
        if (el.checked && !this.state.activeChoices.includes(id)) {
          // timeout needed to avoid simultaneously adding two nodes which would result in identical keys for the links
          setTimeout(() => {
            this.props.onAddNode(
              id,
              this.props.node,
              GMNodeTypes.DEFAULT,
              {},
              c.name,
              c.description,
              this.props.node.data.optional,
            );
            this.setState({
              activeChoices: [...this.state.activeChoices, id],
            });
          }, 250);
        } else if (!el.checked && this.state.activeChoices.includes(id)) {
          this.props.onDeleteNode(id); // Delete the node with the id that we created ourselves. This is why we had to create the id: we needed it to be able to delete the node.
          // And update the state
          let updatedActiveChoices = [...this.state.activeChoices]; // make a separate copy of the array
          const pos = updatedActiveChoices.indexOf(id);
          if (pos !== -1) {
            updatedActiveChoices.splice(pos, 1);
            this.setState({activeChoices: updatedActiveChoices});
          }
        }
      });
      this.toggleModal();
    } else if (this.props.mode === Modes.MAP_CREATOR) {
      const choices = {};
      for (let i = 0; i < this.state.customChoices.length; i++) {
        const title = event.target['titleChoice' + i].value;
        const description = event.target['descriptionChoice' + i].value;
        choices[title] = {
          description: description,
          name: title,
          type: GMNodeTypes.DEFAULT,
        };
      }
      const lowerLimit = event.target.lowerLimit.value;
      const upperLimit = event.target.upperLimit.value;
      this.props.onNodeChoicesUpdate(
        this.props.node.id,
        choices,
        lowerLimit,
        upperLimit,
      );
      this.toggleModal();
      setTimeout(() => this.loadChoices(this.props.node), 1000);
    }
  }

  loadChoices(node) {
    let result = [];
    Object.keys(node.choices).forEach((c, index) => {
      let choice = node.choices[c];
      result.push(
        <div
          className={'border border-solid mb-4 p-4 rounded'}
          key={'choice' + index}>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice node ' + index + ' title'}
            </label>
            <input
              className={
                'appearance-none border leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              defaultValue={choice.name}
              name={'titleChoice' + index}
              placeholder={'Node ' + index + ' title'}
              type={'text'}
            />
          </div>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice node ' + index + ' description'}
            </label>
            <input
              className={
                'appearance-none border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              defaultValue={choice.description}
              name={'descriptionChoice' + index}
              placeholder={'Node ' + index + ' description'}
              type={'text'}
            />
          </div>
        </div>,
      );
    });
    this.setState({customChoices: result});
  }

  addCustomChoice(choice) {
    this.setState({
      customChoices: [
        ...this.state.customChoices,
        <div
          className={'border border-solid mb-4 p-4 rounded'}
          key={'choice' + this.state.customChoices.length}>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice node ' + this.state.customChoices.length + ' title'}
            </label>
            <input
              className={
                'appearance-none border leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              defaultValue={choice.name}
              name={'titleChoice' + this.state.customChoices.length}
              placeholder={'Node ' + this.state.customChoices.length + ' title'}
              type={'text'}
            />
          </div>
          <div className={'mb-4'}>
            <label className={'block font-bold mb-2 text-grey-darker text-lg'}>
              {'Choice node ' +
                this.state.customChoices.length +
                ' description'}
            </label>
            <input
              className={
                'appearance-none border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 ' +
                'rounded shadow text-grey-darker w-full'
              }
              defaultValue={choice.description}
              name={'descriptionChoice' + this.state.customChoices.length}
              placeholder={
                'Node ' + this.state.customChoices.length + ' description'
              }
              type={'text'}
            />
          </div>
        </div>,
      ],
    });
  }

  handleChoiceClick(event) {
    if (event.target.checked) {
      this.setState(prevState => ({
        checkedChoices: prevState.checkedChoices + 1,
      }));
    } else {
      this.setState(prevState => ({
        checkedChoices: prevState.checkedChoices - 1,
      }));
    }
  }

  /**
   * To render a node, a div element is created.
   * Inside this div we have another div to display the title of the node + a second div showing the content of it.
   * The last div is responsible for the interactions:
   * - Adding a child node (only visible in map creator mode)
   * - Edit the current node
   * - Expand or collapse the current node to show or hide the child nodes (only visible if the node does have children)
   * */
  render() {
    const {
      centered,
      EditModalComp,
      mode,
      node,
      onAddNode,
      onClick,
      onDeleteNode,
      onEditNode,
      onNodeChoicesUpdate,
      onNodeLockUpdate,
      onNodeUpdate,
      //onNodePositionChange,
      onVisibleChildrenUpdate,
      //connectDragSource,
      //connectDropTarget,
      isDragging, // injected by react dnd
    } = this.props;

    const createTableOfChoices = () => {
      const choices = node.choices;
      console.log(this.state.activeChoices);
      return (
        <form>
          {Object.values(choices).map((c, index) => (
            <div
              className={'border border-solid flex m-4 rounded'}
              key={c.name}>
              <div className={'border-r p-4'}>
                <input
                  defaultChecked={this.state.activeChoices.includes(
                    node.data.id * 1000 + index,
                  )}
                  id={c.name}
                  onChange={e => this.handleChoiceClick(e)}
                  type={'checkbox'}
                  value={c.name}
                />
              </div>
              <div className={'pl-4'}>
                <div
                  className={'relative'}
                  style={{top: '50%', transform: 'translate(0, -50%)'}}>
                  <strong>
                    <label htmlFor={c.name}>{c.name}</label>
                  </strong>
                  <p>{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </form>
      );
    };

    switch (node.data.type) {
      case GMNodeTypes.CHOICE:
        return (
          //connectDragSource(connectDropTarget(
          <div
            key={node.data.id}
            id={'node' + node.data.id}
            className={
              'node absolute flex ' +
              'border border-solid border-black rounded ' +
              'p-2 cursor-pointer ' +
              (node.visible ? 'z-40 ' : 'z-0 ') +
              (node.visible ? 'visibleNode ' : 'hiddenNode ')
            }
            style={{
              width: GMNodeWidth,
              height: GMNodeHeight / 2,
              backgroundColor: node.locked ? 'gray' : '#fff690',
              opacity: isDragging ? 0.5 : '',
              transition: centered && 'all 500ms ease 0s',
              '--nodex': node.x + 'px',
              '--nodey': node.y + GMNodeHeight / 4 + 'px',
              '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
              '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
            }}>
            {mode === Modes.END_USER && node.data.optional && (
              <div
                className={'absolute border border-solid border-black'}
                style={{
                  transform:
                    'translate(' +
                    (GMNodeWidth - 10) +
                    'px, ' +
                    GMNodeHeight / 25 +
                    'px)',
                  borderBottomRightRadius: '50%',
                  borderTopRightRadius: '50%',
                }}
                onClick={() => onNodeLockUpdate(node.data.id)}>
                <FontAwesomeIcon
                  icon={node.locked ? 'lock' : 'lock-open'}
                  style={{margin: '3px'}}
                />
              </div>
            )}
            <div
              className={
                'm-auto overflow-hidden text-base w-5/6 whitespace-no-wrap'
              }
              onClick={() =>
                !node.locked ? this.handleChoiceNodeClick() : null
              }
              style={{
                filter: node.locked ? 'blur(1px)' : '',
                textOverflow: 'ellipsis',
              }}>
              {node.data.name}
            </div>
            <div
              className={'m-auto w-1/6'}
              onClick={() =>
                !node.locked ? this.handleChoiceNodeClick() : null
              }>
              {this.completenessIcon(node) !== null && (
                <FontAwesomeIcon
                  icon={this.completenessIcon(node)}
                  className={'text-base'}
                />
              )}
            </div>
            {this.state.isOpen &&
              ReactDOM.createPortal(
                <div
                  className={'backdrop'}
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.3)', // gray background
                    bottom: 0,
                    height: window.innerHeight,
                    left: 0,
                    paddingLeft: 50,
                    paddingRight: 50,
                    paddingTop: 50,
                    right: 0,
                    top: 0,
                    zIndex: 5000,
                  }}>
                  <div
                    className={'absolute overflow-y-auto rounded w-full'}
                    style={{
                      backgroundColor: '#fff',
                      left: '50%',
                      margin: '0 auto',
                      maxHeight: '80%',
                      maxWidth: '750px',
                      paddingBottom: 30,
                      paddingLeft: 50,
                      paddingRight: 50,
                      paddingTop: 30,
                      top: '10%',
                      transform: 'translate(-50%, 0)',
                      width: '90%',
                    }}>
                    <button
                      className={
                        'absolute bg-grey hover:bg-grey-dark py-2 px-4 mb-2 rounded'
                      }
                      style={{
                        outline: 'none',
                        right: 0,
                        transform: 'translate(0, -30px)',
                      }}
                      onClick={() => this.toggleModal()}>
                      X
                    </button>
                    {
                      this.props.mode === Modes.MAP_CREATOR &&
                      this.props.node.children === undefined &&
                      this.props.node.data.id !== 0 && (
                        <button
                          className={
                            'absolute bg-grey hover:bg-grey-dark rounded py-2 px-4 mb-2'
                          }
                          style={{
                            left: 0,
                            outline: 'none',
                            transform: 'translate(0, -30px)',
                          }}
                          onClick={() => {
                            this.props.onDeleteNode(this.props.node.data.id);
                            this.toggleModal();
                          }}>
                          <FontAwesomeIcon icon={'trash-alt'} />
                        </button>
                      )}
                    {/* content */}
                    {mode === Modes.MAP_CREATOR && (
                      <div className={'relative overflow-y-scroll'}>
                        <div>
                          <h1>{node.data.name}</h1>
                          <h3 className={'mb-4'}>Possible choices:</h3>
                          <form
                            onSubmit={e => {
                              e.preventDefault();
                              this.addChoiceChildNodes(e, node);
                            }}>
                            {this.state.customChoices}
                            Lower limit:{' '}
                            <select
                              className={'border border-solid mb-4'}
                              defaultValue={node.choiceLowerLimit}
                              id={'lowerLimit'}
                              name={'lowerLimit'}
                              style={{
                                height: '35px',
                                outline: 'none',
                                width: '150px',
                              }}>
                              {this.state.customChoices.map(function(c, index) {
                                return (
                                  <option
                                    className={
                                      'cursor-pointer text-center w-full'
                                    }
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
                              defaultValue={node.choiceUpperLimit}
                              id={'upperLimit'}
                              name={'upperLimit'}
                              style={{
                                height: '35px',
                                outline: 'none',
                                width: '150px',
                              }}>
                              {this.state.customChoices.map(function(c, index) {
                                if (index > 0) {
                                  return (
                                    <option
                                      className={
                                        'cursor-pointer text-center w-full'
                                      }
                                      key={c.name}
                                      value={index}>
                                      {index}
                                    </option>
                                  );
                                }
                              })}
                              <option
                                className={'cursor-pointer text-center w-full'}>
                                {this.state.customChoices.length}
                              </option>
                            </select>
                            <div className={'text-center'}>
                              <button
                                className={
                                  'bg-blue hover:bg-blue-dark mr-4 px-4 py-2 rounded text-white'
                                }
                                onClick={e => {
                                  e.preventDefault();
                                  this.addCustomChoice(
                                    this.state.customChoices.length,
                                  );
                                }}
                                style={{minWidth: '30%', outline: 'none'}}>
                                Add extra choice
                              </button>
                              <button
                                className={
                                  'bg-blue hover:bg-blue-dark ml-4 ' +
                                  'px-4 py-2 rounded text-white'
                                }
                                style={{
                                  minWidth: '30%',
                                  outline: 'none',
                                }}>
                                <FontAwesomeIcon icon={['far', 'save']} />
                                &nbsp;Save and close
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
                    {mode === Modes.END_USER && (
                      <div className={'overflow-y-scroll'}>
                        <div>
                          <h1>{node.data.name}</h1>
                          <h3>
                            {'Select between ' +
                              node.choiceLowerLimit +
                              ' and ' +
                              node.choiceUpperLimit +
                              ' choices.'}
                          </h3>
                          <h3 className={'mb-4'}>Possible choices:</h3>
                          {createTableOfChoices()}
                        </div>
                        <div className={'text-center'}>
                          <button
                            className={
                              'bg-blue hover:bg-blue-dark ' +
                              'px-4 py-2 rounded text-white'
                            }
                            style={{
                              minWidth: '50%',
                              outline: 'none',
                            }}
                            onClick={e => this.addChoiceChildNodes(e, node)}>
                            <FontAwesomeIcon icon={['far', 'save']} />
                            &nbsp;Save and close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>,
                document.getElementById('modalSpace'),
              )}
          </div>
        );
      default:
        // node.data.type === GMNodeTypes.DEFAULT
        return (
          //connectDragSource(connectDropTarget(
          <div
            key={node.data.id}
            id={'node' + node.data.id}
            className={
              'node absolute cursor-pointer ' +
              'border border-solid border-black rounded ' +
              (node.visible ? 'z-40 ' : 'z-0 ') +
              (node.visible ? 'visibleNode ' : 'hiddenNode ')
            }
            style={{
              width: GMNodeWidth,
              height: GMNodeHeight,
              color: node.backgroundColor,
              backgroundColor: node.locked ? 'grey' : node.backgroundColor,
              //opacity: isDragging ? 0.5 : '',
              transition: centered && 'all 500ms ease 0s',
              '--nodex': node.x + 'px',
              '--nodey': node.y + 'px',
              '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
              '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
            }}
            onClick={onClick}>
            {mode === Modes.END_USER && node.data.optional && (
              <div
                className={'absolute border border-solid border-black'}
                style={{
                  transform:
                    'translate(' +
                    (GMNodeWidth - 2) +
                    'px, ' +
                    GMNodeHeight / 3 +
                    'px)',
                  borderBottomRightRadius: '50%',
                  borderTopRightRadius: '50%',
                }}
                onClick={() => onNodeLockUpdate(node.data.id)}>
                <FontAwesomeIcon
                  icon={node.locked ? 'lock' : 'lock-open'}
                  style={{margin: '3px'}}
                />
              </div>
            )}
            <div // title div
              className={'bg-white flex pb-1 pl-2 pr-2 pt-1 rounded-t'}
              style={{
                borderBottom: '1px solid',
                borderColor: 'black',
                color: 'black',
                filter: node.locked ? 'blur(1px)' : '',
              }}>
              <div
                className={
                  'overflow-hidden ' +
                  (node.title === '' ? 'italic text-sm ' : 'text-sm ') +
                  'w-5/6 whitespace-no-wrap'
                }
                style={{textOverflow: 'ellipsis'}}>
                {node.title === '' ? 'Insert title' : node.title}
              </div>
              <div className={'w-1/6'}>
                <FontAwesomeIcon
                  icon={this.completenessIcon(node)}
                  className={'text-base'}
                />
              </div>
            </div>
            <div // content div
              className={
                'invertColors pb-1 pl-2 pr-2 pt-1 overflow-hidden text-base ' +
                (node.locked ? 'locked' : '')
              }
              style={{
                color: node.backgroundColor, // this is inverted by the invertColors-class
                height: '2.6em', // 1.2 times WebkitLineClamp of the paragraph
              }}>
              <p
                className={
                  'overflow-hidden ' +
                  (node.content === '' ? 'italic text-sm' : '')
                }
                style={{
                  WebkitLineClamp: 2,
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                }}>
                {node.content === '' ? node.description : node.content}
              </p>
            </div>
            <div // controls div
              className={'absolute pin-b flex rounded-b w-full'}
              style={{filter: node.locked ? 'blur(1px)' : ''}}>
              {mode === Modes.MAP_CREATOR && (
                <AddChildButton
                  bgcolor={node.backgroundColor}
                  locked={node.locked}
                  node={node}
                  onAddNode={onAddNode}
                  onEditNode={onEditNode}
                  onClick={onClick}
                  onNodeChoicesUpdate={onNodeChoicesUpdate}
                  width={node.height !== 0 ? 'w-1/3' : 'w-1/2'}
                />
              )}
              <EditButton
                bgcolor={node.backgroundColor}
                border={true}
                onDeleteNode={onDeleteNode}
                EditModalComp={EditModalComp}
                leaf={node.height === 0}
                locked={node.locked}
                mode={mode}
                node={node}
                onEditNode={onEditNode}
                onNodeUpdate={onNodeUpdate}
                width={
                  node.height !== 0
                    ? mode === Modes.MAP_CREATOR
                      ? 'w-1/3'
                      : 'w-1/2'
                    : mode === Modes.MAP_CREATOR
                    ? 'w-1/2'
                    : 'w-full'
                }
              />
              {node.height !== 0 && (
                // At non-child nodes the expand-collapse button should be added
                <ExpandCollapseButton
                  bgcolor={node.backgroundColor}
                  locked={node.locked}
                  node={node}
                  onVisibleChildrenUpdate={onVisibleChildrenUpdate}
                  width={mode === Modes.MAP_CREATOR ? 'w-1/3' : 'w-1/2'}
                />
              )}
            </div>
          </div>
        );
    }
  }
}

GMNode.propTypes = {
  connectDragSource: PropTypes.func, //.isRequired,
  connectDropTarget: PropTypes.func, //.isRequired,
  isDragging: PropTypes.bool, //.isRequired,
};

//export default GMNode;

export default flow(
  DragSource(ItemTypes.NODE, nodeSource, dragCollect),
  DropTarget(ItemTypes.NODE, nodeTarget, dropCollect),
)(GMNode);
