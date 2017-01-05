'use strict';

module.exports = function addends(addendArray, sum) {
  let outArray = [];

  for (let i=0;i<addendArray.length-1;i++) {
    for (let j=i+1;j<addendArray.length;j++) {
      if (addendArray[i] + addendArray[j] === sum) {
        outArray.push(i, j);
        return outArray;
      }
    }
  }
};
