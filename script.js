const number = (num) =>{
    let ans = document.getElementById("ans");
    ans.value += num; // ans.value = ans.value + num
}

const clr = ()=>{
    let ans = document.getElementById("ans"); 
    ans.value = ''  
}
const data= ()=>{
    let ans = document.getElementById("ans");
    if (ans.value== '' || ans.value == 'undefined'){
        ans.value = ''
    } else{
        ans.value = eval(ans.value);
    }
}
const lclr = ()=>{
    let ans = document.getElementById("ans");
    let temp = ''
    for(let i  = 0 ; i < ((ans.value.length)-1); i++){
        temp +=ans.value[i]
    }
    ans.value = temp
}