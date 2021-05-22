function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
}
function rotation(str1,str2){
    length1=strlength(str1)
    length2=strlength(str2)
    for(var i=0;i<length1;i++){
        if(length1!==length2){
            break
        }
        for(var j=length2-1;j>=0;j--){
            if(str2[j]===str1[i]){
                console.log('I')

            }
        }
    }
}
rotation('abacd','cdaba')