const wait = ms => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

export default wait;
