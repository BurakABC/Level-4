$(document).ready(function() {

    getCatFact();
    setInterval(getCatFact, 10000);

    function getCatFact() {
        $.get("https://catfact.ninja/fact", function(data, status) {
            $("#div1").html(data.fact);
        });
    }

    getCatImage();
    setInterval(getCatImage, 3000);


    function getCatImage() {
        $.get("https://api.thecatapi.com/v1/images/search", function(data, status) {
            $("#image1").html(`<img src="${data[0].url}" class="card-img-top" alt="Cat">`);
        });
    };


});