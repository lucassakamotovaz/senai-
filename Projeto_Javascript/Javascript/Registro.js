var validos= () =>{

    if (document.getElementById("Nome").value == "") return false;
    if (document.getElementById("SNome").value == "") return false;
    if (document.getElementById("Email").value == "") return false;
    if (document.getElementById("Senha").value == "") return false;
    if (document.getElementById("CPF").value == "") return false;
    if (document.getElementById("Nascimento").value == "") return false;
    if (document.getElementById("Senha").value == "") return false;

}

function verify_idade () {

    var anoNascido = document.getElementById("ano").value
    var anoAtual = 2021
     resultado = anoAtual-anoNascido
    
  console.log(resultado)
  
}



var verify_form = () => {
    
  

    
    if (validos() == false) {
        alert("Preencha todos os dados!");
        return;

    }
    
    

    
     
  } 


  function verify_marturidade() {
    if (document.getElementById("ano").value != " "){
        if(resultado >= 18){
            console.log("parabens vc é maior de idade")
        }
        else{
            alert("nao podera se registrar")
        }
    
       
    }
  }




 
 











let form = document.getElementById("Registro")
let submit = document.getElementById("btn-submit")