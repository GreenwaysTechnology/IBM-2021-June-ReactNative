//Variable ,literals


//strings : "",'',``

//var is es 5 keyword
var firstName = "Subramanian";
//let is es 6 keyword
let lastName = "Murugan";

//+ concatnation 
console.log("Name " + firstName + lastName)
//,
console.log("Name ", firstName, lastName)
//es 6 template literal :interpolation
console.log(`Name ${firstName} ${lastName}`)
//multi line strings:
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)