import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

console.dir(iframe);

const player = new Player(iframe);

const onPlay = throttle(data => {
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}, 1000);

player.on('timeupdate', onPlay);

player.setCurrentTime(currentTime);
