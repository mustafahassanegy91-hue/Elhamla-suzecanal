function getData() {
    var masf = document.querySelector("#masafa").value;
    var moad = document.querySelector("#moadal").value;
    var resu = document.querySelector(".result");

    var x = (masf / 100) * moad; 
    resu.innerHTML = "كمية الوقود: " + x.toFixed(2) + " لتر";

    
}
