function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
function pb(input)
    {
    var str=strlength(input)
    for(var i=0;i<str;i++){
        var frequency=0
        for(var j=0;j<str;j++){
        if(input[i]===input[j]&&i>j){
            break
        }
        if(input[i]===input[j]){
            frequency++
        }
       
    }
    if (frequency>0){
    console.log(`${input[i]}=${frequency}`)
    }
  }
  }  
    pb('xxxyyyyzz')