function strlength(input){
       var length=0
       while(input[length]!==undefined)
       length++
       return length
   }
let input=[1,2,3,3,3,4,1,5]
let obj={}
let remove=[]
let str=strlength(input)
for(let i=0;i<str;i++){
    obj[input[i]]=true
        }
        for(i in obj){
            remove.push(i)

        }
        console.log(remove)


