$(document).ready(function() {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentDay = new Date();

    var count = 1;

    //Sets the default day
    var field1Date = '<label class="form-check-label">' + dayNames[currentDay.getDay()] + " " + monthNames[currentDay.getMonth()] + " " + currentDay.getDate() + "</label>";
    $("#meal-options-1").before(field1Date);

    //Dynamically change the number of day fields
    $("#number-of-days-field").change(function () {
        var fieldValue = $("#number-of-days-field").val();
        fieldValue = parseInt(fieldValue, 10);

        if (fieldValue > count) {

            for (var i = count + 1; i <= fieldValue; i++) {
                var nextField = '<div id="day-group-' + i +'"><div class="form-check"><div id="meal-options-' + i + '"><div class="form-check-label col-md-4"><input class="form-check-input" id="breakfast' + i + '" type="checkbox" value="breakfast"> Breakfast</div><div class="form-check-label col-md-4"><input class="form-check-input" id="lunch' + i + '" type="checkbox" value="lunch"> Lunch</div><div class="form-check-label col-md-4"><input class="form-check-input" id="dinner' + i + '" type="checkbox" value="dinner"> Dinner</div></div></div></div>'
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
})