function Data(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `FW-Web${b}`;
}


function submitData(e){
     e.preventDefault();
   
    let arr = JSON.parse(localStorage.getItem("students")) || [];
    // arr.innertext = null;

    let form = document.getElementById("form");
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let unit = document.getElementById("unit").value;
    let image = document.getElementById("image").value;
    let batch = document.getElementById("batch").value;

     let a1 = new Data(name, course, unit, image, batch);
    arr.push(a1);
    localStorage.setItem("students", JSON.stringify(arr));

    console.log(a1);
}

function calculate(){
    let arr = JSON.parse(localStorage.getItem("students")) || [];

    let obj = {};

    for(let i = 0; i<arr.length; i++){
        if(!obj[arr[i].batch]){
            obj[arr[i].batch] = 0 ;
        }
    }
    for(let i = 0; i<arr.length; i++){
        obj[arr[i].batch]++;
    }
    console.log(obj);
}

function dataBase(){
    window.location.href = "database.html"
}
 
calculate()