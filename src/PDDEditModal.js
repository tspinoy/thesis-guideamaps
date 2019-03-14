import React from 'react';
import PropTypes from 'prop-types';
import {PDDData2} from './PDDData';

class PDDEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeTitle: this.props.nodeTitle,
      nodeContent: this.props.nodeContent,
      nodeBackground: this.props.nodeBackground,
      includeChildren: true,
      selectedTab: 'content',
    };

    /* This binding is necessary to make `this` work in the callback.
     * For instance to be able to use "this.props..." and "this.state...".
     */
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleIncludeChildrenChange = this.handleIncludeChildrenChange.bind(
      this,
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.clickNode = this.clickNode.bind(this);
  }

  handleColorChange(color) {
    this.setState({nodeBackground: color.hex});
  }

  handleContentChange(event) {
    this.setState({nodeContent: event.target.value});
  }

  handleIncludeChildrenChange() {
    this.setState({includeChildren: !this.state.includeChildren});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTitle = this.state.nodeTitle;
    const newContent = this.state.nodeContent;
    const newBackground = this.state.nodeBackground;
    const includeChildren = this.state.includeChildren;
    this.props.updateNode(newTitle, newContent, newBackground, includeChildren);
    this.props.onClose();
  }

  handleTitleChange(event) {
    this.setState({nodeTitle: event.target.value});
  }

  clickEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: false,
  });

  static getDataById(id) {
    for (let i = 0; i < PDDData2.length; i++) {
      if (PDDData2[i].id === id) {
        return PDDData2[i];
      }
    }
  }

  clickNode(ref) {
    setTimeout(
      () =>
        document.getElementById('node' + ref).dispatchEvent(this.clickEvent),
      500,
    );
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    const trStyle = {
      border: '1px solid black',
      width: '100%',
      height: '50px',
      textAlign: 'center',
    };

    return (
      <div
        className={'backdrop overflow-y-scroll'}
        style={{
          height: window.innerHeight,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          //backgroundColor: 'rgba(0,0,0,0.3)', // gray background
          paddingTop: 50,
          paddingLeft: 50,
          paddingRight: 50,
          zIndex: 5000,
        }}>
        <div
          className={'modal'}
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            height: '75%',
            margin: '0 auto',
            padding: 15,
            width: '100%',
            maxWidth: '750px',
            border: '2px solid black',
            top: '50%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%,-50%)',
          }}>
          <div className={'flex'} style={{height: '90%', border: '1px solid'}}>
            <div
              className={
                this.props.node.data.crossRefs.length === 0 ? 'w-full' : 'w-2/3'
              }>
              <div
                className={'p-3 overflow-scroll'}
                style={{
                  backgroundColor: '#ecf5d5',
                  height: '100%',
                  borderRight:
                    this.props.node.data.crossRefs.length !== 0 && 'solid 1px',
                }}>
                <h1 className={'pb-2'} style={{color: '#5cb85c'}}>
                  {this.props.node.data.titre}
                </h1>
                {this.props.node.data.image !== '' && (
                  <img
                    src={this.props.node.data.image}
                    alt={'Image'}
                    style={{
                      float: 'left',
                      marginRight: '10px',
                      border: '3px solid #5cb85c',
                      width:
                        this.props.node.data.crossRefs.length === 0
                          ? '33%'
                          : '50%',
                    }}
                  />
                )}
                {this.props.node.data.resume}
              </div>
            </div>
            <div
              className={'w-1/3'}
              style={{
                display:
                  this.props.node.data.crossRefs.length === 0
                    ? 'none'
                    : 'block',
              }}>
              <div
                className={'p-3 overflow-scroll'}
                style={{backgroundColor: '#ecf5d5', height: '100%'}}>
                <h1 className={'pb-2'} style={{color: '#5cb85c'}}>
                  Cross refs
                </h1>
                <table
                  className={'w-full'}
                  style={{borderCollapse: 'separate', borderSpacing: '0 5px'}}>
                  <tbody>
                    {this.props.node.data.crossRefs.map(ref => (
                      <tr
                        key={ref}
                        style={trStyle}
                        className={'crossReference cursor-pointer'}>
                        <td
                          style={{border: '1px solid black', padding: '5px'}}
                          onClick={() => {
                            this.clickNode(ref);
                            this.props.onClose();
                          }}>
                          {PDDEditModal.getDataById(ref)['titre']}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr style={{backgroundColor: 'black', opacity: 0.5, height: 1}} />
          <div
            className={'flex text-center'}
            style={{
              height: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div className={'w-1/2'}>
              <button
                className={
                  'w-1/2 py-2 px-4 mr-2 mb-2 rounded border border-solid border-blue ' +
                  (this.state.selectedTab === 'content'
                    ? 'bg-blue hover:bg-blue-dark text-white'
                    : 'bg-white text-blue hover:bg-blue-dark hover:text-white')
                }
                onClick={() => this.setState({selectedTab: 'content'})}>
                Content
              </button>
            </div>
            <div className={'w-1/2'}>
              <button
                className={
                  'w-1/2 hover:bg-red hover:text-white border border-red border-solid rounded py-2 px-4 mr-2 mb-2'
                }
                onClick={() => this.props.onClose()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PDDEditModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default PDDEditModal;
