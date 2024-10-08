
let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        // Ocurre por cada canción
        let div = document.createElement('div')
        div.setAttribute('class', 'flex p-4 gap-2')

        div.innerHTML = `
                <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}">
                    <div>
                        <h3 class="font-bold">${song.title}</h3>
                        <p class="opacity-40">${song.author}</p>
                    </div>
        `
        contenedor.appendChild(div)
    })
})

let doof = document.querySelector('#doof');
    let sidebar = document.querySelector('#sidebar');

    btn.onclick = function () {
        sidebar.classList.toggle('active');
    };