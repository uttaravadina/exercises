## Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  return _.toArray(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

## Restrictions
- Don't use any libraries