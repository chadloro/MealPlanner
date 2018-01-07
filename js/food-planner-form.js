$(document).ready(function() {

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentDay = new Date();

    var count = 1;

    var clickedBoxId = null;
    var entryField = null;
    var resultsDisplay = document.getElementById("resultsDisplay");

    var apiId = "051df186";
    var apiKey = "94f81f560ef00f24721be58e2d70383e"

    //Sets the default day
    var field1Date = dayNames[currentDay.getDay()] + " " + monthNames[currentDay.getMonth()] + " " + currentDay.getDate();
    $("#date1").text(field1Date);

    //Dynamically change the number of day fields
    $("#number-of-days-field").change(function () {
        var fieldValue = $("#number-of-days-field").val();
        fieldValue = parseInt(fieldValue, 10);

        if (fieldValue > count) {

            for (var i = count + 1; i <= fieldValue; i++) {
                var nextField = '<div id="day-group-' + i + '"><table class="table table-bordered"><thead class="thead-inverse"><tr><th id="date' + i + '"></th></tr></thead><tbody><tr><td class="col-md-4 text-center"><p id="breakfast' + i + '">Breakfast</p><input type="hidden" id="breakfast' + i + 'entry"></td><td class="col-md-4 text-center"><p id="lunch' + i + '">Lunch</p><input type="hidden" id="lunch' + i + 'entry"></td><td class="col-md-4 text-center"><p id="dinner' + i + '">Dinner</p><input type="hidden" id="dinner' + i + 'entry"></td></tr></tbody></table></div>'
                var prevField = '#day-group-' + (i - 1);
                $(prevField).after(nextField);
                
                var futureDay = new Date();
                futureDay.setDate(currentDay.getDate() + i - 1);
                var fieldxDate = dayNames[futureDay.getDay()] + " " + monthNames[futureDay.getMonth()] + " " + futureDay.getDate();
                var mealOptionsSelect = "#date" + i;
                $(mealOptionsSelect).text(fieldxDate);
            }
        }

        else if (fieldValue < count) {

            for (var j = count; j > fieldValue; j--) {
                var fieldToDelete = '#day-group-' + j;
                $(fieldToDelete).remove();
            }
        }

        count = fieldValue;
    })

    //Trigger modal
    $(".form-group").on("click", "p", function(event) {
        //debugger;

        $("#resultsDisplay").empty();
        $("#ingredientList").val("");

        clickedBoxId = "#" + this.id; 
        console.log("this id: " + clickedBoxId);

        entryField = clickedBoxId + "entry";

        if ($(entryField).val() == "") {
            var mealText = $(clickedBoxId).text();
            console.log("customize text: " + mealText);
    
            var modalHeaderText = "Customize your search for " + mealText; //add date
    
            $(".customize-your-selections-box").text(modalHeaderText);
        
            $("#mealDayModal").modal("show");  
        }

        else {
            
            var URIEntry = $(entryField).val();

            var fetchURIURL = "https://api.edamam.com/search?r=" + URIEntry + "&app_id=" + apiId + "&app_key=" + apiKey

            var fetchURIRequest = new XMLHttpRequest();
            fetchURIRequest.open("GET", fetchURIURL);
            fetchURIRequest.onload = function() {
                var recipe = JSON.parse(fetchURIRequest.responseText);

                $(".recipe-label").text(recipe[0].label);

                $("#resultModal").modal("show");

            };
    
            fetchURIRequest.send(); 
        }

              

    });

    //When modal 'Show Results' is clicked
    $("#mealDayModal").on("click", "#showResults", function() {
        
        //debugger;
        var ingredientInput = $("#ingredientList").val();

        if (ingredientInput == "") {
            return;
        } 

        ingredientInput = ingredientInput.replace(/\s*, \s*/g, ",");
        ingredientInput = ingredientInput.replace(/ /g, "%20");

        var apiURL = "https://api.edamam.com/search?q=" + ingredientInput + "&app_id=" + apiId + "&app_key=" + apiKey;
        
        console.log(apiURL);

        //Fetching food query data from API
        var apiRequest = new XMLHttpRequest();
        apiRequest.open("GET", apiURL);
        apiRequest.onload = function() {
            var foodData = JSON.parse(apiRequest.responseText);
            console.log(foodData.q);
            console.log("Made it here");

            renderHTML(foodData.hits);

            $("#resultsDisplay").on("click", ".choose-button", function() {
                console.log("This id = " + this.id);
                var index = parseInt(this.id.slice(-1));
                console.log("Index: " + index);
                //$(clickedBoxId).css("background-image", foodData.hits[index].recipe.image);//not working for some reason

                $(clickedBoxId).text(foodData.hits[index].recipe.label);

                $(entryField).val(foodData.hits[index].recipe.uri);
                
            
            });
        };

        apiRequest.send(); 
    })

    

    function renderHTML(data) {
        var HTMLString = "";
        console.log(data);
        var results = data.length;

        //remove this later
        if (data.length > 10) {
            var results = 10;
        }

        for (var i = 0; i < results; i++) {
            HTMLString += "<ul class='list-group item" + i + "'><li class='list-group-item'><img src='" + data[i].recipe.image + "' style='height:100px;width:100px'><a href=" + data[i].recipe.url + ">" + data[i].recipe.label + "</a><button class='choose-button' id='choose-id" + i + "' data-dismiss='modal'>Choose</button></li></div>"
            
        }
        
        console.log(HTMLString);
        resultsDisplay.insertAdjacentHTML('beforeend', HTMLString);

        
    }
})


//TODO add hidden checkbox + input field for URI
