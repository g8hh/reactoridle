var getDateTime=function(){var n=new Date,o=n.getHours(),t=n.getMinutes(),i=n.getSeconds()
return o=(10>o?"0":"")+o,t=(10>t?"0":"")+t,i=(10>i?"0":"")+i,o+":"+t+":"+i},output=function(n,o,t,i){var e=[getDateTime(),o,n,t]
i&&e.push(JSON.stringify(i)),console.log(e.join(" | "))},log=function(n,o,t,i){output(n,o,t,i)},logger={init:function(n){config=n},debug:function(n,o,t){log(n,"debug",o,t)},info:function(n,o,t){log(n,"info",o,t)},warning:function(n,o,t){log(n,"warning",o,t)},error:function(n,o,t){log(n,"error",o,t)}}
