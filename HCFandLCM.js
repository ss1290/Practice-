function hcf(numa,numb){
    while(numa!==numb){
        if(numa>numb){
            numa=numa-numb
        }
        else{
            numb=numb-numa
        }
    }
    return numa
}
function lcm(numa,numb){
   var HCF=hcf(numa,numb)
   var LCM=(numa*numb)/HCF
   return LCM
}
console.log('HCF is'+hcf(18,8))
console.log('LCM is'+lcm(18,9))