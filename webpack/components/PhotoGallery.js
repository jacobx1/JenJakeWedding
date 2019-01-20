'use strict';

import Gallery from 'react-photo-gallery';
import React from 'react';
import Lightbox from 'react-images';

export default class PhotoGallery extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
        <Lightbox
          images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          width={2048}
        />
      </div>
    );
  }
}

const PHOTO_SET = [
  { src: 'img/IMG_0437-mini.jpg' },
  { src: 'img/j_stockton_20150729_8878.jpg', width: 2, height: 3 },
  { src: 'img/IMG_0483-mini.jpg' },

  { src: 'img/j_stockton_20150729_8897.jpg', width: 2, height: 3 },
  { src: 'img/IMG_0476-mini.jpg', width: 2, height: 3 },
  { src: 'img/j_stockton_20150729_8920.jpg', width: 2, height: 3 },

  { src: 'img/j_stockton_20160510_1957-mini.jpg' },
  { src: 'img/j_stockton_20150729_8956.jpg', width: 2, height: 3 },
  { src: 'img/j_stockton_20160510_2354-2-mini.jpg' },
];

PHOTO_SET.map(item => {
  item.width = item.width || 3;
  item.height = item.height || 2;
});
