
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        // Ocurre por cada canción
        let div = document.createElement('div')
        div.setAttribute('class', 'track-music')

        div.innerHTML = `
                <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="song-images"="">
                    <div>
                        <h3 class="song-name">${song.title}</h3>
                        <p class="artist">${song.author}</p>
                    </div>
        `
        contenedor.appendChild(div)
    })
})

let doof = document.querySelector('#doof');
    let sidebar = document.querySelector('#sidebar');

    doof.onclick = function () {
        sidebar.classList.toggle('active');
    };