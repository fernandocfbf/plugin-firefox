async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function getThirdPartyConnections(tabs){
    const tab = tabs.pop();
    const listenners = await browser.tabs.sendMessage(tab.id, {method: "connections"});
}

var currentTab = getActiveTab().then((tabs) => {
    const connections = getThirdPartyConnections([...tabs]);
});