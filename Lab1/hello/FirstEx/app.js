//mesaj afisat in consola:
console.log(" Hello JavaScript ");

//mesaj afisat in pagina html
//document.getElementById("message").innerHTML = "Message from JavaScript ";

//definire de variabile
var sum = 10;
var name = "Alexandru";
var isActive = true;
var user = { id: 1, name: "Andrei", age: 21, };

var user = {
  "id": 1,
  "name": " Alexandru Cristea",
  "username": "acristea ",
  "email": " acristea@test.com ",
  "address": {
    "street": "Padin",
    "number": "Ap. 10",
    "city": "Cluj - Napoca",
    "zipcode": "123456",
    "geo": {
      "lat": "46.783364",
      "lng": "23.546472"
    }
  },
  "phone": "004-07xx-123456",
  "company": {
    "name": "XYZ",
    "domain": "Air Traffic Management",
    "cities": ["Cluj - Napoca ", " Vienna ", " Paris "]
  }
}

//afisarea caracteristicilor obiectului "user":
console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);

console.log("Hello there");
console.log(user.id);

//apelarea unei functii in js
function print(message) {
  console.log(message);
}
print("hello");

//operatorul ternar
var password = "123456";
console.log(password == "123456" ? "ALLOW" : "DENY");

// exemplu "if"
var password = "123456";
if (password == "123456") {
  console.log("permission accepted");
} else {
  console.log("permission accepted");
}

//Exercitii lab 1
document.getElementById("ex1a").innerHTML = "Aici este  ex 1 a";
//1 b)
console.log("I have been called");



//1 d)
function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Teodora");

//1 e)
//exemplu cu if
var nota = 85
if (nota > 90)
  console.log("Ai nota 10")
else console.log("Ai nota 9");

//tern op
var grade = nota > 90 ? "Ai nota 10" : "Ai nota 9"
console.log(grade)

//Exercitiul 2
var counter = 0;

function printValue(divId, value) {
  document.getElementById(divId).innerHTML = value;
}
printValue("counter", 1);

document.getElementById("inc").addEventListener("click", increment);
function increment() {
  if (counter <= 10) {
    counter++;
    printValue("counter", counter);
  }
}

document.getElementById("deinc").addEventListener("click", deincrement);
function deincrement() {
  if (counter >= 1)
    counter--;
  printValue("counter", counter);
}

//Exercitiul 3
document.getElementById("n").addEventListener('input', inputSum);
//var t = parseInt(document.getElementById("n").value);


function inputSum() {
  var t = parseInt(document.getElementById("n").value);
  if (typeof (t) === 'string')
    console.log("Error")
  //if (t != ) console.log("Nu este corect")
  else console.log(Sum(t));
}

function Sum(n) {
  if (typeof n === 'undefined') return "n is undefined ";
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(inputSum());


