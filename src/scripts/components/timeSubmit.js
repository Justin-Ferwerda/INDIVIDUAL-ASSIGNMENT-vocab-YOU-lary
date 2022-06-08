const time = () => {
  const today = new Date();
  const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return date;
};

export default time;
