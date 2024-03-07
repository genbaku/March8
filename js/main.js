function yes1() {
    window.location.href = "yes1.html";
}
function yes2() {
    window.location.href = "yes2.html";
}
function no1() {
    window.location.href = "no1.html";
}
function back() {
    window.location.href = "index.html";
}
function moveButton() {
    var x = Math.random() * (window.innerWidth - 150 - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - 150 - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}