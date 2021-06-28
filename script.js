const audios = ['newpost','summer','mood','lyrics','spider-verse','soundtrack']

audios.forEach(audio => {
      const btn = document.createElement('button')
      btn.classList.add('btn')

      btn.innerText = audio

      btn.addEventListener('click', () =>{
            
        stopSongs()
        
        document.getElementById(audio).play()
      })

      document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    audios.forEach(audio => {
        const song = document.getElementById(audio)

        song.pause()
        song.currentTime = 0
    })
}