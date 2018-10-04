/* inicio */
window.onload = BG_change;

window.onclick = BG_change();

function BG_change() {
    document.body.style.backgroundColor = 'rgb(' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ')';
    setTimeour('BG_chane()', 50);
}
/*fin*/

