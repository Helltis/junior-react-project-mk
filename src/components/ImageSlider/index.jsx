import React, { PureComponent } from "react";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";

export class ImageSlider extends PureComponent {
  state = {
    imgIndex: 0,
  };
  galleryLength = this.props.gallery.length;
  imgFwd = () => {
    if (this.state.imgIndex < this.galleryLength - 1) {
      this.setState({ imgIndex: this.state.imgIndex + 1 });
    } else {
      this.setState({ imgIndex: 0 });
    }
  };
  imgBck = () => {
    if (this.state.imgIndex > 0) {
      this.setState({ imgIndex: this.state.imgIndex - 1 });
    } else {
      this.setState({ imgIndex: this.galleryLength - 1 });
    }
  };
  render() {
    const { gallery } = this.props;
    const imgFwd = this.imgFwd,
      imgBck = this.imgBck,
      imgIndex = this.state.imgIndex;
    const imgArrows =
      this.galleryLength > 1
        ? "cartComponents_slider_buttons"
        : "cartComponents_slider_buttons_disabled";
    return (
      <div className="cartComponents_slider">
        <img src={gallery[imgIndex]} alt="product preview" />
        <div className={imgArrows}>
          <input type="image" src={left} alt="left" onClick={imgBck} />
          <input type="image" src={right} alt="right" onClick={imgFwd} />
        </div>
      </div>
    );
  }
}

export default ImageSlider;
