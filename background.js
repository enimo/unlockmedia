//a script for zoe

//overseas iqiyi youku etc..

chrome.webRequest.onBeforeSendHeaders.addListener(
    // callback
    function(details) {
        details.requestHeaders.push({
            name: "X-Forwarded-For", 
            value: "166.111.8.29"
        	}
			// ,
			// 			{
			// 	            name: "Rocky-UID", 
			// 	            value: "9527"
			// 	        }
		);
        return {requestHeaders: details.requestHeaders};
    },

  // filters
    {
        urls: [
"<all_urls>"
        ]
    },

  	// extraInfoSpec
    // the request is blocked until the callback function returns
    ["requestHeaders", "blocking"]
);

