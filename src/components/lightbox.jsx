import React, { Component, Fragment } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../scss/widgets/_lightbox.scss';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LightboxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: this.props.index,
      isOpen: this.props.isOpen,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <Fragment>
        {isOpen && (
          <Fragment>
            <Lightbox
              mainSrc={this.props.images[photoIndex]}
              nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
              prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
              onCloseRequest={() => 
                {
                  this.setState({ isOpen: false });
                  this.props.lightboxUpdate(this.state.isOpen);
                }}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.images.length,
                })
              }
              animationDuration={200}
              enableZoom={false}
              reactModalStyle={{
                overlay: {
                  zIndex: 2000
                }
              }}
            />
            <a
              href="#"
              className="app__lightbox-close"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ isOpen: false });
                this.props.lightboxUpdate(this.state.isOpen);
              }}
            ><FontAwesomeIcon icon={faTimes} /></a>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default LightboxContainer;