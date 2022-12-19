/*fetch('pokemon.json') 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        //displayPokemonCards(data);
        displayPokemonCards(data);
    });

*/

$(document).ready(function() {

    $.get("https://uyghur.ai/course/data/pokemon.json", function(data, status) {
        if (status == "success") {
            displayPokemonCards(data)
        } else {
            alert('Failed to load the pokemon.json, please contact administrator.');
        }
    });

    function displayPokemonCards(pokemonData) {
        let pokemonDiv = document.getElementById("pokemonContainer");
        let rows = pokemonData.length / 6;
        let bgType = " ";
        for (let eachRow = 0; eachRow < rows; eachRow++) {
            let rowId = "row" + eachRow;
            pokemonDiv.innerHTML += "<div class='row' id='" + rowId + "'></div>";

            for (let i = 0; i < 6; i++) {
                let currentIndex = eachRow * 6 + i;
                if (pokemonData[currentIndex].type[0] == 'Water') {
                    bgType = "water-type";
                } else if (pokemonData[currentIndex].type[0] == 'Fire') {
                    bgType = "fire-type";
                } else if (pokemonData[currentIndex].type[0] == 'Grass') {
                    bgType = "grass-type";
                } else if (pokemonData[currentIndex].type[0] == 'Electric') {
                    bgType = "electric-type";
                } else if (pokemonData[currentIndex].type[0] == 'Bug') {
                    bgType = "bug-type";
                } else if (pokemonData[currentIndex].type[0] == 'Ghost') {
                    bgType = "ghost-type";
                } else if (pokemonData[currentIndex].type[0] == 'Normal') {
                    bgType = "normal-type";
                } else if (pokemonData[currentIndex].type[0] == 'Psychic') {
                    bgType = "psychic-type";
                } else if (pokemonData[currentIndex].type[0] == 'Dragon') {
                    bgType = "dragon-type";
                } else if (pokemonData[currentIndex].type[0] == 'Ice') {
                    bgType = "ice-type";
                } else if (pokemonData[currentIndex].type[0] == 'Poison') {
                    bgType = "poison-type";
                } else if (pokemonData[currentIndex].type[0] == 'Ground') {
                    bgType = "ground-type";
                } else if (pokemonData[currentIndex].type[0] == 'Rock') {
                    bgType = "rock-type";
                } else if (pokemonData[currentIndex].type[0] == 'Fighting') {
                    bgType = "fighting-type";
                } else {
                    bgType = " ";
                }


                if (pokemonData[currentIndex] != null || pokemonData[currentIndex] != undefined) {
                    document.getElementById(rowId).innerHTML +=
                        "<div class='col-2'>" +
                        "<div class='card h-100 " + bgType + " '>" +
                        //"<img src='" + pokemonData[currentIndex].img + "' onclick='pokemonSayHello(" + JSON.stringify(pokemonData[currentIndex]) + ")' class='card-img-top'>" +
                        "<img src='" + pokemonData[currentIndex].img + "'  class='card-img-top'>" +
                        "<div class='card-body'>" +
                        "<p class='card-text'></p></div>" +
                        "<div class='card-footer card-text'>" + pokemonData[currentIndex].name + "</div>" +
                        "</div></div>";

                }
            }
        }
    }



    function loadPokemonInfo(pokemon) {
        let alertText = "";
        if (pokemon != null || pokemon != undefined) {
            alertText = "Hi, I'm " + pokemon.name + "! My type(s): " + pokemon.type;
        }

        alert(alertText);
    }

    function pokemonSayHello(pokemon) {
        alert("Hi, I'm " + pokemon.name + " I'm " + pokemon.type + " type.");
    }


    //jQaury


    $("#hide-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water-type").hide();
        } else if (selectedType == "Fire") {
            $(".fire-type").hide();
        } else if (selectedType == "Grass") {
            $(".grass-type").hide();
        } else if (selectedType == "Electric") {
            $(".electric-type").hide();
        } else if (selectedType == "Bug") {
            $(".bug-type").hide();
        } else if (selectedType == "Ghost") {
            $(".ghost-type").hide();
        } else if (selectedType == "Normal") {
            $(".normal-type").hide();
        } else if (selectedType == "Psychic") {
            $(".psychic-type").hide();
        } else if (selectedType == "Dragon") {
            $(".dragon-type").hide();
        } else if (selectedType == "Ice") {
            $(".ice-type").hide();
        } else if (selectedType == "Posion") {
            $(".poison-type").hide();
        } else if (selectedType == "Ground") {
            $(".ground-type").hide();
        } else if (selectedType == "Rock") {
            $(".rock-type").hide();
        } else {
            (selectedType == "Fighting"); {
                $(".fighting-type").hide();
            }
        }
        // do something hides type
    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water-type").show();
        } else if (selectedType == "Fire") {
            $(".fire-type").show();
        } else if (selectedType == "Grass") {
            $(".grass-type").show();
        } else if (selectedType == "Electric") {
            $(".electric-type").show();
        } else if (selectedType == "Bug") {
            $(".bug-type").show();
        } else if (selectedType == "Ghost") {
            $(".ghost-type").show();
        } else if (selectedType == "Normal") {
            $(".normal-type").show();
        } else if (selectedType == "Psychic") {
            $(".psychic-type").show();
        } else if (selectedType == "Dragon") {
            $(".dragon-type").show();
        } else if (selectedType == "Ice") {
            $(".ice-type").show();
        } else if (selectedType == "Posion") {
            $(".poison-type").show();
        } else if (selectedType == "Ground") {
            $(".ground-type").show();
        } else if (selectedType == "Rock") {
            $(".rock-type").show();
        } else {
            (selectedType == "fighting"); {
                $(".fighting-type").show();
            }
        }


        // do something show type
    });


    $("#show-all").click(function() {
        location.reload(true);
    });

});