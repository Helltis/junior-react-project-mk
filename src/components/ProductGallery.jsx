import React, { Component } from "react";
import product from "../assets/product.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import "./productGallery.scss";

export class ProductGallery extends Component {
  arrImg = [product, product2, product3, product4];
  state = {
    selectedImg: this.props.gallery[0],
  };

  render() {
    return (
      <div className="productGallery">
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
