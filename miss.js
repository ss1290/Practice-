var arr=[]
for(var i=1;i<=100;i++){
    if(i==49){
        continue
    }
    arr.push(i)
       
    }
    for(var j=0;j<100;j++){

        if(arr[j]!==j+1){
            console.log(`the missing number is ${j+1}`)
            break
        }
    }