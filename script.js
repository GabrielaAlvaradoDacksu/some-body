
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map ( (song) => {
        contenedor.innerHTML += song.title
    })
})