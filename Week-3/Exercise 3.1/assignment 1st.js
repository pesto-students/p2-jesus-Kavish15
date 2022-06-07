//memoize function
const memoize = (fu) => {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    console.log("Fun Called with "+ key);
    console.log(cache)
    if (cache.has(key)) {
      return cache.get(key);
    }

    cache.set(key, fu(...args));
    return cache.get(key);
  };
};

//reducer function
const double = (fNum) => {
  return fNum + fNum;
};


const doubleM = memoize(double);


//Time Calculate Function
const timeM = (fu) => {
  console.time();
  fu()
  console.timeEnd();
};

timeM(() => doubleM(100));
timeM(() => doubleM(100));
timeM(() => doubleM(200));
timeM(() => doubleM(200));
timeM(() => doubleM(200));
timeM(() => doubleM(400));
timeM(() => doubleM(400));
timeM(() => doubleM(400));
timeM(() => doubleM(500));
timeM(() => doubleM(500));
