function sum (){
    let len = arguments.length;
    var temp =0;
    for(let i=0; i<len;i++){
       temp = temp + arguments[i];
    }

    return temp;
   



}

sum(1,2,34);