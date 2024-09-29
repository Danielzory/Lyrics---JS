function findLyrics(band, music) {
    return fetch(`https://api.lyrics.ovh/v1/${band}/${music}`);
}

const form = document.getElementById('form');
form.addEventListener('submit', action => {
    action.preventDefault();
    doSubmit();
} )


async function doSubmit(){
    const band = window.document.getElementById('band')
    const music = window.document.getElementById('music')
    const lyric = window.document.getElementById('lyric')

    const lyricsResponse = await findLyrics(band.value, music.value);
    const data = await lyricsResponse.json();
    console.log(data)
    (lyric ? lyric.innerHTML = data.lyrics : 'Confira o nome da banda e da musica')
}
