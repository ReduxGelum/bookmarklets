# Youtube speed bookmarklet

1. add as a bookmark in browser `javascript:document.onkeydown = function (e) { r={q:1,a:1.5,w:2,s:3,e:15}; k=e.key.toLowerCase(); if (k in r) { document.getElementsByTagName('video')[0].playbackRate=r[k]; } };undefined`
1. click when youtube is open
1. press hotkeys to speed up
  * `q` - normal speed
  * `a` - 1.5x speed
  * `w` - 2x speed
  * `s` - 3x speed
  * `e` - 15x speed
