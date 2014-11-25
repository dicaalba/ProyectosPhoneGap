var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
};

window.onload=function(){
    document.getElementById("foto").style.width = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.height = (window.innerWidth-50)+"px";
    document.getElementById("foto").style.backgroundSize="50% 50%";
};

function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 90,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true,
        targetWidth: 1000,
        targetHeight: 1000
    });
}

function onSuccess(imageData) {
    document.getElementById("foto").style.backgroundImage="url('data:image/jpeg;base64,"+imageData+"')";
    document.getElementById("foto").style.backgroundSize="50% 50%";
}

function onPhotoURISuccess(imageURI) {
    document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')";
    document.getElementById("foto").style.backgroundSize="50% 50%";
}

function onFail(message) {
    alert('Failed because: ' + message);
}