const handleLearnMoreBtnClick = () => {
  const aboutSection = document.getElementById('skills');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleDownloadBtnClick = async () => {
  const pdfPath = './src/test.pdf';
  const response = await fetch(pdfPath);
  const pdfBlob = await response.blob();
  const pdfUrl = URL.createObjectURL(pdfBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfUrl;
  downloadLink.download = 'test.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const handleScrollToTopBtnClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default {
  handleLearnMoreBtnClick,
  handleDownloadBtnClick,
  handleScrollToTopBtnClick,
};
