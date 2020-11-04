chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.sync.get("ytd_state", function(items) {
        enabled = items['ytd_state'];
        if(enabled){
            if(changeInfo.url){
                if(changeInfo.url.includes("youtube") && changeInfo.url.includes("?v=")){
    
                    chrome.tabs.sendMessage(tab.id, {content: "message"}, function(response) {
                        if(response) {
                          //window.alert("got response");
                        }
                      });
                }
            } 
        }
    });
});