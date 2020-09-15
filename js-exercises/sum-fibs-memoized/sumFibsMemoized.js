function sumFibs(num) {
  return num;
}

function cacheFunction() {}

const sumFibsMemoized = cacheFunction(sumFibs);

export { sumFibs, cacheFunction, sumFibsMemoized };
