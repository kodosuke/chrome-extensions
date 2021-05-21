chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if ( changeInfo.status === "complete" && /^http/.test(tab.url)) 
    {
        chrome.scripting.insertCSS({
            target : {  tabId : tabId},
            files   :   [ "./stylesheets/userStyles.css" ]
        })
        chrome.scripting.executeScript({
            target : {  tabId : tabId},
            files   :   [ "./scripts/userScript.js" ]
        })
            .then((tab) => {
                console.log("Injected Script Successfully.")
            })
            .catch((err) => {
                console.log(err)
            })

    }


});