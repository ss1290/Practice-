function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   function occurence(input){
       let count=0
       str=strlength(input)
       for(var i=0;i<str;i++){
           if(input[i]=='s'){
               count++
           }
   }
   console.log('the no of times of occurence of s ='+count)
}
   occurence('lssso')
   