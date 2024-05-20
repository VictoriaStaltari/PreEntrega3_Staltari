const  Recomendar = function(serie_pelicula, plataforma, genero, nombre){
    this.serie_pelicula = serie_pelicula
    this.plataforma = plataforma
    this.genero = genero
    this.nombre = nombre
}
const tipos = ["pelicula", "serie"]
const plataformas = ["netflix", "hbo", "prime", "star", "disney"]
const generos = ["romance", "drama", "terror", "comedia", "policial", "cienciaficcion", "accion"]
const nombres = ["Corazones Malheridos", "A Dos Metros de Ti", "No Respires", "Permitidos", "¿Qué Hizo Jennifer?", "Presagio", "Top Gun: Maverick", "Mi Primer Amor", "Oppenheimer", "The Nun", "Aceptados", "Asesino sin Memoria", "Interestelar", "Tenet", "About Time", "Saltburn", "Talk to Me", "Papá por Accidente", "The Alphabet Killer", "Dune", "Uncharted", "Titanic", "Abzurdah", "La Cura Siniestra", "Un Novio para mi Mujer", "El Bandido Perfecto", "El Precio del Mañana", "Identidad Desconocida", "Bajo la Misma Estrella", "Cruella", "Mansión Embrujada", "27 Bodas", "Inspector Gadget", "Avatar", "Avengers", "Desde Cero", "Una Familia Normal", "Marianne", "The Office", "The Sinner", "Los 100", "La Casa de Papel", "El Cuento de la Isla", "Euphoria", "Supernatural", "The Big Bang Theory", "True Detective", "The Last of Us", "Arrow", "With Love", "Solos", "The Exorcist", "Casados con Hijos", "Law and Order", "Night Sky", "The Source", "How I Met your Mother", "La Próxima Apuesta", "Lost", "Burn Notice", "New Girl", "Loki", "Herederos de la Noche", "How I Met your Father", "Daredevil", "Once Upon a Time", "Moonknight"];
let datos = []
let i = 0
function armar_objetos(){
    for (let tipo of tipos){
        for (let plataforma of plataformas){
            for (let genero of generos){
                let reco = new Recomendar(tipo,plataforma,genero,nombres[i])
                datos.push(reco)
                i = i+1
            }
        }
    }
}
armar_objetos()
console.log(datos)
let serie_pelicula_recom = prompt("Si desea filtrar las recomendaciones en series o peliculas especifiquelo aquí, de no querer hacerlo no ingrese ninguna palabra y oprima aceptar.").toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"")
while(!(serie_pelicula_recom=="pelicula" || serie_pelicula_recom=="serie" || serie_pelicula_recom=="")){
    alert("Valor introducido incorrecto, intente nuevamente.")
    serie_pelicula_recom = prompt("Si desea filtrar las recomendaciones en series o peliculas especifiquelo aquí, de no querer hacerlo no ingrese ninguna palabra y oprima aceptar.").toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"")
}
let plataforma_recom = ""
let condicion_plataforma = false
do{
    plataforma_recom = prompt("Si desea filtrar las recomendaciones por plataforma ingrese la plataforma aquí, en caso de no querer hacerlo no ingrese ninguna palabra y oprima aceptar.").toLowerCase().replace(/ /g,"")
    condicion_plataforma = false
    switch(plataforma_recom){
        case "netflix":
            break;
        case "hbo":
        case "max":
        case "hbo max":
            plataforma_recom = "hbo";
            break;
        case "prime":
        case "amazon":
        case "amazonprime":
        case "amazonprimevideo":
        case "amazonvideo":
        case "primevideo":
            plataforma_recom = "prime";
            break;
        case "starplus":
        case "star+":
        case "starplus":
        case "star+":
        case "star":
            plataforma_recom = "star";
            break;
        case "disney":
        case "disney+":
        case "disneyplus":
            plataforma_recom = "disney";
            break;
        case "":
            break;
        default:
            plataforma_recom = plataforma_recom.toUpperCase();
            alert(`Mil disculpas, no contamos con recomendaciones para la plataforma ${plataforma_recom}. Intente con una diferente.`);
            condicion_plataforma = true;
    }
}while(condicion_plataforma);
do{
    genero_acentos = prompt("Si desea filtrar las recomendaciones por género ingrese el género aquí, en caso de no querer hacerlo no ingrese ninguna palabra y oprima aceptar.").toLowerCase()
    genero_recom = genero_acentos.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u").replace(/ /g,"")
    condicion = false
    switch(genero_recom){
        case "romantica":
        case "amor":
        case "romance":
            genero_recom = "romance";
            break;
        case "drama":
            break
        case "terror":
        case "horror":
            genero_recom = "terror";
            break;
        case "comedia":
            break;
        case "crimen":
        case "policiales":
        case "policial":
            genero_recom = "policial";
            break;
        case "cienciaficcion":
            break;
        case "accion":
        case "aventuras":
        case "aventura":
            genero_recom = "accion";
            break;
        case "":
            break;
        default:
            condicion = true;
            genero_acentos = genero_acentos.toUpperCase()
                alert(`Mil disculpas, no tenemos recomendaciones para el género ${genero_acentos}. Pruebe con uno distinto.`)
            break;
        };
    }while(condicion);
let recomendacion = datos.slice();
if (serie_pelicula_recom!=""){
    recomendacion = recomendacion.filter((tipo) => tipo.serie_pelicula == serie_pelicula_recom)
}
if (plataforma_recom!=""){
    recomendacion = recomendacion.filter((tipo) => tipo.plataforma == plataforma_recom)
}
if (genero_recom!=""){
    recomendacion = recomendacion.filter((tipo) => tipo.genero == genero_recom)
}
console.log(recomendacion)