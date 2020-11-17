let iconMenu = Document.getElementById('iconMenu');
let sidebar = Document.getElementById('sidebar');

let w = window.innerWidth;

window.addEventListener("resize", () => {
    w = window.innerWidth;
    alert('ola');
})

function responsiveSidebar() {
    if (w <= 991) {
        alert('ola');
    } else {
        alert('grande');
    }
}