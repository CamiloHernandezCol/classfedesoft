
/*var ar;
console.log(ar);

ar=['h','o','l','a'];
console.log(ar);
console.warn("longitud de ar", ar.length, ar);
console.log("logitud de ar"+ ar.length+ar);
*/
// Este es un comentario
/*
    Hi 
    i am 
    a comentary
*/
/*
var miNombre="Jonathan_Camilo";
var nombreCompleto="";
for(var i=0;i<miNombre.length;i++)
{
    //  esto es par
    if(i % 2==0)
    {
        console.log(miNombre[i].toUpperCase(),"=>",i);
        nombreCompleto=nombreCompleto+miNombre[i].toUpperCase();
        
    }
    else
    {
        console.log(miNombre[i].toLowerCase(),"=>",i);
        nombreCompleto=nombreCompleto+miNombre[i].toLowerCase();
    }
   
    
}
console.log(nombreCompleto);*/
// funciones
/*function isPair(x)
{
 return x%2==0?true:false;
}

function convertChar(c,isUp)
    {
        return isUp?c.toUpperCase():c.toLowerCase();
    }

function getLast(t)
{
    return t[t.length-1];
}


function mostrarTexto(t)
{   
    var tmp="";
    for(var i=0;i<t.length;i++)
    {
        tmp=tmp+convertChar(t[i],isPair(i));
        console.log(getLast(tmp),"=>",i);
    }
    console.log(tmp);

}
mostrarTexto("Camilo");*/
/*
var persona=
{nombre:"camilo",
apellido="hernandez",
docType="cc",
docNum=1025157845,
Cel:32015454574}; 

console.log(persona);*/

var ar=[1,2,"3","4","5"];
var ar=[2,4,6,8,10];
/*ar=ar.map(item=>item+1);

console.log(ar);*/
// console.log(ar.filter(item=>item<3));
 var ans=ar.reduce((ac,cur)=>{
    
    console.log(ac);
    return cur+ac;
},0);
console.log(ans);