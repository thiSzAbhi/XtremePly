document.addEventListener('DOMContentLoaded', function () {
    const videoFrame = document.getElementById('videoFrame');
    const videoListItems = document.querySelectorAll('.video-list li');

    videoListItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoUrl = this.getAttribute('data-url');
            videoFrame.src = videoUrl;
        });
    });
});
