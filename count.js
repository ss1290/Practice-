function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
 
       let string='susano'
       let vowel='aeiou'
       let str1=strlength(string)
       let str2=strlength(vowel)
       let count=0
       for(var i=0;i<str1;i++){
           for(var j=0;j<str2;j++){
               if (string[i]===vowel[j]){
                   count++

               } 
               
                
               }
           }
           let count1=str1-count
       console.log('No of vowels = '+count)
       console.log('No of consonants ='+count1)
