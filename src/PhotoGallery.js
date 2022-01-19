import React from 'react';
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'
import './PhotoGallery.css';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      total: 0,
    };
  }

  prevClick() {
    let curr = this.state.active;
    let total = this.state.total;
    if (curr===0) {
      curr = total;
    }
    this.setState({
      active: curr - 1
    });
  }

  nextClick() {
    let curr = this.state.active;
    let total = this.state.total;
    if (curr===total-1) {
      curr = -1;
    }
    this.setState({
      active: curr + 1
    });
  }

  render() {
    const children = this.props.children;
    var picsArray = []

    for (let i = 0; i < children.length; i++) {
      picsArray.push(
        <img 
          src={children[i].props.src}
          alt={children[i].props.alt}
        />
      )
    }

    this.setState({
      total: picsArray.length
    });

    var DisplayPic = picsArray[this.state.active];

    return (
      <div>
        <div className="Showcase-Carousel">
          <DisplayPic></DisplayPic>
          <FiArrowLeftCircle id="prev-arrow" onClick={() => this.prevClick()} />
          <FiArrowRightCircle id="next-arrow" onClick={() => this.nextClick()} />
        </div>
      </div>
    );
  }
}

export default PhotoGallery;