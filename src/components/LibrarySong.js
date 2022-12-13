import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setsongs }) => {

    const songSelectHandler = () => {
        const selectSong = songs.filter((state) => state.id === song.id)
        setCurrentSong(selectSong[0])
        //add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        }
        )
        setsongs(newSongs)
        //if the song is playing
        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (isPlaying !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        }
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt="" />
            <div className='song-descripton'>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong