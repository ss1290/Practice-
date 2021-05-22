function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
   let arr=['I','am','Sonu', 'Shashank']
   let string1=''
   let string2=''
   for(let i in arr){
       string1=string1+' '+arr[i]
   }
   console.log('The input string = '+string1)

   let array=[]
   str=strlength(arr)
   for(let i=str-1;i>=0;i--){
       array.push(arr[i])
   }
   for(let i in array){

      string2=string2+' '+array[i]

   }
   console.log('The reversed string = '+string2)