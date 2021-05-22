function prime(n){
    for(var i=2;i<n;i++)
    if(n%i!==0){
        console.log('The number is a prime number')
        break
    }
    else{
        console.log('The number is prime Number')
        break
    }
    
}
prime(18)
prime(17)