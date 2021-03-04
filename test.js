let color = prompt("what is your favorite color?");
confirm("mmmm if it is not red, black, or yellow you can choose again");
color = prompt("what is your favorite color Agan?");
let name = prompt("OK now what is yor name:");
confirm("ARE YOU SURE !!! LOL");
name = prompt("I know!! I am too much now but name again please");
document.write("<h3> mmmmmm you said: " + color+ " !!! </h3>");
if (color=="red") {
    document.write("<p>OK "+name+"!!<br> This is my favorite color too!!</p>")
} else if (color =="black") {
    document.write("<p>OK "+name+"!!<br> This is my favorite color to wear</p>")
} else if (color == "yellow") {
    document.write("<p>OK "+name+"!!<br> This is my GF favorite color too!!!")
} else {
    document.write("<p> Bad choice "+name+" !!:ppp</p>")
}

