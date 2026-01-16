// background.js
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    const headers = details.responseHeaders;
    console.log("mss");
    
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].name.toLowerCase() === 'set-cookie') {
        let cookie = headers[i].value;
        
        // Добавляем SameSite=None если нет
        if (!cookie.includes('SameSite')) {
          cookie = cookie + '; SameSite=None; Secure';
          headers[i].value = cookie;
        }
        // Меняем Lax/Strict на None
        else if (cookie.includes('SameSite=Lax') || cookie.includes('SameSite=Strict')) {
          cookie = cookie.replace(/SameSite=(Lax|Strict)/, 'SameSite=None; Secure');
          headers[i].value = cookie;
        }
      }
    }
    
    return { responseHeaders: headers };
  },
  { urls: ["https://lk.gubkin.ru/*"] },
  ["blocking", "responseHeaders", "extraHeaders"]
);