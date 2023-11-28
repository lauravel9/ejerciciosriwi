function operaciones(){

    let operacion = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    

    if(operacion == ""){
        alert("Te hacen falta campos por llenar")
        document.getElementById ('operacion').focus();
        document.getElementById('operacion').classList.add('is-invalid');
        
    }


    else if( num1 == ""){
        alert("Te hacen falta campos por llenar")
        document.getElementById ('num1').focus();
        document.getElementById('num1').classList.add('is-invalid');
        
    }


    else if(num2 == ""){
        alert("Te hacen falta campos por llenar")
        document.getElementById ('num2').focus();
        document.getElementById('num2').classList.add('is-invalid');
    }


    else if(operacion == 'suma'){
        console.log("deberias hacer una suma");
        console.log(suma = parseInt(num1) + parseInt(num2))
        document.getElementById('resul').innerHTML = `${num1} + ${num2} = ${suma}`;
        document.getElementById('num1').value="";
        document.getElementById('num2').value="";
        document.getElementById('operacion').value="";
        // numero1 + numero2
    }


    else if(operacion == 'resta'){
        console.log("deberias hacer una resta");
        console.log(resta = parseInt(num1) - parseInt(num2))
        document.getElementById('resul').innerHTML = `${num1} - ${num2} = ${resta}`;
        document.getElementById('num1').value="";
        document.getElementById('num2').value="";
        document.getElementById('operacion').value="";
        // numero1 - numero2

    }
        

    else if(operacion == 'multi'){
        console.log("deberias hacer una multiplicacion");
        console.log(multi = parseInt(num1) * parseInt(num2))
        document.getElementById('resul').innerHTML = `${num1} * ${num2} = ${multi}`;
        document.getElementById('num1').value="";
        document.getElementById('num2').value="";
        document.getElementById('operacion').value="";
            // numero1 * numero2
        
    }


    else if(operacion == 'divi'){
        console.log("deberias hacer una division");
        console.log(divi = parseInt(num1) / parseInt(num2))
        document.getElementById('resul').innerHTML = `${num1} / ${num2} = ${divi}`;
        document.getElementById('num1').value="";
        document.getElementById('num2').value="";
        document.getElementById('operacion').value="";
        // numero1 / numero2

        
    }

}

