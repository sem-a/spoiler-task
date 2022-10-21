const spoiler = document.getElementById('spoiler');
function openSpoiler() {
    if (spoiler.classList.contains('closed')) {       
        spoiler.classList.remove('closed');
    } else {
        spoiler.classList.add('closed');
    }
};
window.onkeydown = function(e) {
    if (spoiler.classList.contains('closed') != true) {
        if (e.keyCode == 27) {
            spoiler.classList.add('closed');
        }
    }
};