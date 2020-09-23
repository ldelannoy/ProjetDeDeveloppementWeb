//console.log('Mon message');
//console.error('Mon message d\'erreur');
//document.addEventListener('click',function(){
 //   alert ('Message');
//});

const myButton = document.getElementById('bouton-bleu');
//console.log('myButton');
if(myButton != null){
myButton.addEventListener('click',function(){
    //alert ('test');});
    const table = document.querySelector('table');
    if(getComputedStyle(table).display != 'none'){
    table.style.display ='none';
    }else{
        table.style.display = 'table';
    }
});
}

//const btns =document.getElementsByClassName('btn');

//btns[0].addEventListener('click',function(){alert('Message');});