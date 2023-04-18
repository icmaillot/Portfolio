import './style.scss';

import eventHandlers from './utils/clickEvent.util';
import { createProjectList } from './utils/domHandlers';

const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', eventHandlers.handleLearnMoreBtnClick);
}

const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', eventHandlers.handleDownloadBtnClick);
}

const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener(
    'click',
    eventHandlers.handleScrollToTopBtnClick
  );
}


createProjectList();
