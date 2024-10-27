function calcular(){
  var n1, n2, n3, n4, n5, n6, p;
n1= parseFloat(document.frmdatos.txtn1.value);
n2= parseFloat(document.frmdatos.txtn2.value);
n3= parseFloat(document.frmdatos.txtn3.value);
n4= parseFloat(document.frmdatos.txtn4.value);
n5= parseFloat(document.frmdatos.txtn5.value);
n6= parseFloat(document.frmdatos.txtn6.value);
p=(n1+n2+n3+n4+n5+n6)/6;
  r=Math.round(p*100)/100;
  if(r>=17){
  document.frmdatos.txta.value = "APROBASTE";
  Swal.fire({
  title: "APROBASTE",
  icon: "success"
});
    document.getElementById("resultado").href="css/aprobo.css"
  }else{
    document.frmdatos.txta.value= "REPROBASTE"
 Swal.fire({
  title: "REPROBASTE",
  icon: "error"
}); 
  document.getElementById("resultado").href="css/desaprobo.css"
  }
  document.frmdatos.txtp.value=r;
}
function res(){
document.getElementById("resultado").href="";    
document.getElementById("frmdatos").reset();    
}
function porcen(){
 var n1, n2, n3, n4, n5, n6, po, re, i ;
n1= parseFloat(document.frmdatos.txtn1.value);
n2= parseFloat(document.frmdatos.txtn2.value);
n3= parseFloat(document.frmdatos.txtn3.value);
n4= parseFloat(document.frmdatos.txtn4.value);
n5= parseFloat(document.frmdatos.txtn5.value);
n6= parseFloat(document.frmdatos.txtn6.value);
re=(n1+n2+n3+n4+n5+n6)/6; 
po=Math.round(((re*100)/20)*100)/100;
i=po+"%";
  document.frmdatos.txtpor.value=i;
}
function suma(){
 var n1, n2, n3, n4, n5, n6,  sum;
n1= parseFloat(document.frmdatos.txtn1.value);
n2= parseFloat(document.frmdatos.txtn2.value);
n3= parseFloat(document.frmdatos.txtn3.value);
n4= parseFloat(document.frmdatos.txtn4.value);
n5= parseFloat(document.frmdatos.txtn5.value);
n6= parseFloat(document.frmdatos.txtn6.value);
sum=n1+n2+n3+n4+n5+n6; 
  document.frmdatos.txtsuma.value=sum;
}
