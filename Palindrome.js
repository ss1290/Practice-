    function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
    function palindrome(input){
        var str=strlength(input)
      for (var i=0;i<str;i++){
          for(var j=0;j<str;j++){
       if(input[i]===input[j]&&i>j){
          break
       }
       
    }
           if(input[i]===input[j]){
           console.log('the number or string is a palindrome')

       }
    }
}
palindrome('Good')
palindrome('abcba')
palindrome('123')
palindrome('abcd')


