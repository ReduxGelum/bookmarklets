javascript:(function(s){
    document.onkeydown = function (e) {
        r={q:1,a:1.75,w:2.5,s:5,e:15};
        k=e.key.toLowerCase();
        if (k in r) {
            document.querySelectorAll('video').forEach(i => i.playbackRate=r[k])
        }
    }
})();

// known issues
//  * typing in text input activates speedchange