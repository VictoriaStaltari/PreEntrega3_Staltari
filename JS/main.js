condicion = true
let boton_restaurar_pts = document.getElementById("boton_rest_pts")
let registro_jugadores = {}
fetch("../JSON/puntajes.json")
.then(response=>response.json())
.then(data=>registro_jugadores=data)

boton_restaurar_pts.addEventListener("click", ()=>{jugadores=registro_jugadores; sessionStorage.setItem('jugadores', JSON.stringify(jugadores))})   

let jugadores= {}
document.getElementById('agregar_jugador').addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value.toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"");
    if (nombre === "") {
        condicion = false;
    } else {
        jugadores[nombre] = 0;
        document.getElementById('nombre').value = '';
    }
    sessionStorage.setItem("jugadores", JSON.stringify(jugadores));
})

let tablero = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true}

//Casillero 1
let casillero1 = document.getElementById("casillero1")
let contenedor_cas1 = document.getElementById("contenedor_cas1")
contenedor_cas1.addEventListener("click", ()=> tablero[1] = false)
//Casillero 2
let casillero2 = document.getElementById("casillero2")
let contenedor_cas2 = document.getElementById("contenedor_cas2")
contenedor_cas2.addEventListener("click", ()=> tablero[2] = false)
//Casillero 3
let casillero3 = document.getElementById("casillero3")
let contenedor_cas3 = document.getElementById("contenedor_cas3")
contenedor_cas3.addEventListener("click", ()=> tablero[3] = false)
//Casillero 4
let casillero4 = document.getElementById("casillero4")
let contenedor_cas4 = document.getElementById("contenedor_cas4")
contenedor_cas4.addEventListener("click", ()=> tablero[4] = false)
//Casillero 5
let casillero5 = document.getElementById("casillero5")
let contenedor_cas5 = document.getElementById("contenedor_cas5")
contenedor_cas5.addEventListener("click", ()=> tablero[5] = false)
//Casillero 6
let casillero6 = document.getElementById("casillero6")
let contenedor_cas6 = document.getElementById("contenedor_cas6")
contenedor_cas6.addEventListener("click", ()=> tablero[6] = false)
//Casillero 7
let casillero7 = document.getElementById("casillero7")
let contenedor_cas7 = document.getElementById("contenedor_cas7")
contenedor_cas7.addEventListener("click", ()=> tablero[7] = false)
//Casillero 8
let casillero8 = document.getElementById("casillero8")
let contenedor_cas8 = document.getElementById("contenedor_cas8")
contenedor_cas8.addEventListener("click", ()=> tablero[8] = false)
//Casillero 9
let casillero9 = document.getElementById("casillero9")
let contenedor_cas9 = document.getElementById("contenedor_cas9")
contenedor_cas9.addEventListener("click", ()=> tablero[9] = false)

let tablero_vista = [casillero1, casillero2, casillero3, casillero4, casillero5, casillero6, casillero7, casillero8, casillero9]
let vista_tablero_cont = [contenedor_cas1, contenedor_cas2, contenedor_cas3, contenedor_cas4, contenedor_cas5, contenedor_cas6, contenedor_cas7, contenedor_cas8, contenedor_cas9]
let boton_dados = document.getElementById("boton_dados")
let boton_final_juego = document.getElementById("finalizar_juego")
let boton_puntos = document.getElementById('boton_puntos')

//Funciones

function tirar_dado(){
    let dado = Math.random()*6
    dado = Math.ceil(dado)
    return dado
}
function dados(){
    let d1 = tirar_dado()
    let d2 = tirar_dado()
    document.getElementById("dados").innerText = `Dados: ${d1}, ${d2} Total: ${d1 + d2}`
}
boton_dados.addEventListener("click", dados)
function actualizar_tablero(){
    for (let a in tablero){
        if (tablero[a]){
            tablero_vista[a-1].innerText = "Abierto"
            if (vista_tablero_cont[a-1].classList.contains("cerrado")){
                vista_tablero_cont[a-1].classList.remove('cerrado')
                vista_tablero_cont[a-1].classList.add('abierto')
            }
        }else{
            tablero_vista[a-1].innerText = "Cerrado"
            vista_tablero_cont[a-1].classList.remove('abierto')
            vista_tablero_cont[a-1].classList.add('cerrado')
        }
    }
}
actualizar_tablero()
let contenedor_casilleros = document.getElementById("tablero")
contenedor_casilleros.addEventListener("click",actualizar_tablero)

//Mostrar Puntajes
function mostrar_puntajes(){
    let jugadores_SS = sessionStorage.getItem('jugadores');
    let jugadores = JSON.parse(jugadores_SS)
    let puntajesElemento = document.getElementById('puntajes')
    let puntajes_texto = ''
    for (let nombre in jugadores) {
        puntajes_texto += `${nombre}: ${jugadores[nombre]} puntos\n`;
    }
    puntajesElemento.innerText = puntajes_texto;
}
boton_puntos.addEventListener('click', mostrar_puntajes)

//Finalizar Juego
function finalizar_juego(){
    let total = 0
    for (cas in tablero){
        if (tablero[cas]){
            total += parseInt(cas)
        }
    }
    if (total==0){
        total = -10
    }
    // Crear el label y el input
    let label = document.createElement('label');
    label.setAttribute('for', 'input_nombre_final');
    label.innerText = 'Nombre del Jugador: ';

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input_nombre_final');
    input.setAttribute('required', true);

    // Crear el botón de confirmación
    let boton_confirmar = document.createElement('button');
    boton_confirmar.innerText = 'Confirmar';
    boton_confirmar.addEventListener('click', function() {
        let nombre = input.value.toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"");
        if (nombre !== "") {
            let jugadores_SS = sessionStorage.getItem("jugadores");
            jugadores = JSON.parse(jugadores_SS);

            if (nombre in jugadores) {
                jugadores[nombre] += total;
            } else {
                jugadores[nombre] = total;
            }
            sessionStorage.setItem('jugadores', JSON.stringify(jugadores));

            Swal.fire({
                title: `Tu puntaje es de: ${total}, ${nombre}`,
                text: "¿Desea jugar nuevamente?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Sí, quiero jugar de nuevo',
                cancelButtonText: 'No, gracias'
            }).then((result) => {
                if (result.isConfirmed) {
                    tablero = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true}
                    actualizar_tablero();
                }
            })
            mostrar_puntajes()

            document.body.removeChild(label)
            document.body.removeChild(input)
            document.body.removeChild(boton_confirmar)
        }
    });

    // Añadir los elementos al DOM
    document.body.appendChild(label);
    document.body.appendChild(input);
    document.body.appendChild(boton_confirmar);
}
boton_final_juego.addEventListener("click", finalizar_juego)
