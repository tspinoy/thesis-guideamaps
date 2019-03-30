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

  static getDataById(id) {
    for (let i = 0; i < PDDData2.length; i++) {
      if (PDDData2[i].id === id) {
        return PDDData2[i];
      }
    }
  }

  clickNode(ref) {
    document.getElementById('title' + ref).click();
  }

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    const trStyle = {
      border: '1px solid #5cb85c',
      height: '50px',
      textAlign: 'center',
      width: '100%',
    };

    return (
      <div
        className={'backdrop overflow-y-scroll'}
        style={{
          //backgroundColor: 'rgba(0,0,0,0.3)', // gray background
          bottom: 0,
          height: window.innerHeight,
          left: 0,
          paddingTop: 50,
          paddingLeft: 50,
          paddingRight: 50,
          right: 0,
          top: 0,
          zIndex: 5000,
        }}>
        <div
          className={'absolute bg-white modal w-full'}
          style={{
            border: '2px solid',
            borderColor: '#5cb85c',
            borderRadius: 5,
            height: '75%',
            left: '50%',
            margin: '0 auto',
            maxWidth: '750px',
            padding: 15,
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}>
          <button
            className={
              'absolute bg-white hover:bg-green-dark border border-green-dark ' +
              'hover:text-white text-green'
            }
            style={{
              borderRadius: '50%',
              padding: '7px 10px 7px 10px',
              right: 0,
              transform: 'translate(17px, -32px)',
            }}
            onClick={() => this.props.onClose()}>
            X
          </button>
          <div className={'flex h-full'}>
            <div
              className={
                this.props.node.data.crossRefs.length === 0 ? 'w-full' : 'w-2/3'
              }>
              <div
                className={'h-full p-3 overflow-scroll'}
                style={{
                  backgroundColor: '#ecf5d5',
                  borderRight:
                    this.props.node.data.crossRefs.length !== 0 && 'solid 1px',
                }}>
                <h1 className={'pb-2'} style={{color: '#5cb85c'}}>
                  {this.props.node.data.titre}
                </h1>
                {this.props.node.data.image !== '' && (
                  <img
                    alt={'Image'}
                    className={'float-left mb-4 w-full'}
                    src={this.props.node.data.image}
                    style={{
                      backgroundColor: '#fff',
                      border: '2px solid #5cb85c',
                      marginBottom: '10px',
                      marginRight: '10px',
                      maxHeight: '300px',
                      width: 'auto',
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
                className={'h-full overflow-scroll p-3'}
                style={{backgroundColor: '#ecf5d5'}}>
                <h1 className={'pb-2'} style={{color: '#5cb85c'}}>
                  Cross refs
                </h1>
                <table
                  className={'border-separate w-full'}
                  style={{borderSpacing: '0 5px'}}>
                  <tbody>
                    {this.props.node.data.crossRefs.map(ref => (
                      <tr
                        className={'crossReference cursor-pointer'}
                        key={ref}
                        style={trStyle}>
                        <td
                          className={'p-3'}
                          onClick={() => {
                            this.clickNode(ref);
                            this.props.onClose();
                          }}
                          style={{border: '1px solid #5cb85c'}}>
                          {PDDEditModal.getDataById(ref)['titre']}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
