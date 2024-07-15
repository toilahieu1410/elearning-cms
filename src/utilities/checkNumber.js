export const checkNumber = (text) => {
  if(text) {
    return(
      text.toString().replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,',
    ))
  }
};