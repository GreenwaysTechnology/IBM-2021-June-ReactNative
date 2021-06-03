//DOM Programming

function createElement() {
    console.log('dom object creation using plain js')
    //document - represent <body> - HtmlBodyElement(class) let document=new HtmlBodyElemnt()
    //create element
    let heading = document.createElement('h1')
    //text
    heading.innerHTML = "Hello React!"
    console.dir(heading)
    //get element where you want to add/insert this element
    let container = document.getElementById('root')
    console.dir(container)
    //attah heading with container

    container.appendChild(heading)


}
createElement();