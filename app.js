
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; i++) {
        for(var j=i+1; j<a.length; j++) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var recipe1 = ["Sugar", "Milk", "Flour"];
var recipe2 = ["Egg", "SunFlower Oil" ,"Sugar", "Milk", "Honey"];
var recipe3 = ["Apple Syrup", "Egg", "Sugar", "Flour", "Berries", "Milk"]
var recipe4 = [];

recipe4 = arrayUnique(recipe1.concat(recipe2));
recipe4 = arrayUnique(recipe4.concat(recipe3));
alert(recipe4);


function generateTable()
{
     var myVar = prompt("Enter a number");
     var myString = "";
     for (i=1; i<=20; i++) {
       myString += myVar+ " x " + i + " = " + (myVar*i) + "\n";
     }
     alert(myString);
}
generateTable();

