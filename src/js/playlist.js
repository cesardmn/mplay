export const Playlist = () => {
  const $imporFiles = document.querySelector('#upfiles')
  const $ol = document.querySelector('ol')
  const $musicName = document.querySelector('.musicOnPlay')
  const $audioPlay = document.querySelector('.audioPlay')

  localStorage.clear()
  let playlist = null

  $imporFiles.addEventListener('change', (e) => {
    const inputTarget = e.target
    const files = [...inputTarget.files]

    if (files) {
      const playlis = playlyst(files)
      localStorage.clear()
      localStorage.setItem('playlist', JSON.stringify(playlis))

      // set onplay
      $musicName.innerText = playlis[0].name
      $audioPlay.src = playlis[0].src

      // set playlist
      $ol.innerHTML = ''

      for (let item of playlis) {
        let $item = document.createElement('li')
        $item.innerText = item.name
        $ol.appendChild($item)
      }
    }
  })

  const playlyst = (files) =>
    files.map((item) => {
      return {
        name: item.name
          .replace(/\.[^\/.]+$/, '')
          .trim()
          .toUpperCase(),
        src: URL.createObjectURL(item),
      }
    })
}
