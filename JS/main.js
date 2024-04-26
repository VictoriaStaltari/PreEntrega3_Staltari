let serie_pelicula = prompt("Ingrese 1 si le gustaría una recomendación de película.\nIngrese 2 si le gustaría una recomendación de serie.")
while(!(serie_pelicula=="1" || serie_pelicula=="2")){
    alert("Valor introducido incorrecto, intente nuevamente.")
    serie_pelicula = prompt("Ingrese 1 si le gustaría una recomendación de película.\nIngrese 2 si le gustaría una recomendación de serie.")
}
if (serie_pelicula==1){
    serie_pelicula=true
}else {
    serie_pelicula=false
}
let plataforma = ""
let condicion_plataforma = false
do{
    plataforma = prompt("¿Cuál plataforma de streaming desea utilizar?").toLowerCase()
    condicion_plataforma = false
    switch(plataforma){
        case "netflix":
            break;
        case "hbo":
        case "max":
        case "hbo max":
            plataforma = "hbo";
            break;
        case "prime":
        case "amazon":
        case "amazon prime":
        case "amazon prime video":
        case "prime video":
            plataforma = "prime";
            break;
        case "star plus":
        case "star+":
        case "star":
            plataforma = "star+";
            break;
        case "disney":
        case "disney+":
        case "disney plus":
            plataforma = "disney+";
            break;
        default:
            plataforma = plataforma.toUpperCase();
            alert(`Mil disculpas, no contamos con recomendaciones para la plataforma ${plataforma}. Intente con una diferente.`);
            condicion_plataforma = true;
    }
}while(condicion_plataforma);
let genero = "";
let genero_acentos ="";
let condicion = false;
do{
    genero_acentos = prompt("¿Qué género le gustaría mirar?").toLowerCase()
    genero = genero_acentos.replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u")
    condicion = false
    switch(genero){
        case "romantica":
        case "romance":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Corazones Malheridos")
                    }else {
                        alert("Desde Cero")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("peli rom hbo")
                    }else {
                        alert("El Cuento de la Isla")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli rom prime")
                    }else {
                        alert("serie rom prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli rom star")
                    }else {
                        alert("serie rom star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli rom disney")
                    }else {
                        alert("serie rom disney")
                    };
                    break;
            }
            break;
        case "drama":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Peli drama netflix")
                    }else {
                        alert("Una Familia Normal")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("Oppenheimer")
                    }else {
                        alert("Euphoria")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli drama prime")
                    }else {
                        alert("serie drama prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli drama star")
                    }else {
                        alert("serie drama star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli drama disney")
                    }else {
                        alert("serie drama disney")
                    };
                    break;
            }
            break;
        case "terror":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Peli terror netflix")
                    }else {
                        alert("Marianne")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("peli terror hbo")
                    }else {
                        alert("Supernatural")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli terror prime")
                    }else {
                        alert("serie terror prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli terror star")
                    }else {
                        alert("serie terror star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli terror disney")
                    }else {
                        alert("serie terror disney")
                    };
                    break;
            }
            break;
        case "comedia":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Peli comedia netfl")
                    }else {
                        alert("The Office")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("peli comedia hbo")
                    }else {
                        alert("The Big Bang Theory")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli comedia prime")
                    }else {
                        alert("serie comedia prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli comedia star")
                    }else {
                        alert("serie comedia star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli comedia disney")
                    }else {
                        alert("serie comedia disney")
                    };
                    break;
            }
            break;
        case "crimen":
        case "policiales":
        case "policial":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Peli mus netflix")
                    }else {
                        alert("The Sinner")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("peli mus hbo")
                    }else {
                        alert("True Detective")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli mus prime")
                    }else {
                        alert("serie mus prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli mus star")
                    }else {
                        alert("serie mus star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli mus disney")
                    }else {
                        alert("serie mus disney")
                    };
                    break;
            }
            break;
        case "ciencia ficcion":
            switch(plataforma){
                case "netflix":
                    if(serie_pelicula){
                        alert("Peli cf netflix")
                    }else {
                        alert("Los 100")
                    };
                    break;
                case "hbo":
                    if(serie_pelicula){
                        alert("Interestelar")
                    }else {
                        alert("The Last of Us")
                    };
                    break;
                case "prime":
                    if(serie_pelicula){
                        alert("peli cf prime")
                    }else {
                        alert("serie cf prime")
                    };
                    break;
                case "star+":
                    if(serie_pelicula){
                        alert("peli cf star")
                    }else {
                        alert("serie cf star")
                    };
                    break;
                case "disney+":
                    if(serie_pelicula){
                        alert("peli cf disney")
                    }else {
                        alert("serie cf disney")
                    };
                    break;
            }
            break
        default:
            condicion = true;
            genero_acentos = genero_acentos.toUpperCase()
            alert(`Mil disculpas, no tenemos recomendaciones para el género ${genero_acentos}. Pruebe con uno distinto.`)
            break;
    };
} while(condicion)
