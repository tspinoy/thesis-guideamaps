import React from 'react';
import PropTypes from 'prop-types';
import {SketchPicker} from 'react-color';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {GMNodeTypes, Modes} from './Constants';

class GMEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeDescription: this.props.node.description,
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
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleIncludeChildrenChange = this.handleIncludeChildrenChange.bind(
      this,
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  /**
   * Update the state with the new background color each time it is changed.
   * @param color
   */
  handleColorChange(color) {
    this.setState({nodeBackground: color.hex});
  }

  /**
   * Update the state with the new node content each time it is changed.
   * @param event
   */
  handleContentChange(event) {
    this.setState({nodeContent: event.target.value});
  }

  /**
   * Update the state with the new node description each time it is changed.
   * @param event
   */
  handleDescriptionChange(event) {
    this.setState({nodeDescription: event.target.value});
  }

  /**
   * Update the state with the inverted boolean each time the checkbox is clicked.
   */
  handleIncludeChildrenChange() {
    this.setState({includeChildren: !this.state.includeChildren});
  }

  /**
   * Update the state with the new node title each time it is changed.
   */
  handleTitleChange(event) {
    this.setState({nodeTitle: event.target.value});
  }

  /**
   * When the form with the information about the node-to-update is submitted,
   * the submitted data should be handled in order to update the correct node.
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    // Take all data inserted via the form.
    const newDescription = this.state.nodeDescription;
    const newTitle = this.state.nodeTitle;
    const newContent = this.state.nodeContent;
    const newBackground = this.state.nodeBackground;
    const includeChildren = this.state.includeChildren;
    // Update the node with the updated data.
    this.props.onNodeUpdate(
      this.props.node.id, // The id of the node-to-update
      newDescription, // The updated description
      newTitle, // The updated title
      newContent, // The updated content
      newBackground, // The updated background color
      includeChildren, // Boolean to know whether the color of the children should be updated as well (true) or not (false)
    );
    this.props.onClose();
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
            className={'absolute modal rounded w-full'}
            style={{
              backgroundColor: '#fff',
              left: '50%',
              margin: '0 auto',
              //maxHeight: 500,
              maxWidth: '750px',
              minHeight: 300,
              padding: 15,
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
                transform: 'translate(17px, -32px)',
              }}
              onClick={() => this.props.onClose()}>
              X
            </button>
            {((this.props.mode === Modes.MAP_CREATOR &&
              this.props.node.children === undefined &&
              this.props.node.data.id !== 0) ||
              (this.props.node.parent !== null &&
                this.props.node.parent.data.type === GMNodeTypes.CHOICE)) && (
              <button
                className={
                  'absolute bg-grey hover:bg-grey-dark rounded py-2 px-4 mb-2'
                }
                style={{
                  left: 0,
                  outline: 'none',
                  transform: 'translate(-17px, -32px)',
                }}
                onClick={() => {
                  this.props.onDeleteNode(this.props.node.data.id);
                  this.props.onClose();
                }}>
                <FontAwesomeIcon icon={'trash-alt'} />
              </button>
            )}
            {/* content */}
            {this.props.node.locked ? (
              <div className={'mt-12 text-center'}>
                <FontAwesomeIcon icon={'lock'} size={'6x'} />
              </div>
            ) : (
              <div className={'p-2'}>
                <div
                  style={{
                    display:
                      this.state.selectedTab === 'content' ? 'block' : 'none',
                  }}
                  onClick={() => this.setState({selectedTab: 'content'})}>
                  <table>
                    <tbody>
                      <tr>
                        <td className={'p-2 w-auto'}>Node title</td>
                        <td>{this.props.node.title}</td>
                      </tr>
                      <tr>
                        <td className={'p-2 w-auto'}>Node content</td>
                        <td>{this.props.node.content}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  style={{
                    display:
                      this.state.selectedTab === 'edit' ? 'block' : 'none',
                  }}
                  onClick={() => this.setState({selectedTab: 'edit'})}>
                  <form
                    onSubmit={this.handleSubmit}
                    className={'bg-white px-8 rounded shadow-md'}>
                    <div className={'content-start flex overflow-scroll'}>
                      <div className={'m-4 w-2/3'}>
                        <div className={'mb-4 text-center'}>
                          <button
                            className={
                              'bg-blue hover:bg-blue-dark px-4 py-2 rounded text-white'
                            }
                            style={{minWidth: '50%', outline: 'none'}}>
                            <FontAwesomeIcon icon={['far', 'save']} />
                            &nbsp;Save and close
                          </button>
                          <hr
                            style={{
                              backgroundColor: 'black',
                              height: 1,
                              opacity: 0.5,
                            }}
                          />
                        </div>
                        {/* Node title */}
                        {this.props.mode === Modes.END_USER ? (
                          /* end user stuff */
                          this.props.node.title === '' ? (
                            <div className={'mb-4'}>
                              <label
                                className={
                                  'block font-bold mb-2 text-grey-darker text-lg'
                                }>
                                Node title
                              </label>
                              <input
                                className={
                                  'appearance-none border leading-tight px-3 py-2 ' +
                                  'rounded shadow text-grey-darker w-full'
                                }
                                defaultValue={this.props.node.title}
                                name={'title'}
                                onChange={this.handleTitleChange}
                                placeholder={'Node title'}
                                type={'text'}
                              />
                            </div>
                          ) : (
                            <div className={'mb-4'}>
                              <h1>{this.props.node.title}</h1>
                            </div>
                          )
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
                              defaultValue={this.props.node.title}
                              name={'title'}
                              onChange={this.handleTitleChange}
                              placeholder={'Node title'}
                              type={'text'}
                            />
                          </div>
                        )}
                        {/* Node description */}
                        {this.props.mode === Modes.END_USER ? (
                          /* end user stuff */
                          this.props.node.description === '' ? (
                            <div className={'mb-4'}>
                              <label
                                className={
                                  'block text-grey-darker text-lg font-bold mb-2'
                                }>
                                Node description
                              </label>
                              <input
                                className={
                                  'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ' +
                                  'leading-tight'
                                }
                                defaultValue={this.props.node.description}
                                name={'title'}
                                onChange={this.handleDescriptionChange}
                                placeholder={'Node description'}
                                type={'text'}
                              />
                            </div>
                          ) : (
                            <div className={'mb-4'}>
                              <p>{this.props.node.description}</p>
                            </div>
                          )
                        ) : (
                          /* map creator stuff */
                          <div className={'mb-4'}>
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
                              defaultValue={this.props.node.description}
                              name={'description'}
                              onChange={this.handleDescriptionChange}
                              placeholder={'Node description'}
                              type={'text'}
                            />
                          </div>
                        )}
                        {/* Node content */}
                        {this.props.mode === Modes.END_USER ? (
                          <div className={'mb-4'}>
                            <label
                              className={
                                'block font-bold mb-2 text-grey-darker text-lg'
                              }>
                              Content
                            </label>
                            <textarea
                              className={
                                'appearance-none border focus:outline-none focus:shadow-outline leading-tight px-3 py-2 ' +
                                'rounded shadow text-grey-darker w-full'
                              }
                              defaultValue={this.props.node.content}
                              name={'content'}
                              onChange={this.handleContentChange}
                              placeholder={'Node content'}
                            />
                          </div>
                        ) : (
                          <div className={'mb-4'}>
                            <p>{this.props.node.content}</p>
                          </div>
                        )}
                      </div>
                      {/* Color picker */}
                      <div className={'m-4 w-1/3'}>
                        <label
                          className={
                            'block font-bold mb-2 text-grey-darker text-lg'
                          }>
                          Background color
                        </label>
                        <SketchPicker
                          color={this.state.nodeBackground}
                          disableAlpha={true}
                          name={'colorPicker'}
                          onChange={this.handleColorChange}
                          width={180}
                        />
                        <br />
                        <input
                          defaultChecked={this.state.includeChildren}
                          id={'includeChildren'}
                          name={'includeChildren'}
                          onChange={this.handleIncludeChildrenChange}
                          type={'checkbox'}
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
            )}
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
