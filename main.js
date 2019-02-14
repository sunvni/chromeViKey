
window.addEventListener('load', function(){
    showGreeting()
})

document.getElementById('setting').addEventListener('click', function() {
    var $name = document.getElementById("name");
    var display = "block";
    if ($name.style.display == "block") {
        display = "none";
    }
    $name.style.display = display;
})


document.getElementById('name').addEventListener('change', function() {
    var disp_name = document.getElementById("name").value;
    localStorage.setItem("disp_name", disp_name);
    console.log("saved new name: ", localStorage.getItem("disp_name"))
    showGreeting()
})

function showGreeting()
{
    var $name = document.getElementById("disp_name");
    var disp_name = localStorage.getItem("disp_name");
    $name.innerHTML = disp_name? " " + disp_name : '';
}