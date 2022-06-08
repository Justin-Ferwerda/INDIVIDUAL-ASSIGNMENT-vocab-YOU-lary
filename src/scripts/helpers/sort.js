const sortAlpha = (cardArray) => {
  cardArray.sort((a, b) => a.title.localeCompare(b.title));
  return cardArray;
};

const sortTimeNewest = (cardArray) => {
  cardArray.sort((a, b) => b.timeSubmitted.localeCompare(a.timeSubmitted));
  return cardArray;
};

const sortTimeOldest = (cardArray) => {
  cardArray.sort((a, b) => a.timeSubmitted.localeCompare(b.timeSubmitted));
  return cardArray;
};

export { sortAlpha, sortTimeNewest, sortTimeOldest };
