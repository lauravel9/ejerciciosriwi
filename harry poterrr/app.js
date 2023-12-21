function jugar() {
    window.location.href = 'casa.html'
}

var nombre = document.getElementById("idNombre")
var edad = document.getElementById("idEdad")
var familia = document.getElementById("idFamilia")
var linaje = document.getElementById("idLinaje")
var cualidades = document.getElementById("idCualidades")


/* function enviar(){
    console.log(nombre.value)
    console.log(edad.value)
    console.log(familia.value)
    console.log(linaje.value)
    console.log(cualidades.value)
    window.location.href = 'casa.html'

} */


var clases ={

transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout"

}

function enviar1(){
    console.log(nombre.value)
    console.log(edad.value)
    console.log(familia.value)
    console.log(linaje.value)
    console.log(cualidades.value)

    let linajeS = document.getElementById("idLinaje").value;
    let cualidadS = document.getElementById("idCualidades").value;

    if ((linajeS == "l-1" || linajeS == "l-2" || linajeS == "l-3") && cualidadS == "c-1"){
        alert("Eres de Gryffindor")
        window.location.href = 'boggart.html'
    }

    else if ((linajeS == "l-1" || linajeS == "l-2") && cualidadS == "c-2"){
        alert("Eres de Hufflepuff")
        window.location.href = 'boggart.html'
    }

    else if ((linajeS == "l-1" || linajeS == "l-2" || linajeS == "l-3") && cualidadS == "c-3"){
        alert("Eres de Ravenclaw")
        window.location.href = 'boggart.html'
    }

    else if ((linajeS == "l-3") && cualidadS == "c-4"){
        alert("Eres de Slytherin")
        window.location.href = 'boggart.html'
    }


    /* No lograste entar a hogwarts */
    else if ((linajeS != "l-1" || linajeS != "l-2") && cualidadS == "c-2"){
        alert("No lograste entar a hogwarts")
        window.location.href = 'chao.html'
    }
    

    else if ((linajeS != "l-3") && cualidadS == "c-4"){
        alert("No lograste entar a hogwarts")
        window.location.href = 'chao.html'
    }
   

    
    

}