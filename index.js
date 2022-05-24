const functions = {
  formatPhone: (number) => {
    let subString = "";
    for (let i = 0; i < 9; i = i + 3) {
      if (i === 0) {
        subString += number.substring(i, i + 3);
      } else {
        subString += " " + number.substring(i, i + 3);
      }
    }
    return subString;
  },
};

module.exports = functions;
