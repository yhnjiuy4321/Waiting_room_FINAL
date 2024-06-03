function reloadPage() {
    location.reload();
}


document.getElementById('darken-button').addEventListener('click', function() {
    document.body.classList.toggle('overlay-active');
});