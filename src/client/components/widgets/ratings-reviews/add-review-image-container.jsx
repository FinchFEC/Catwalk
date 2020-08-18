import React from 'react';
import PropTypes from 'prop-types';

class AddReviewImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };

    this.handleImageInputChange = this.handleImageInputChange.bind(this);
  }

  handleImageInputChange(e) {
    // console.log(e.target.files);
    const images = [];
    const imagesPromises = [];
    for (const file of e.target.files) {
      imagesPromises.push(
        new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            images.push(fileReader.result);
            // console.log('fileReader.result', fileReader.result);
            resolve();
          };
          fileReader.onerror = () => {
            reject('error reading file');
          };
          fileReader.readAsDataURL(file);
        })
      );
    }
    Promise.all(imagesPromises)
      .then((data) => {
        this.setState({ images });
      })
      .then(() => {
        console.log('images:', images);
        this.props.onChange(images);
      });
  }

  render() {
    return (
      <div className='modal-input'>
        <label htmlFor='image-input'>
          <input
            type='file'
            name='image'
            id='image-input'
            multiple
            onChange={this.handleImageInputChange}
          />
        </label>
        {this.state.images.length > 0 && this.state.images.length <= 5 && (
          <div className='review-image-previews-container'>
            {this.state.images.map((image, i) => {
              // console.log('rendering img preview:', image);
              return (
                <img
                  src={image}
                  alt={`imagePreview-${i}`}
                  key={i}
                  className='review-image-preview'
                  style={{ width: '150px', height: '150px' }}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

AddReviewImageContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AddReviewImageContainer;
