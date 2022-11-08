const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(prompt(`Enter a value number ${i + 1} into array`));
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
