
javascript:(function(e,t){var n=e.document;setTimeout(function(){function a(e){if(e.data==="destroy_bookmarklet"){var r=n.getElementById(t);if(r){n.body.removeChild(r);r=null}}}var t="DELI_bookmarklet_iframe",r=n.getElementById(t);if(r){return}var i="https://delicious.com/save?",s=n.createElement("iframe");s.id=t;s.src=i+"url="+encodeURIComponent(e.location.href)+"&title="+encodeURIComponent(n.title)+"&note="+encodeURIComponent(""+(e.getSelection?e.getSelection():n.getSelection?n.getSelection():n.selection.createRange().text))+"&v=1.1";s.style.position="fixed";s.style.top="0";s.style.left="0";s.style.height="100%25";s.style.width="100%25";s.style.zIndex="16777270";s.style.border="none";s.style.visibility="hidden";s.onload=function(){this.style.visibility="visible"};n.body.appendChild(s);var o=e.addEventListener?"addEventListener":"attachEvent";var u=o=="attachEvent"?"onmessage":"message";e[o](u,a,false)},1)})(window)

  //When the browser action icon is clicked...
  chrome.browserAction.onClicked.addListener(function(tab) {
        var delUrl='http://www.delicious.com/save?url='+encodeURIComponent(tab.url)+'&title='+encodeURIComponent(tab.title)+'&v=6&';
        delUrl += 'noui=1&jump=doclose';        //auto-close
        
        chrome.tabs.getSelected(null,function(tab) {
                var delWin = window.open(delUrl, 'deliciousuiv6', 'location=1,links=0,scrollbars=0,toolbar=0,width=550,height=585,left=350,top=250');
                delWin.focus();
            }
        );      
        
  });

  var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-18987417-1']);
     _gaq.push(['_trackPageview']);

     (function() {
       var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
       ga.src = 'https://ssl.google-analytics.com/ga.js';
//       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
     })();

