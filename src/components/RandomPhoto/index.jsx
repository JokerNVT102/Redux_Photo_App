import React from "react";
import PropTypes from "prop-types";
import "./RandomPhoto.scss";
import { Button } from "reactstrap";
RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};
RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageChange: null,
  onRandomButtonBlur: null,
};
const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};
function RandomPhoto(props) {
  const { name, imageUrl, onImageChange, onRandomButtonBlur } = props;
  
  const handleRandomPhotoClick = async () => {
    if (onImageChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops .. not found. please click random  again!"
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
