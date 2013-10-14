$(document).ready(function() {
    console.debug("ready");
    var ge;
    console.debug("Before");
    google.load("earth", "1");
    console.debug("Loading");
    google.setOnLoadCallback(init);
    console.debug("After callback");
});

function init() {
  google.earth.createInstance('map3d', init_cb, failure_cb);
}

function init_cb(instance) {
  ge = instance;
  ge.getWindow().setVisibility(true);
}

function failure_cb(error_code) {
}
