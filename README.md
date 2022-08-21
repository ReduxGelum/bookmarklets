# Video playback speed hotkeys bookmarklet
## Works with any website that uses `video` tag e.g. youtube, tiktok

1. add as a bookmark in browser `javascript:(function(s){document.onkeydown=function(e){r={q:1,a:1.75,w:2.5,s:5,e:15};k=e.key.toLowerCase();if(k in r){document.querySelectorAll('video').forEach(i => i.playbackRate=r[k])}}})();`
1. click when youtube is open
1. press hotkeys to speed up
  * `q` - normal speed
  * `a` - 1.75x speed
  * `w` - 2.5x speed
  * `s` - 5x speed
  * `e` - 15x speed
