let times = 0;

const syncDB = () => {
    times++
  console.log('tick cada multiplo de 5: ', times);

  return times;
}

module.exports = {
  syncDB,
};