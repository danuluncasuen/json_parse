var placeholder = $(".custom");
var process_data = null;

$.getJSON("rest_api_task_1.json", function(data) {
    process_data = data;
});

$(".getinfo").click(function() {
    var name_info = "Person's full name is " + process_data.first_name + " " + process_data.last_name + ". ";
    var age_info = "Unfortunately there isn't any data related to current person's age. ";
    var pets_info = process_data.first_name + " has no pets. ";
    var address_info = "There isn't any information related to " + process_data.first_name + "' s address. ";
    var movie_info = "Nothing known about " + process_data.first_name + "' s favorite movies. ";
    if(process_data.age !== null) {
        age_info = process_data.first_name + " is " + process_data.age + " years old. ";
    }
    if(process_data.gender == "female") {
        age_info += " (It's not nice to ask a girl about her age!). "
    }
    if(process_data.pets.length === 1) {
        pets_info = process_data.first_name + " has a " + process_data.pets[0].type + ", it's name is " + process_data.pets[0].name + ". ";
    } else if(process_data.pets.length > 1) {
        pets_info = process_data.first_name + " has " + process_data.pets.length + " pets: ";
        for(var i=0; i<process_data.pets.length; i++) {
            pets_info += process_data.pets[i].name + " is a " + process_data.pets[i].type + ". "
        }
    }
    if(process_data.address.city !== null) {
        address_info = process_data.first_name + " lives in " + process_data.address.city + ". ";
    }

    if(process_data.favorite_movies.length === 1) {
        movie_info = process_data.first_name + " has one favorite movie - " + process_data.favorite_movies[0].name + ". ";
    } else if(process_data.favorite_movies.length > 1) {
        movie_info = process_data.first_name + " has " + process_data.favorite_movies.length + " favorite movies: ";
        for(var i=0; i<process_data.pets.length; i++) {
            movie_info += process_data.favorite_movies[i].name + ". "
        }
    }
    placeholder.text(name_info + address_info + age_info + pets_info + movie_info);
});

$(".hideinfo").click(function() {
    placeholder.text("The information is hidden. ");
});
