const permAlone = (str) => {
  let result = [];
  if (typeof str != 'string') return 'La Cadena debe ser un String';
  if (str.length <= 2) {
    result = str.length === 2 ? [str, str[1] + str[0]] : [str];
  } else {
    result = str
      .split('')
      .reduce(
        (acc, letter, i) =>
          acc.concat(
            permAlone(str.slice(0, i) + str.slice(i + 1)).map(
              (val) => letter + val
            )
          ),
        []
      );
  }
  return result;
};
function totalPermutations(arr) {
  let totalPermutations = 0;
  for (const p of arr) {
    /^((\w)(?!\2))+$/i.test(p) && totalPermutations++;
  }
  return totalPermutations;
}
console.log(totalPermutations(permAlone('abcdefa')));
