import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/icons';

// class ImgModal extends React.Component {
//   render() {
//     return (
//       <div className='img-modal'>
//         <div className='img-modal-content'>
//           <img src={this.props.src} alt={this.props.id} className='modal-img' />
//         </div>
//         <div className='img-modal-exit-btn' onClick={this.props.onClick}>
//           <FontAwesomeIcon icon={['far', 'times-circle']} size='2x' />
//         </div>
//       </div>
//     );
//   }
// }

class ImgModal extends React.Component {
  render() {
    return (
      <div className='img-modal'>
        <div
          className='img-modal-content'
          style={{ backgroundImage: `url(${this.props.src})` }}
        ></div>
        <div className='img-modal-exit-btn' onClick={this.props.onClick}>
          <FontAwesomeIcon icon={['far', 'times-circle']} size='2x' />
        </div>
      </div>
    );
  }
}

ImgModal.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImgModal;
