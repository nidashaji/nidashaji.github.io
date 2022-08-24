import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from './photoswipe-dynamic-caption-plugin.esm.js';

const smallScreenPadding = {
  top: 0, bottom: 0, left: 0, right: 0
};
const largeScreenPadding = {
  top: 30, bottom: 30, left: 0, right: 0
};
const lightbox = new PhotoSwipeLightbox({
  gallerySelector: '#gallery3',
  childSelector: '.pswp-gallery3__item',
  
  // optionaly adjust viewport
  paddingFn: (viewportSize) => {
    return viewportSize.x < 700 ? smallScreenPadding : largeScreenPadding
  },
  pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe.esm.js')
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  mobileLayoutBreakpoint: 700,
  type: 'auto',
  mobileCaptionOverlapRatio: 1
});

lightbox.init();


