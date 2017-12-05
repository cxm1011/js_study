var numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
console.log(numbers);

//被删除的位置会留下空的位置
delete numbers[2];
console.log(numbers);

//第一个参数是数组中的位置，第二个是删除的个数，并且将空的位置也删除了
numbers.splice(2,3);
console.log(numbers);
