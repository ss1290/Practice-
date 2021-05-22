    function reverse(input,str){
         if (str===0){
            return ''
            }
            else {
                var i=input[str-1]
                 return i+reverse(input,--str)
         }
        }
         console.log(reverse('shashank',8))
