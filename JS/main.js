function recomendaciones(){
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
                            alert("Mi Primer Amor")
                        }else {
                            alert("El Cuento de la Isla")
                        };
                        break;
                    case "prime":
                        if(serie_pelicula){
                            alert("About Time")
                        }else {
                            alert("With Love")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("Titanic")
                        }else {
                            alert("El Beso del Destino")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Bajo la Misma Estrella")
                        }else {
                            alert("New Girl")
                        };
                        break;
                }
                break;
            case "drama":
                switch(plataforma){
                    case "netflix":
                        if(serie_pelicula){
                            alert("A Dos Metros de Ti")
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
                            alert("Saltburn")
                        }else {
                            alert("Solos")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("Abzurdah")
                        }else {
                            alert("Terapia Alternativa")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Cruella")
                        }else {
                            alert("Loki")
                        };
                        break;
                }
                break;
            case "terror":
                switch(plataforma){
                    case "netflix":
                        if(serie_pelicula){
                            alert("No Respires")
                        }else {
                            alert("Marianne")
                        };
                        break;
                    case "hbo":
                        if(serie_pelicula){
                            alert("The Nun")
                        }else {
                            alert("Supernatural")
                        };
                        break;
                    case "prime":
                        if(serie_pelicula){
                            alert("Talk to Me")
                        }else {
                            alert("The Exorcist")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("La Cura Siniestra")
                        }else {
                            alert("Sangre Maldita")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Mansión Embrujada")
                        }else {
                            alert("Herederos de la Noche")
                        };
                        break;
                }
                break;
            case "comedia":
                switch(plataforma){
                    case "netflix":
                        if(serie_pelicula){
                            alert("Permitidos")
                        }else {
                            alert("The Office")
                        };
                        break;
                    case "hbo":
                        if(serie_pelicula){
                            alert("Aceptados")
                        }else {
                            alert("The Big Bang Theory")
                        };
                        break;
                    case "prime":
                        if(serie_pelicula){
                            alert("Papá por Accidente")
                        }else {
                            alert("Casados con Hijos")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("Un Novio para mi Mujer")
                        }else {
                            alert("How I Met your Mother")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("27 Bodas")
                        }else {
                            alert("How I Met your Father")
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
                            alert("¿Qué Hizo Jennifer?")
                        }else {
                            alert("The Sinner")
                        };
                        break;
                    case "hbo":
                        if(serie_pelicula){
                            alert("Asesino sin Memoria")
                        }else {
                            alert("True Detective")
                        };
                        break;
                    case "prime":
                        if(serie_pelicula){
                            alert("The Alphabet Killer")
                        }else {
                            alert("Law and Order")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("El Bandido Perfecto")
                        }else {
                            alert("La Próxima Apuesta")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Inspector Gadget")
                        }else {
                            alert("Daredevil")
                        };
                        break;
                }
                break;
            case "ciencia ficcion":
                switch(plataforma){
                    case "netflix":
                        if(serie_pelicula){
                            alert("Presagio")
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
                            alert("Dune")
                        }else {
                            alert("Night Sky")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("El Precio del Mañana")
                        }else {
                            alert("Lost")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Avatar")
                        }else {
                            alert("Once Upon a Time")
                        };
                        break;
                }
                case "accion":
                case "aventuras":
                case "aventura":
                switch(plataforma){
                    case "netflix":
                        if(serie_pelicula){
                            alert("Top Gun: Maverick")
                        }else {
                            alert("La Casa de Papel")
                        };
                        break;
                    case "hbo":
                        if(serie_pelicula){
                            alert("Tenet")
                        }else {
                            alert("Arrow")
                        };
                        break;
                    case "prime":
                        if(serie_pelicula){
                            alert("Uncharted")
                        }else {
                            alert("The Source")
                        };
                        break;
                    case "star+":
                        if(serie_pelicula){
                            alert("Identidad Desconocida")
                        }else {
                            alert("Burn Notice")
                        };
                        break;
                    case "disney+":
                        if(serie_pelicula){
                            alert("Avengers")
                        }else {
                            alert("Moonknight")
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
}
recomendaciones()