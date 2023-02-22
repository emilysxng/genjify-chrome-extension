let genjiImages = [
    chrome.runtime.getURL("images/genji1.jpg"),
    chrome.runtime.getURL("images/genji2.jpg"),
    chrome.runtime.getURL("images/genji3.jpg"),
    chrome.runtime.getURL("images/genji4.jpg"),
    chrome.runtime.getURL("images/genji5.jpg"),
    chrome.runtime.getURL("images/genji6.jpg"),
    chrome.runtime.getURL("images/genji7.jpg"),
    chrome.runtime.getURL("images/genji8.jpg"),
    chrome.runtime.getURL("images/genji9.jpg"),
    chrome.runtime.getURL("images/genji10.jpg"),
    chrome.runtime.getURL("images/genji11.jpg"),
    chrome.runtime.getURL("images/genji12.jpg"),
    chrome.runtime.getURL("images/genji13.jpg"),
    chrome.runtime.getURL("images/genji0.jpg"),
  ];

//Replace every image
 let webImgs = document.getElementsByTagName("img");
 for (let i = 0; i < webImgs.length; i++)
 {
   let randomImgNum = Math.floor(Math.random() * genjiImages.length);
   webImgs[i].src = genjiImages[randomImgNum];
 }
 
 //Replace headers
 for (let n = 1; n < 7; n++)
 {
   let thisHeaderType = 'h' + n;
   let headers = document.getElementsByTagName(thisHeaderType);
   for (let m = 0; m < headers.length; m++)
   {
     headers[m].textContent = "genji shimada";
   }
 }
 
 //Replacing other text types
 let tagNames = ["yt-formatted-string", "b", "p", "span"];
 for (let i = 0; i < tagNames.length; i++)
 {
   let thisTag = tagNames[i];
   let tagArray = document.getElementsByTagName(thisTag);
   for (let j = 0; j < tagArray.length; j++)
   {
     tagArray[j].textContent = "genji shimada"; 
   }
 }