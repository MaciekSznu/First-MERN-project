const cutText = (content, maxLength) => {
  if (content.length < 1) {
    return 'Error';
  }
  else if (content.length <= maxLength) {
    return content;
  }
  else {
    const additionalText = '...'
    const cutContent = content.substr(0, maxLength - additionalText.length);
    const indexOfLastSpace = cutContent.lastIndexOf(' ');
    const finalContent = cutContent.substr(0, indexOfLastSpace)
    const finalText = `${finalContent}${additionalText}`;
    return finalText;
  }
};

export default cutText;
