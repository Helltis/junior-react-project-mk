import React, { Component } from "react";
import product from "../assets/product.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import "./productGallery.scss";

export class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.selectedImg = this.arrImg[0];
  }

  arrImg = [product, product2, product3, product4];
  // const [selectedImg, setSelectedImg] = useState(arrImg[0]);
  render() {
    return (
      <div className="productGallery">
        <div className="productGallery_container">
          <img
            src={this.selectedImg}
            alt="Selected"
            className="productGallery_image"
          />
        </div>
        <div className="productGallery_thumbs">
          {this.arrImg.map((img, index) => (
            <img
              src={img}
              alt="dog"
              key={index}
              onClick={() => this.setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductGallery;
