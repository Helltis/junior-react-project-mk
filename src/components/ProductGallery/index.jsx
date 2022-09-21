import React, { PureComponent } from "react";
import "./productGallery.scss";

export class ProductGallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: this.props.gallery[0],
    };
  }

  setImage = (img) => {
    this.setState({ selectedImg: img });
  };

  render() {
    const { gallery } = this.props,
      selectedImg = this.state.selectedImg,
      setImage = this.setImage;
    return (
      <div className="productGallery">
        {gallery.length > 1 && (
          <div className="productGallery_thumbs">
            {gallery.map((img, index) => (
              <img
                src={img}
                alt="dog"
                key={index}
                onClick={() => setImage(img)}
              />
            ))}
          </div>
        )}
        <div className="productGallery_container">
          <img
            src={selectedImg}
            alt="Selected"
            className="productGallery_image"
          />
        </div>
      </div>
    );
  }
}

export default ProductGallery;
