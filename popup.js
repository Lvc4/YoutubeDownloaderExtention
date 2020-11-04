var checkelem = document.getElementById("ytd_active")

//wait for changes
checkelem.addEventListener('change',changestate,false)

//initial state
window.onload = loadstate

//change state
function changestate() {
    enabled = checkelem.checked;
    savestate(enabled);
}


//load state
function loadstate() {

    chrome.storage.sync.get("ytd_state", function(items) {
                   enabled = items['ytd_state'];
                   checkelem.checked = enabled;
     });

}


//save state
function savestate(state) {

    chrome.storage.sync.set({'ytd_state':state}, function() { })

}
