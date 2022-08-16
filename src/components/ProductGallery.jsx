import React, { Component } from "react";
import "./productGallery.scss";

export class ProductGallery extends Component {
  state = {
    selectedImg: this.props.gallery[0],
  };

  render() {
    return (
      <div className="productGallery">
        {/* show thumbnails if gallery has more than 1 picture */}
        {this.props.gallery.length > 1 && (
          <div className="productGallery_thumbs">
            {this.props.gallery.map((img, index) => (
              <img
                src={img}
                alt="dog"
                key={index}
                onClick={() => this.setState({ selectedImg: img })}
              />
            ))}
          </div>
        )}
        <div className="productGallery_container">
          <img
            src={this.state.selectedImg}
            alt="Selected"
            className="productGallery_image"
          />
        </div>
      </div>
    );
  }
}

export default ProductGallery;
