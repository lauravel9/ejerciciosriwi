/* idioma */
function idioma(){
    let seleccion = document.getElementById("idioma").value; //es


    if (seleccion=="en"){
        let btn =document.querySelectorAll('.button-buy')
        for (let i = 0; btn.length; i++) {
           btn[i].innerHTML = 'buy'
            

        document.getElementById("nombre-1").innerText=("BBQ CRUNCH")
        document.getElementById("nombre-2").innerText=("KENTUCKY SANDWICH")
        document.getElementById("nombre-3").innerText=("BBQ CRUNCH COMBO")
        document.getElementById("nombre-4").innerText=("KENTUCKY CORONEL SANDWICH")
        document.getElementById("nombre-5").innerText=("KENTUCKY SANDWICH COMBO")
        document.getElementById("nombre-6").innerText=("KENTUCKY CORONEL SANDWICH COMBO")
        document.getElementById("nombre-7").innerText=("CRISPY BBQ SANDWICH")
        document.getElementById("nombre-8").innerText=("CRISPY BBQ SANDWICH COMBO")

        
        /* descripcion */
        document.getElementById("texto-1").innerText=("1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)")
        document.getElementById("texto-2").innerText=("1 Kentucky burger / Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter)")
        document.getElementById("texto-3").innerText=("1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda 400ml")
        document.getElementById("texto-4").innerText=("1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Filet, Coleslaw Salad, BBQ and Butter)")
        document.getElementById("texto-5").innerText=("1 Kentucky hamburger/Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter) + 1 Small Potato + 1 PET Soda 400ml")
        document.getElementById("texto-6").innerText=("1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Coleslaw Salad, BBQ and butter) + 1 Small Potato + 1 PET Soda 400ml")
        document.getElementById("texto-7").innerText=("1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese, BBQ Sauce)")
        document.getElementById("texto-8").innerText=("1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese + BBQ Sauce) + 1 Small Potato + 1 Pet Soda 400ml")
        


        /* console.log("esta en ingles") */
        }
    }



    else if (seleccion=="es"){
        

        document.getElementById("nombre-1").innerText=("BBQ CRUNCH")
        document.getElementById("nombre-2").innerText=("KENTUCKY SANDWICH")
        document.getElementById("nombre-3").innerText=("COMBO BBQ CRUNCH")
        document.getElementById("nombre-4").innerText=("KENTUCKY CORONEL SANDWICH")
        document.getElementById("nombre-5").innerText=("COMBO KENTUCKY SANDWICH")
        document.getElementById("nombre-6").innerText=("COMBO KENTUCKY CORONEL SANDWICH")
        document.getElementById("nombre-7").innerText=("SANDWICH CRISPY BBQ")
        document.getElementById("nombre-8").innerText=("COMBO SANDWICH CRISPY BBQ")
        
        /* descripcion */
        document.getElementById("texto-1").innerText=("1 Sándwich BBQ Crunch (1 Filete de pollo apanado)")
        document.getElementById("texto-2").innerText=("1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla)")
        document.getElementById("texto-3").innerText=("1 Sándwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET 400ml")
        document.getElementById("texto-4").innerText=("1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla)")
        document.getElementById("texto-5").innerText=("1 Kentucky hamburguesa /Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml")
        document.getElementById("texto-6").innerText=("1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml")
        document.getElementById("texto-7").innerText=("1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar, Salsa BBQ)")
        document.getElementById("texto-8").innerText=("1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar + Salsa BBQ) + 1 Papa Pequeña + 1 Gaseosa Pet 400ml")

        /* console.log("estas en español") */
    }



}




/* theme */
function color() {
    let selt = document.getElementById('color').value;
    if(selt == "dark" ){


        let boton = document.querySelectorAll('.button-buy')
        for (let i = 0; i < boton.length; i++) {
            boton[i].classList.replace(`button-buy`,`button-comprar`)   
        
        /* document.getElementById("color").style.background=("#000000") */
        

            let carta = document.querySelectorAll('.bg-light')
            for (let i = 0; i < carta.length; i++) {
                carta[i].classList.replace(`bg-light`,`bg-dark`)   
        

                let texto = document.querySelectorAll('.text-dark')
                for (let i = 0; i < texto.length; i++) {
                    texto[i].classList.replace(`text-dark`,`text-white`)   

                
                    let fondo = document.querySelectorAll('.theme-claro')
                    for (let i = 0; i < fondo.length; i++) {
                        fondo[i].classList.replace(`theme-claro`,`theme-oscuro`)   

                                                           
                        let pie = document.querySelectorAll('.footer-claro')
                        for (let i = 0; i < pie.length; i++) {
                            pie[i].classList.replace(`footer-claro`,`footer-oscuro`)   
                    
                        }

                    }

                }
        
            }
        }
    
    


    
    }

}