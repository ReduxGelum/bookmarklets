// convert to inline bookmarklet
// javascript:{javascript code};undefined

// keys for youtube.com playback rates 1 2 4, keys n b v
document.onkeydown = function (e) {
    e.which == 78
        ? document.getElementsByTagName('video')[0].playbackRate=1
        : e.which == 66
            ? document.getElementsByTagName('video')[0].playbackRate=2
            : e.which == 86
                ? document.getElementsByTagName('video')[0].playbackRate=4
                : null
}

// keys for youtube.com playback rates 1 1.5 2 4, keys q a w e
document.onkeydown = function (e) {
    k = e.key.toLowerCase();
    r = {q:1, a:1.5, w:2, e:4};
    if (k in r) {
        document.getElementsByTagName('video')[0].playbackRate = r[k];
    }
}
