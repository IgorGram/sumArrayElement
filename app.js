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

const sortArray = (arr) => {
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  });
  console.log(arr);
  return arr;
};

const findIndexRequiredNum = (arr, num) => {
  const index = arr.indexOf(num);
  if (index !== -1) {
    return index;
  }
  return findIndexRequiredNum(arr, num - 1);
};

const getSum = (arr, index) => {

};

const calculate = () => {
  const arr = makeSourceArray(arrayData.length);
  changeLabelOfSourceArr(arr);
  const sortingArray = sortArray(arr);
  const requiredNum = 100;
  const indexRequiredNum = findIndexRequiredNum(sortingArray, requiredNum);
  getSum(sortingArray, indexRequiredNum);
};

const getArrayLength = (input) => {
  arrayData.length = +input.value;
};

const getMaxValue = (input) => {
  arrayData.max = +input.value;
};

const getCustomValue = () => {

};




