function displayNumber(num){
    document.getElementById("result").value+=num
}
//clear text box
function cleartext(){    document.getElementById("result").value= ' '
   // result.value =" "
}
// operations
function operations(){ 
    result.value =eval(result.value)  


}

function onedelete() {
    result.value=result.value.slice(0,-1)
}