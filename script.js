
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        // Ocurre por cada canción
        let div = document.createElement('div')
        div.setAttribute('class', 'track-music')

        div.innerHTML = `
                <a href="/content.html"><img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="song-images"></a>
                <div class="mini-play">
                    <img src="/mini.svg" alt="">
                </div>
                    <div class="text-song">
                        <h3 class="song-name">${song.title}</h3>
                        <p class="artist">${song.author}</p>
                    </div>
        `

        div.addEventListener('click', () => {
            document.getElementById('title-album').innerHTML = `${song.title}  -  ${song.album}`
            document.getElementById('image').setAttribute('src', `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)
            document.getElementById('audio').setAttribute('src', `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)
        })
        contenedor.appendChild(div)
    })
})

const buttonplay = document.getElementById('play')
buttonplay.addEventListener('click', () => {
    const audio = document.getElementById('audio')
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
})

let doof = document.querySelector('#doof');
let sidebar = document.querySelector('#sidebar');

doof.onclick = function () {
    sidebar.classList.toggle('active');
};