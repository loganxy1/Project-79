pizza_array = ["Pizzas:", "Deep Dish/Chicago Pizza", "Thin Crust/New York Pizza", "Rectangle Cut/St. Louis Pizza"]
pizza_toppings_array = ["Toppings:", "Mushroom", "Onion", "Brocoli", "Spinach", "Jalepenos", "Chicken Sausage", "Chicken", "Ham", "Pinapple"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    pizza_array.sort();
    for(var i=0;i<pizza_array.length;i++){
        htmldata=htmldata+'<li>'+pizza_array.length[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_pizza_toppings").innerHTML = htmldata;
}
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    pizza_toppings_array.sort();
    for(var i=0;i<pizza_toppings_array.length;i++){
        htmldata=htmldata+'<li>'+pizza_toppings_array.length[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_pizza_toppings").innerHTML = htmldata;
}
