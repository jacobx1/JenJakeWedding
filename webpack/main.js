import PhotoGallery from './components/PhotoGallery';
import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from './utils/MobileCheck';
import MenuActiveScroller from './utils/MenuActiveScroller';

if (!isMobile.any()) {
  skrollr.init({
    forceHeight: false
  });
}

ReactDOM.render(
  <PhotoGallery />,
  document.getElementById('wedding-gallery')
);

const scroller = new MenuActiveScroller('#main-navigation ul.site-menu');
