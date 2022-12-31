'use strict'

function Stopwatch() {
  let hour = 0
  let minute = 0
  let second = 0
  let millisecond = 0
  let run = false

  let cron

  const $stopwatch = document.querySelector('.stopwatch')
  const $hour = document.querySelector('.hours')
  const $minute = document.querySelector('.minutes')
  const $second = document.querySelector('.seconds')

  function start() {
    pause()
    cron = setInterval(() => {
      timer()
    }, 10)
  }

  function pause() {
    clearInterval(cron)
  }

  function reset() {
    hour = 0
    minute = 0
    second = 0
    $hour.innerText = '00'
    $minute.innerText = '00'
    $second.innerText = '00'
    pause()
  }

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0
      second++
    }
    if (second == 60) {
      second = 0
      minute++
    }
    if (minute == 60) {
      minute = 0
      hour++
    }
    $hour.innerText = returnData(hour)
    $minute.innerText = returnData(minute)
    $second.innerText = returnData(second)
  }

  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }

  $stopwatch.addEventListener('click', () => {
    window.navigator.vibrate(70)
    run = !run
    if (run) {
      start()
      $stopwatch.classList.add('swrun')
      $stopwatch.classList.remove('swpause')
    } else {
      pause()
      $stopwatch.classList.add('swpause')
      $stopwatch.classList.remove('swrun')
    }
  })

  $stopwatch.addEventListener('dblclick', () => {
    reset()
    $stopwatch.classList.remove('swrun')
    $stopwatch.classList.remove('swpause')
    run = false
  })

  return {start, pause, reset}
}

export { Stopwatch }
