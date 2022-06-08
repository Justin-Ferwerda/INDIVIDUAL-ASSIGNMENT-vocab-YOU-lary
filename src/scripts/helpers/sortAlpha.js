const sortAlpha = (cardArray) => {
  cardArray.sort((a, b) => a.title.localeCompare(b.title));
  return cardArray;
};

export default sortAlpha;
