//Задание 1
console.log('______№1______')
for (let i=1; i<8; i++){
	console.log('#'.repeat(i));
}

console.log('______№2______')
//Задание 2 ////////////////////////////////////////////////
for (let i=1; i<101; i++){
	if ((i%3==0)&&(i%5==0)){
		console.log('FizzBuzz');
	} 
	else if (i%3==0) {
		console.log('Fizz');
	}
	else if (i%5==0) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}
//Задание 3 ////////////////////////////////////////////////
console.log('______№3______')
var result = "\n";
for (var row = 1; row <= 8; row++) {
  for (var cell = 1; cell <= 8; cell++) {
    result += (row % 2 == cell % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);

//Задание 4 ///////////////////////////////////////////////
console.log('______№4______')
function min(a,b){
	return (a<b) ? a : b;
}

console.log(min(4,1));

//Задание 5 //////////////////////////////////////////////
console.log('______№5______')
function countBs(str){
	let kol = 0;
	for (i=0;i<str.length;i++){
		if (str.charAt(i)=='B'){
			kol += 1;
		}
	}
	return kol;
}
console.log(countBs('dygywuedBBBB'));

function countChar(str, char){
	let kol = 0;
	for (i=0;i<str.length;i++){
		if (str.charAt(i)==char){
			kol += 1;
		}
	}
	return kol;
}
console.log(countChar('abcd','d'));

//Задание 6 /////////////////////////////////////////////
console.log('______№6______')
function range(a,b,shag = 1){
	let array = [];
	if (shag>0){
		for (let i=a;i<b+1;i+=shag){
			array.push(i);
		}
	}
	else {
		for (let i=a;i>b-1;i+=shag){
			array.push(i);
		}
	}	
	console.log(array);
	return array;
}

function sum (x){
   var s = 0;
   for (i = 0; i < x.length; i++){
      s += x[i];
   }
   return s;
}

console.log(sum(range(5, 2, -1)));

//Задание 7 //////////////////////////////////////////
console.log('______№7______');
function reverseArray(array){
	new_array = []
	for(let i=array.length-1;i>=0;i--){
		new_array.push(array[i]);
	}
	return new_array;
}
console.log('Функция reverseArray:', reverseArray([7,8,9,10]));
///////////////////////////////////////////////////////////
function reverseArrayInPlace(array){
	for (let i = 0; i < parseInt(array.length/2) ; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp ;
  }
  return array;
}
console.log('Функция reverseAreverseArrayInPlacerray:', reverseArrayInPlace([7,8,9,10]));