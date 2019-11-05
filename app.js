var placeholder = $(".custom");
var process_data = null

$.getJSON("rest_api_task_1.json", function(data) {
    process_data = data;
});


$(".getinfo").click(function() {
    var name_info = "Person's full name is " + process_data.first_name + " " + process_data.last_name + ". ";
    var age_info = "Unfortunately there isn't any data related to current person's name"
    if(process_data.age !== null) {
        age_info = process_data.first_name + " is " + process_data.age + " years old";
    }
    placeholder.text(name_info + age_info);
});
