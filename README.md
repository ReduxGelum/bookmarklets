# Youtube speed bookmarklet

1. add as a bookmark in browser `javascript:document.onkeydown = function (e) { k = e.key.toLowerCase(); r = {q:1, a:1.5, w:2, e:4}; if (k in r) { document.getElementsByTagName('video')[0].playbackRate = r[k]; } };undefined`
1. click when youtube is open
1. press hotkeys to speed up
  * `q` - normal speed
  * `a` - 1.5x speed
  * `w` - 2x speed
  * `e` - 4x speed
