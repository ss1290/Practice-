function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
       function sort(input){
           str=strlength(input)
           var s=''
       for(var i=0;i<str;i++){
           for(var j=0;j<str;j++){
             if(input[j]>input[j+1]){
                 var temp=input[j]
                 input[j]=input[j+1]
                 input[j+1]=temp
             }
           }

       }
        for(var i=0;i<str;i++){
           s=s+input[i]
       }
       return s
       
       }
       var str1=sort(['l','i','s','t','e','n'])
       var str2=sort(['s','i','l','e','n','t'])
       console.log(str1)  
       console.log(str2)
       if(str1===str2){
           console.log('They are anagrams')
       }
      
      

  