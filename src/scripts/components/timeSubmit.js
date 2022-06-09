const time = () => {
  const today = new Date();
  const date = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  return date;
};

export default time;
