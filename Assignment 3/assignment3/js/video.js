// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function() {
    var vid = document.getElementById("video");
    var vidElem = document.createElement("video");
    vidElem.setAttribute("controls", video.controls);
    vidElem.setAttribute("height", video.height);
    vidElem.setAttribute("width", video.width);
    for (var i = 0; i < video.source.length; i++) {
        var src = document.createElement("source");
        src.setAttribute("src", video.source[i].src);
        src.setAttribute("type", video.source[i].type);
        vidElem.appendChild(src);
    }
    var t = document.createTextNode("Your browser does not support the video tag used.");
    vidElem.appendChild(t);
    vid.appendChild(vidElem);
};