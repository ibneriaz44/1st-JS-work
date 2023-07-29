let count = 0;
let one = document.getElementById('heading1')
let two = document.getElementById('heading2')
function add(){
    count += 1;
    one.innerHTML=count;
}
function reset(){
    one.innerHTML="Thanks to check our work";
    two.innerHTML="Tables are shown here";
}
function subtract(){
    count = count-1;
    one.innerHTML=count;
}
function odd(){
    one.innerHTML= '' ;
    for (let i=1; i<11; i+=2){
    one.innerHTML+= i + " <br>" ;
    }
}
function even(){
    one.innerHTML= '' ;
    for (let j=2; j<12; j+=2){
    one.innerHTML+= j + "<br>" ;
    }
}
function square(){
    one.innerHTML='';
    for (let k=6; k<11; k++){
        one.innerHTML+=k + "  *  " +  k + "  =  " +  k*k + " <br>";
    }
}
function tableTen(){
    two.innerHTML='';
    for(let i =1; i <11; i++){
        two.innerHTML+= "10  " +  "x  "  + i  +" =  "+ i*10+ "<br>";
    }
}
function tableEleven(){
    two.innerHTML='';
    for(let i =1; i <11; i++){
        two.innerHTML+= "11  " +  "x  "  + i  +" =  "+ i*11+ "<br>";
    }
}
function tableTwelve(){
    two.innerHTML='';
    for(let i =1; i <11; i++){
        two.innerHTML+= "12  " +  "x  "  + i  +" =  "+ i*12+ "<br>";
    }
}
