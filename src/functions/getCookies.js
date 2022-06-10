async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

function isFirstParty(url, cookie){
    /* returns true if an cookie is first party and false if it's not*/
    return url.includes(cookie.domain);
}

function isPersistent(cookie){
    /* returns true if an cookie is persistent and false if it's not*/
    return cookie.expirationDate != undefined;
}

async function getCookies(tabs){
    /* returns an object with information about the tab's cookies*/
    const tab = tabs.pop();
    const execute = browser.cookies.getAll({url: tab.url});
    var tabInformation = {"firstParty": 0, "thirdParty": 0, "session": 0, "persistent": 0}
    await execute.then((cookies) => {
        for (const cookie of cookies){
            isFirstParty(tab.url, cookie) ? tabInformation['firstParty']+=1 : tabInformation['thirdParty']+=1;
            isPersistent(cookie) ? tabInformation['persistent']+=1 : tabInformation['session']+=1;
        }        
    })   
    return tabInformation;
}

var currentTab = getActiveTab().then((tabs) => {
    const cookies = getCookies([...tabs]);
   
});