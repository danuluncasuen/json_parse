var placeholder = $(".custom");
var data = {
  "first_name": "Xenia",
  "last_name": "Damanciuc",
  "age": 21,
  "address": {
    "city": null,
    "postalCode": "10021-3100"
  }
};


$(".getinfo").click(function() {
    var name_info = "Person's full name is " + data.first_name + " " + data.last_name + ". ";
    var age_info = "Unfortunately there isn't any data related to current person's name"
    if(data.age !== null) {
        age_info = data.first_name + " is " + data.age + " years old";
    }
    placeholder.text(name_info + age_info);
});
