import React from "react";
import {FiMenu as HamburgerIcon, FiX as CloseIcon} from 'react-icons/fi';
import './HamburgerMenu.css';



class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false, // state for when the hamburger menu is open or closed
    };
  }

  // Toggle menuOpen state when clicked
  handleToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    // this.props.children grabs the inner elements and their properties from where
    // HamburgerMenu is called. These will be the list of navigation links in the menu.
    const children = this.props.children;

    // Array to keep all menu options
    var options = [];

    // Each child has a title and hyperlink
    for (let i = 0; i < children.length; i++) {
      options.push(
        <a href={children[i].props.link} target="_blank" rel="noreferrer" key={i} className="menuOption">
          {children[i].props.title}
        </a>
      )
    }

    return (
      <div className="hamburger">
        <div className={`hamburgerButton ${this.state.menuOpen ? " showMenu" : ""}`} onClick={() => this.handleToggle()}>
          {this.state.menuOpen ? <CloseIcon/> : <HamburgerIcon/>}
        </div>
        <div className={`sidebar ${this.state.menuOpen ? " showMenu" : ""}`}>
          {options}
          {console.log(this.state.menuOpen ? "Open" : "Closed")}
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;