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
  formatPostCode: (postCode) => {
    return postCode.substr(0, 2) + "-" + postCode.substr(2);
  },
};

module.exports = functions;
