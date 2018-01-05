$(document).ready(function() {

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentDay = new Date();

    var count = 1;

    var clickedBoxId = null;

    //Sets the default day
    var field1Date = '<label class="form-check-label">' + dayNames[currentDay.getDay()] + " " + monthNames[currentDay.getMonth()] + " " + currentDay.getDate() + "</label>";
    $("#meal-options-1").before(field1Date);

    //Dynamically change the number of day fields
    $("#number-of-days-field").change(function () {
        var fieldValue = $("#number-of-days-field").val();
        fieldValue = parseInt(fieldValue, 10);

        if (fieldValue > count) {

            for (var i = count + 1; i <= fieldValue; i++) {
                var nextField = '<div id="day-group-' + i + '" class="form-group"><div class="form-check"><div id="meal-options-' + i + '"><div class="form-check-label col-md-4"><input class="form-check-input" id="boxbreakfast' + i + '" type="checkbox" value="breakfast" disabled><button type="button" class="btn btn-outline-secondary btn-sm" id="breakfast' + i + '">Breakfast</button><div class="form-check-label" id="resbreakfast' + i + '" style="display: none"><input class="form-control ingredient-list-result" id="ilrbreakfast' + i + '"></div></div><div class="form-check-label col-md-4"><input class="form-check-input" id="boxlunch' + i + '" type="checkbox" value="lunch" disabled><button type="button" class="btn btn-outline-secondary btn-sm" id="lunch' + i + '">Lunch</button><div class="form-check-label" id="reslunch' + i + '" style="display: none"><input class="form-control ingredient-list-result" id="ilrlunch' + i + '"></div></div><div class="form-check-label col-md-4"><input class="form-check-input" id="boxdinner' + i + '" type="checkbox" value="dinner" disabled><button type="button" class="btn btn-outline-secondary btn-sm" id="dinner' + i + '">Dinner</button><div class="form-check-label" id="resdinner' + i + '" style="display: none"><input class="form-control ingredient-list-result" id="ilrdinner' + i + '"></div></div></div></div></div>'
                var prevField = '#day-group-' + (i - 1);
                $(prevField).after(nextField);
                
                var futureDay = new Date();
                futureDay.setDate(currentDay.getDate() + i - 1);
                var fieldxDate = '<label class="form-check-label">' + dayNames[futureDay.getDay()] + " " + monthNames[futureDay.getMonth()] + " " + futureDay.getDate() + "</label>";
                var mealOptionsSelect = "#meal-options-" + i;
                $(mealOptionsSelect).before(fieldxDate);
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
    $(".form-group").on("click", "button", function(event) {
        //debugger;
        clickedBoxId = this.id; 
        
        var toCheck = "#box" + clickedBoxId;
        var isChecked = $(toCheck).is(':checked');

        

        if (!isChecked) {
            //$(toCheck).prop('checked', true);
            $("#ingredientList").val("");
            $("#clickedBoxModal").modal("show");        
        }

        else {
            var fieldToFetchFrom = "#ilr" + clickedBoxId;
            var fieldToFetchFromValue = $(fieldToFetchFrom).val();
            $("#ingredientList").val(fieldToFetchFromValue);

            $("#clickedBoxModal").modal("show");
            //$(toCheck).prop('checked', false);
            
        }
    });

    //When modal save is clicked
    $("#clickedBoxModal").on("click", "#save", function() {
        //debugger;
        var ingredientInput = $("#ingredientList").val();
        var fieldToFill = "#ilr" + clickedBoxId;
        //$(divToAppear).attr("style", "display: inline");
        $(fieldToFill).val(ingredientInput);
        var toCheck = "#box" + clickedBoxId;
        //$(clickedBoxId).attr("class", "btn btn-outline-secondary btn-sm");
        $(toCheck).prop('checked', true);

        if (ingredientInput == "") {          
            //$(clickedBoxId).removeClass("btn-outline-success")
            //$(clickedBoxId).addClass("btn-outline-secondary");
            $(toCheck).prop('checked', false);
        }

        $("#ingredientList").val("");
    })

    $(".planner-form").on("click", "#submitbtn", function() {
        $(".ingredient-list-result").each(function (index, item) { //item = hiddenField's ID
            if ($(item).val()) {
                //console.log($(item).val());
                var ingredients = $(item).val();
                console.log("Ingredients: " + ingredients);

                ingredients = ingredients.replace(/\s*, \s*/g, ",");
                ingredients = ingredients.replace(/ /g, "%20");
                console.log("New Ingredients: " + ingredients);
                
                var apiId = "051df186";
                var apiKey = "94f81f560ef00f24721be58e2d70383e"

                var apiURL = "https://api.edamam.com/search?q=" + ingredients + "&app_id=" + apiId + "&app_key=" + apiKey;
                
                console.log(apiURL);

                loadJSON(apiURL, dataReceived);

                
            }
        })        
    })

    function dataReceived(data) {
        console.log(data);
    }
})