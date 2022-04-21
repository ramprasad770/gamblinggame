function bet1(){
    window.bet="Red";
}
function bet2(){
    window.bet="Green";
}
function bet3(){
    window.bet="Blue";
}
function result(){
    res=Math.floor(Math.random()*3+1)
    arr=["","Red","Green","Blue"]
    final=arr[res]
    if(res===1&&bet==="Red"){
        alert("Result is "+bet+" You,Won!");
    }
    else if(res===2&&bet==="Green"){
        alert("Result is "+bet+" You,Won!");
    }
    else if(res===3&&bet==="Blue"){
        alert("Result is "+bet+" You,Won!");
    }
    else{
        alert("Result is "+final+" You ,Lost");
    }
}