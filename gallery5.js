import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe-lightbox.esm.js';
import PhotoSwipeDynamicCaption from './photoswipe-dynamic-caption-plugin.esm.js';

const smallScreenPadding = {
  top: 0, bottom: 0, left: 0, right: 0
};
const largeScreenPadding = {
  top: 30, bottom: 30, left: 0, right: 0
};
const lightbox = new PhotoSwipeLightbox({
  gallerySelector: '#gallery5',
  childSelector: '.pswp-gallery5__item',
  
  // optionaly adjust viewport
  paddingFn: (viewportSize) => {
    return viewportSize.x < 700 ? smallScreenPadding : largeScreenPadding
  },
  pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe.esm.js')
});


lightbox.on('itemData', (e) => {
  const tagElement = e.itemData.element.getElementsByTagName('a')[0];
  const media = tagElement.getAttribute('href');
  if (media.split('.').pop() == 'm4v') {
    e.itemData = {
      html: `<div class="videoSlide"><div class="videoSlideInner"><video width="50%" controls><source src="${media}" type="video/mp4"> </video></div></div>`
    };
  }
});

lightbox.on('contentActivate', (e) => {
  const video = e.content.element.querySelector('video');
  if (video) {
    video.play();
  } 
});

lightbox.on('contentDeactivate', (e) => {
  const video = e.content.element.querySelector('video');
  if (video) {
    video.pause();
    video.onended = undefined;
  } 
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
  mobileLayoutBreakpoint: 700,
  type: 'auto',
  mobileCaptionOverlapRatio: 1
});

lightbox.init();


