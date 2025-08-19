var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var ordinals = ["th", "st", "nd", "rd"];
 
for (var i = 0; i < color.length; i++){
    var position = i + 1;
    var suffix = "th";
    if (position === 1) {
        suffix = ordinals[1];
    } else if (position === 2) {
        suffix = ordinals[2];
    }else if (position === 3) {
        suffix = ordinals[3];
    }
 
    console.log(position + suffix + " choice is " + color[i] + ".");
}