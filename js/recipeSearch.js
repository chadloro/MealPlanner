$(document).ready(function() {
    
        //This function toggles the dietary restriction checkboxes
        $(':radio').change(function(event) {
            //Add if id=Yes show, and if no hide
            var value = $(this).val();
            if (value == "dietYes") {
                $('#restrictionsList').show();
            }
            if (value == "dietNo") {
                $('#restrictionsList').hide();
                
            }
        });
    
        $(':submit').click(function(event) {
            var ingredientsList = $('#ingredientsTextArea').val();
            var ingredientArray = ingredientsList.split(',');
            var ingredientString = "";
            var restrictionsString = "";
    
            //Handles ingredients
            for (var ingredient of ingredientArray) {
                ingredient = ingredient.trim();
                ingredientString += ingredient + " ";
            }
    
            ingredientString = ingredientString.trim();
            
            
            //Handles dietary restrictions
            $(".rest-list-item:checkbox:checked").each(function() {
                var checkboxValue = this.value;
                restrictionsString += checkboxValue + " ";
            });
    
            restrictionsString = restrictionsString.trim();
    
            var URLString = "https://api.edamam.com/search?q=" + ingredientString + "&app_id=051df186&app_key=09a42d26c4767d76ddd8262b1f7de383" + "&health=" + restrictionsString;
            debugger;
            console.log(URLString);
    
        });
    
    
    });