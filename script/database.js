let arr = JSON.parse(localStorage.getItem("students")) || [];
let container = document.getElementById("container");
arr.forEach(function (el, index) {
    let div = document.createElement("div");
    div.setAttribute("id", "div")
    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("h3");
    name.innerText = el.name

    let course = document.createElement("h2");
    course.innerText = el.course

    let unit = document.createElement("h2");
    unit.innerText = el.unit

    let batch = document.createElement("h3");
    batch.innerText = el.batch

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
        removeItem(el, index);
    })
    //console.log(e)

    div.append(image, name, btn, course, batch, unit)
    container.append(div)


})


function removeItem(el, index) {
    arr.splice(index, 1)
    console.log(arr)
    localStorage.setItem("trash", JSON.stringify(arr));
    // window.location.reload();
}