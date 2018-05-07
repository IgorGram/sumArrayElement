let arrayData = {
  length: 0,
  max: 0,
};

const makeSourceArray = (length) => {
  const resultArray = [];
  for (let i = 0; i < length; i += 1) {
    const num = getRandomNumber(0, arrayData.max);
    resultArray.push(num);
  }
  return resultArray;
};

const changeLabelOfSourceArr = (newInner) => {
  const span = document.getElementsByClassName('arraySpan')[0];
  span.innerText = `(${newInner})`;
};

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

// const sortArray = (arr) => {
//   arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   });
//   console.log(arr);
//   return arr;
// };

const findIndexRequiredNum = (arr, num) => {
  const index = arr.indexOf(num);
  if (index !== -1) {
    return index;
  }
  return findIndexRequiredNum(arr, num - 1);
};

const sumOfTwoNumberByIndex = (arr, index1, index2) => arr[index1] + arr[index2];

const getSum = (arr, num, startIndex) => {
  // const innerArr = [];
  // let i = startIndex;
  // let sum = arr[startIndex];
  // while (sum <= num) {
  //   sum += arr[i + 1];
  //   innerArr.push(i);
  //   i += 1;
  // };
  // return innerArr;
  const nextIndex = startIndex + 1;
  if (sumOfTwoNumberByIndex(arr, startIndex, nextIndex) > num) {

  } else {

  }
};

const calculate = () => {
  const arr = makeSourceArray(arrayData.length);
  changeLabelOfSourceArr(arr);
  const requiredNum = 100;
  const startIndex = getRandomNumber(0, requiredNum / 2);
  console.log(getSum(arr, requiredNum, startIndex));
};

const getArrayLength = (input) => {
  arrayData.length = +input.value;
};

const getMaxValue = (input) => {
  arrayData.max = +input.value;
};

const getCustomValue = () => {

};




