function setscreen(value) {
    document.getElementById('result').value += value;
}
function calculator() {
    let x = document.getElementById('result').value;
    let p = eval(x);
    document.getElementById('result').value = p;
}
function clearscreen() {
    document.getElementById('result').value = '';
}