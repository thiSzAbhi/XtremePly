function playVideo() {
    const link = document.getElementById('videoLink').value;
    const videoPlayer = document.getElementById('videoPlayer');
    
    let embedLink;
    if (link.includes('mdisk.me')) {
        embedLink = `https://mdisk.me/embed/${extractId(link)}`;
    } else if (link.includes('terabox')) {
        embedLink = `https://terabox.com/embed/${extractId(link)}`;
    } else if (link.includes('pdisk')) {
        embedLink = `https://pdisk.me/embed/${extractId(link)}`;
    } else {
        alert('Unsupported link');
        return;
    }
    
    videoPlayer.innerHTML = `<iframe src="${embedLink}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
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
    const parts = link.split('/');
    return parts[parts.length - 1];
}
