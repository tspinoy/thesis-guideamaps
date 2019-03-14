import React from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Modes} from './Constants';

class GMEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeTitle: this.props.nodeTitle,
      nodeContent: this.props.nodeContent,
      nodeBackground: this.props.nodeBackground,
      includeChildren: true,
      selectedTab: 'edit',
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
    event.persist();
    //const newTitle = event.target[2].value;
    //const newContent = event.target[3].value;
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

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    } else
      return (
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
            className={'modal'}
            style={{
              backgroundColor: '#fff',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              minHeight: 300,
              //maxHeight: 500,
              margin: '0 auto',
              padding: 15,
              width: '100%',
              maxWidth: '750px',
            }}>
            <div className={'flex text-center'}>
              {/*<div className={'w-1/3'}>
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
              */}
              <div className={'w-1/2'}>
                <button
                  className={
                    'w-1/2 py-2 px-4 mr-2 mb-2 rounded border border-solid border-blue ' +
                    (this.state.selectedTab === 'edit'
                      ? 'bg-blue hover:bg-blue-dark text-white '
                      : 'bg-white text-blue hover:bg-blue-dark hover:text-white')
                  }
                  onClick={() => this.setState({selectedTab: 'edit'})}>
                  Edit
                </button>
              </div>
              <div className={'w-1/2'}>
                <button
                  className={
                    'w-1/2 bg-grey hover:bg-grey-dark rounded py-2 px-4 mr-2 mb-2'
                  }
                  onClick={() => this.props.onClose()}>
                  Close
                </button>
              </div>
            </div>
            <hr style={{backgroundColor: 'black', opacity: 0.5, height: 1}} />
            <div className="p-2">
              <div
                style={{
                  display:
                    this.state.selectedTab === 'content' ? 'block' : 'none',
                }}
                onClick={() => this.setState({selectedTab: 'content'})}>
                <table>
                  <tbody>
                    <tr>
                      <td className={'w-auto p-2'}>Node title</td>
                      <td>{this.props.node.title}</td>
                    </tr>
                    <tr>
                      <td className={'w-auto p-2'}>Node content</td>
                      <td>{this.props.node.content}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                style={{
                  display: this.state.selectedTab === 'edit' ? 'block' : 'none',
                }}
                onClick={() => this.setState({selectedTab: 'edit'})}>
                <form
                  onSubmit={this.handleSubmit}
                  className={'bg-white shadow-md rounded px-8'}>
                  <div className={'flex content-start overflow-scroll'}>
                    <div className={'m-4 w-2/3'}>
                      <div className={'mb-4 text-center'}>
                        <button
                          className={
                            'bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                          }
                          style={{width: '200px'}}>
                          <FontAwesomeIcon icon={['far', 'save']} />
                          &nbsp;Save and close
                        </button>
                        <hr
                          style={{
                            backgroundColor: 'black',
                            opacity: 0.5,
                            height: 1,
                          }}
                        />
                      </div>
                      {this.props.mode === Modes.END_USER ? (
                        /* end user stuff */
                        <div className={'mb-4'}>
                          <h1>{this.props.node.title}</h1>
                        </div>
                      ) : (
                        /* map creator stuff */
                        <div className={'mb-4'}>
                          <label
                            className={
                              'block text-grey-darker text-lg font-bold mb-2'
                            }>
                            Node title
                          </label>
                          <input
                            className={
                              'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ' +
                              'leading-tight focus:outline-none focus:shadow-outline'
                            }
                            name={'title'}
                            type={'text'}
                            placeholder={'Node title'}
                            defaultValue={this.props.node.title}
                            onChange={this.handleTitleChange}
                          />
                        </div>
                      )}
                      {/* Node description */}
                      <div className={'mb-4'}>
                        <p>Description here</p>
                      </div>
                      <div className={'mb-4'}>
                        <label
                          className={
                            'block text-grey-darker text-lg font-bold mb-2'
                          }>
                          Content
                        </label>
                        <textarea
                          className={
                            'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ' +
                            'leading-tight focus:outline-none focus:shadow-outline'
                          }
                          name={'content'}
                          placeholder={'Node content'}
                          defaultValue={this.props.node.content}
                          onChange={this.handleContentChange}
                        />
                      </div>
                    </div>
                    {/* Color picker */}
                    <div className={'m-4 w-1/3'}>
                      <label
                        className={
                          'block text-grey-darker text-lg font-bold mb-2'
                        }>
                        Background color
                      </label>
                      <SketchPicker
                        name={'colorPicker'}
                        disableAlpha={true}
                        width={180}
                        color={this.state.nodeBackground}
                        onChange={this.handleColorChange}
                      />
                      <br />
                      <input
                        type={'checkbox'}
                        id={'includeChildren'}
                        name={'includeChildren'}
                        defaultChecked={this.state.includeChildren}
                        onChange={this.handleIncludeChildrenChange}
                      />
                      <label htmlFor={'includeChildren'}>
                        {' '}
                        Include children
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

GMEditModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default GMEditModal;
