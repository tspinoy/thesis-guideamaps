import React from 'react';
import PropTypes from 'prop-types';
import {
  getPrimaryNodeColor,
  getSecondaryNodeColor,
  PDDData2,
  PDDDataComplete,
} from './PDDData';

class PDDEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeTitle: this.props.nodeTitle,
      nodeContent: this.props.nodeContent,
      nodeBackground: this.props.nodeBackground,
      includeChildren: true,
    };

    /* This binding is necessary to make `this` work in the callback.
     * For instance to be able to use "this.props..." and "this.state...".
     */
    PDDEditModal.clickNode = PDDEditModal.clickNode.bind(this);
  }

  static getDataById(id) {
    for (let i = 0; i < PDDDataComplete.length; i++) {
      if (PDDDataComplete[i].id === id) {
        return PDDDataComplete[i];
      }
    }
  }

  static clickNode(ref) {
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
      '--color': getPrimaryNodeColor(this.props.node),
    };

    const closeButtonStyle = {
      border: '2px solid ' + getPrimaryNodeColor(this.props.node),
      borderRadius: '50%',
      padding: '7px 10px 7px 10px',
      right: 0,
      transform: 'translate(17px, -32px)',
      '--color': getPrimaryNodeColor(this.props.node),
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
            borderColor: getPrimaryNodeColor(this.props.node),
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
            className={'absolute closePDDModalButton'}
            style={closeButtonStyle}
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
                  backgroundColor: getSecondaryNodeColor(this.props.node),
                  borderRight:
                    this.props.node.data.crossRefs.length !== 0 && 'solid 1px',
                }}>
                <h1
                  className={'pb-2'}
                  style={{color: getPrimaryNodeColor(this.props.node)}}>
                  {this.props.node.data.title}
                </h1>
                {this.props.node.data.image !== '' && (
                  <div
                    className={'float-left'}
                    style={{
                      backgroundImage: `url('https://via.placeholder.com/300x300?text=Loading+image...')`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      marginBottom: '10px',
                      marginRight: '10px',
                      minHeight: '150px',
                    }}>
                    <img
                      alt={'Image'}
                      className={'float-left'}
                      src={this.props.node.data.image}
                      style={{
                        border:
                          '2px solid ' + getPrimaryNodeColor(this.props.node),
                        maxHeight: '300px',
                      }}
                    />
                  </div>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.node.data.content,
                  }}
                />
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
                style={{
                  backgroundColor: getSecondaryNodeColor(this.props.node),
                }}>
                <h1
                  className={'pb-2'}
                  style={{color: getPrimaryNodeColor(this.props.node)}}>
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
                            PDDEditModal.clickNode(ref);
                            this.props.onClose();
                          }}
                          style={{
                            border:
                              '1px solid ' +
                              getPrimaryNodeColor(this.props.node),
                          }}>
                          {PDDEditModal.getDataById(ref)['title']}
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
