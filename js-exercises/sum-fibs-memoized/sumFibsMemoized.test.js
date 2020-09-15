import { sumFibs, cacheFunction, sumFibsMemoized } from './sumFibsMemoized';

describe('sumFibsMemoized', () => {
  test('should return a number', () => {
    expect(typeof sumFibsMemoized(1)).toEqual('number');
  });

  test('should return the correct number', () => {
    expect(sumFibsMemoized(1000)).toBe(1785);
    expect(sumFibsMemoized(4000000)).toBe(4613732);
    expect(sumFibsMemoized(4)).toBe(5);
    expect(sumFibsMemoized(75024)).toBe(60696);
  });
  it('should return a function', () => {
    expect(typeof cacheFunction()).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const foo = sumFibs;
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(10)).toBe(10);
  });
  it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2);
  });
});
