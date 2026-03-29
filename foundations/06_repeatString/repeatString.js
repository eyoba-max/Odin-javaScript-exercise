const repeatString = function(stri,num) {
    let str="";
    if(num<1){
        return 'ERROR';
    }
    else{
        for(let i=0;i<num;i++){
            str+=stri;
        }
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
