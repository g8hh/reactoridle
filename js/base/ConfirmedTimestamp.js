define([],function(){var n=0
return{getConfirmedTimestamp:function(){return n},load:function(t){$.get("https://api.baldurans.com/reactorIdle/getTimestamp",function(e){isNaN(Number(e))||(n=Number(e)),t()}).fail(function(){t()})}}})
