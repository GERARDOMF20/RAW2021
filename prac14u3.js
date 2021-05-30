function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var menorde3 = function(n1, n2, n3){
	
 var num1 = parseFloat(document.getElementById("n1").value);
 var num2 = parseFloat(document.getElementById("n2").value);
 var num3 = parseFloat(document.getElementById("n3").value);
 
 if(num1 <= num2 && num1 <= num3)
 	m =num1;
  else if(num2 < num1 && num2 <= num3)
    m = num2;
  else
  	m = num3;

 return m;
}

function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var cmapulgadas = function(n){
	
 var cm = parseFloat(document.getElementById("cm").value);
 
 var resultado = cm/2.54;


 return resultado;
}

function limpiarFormulario(){
	 document.getElementById("miForm").reset();

}
	var mayardas = function(n){
	
 var mt = parseFloat(document.getElementById("mt").value);
 
 var resultado = mt*1.094;


 return resultado;
}