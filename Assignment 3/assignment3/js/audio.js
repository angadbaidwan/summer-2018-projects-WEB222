// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function() {
    var aud = document.getElementById("audio");
    var audElem = document.createElement("audio");
    audElem.setAttribute("controls", audio.controls);
    for (var i = 0; i < audio.source.length; i++) {
        var src = document.createElement("source");
        src.setAttribute("src", audio.source[i].src);
        src.setAttribute("type", audio.source[i].type);
        audElem.appendChild(src);
    }
    var t = document.createTextNode("Your browser does not support the audio tag used.");
    audElem.appendChild(t);
    aud.appendChild(audElem);
};