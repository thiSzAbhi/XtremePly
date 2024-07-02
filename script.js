function playVideo() {
    const link = document.getElementById('videoLink').value;
    const videoPlayer = document.getElementById('videoPlayer');

    let embedLink;
    if (link.includes('mdisk.me')) {
        embedLink = `https://www.mdisk.me/embed-${extractId(link)}`;
    } else if (link.includes('terabox.com')) {
        embedLink = `https://www.terabox.com/embed/${extractId(link)}`;
    } else if (link.includes('pdisk.me')) {
        embedLink = `https://pdisk.me/embed-${extractId(link)}`;
    } else {
        alert('Unsupported link');
        return;
    }

    videoPlayer.innerHTML = `<iframe src="${embedLink}" allowfullscreen></iframe>`;
}

function downloadVideo() {
    const link = document.getElementById('videoLink').value;
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = '';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function extractId(link) {
    const url = new URL(link);
    return url.pathname.split('/').pop();
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}

// Set initial theme
document.body.classList.add('light-theme');
