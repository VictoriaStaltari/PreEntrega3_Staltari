const datos = [
    // Películas Netflix
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "romance", nombre: "Corazones Malheridos" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "drama", nombre: "A Dos Metros de Ti" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "terror", nombre: "No Respires" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "comedia", nombre: "Permitidos" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "policial", nombre: "¿Qué Hizo Jennifer?" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "cienciaficcion", nombre: "Presagio" },
    { serie_pelicula: "pelicula", plataforma: "netflix", genero: "accion", nombre: "Top Gun: Maverick" },
    
    // Películas HBO
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "romance", nombre: "Mi Primer Amor" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "drama", nombre: "Oppenheimer" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "terror", nombre: "The Nun" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "comedia", nombre: "Aceptados" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "policial", nombre: "Asesino sin Memoria" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "cienciaficcion", nombre: "Interestelar" },
    { serie_pelicula: "pelicula", plataforma: "hbo", genero: "accion", nombre: "Tenet" },

    // Películas Prime
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "romance", nombre: "About Time" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "drama", nombre: "Saltburn" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "terror", nombre: "Talk to Me" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "comedia", nombre: "Papá por Accidente" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "policial", nombre: "The Alphabet Killer" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "cienciaficcion", nombre: "Dune" },
    { serie_pelicula: "pelicula", plataforma: "prime", genero: "accion", nombre: "Uncharted" },

    // Películas Star
    { serie_pelicula: "pelicula", plataforma: "star", genero: "romance", nombre: "Titanic" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "drama", nombre: "Abzurdah" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "terror", nombre: "La Cura Siniestra" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "comedia", nombre: "Un Novio para mi Mujer" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "policial", nombre: "El Bandido Perfecto" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "cienciaficcion", nombre: "El Precio del Mañana" },
    { serie_pelicula: "pelicula", plataforma: "star", genero: "accion", nombre: "Identidad Desconocida" },

    // Películas Disney
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "romance", nombre: "Bajo la Misma Estrella" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "drama", nombre: "Cruella" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "terror", nombre: "Mansión Embrujada" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "comedia", nombre: "27 Bodas" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "policial", nombre: "Inspector Gadget" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "cienciaficcion", nombre: "Avatar" },
    { serie_pelicula: "pelicula", plataforma: "disney", genero: "accion", nombre: "Avengers" },

    // Series Netflix
    { serie_pelicula: "serie", plataforma: "netflix", genero: "romance", nombre: "Desde Cero" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "drama", nombre: "Una Familia Normal" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "terror", nombre: "Marianne" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "comedia", nombre: "The Office" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "policial", nombre: "The Sinner" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "cienciaficcion", nombre: "Los 100" },
    { serie_pelicula: "serie", plataforma: "netflix", genero: "accion", nombre: "La Casa de Papel" },
    
    // Series HBO
    { serie_pelicula: "serie", plataforma: "hbo", genero: "romance", nombre: "El Cuento de la Isla" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "drama", nombre: "Euphoria" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "terror", nombre: "Supernatural" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "comedia", nombre: "The Big Bang Theory" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "policial", nombre: "True Detective" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "cienciaficcion", nombre: "The Last of Us" },
    { serie_pelicula: "serie", plataforma: "hbo", genero: "accion", nombre: "Arrow" },

    // Series Prime
    { serie_pelicula: "serie", plataforma: "prime", genero: "romance", nombre: "With Love" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "drama", nombre: "Solos" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "terror", nombre: "The Exorcist" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "comedia", nombre: "Casados con Hijos" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "policial", nombre: "Law and Order" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "cienciaficcion", nombre: "Night Sky" },
    { serie_pelicula: "serie", plataforma: "prime", genero: "accion", nombre: "The Source" },

    // Series Star
    { serie_pelicula: "serie", plataforma: "star", genero: "romance", nombre: "El Beso del Destino" },
    { serie_pelicula: "serie", plataforma: "star", genero: "drama", nombre: "Terapia Alternativa" },
    { serie_pelicula: "serie", plataforma: "star", genero: "terror", nombre: "Sangre Maldita" },
    { serie_pelicula: "serie", plataforma: "star", genero: "comedia", nombre: "How I Met your Mother" },
    { serie_pelicula: "serie", plataforma: "star", genero: "policial", nombre: "La Próxima Apuesta" },
    { serie_pelicula: "serie", plataforma: "star", genero: "cienciaficcion", nombre: "Lost" },
    { serie_pelicula: "serie", plataforma: "star", genero: "accion", nombre: "Burn Notice" },

    // Series Disney
    { serie_pelicula: "serie", plataforma: "disney", genero: "romance", nombre: "New Girl" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "drama", nombre: "Loki" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "terror", nombre: "Herederos de la Noche" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "comedia", nombre: "How I Met your Father" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "policial", nombre: "Daredevil" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "cienciaficcion", nombre: "Once Upon a Time" },
    { serie_pelicula: "serie", plataforma: "disney", genero: "accion", nombre: "Moonknight" }
];    
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