
var video = document.getElementById('myVideo');
var playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
    video.play();
});

// Lancer la vidéo automatiquement lorsque la page est chargée
window.addEventListener('load', function() {
    video.play();
});
