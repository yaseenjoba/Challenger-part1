
document.getElementById('main-color').addEventListener('input', function () {
    let mainColor = document.getElementById("main-color").value;
    let secondColor = document.getElementById("second-color").value;
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--second-color', secondColor);
})
document.getElementById('second-color').addEventListener('input', function () {
    let mainColor = document.getElementById("main-color").value;
    let secondColor = document.getElementById("second-color").value;
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--second-color', secondColor);
})
function reset(){
    document.documentElement.style.setProperty('--main-color', "#9923A9");
    document.documentElement.style.setProperty('--second-color',"#E857A2");
}

