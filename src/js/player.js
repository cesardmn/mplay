export const Player = () => {
  let $music = document.querySelector('.audioPlay')
  let $musiLabel = document.querySelector('.musicOnPlay')
  let $btnPlayPause = document.querySelector('.btnPlayPause')
  let $btnMinus = document.querySelector('.btnMinus')
  let $btnPlus = document.querySelector('.btnPlus')
  const $ol = document.querySelector('ol')
  let run = false

  const stop = () => {
    window.navigator.vibrate(100)
    $music.pause()
    $music.currentTime = 0
    run = false
  }

  const play = () => {
    $music.play()
    run = true
    window.navigator.vibrate(100)
  }

  // set onPLay
  $ol.addEventListener('click', (e) => {
    const selected = e.target.innerText
    const data = localStorage.getItem('playlist')
    const playlist = JSON.parse(data)
    const music = playlist.filter((item) => item.name === selected)[0]
    $music.src = music.src
    $musiLabel.innerText = music.name
    stop()
  })

  // Play with dbl Click
  $ol.addEventListener('dblclick', (e) => {
    const selected = e.target.innerText
    const data = localStorage.getItem('playlist')
    const playlist = JSON.parse(data)
    const music = playlist.filter((item) => item.name === selected)[0]
    $music.src = music.src
    $musiLabel.innerText = music.name
    stop()
    play()
  })

  // Play Pause
  $btnPlayPause.addEventListener('click', () => (run ? stop() : play()))

  let vol = 1
  $btnMinus.addEventListener('click', () => {
    window.navigator.vibrate(100)

    if (vol >= 0) {
      $music.vol = vol
      console.log(vol)
      vol -= 0.1
    }
  })

  $btnPlus.addEventListener('click', () => {
    window.navigator.vibrate(100)

    if (vol <= 1) {
      $music.vol = vol
      vol += 0.1
      console.log(vol)
    }
  })
  // document.body.onkeyup = function (e) {
  //   if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
  //     run = !run
  //     if (run) {
  //       $music.play()
  //     } else {
  //       $music.pause()
  //       $music.currentTime = 0
  //     }
  //   }
  // }
}
