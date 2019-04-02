import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as ReactDOM from 'react-dom';
import {ChoiceNodeAllowedTypes} from './Constants';

class AddChildButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
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
    setTimeout(() => this.updateOpenState(), this.state.isOpen ? 1000 : 600);
  }

  render() {
    const {node, onAddNode} = this.props;
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
                  height: '300px',
                  //maxHeight: 500,
                  margin: '0 auto',
                  marginTop: '2%',
                  padding: 15,
                  width: '100%',
                  maxWidth: '750px',
                }}>
                <div className={'flex'}>
                  <h1 style={{width: '90%'}}>
                    Select the type of node to insert
                  </h1>
                  <button
                    className={
                      'bg-grey hover:bg-grey-dark mb-2 mr-2 px-4 py-2 rounded'
                    }
                    style={{width: '10%'}}
                    onClick={() => this.toggleModal()}>
                    X
                  </button>
                  {this.props.node.children === undefined && (
                    <button
                      className={
                        'bg-grey hover:bg-grey-dark mb-2 mr-2 px-4 py-2 rounded'
                      }
                      style={{width: '10%'}}
                      onClick={() => {
                        this.toggleModal();
                        this.props.deleteNode(this.props.node.data.id);
                      }}>
                      <FontAwesomeIcon
                        icon={'trash-alt'}
                        className={'text-base'}
                      />
                    </button>
                  )}
                </div>
                <table
                  className={'border-separate w-full'}
                  style={{borderSpacing: '0 5px'}}>
                  <tbody>
                    {Object.keys(ChoiceNodeAllowedTypes).map(function(type) {
                      return (
                        ChoiceNodeAllowedTypes[type] && (
                          <tr
                            key={type}
                            className={'cursor-pointer text-center w-full'}
                            style={{height: '50px'}}
                            onClick={() => onAddNode(node, type)}>
                            <td style={{border: '1px solid black'}}>{type}</td>
                          </tr>
                        )
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>,
            document.getElementById('modalSpace'),
          )}
      </div>
    );
  }
}

export default AddChildButton;
