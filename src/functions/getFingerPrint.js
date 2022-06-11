async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function getFingerPrint(tabs){
    /*gets the user fingerprint*/
    const tab = tabs.pop();
    const finger = await browser.tabs.sendMessage(tab.id, {method: "fingerprint"});
    // console.log(finger);
}

var currentTab = getActiveTab().then((tabs) => {
    const fingerprint = getFingerPrint([...tabs]);
});