import PhotoGallery from './components/PhotoGallery';
import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from './utils/MobileCheck';
import MenuActiveScroller from './utils/MenuActiveScroller';

ReactDOM.render(
  <PhotoGallery />,
  document.getElementById('wedding-gallery')
);

const scroller = new MenuActiveScroller(".site-menu");


