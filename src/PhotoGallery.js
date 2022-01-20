import React from 'react';
import {IoChevronBack as BackArrow, IoChevronForward as ForwardArrow} from 'react-icons/io5'
import './PhotoGallery.css';


class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,    // index of active photo
      total: this.props.children.length,  // number of photos in the gallery
    };
  }

  // click to go back one photo
  prevClick() {
    let curr = this.state.active;
    let total = this.state.total;

    // if the index is 0, then set the index to the length of the array. when you
    // go back one index, it will go to the final item in the array.
    if (curr===0) {
      curr = total;
    }

    // set the state one index backward
    this.setState({
      active: curr - 1
    });
  }

  // click to go forward one photo
  nextClick() {
    let curr = this.state.active;
    let total = this.state.total;

    // if the index is the final item in the array, then set the index to -1. when
    // you go up one index, it will go to the first item in the array.
    if (curr===total-1) {
      curr = -1;
    }

    // set the state one index forward
    this.setState({
      active: curr + 1
    });
  }

  render() {
    // this.props.children grabs the inner elements and their properties from where
    // PhotoGallery is called. these will be the collection of photos for this gallery.
    const children = this.props.children;
    
    // array to keep the all the image definitions.
    var picsArray = [];

    // show arrows to go back and forth between pictures. default is no show (as long)
    // as only one img is present in the gallery).
    var DisplayArrows = (<div></div>);

    // if there are multiple imgs, then push a new img element into the array based on 
    // the children's properties.
    if (this.state.total > 1) {
      for (let i = 0; i < children.length; i++) {
        picsArray.push(
          <img 
            className="project-pics"
            src={children[i].props.src}
            alt={children[i].props.alt}
          />
        )
      }

      // add arrows to move back and forth between pictures
      DisplayArrows = (
        <div>
          <BackArrow className="prev-arrow" onClick={() => this.prevClick()} />
          <ForwardArrow className="next-arrow" onClick={() => this.nextClick()} />
        </div>
      )
    }
    // if there is only one img, then children has no index. also, no arrows need to be
    // generated.
    else {  
      picsArray.push(
        <img 
          className="project-pics"
          src={children.props.src}
          alt={children.props.alt}
        />
      )
    }

    // set the current active state. default is 0.
    var DisplayPic = picsArray[this.state.active];

    return (
      <div>
        <div className="PhotoGallery">
          {DisplayPic}
          {DisplayArrows}
        </div>
      </div>
    );
  }
}

export default PhotoGallery;