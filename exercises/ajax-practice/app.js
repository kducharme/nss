$(document).ready(function () {

    const $loadSongs = $('#load-songs');
    const $songList = $('#song-list');

    $loadSongs.on('click', function () {
        $.ajax(
            {
                'url': 'songs.json',
                'method': 'GET'
            }
        ).then(
            res => {
                res.songs.forEach(song => {
                    $songList.append(
                        `<span>
                            <h1 class="song__title">${song.title}</h1>
                            <section class="song__description"> Performed by ${song.artist} on the album ${song.album}.</section>
                        </span>`
                    )
                })
            })
    })
})