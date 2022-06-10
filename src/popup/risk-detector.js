function externalLinks(){
  const desiredTags = "link, img, video, audio,script, iframe, source, embed"
  const links = Array.prototype.map.call(document.querySelectorAll(desiredTags),
    (HTMLtag) => { 
      return HTMLtag.href || HTMLtag.src; 
    }
  )
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.method) {
      case "connections":
        sendResponse({ 
          data: externalLinks() 
        });
        break;
      default:
        sendResponse({ 
          data: null 
        });
    }
  });


