define([],function(){var n=function(){var n={}
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,o,r){n[o]=r})
return n}
return{identifySite:function(){var e=n(window.location.href)
return e.kongregate_username&&"kong"==e.ref?"kongregate":"fgl"==e.ref?"fgl":"notdoppler"==e.ref?"notdoppler":-1!=String(window.location.href).search("localhost")?"localhost":"direct"}}})
