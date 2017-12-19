<!DOCTYPE html>
<?php
$username = "thegoat95";
$password = "adobo2018";
$hostname = "localhost";

$dbhandle = mysql_connect($hostname, $username, $password)
    or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";

?>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../js/register.js"></script>
        <title>
            Food Planner
        </title>
    </head>
    <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand" href="home.html">Food Planner</a>
                <ul class="nav navbar-nav">
                    <li><a href="recipe-search-form.html">Recipe Search</a></li>
                    <li><a href="food-planner-form.html">Meal Planner</a></li>
                    <li><a href="help.html">Help</a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="jumbotron">
                <form> 
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-8">
                                <label for="email">Email</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="col-md-4">
                                <label for="pword">Password</label>
                                <input type="password" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="fname">First Name</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="lname">Last Name</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="city">City</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="country">Country</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-check-label">Intolerances</label>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Dairy"> Dairy
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Eggs"> Eggs
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Fish"> Fish
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Gluten"> Gluten
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Peanuts"> Peanuts
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Shellfish"> Shellfish
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Soy"> Soy
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Tree Nuts"> Tree Nuts
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Wheat"> Wheat
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-check-label">Diets</label>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Alcohol-free"> Alcohol-free
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Balanced"> Balanced
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="High Fiber"> High Fiber
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="High Protein"> High Protein
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Low Carb"> Low Carb
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Low Fat"> Low Fat
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Low Sodium"> Low Sodium
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Low Sugar"> Low Sugar
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Paleo"> Paleo
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Vegan"> Vegan
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="Vegetarian"> Vegetarian
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </body>
</html>