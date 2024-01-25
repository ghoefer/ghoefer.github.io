document.addEventListener("DOMContentLoaded", function() {    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(container => {
        var playButton = container.querySelector('.play-button');        
        playButton.addEventListener('click', function() {
            var videoId = container.getAttribute('data-video-id');            
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`);            
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '1');            
            iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
            container.innerHTML = '';
            container.appendChild(iframe);        
        });
    });});