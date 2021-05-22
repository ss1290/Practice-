function reverseString(str, n){
  //If the length is 0 
  //then return an empty string
  if(n == 0){
     return '';
  }
  
  //Call the function recursively with one character less and so on.
  return str[n-1] + reverseString(str, --n);
}
console.log(reverseString('prashant', 8));