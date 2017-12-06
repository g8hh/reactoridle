define([],function(){var t="Paypal",e=function(t){this.main=t,this.apiUrl="https://api.baldurans.com/reactorIdle"}
return e.prototype.init=function(){logger.info(t,"Init")},e.prototype.isApiLoaded=function(){return!0},e.prototype.getItemPriceStr=function(t){return"$"+t.price_usd},e.prototype.purchase=function(t){document.location=this.apiUrl+"/makePurchase?package_id="+t+"&user_hash="+this.main.getSaveHandler().getUserHash()},e.prototype.loadPurchases=function(e){logger.info(t,"Load items")
var a=this,i=function(t){a.main.getGame().getPurchaseManager().updatePurchases(t)}
$.get(this.apiUrl+"/getPurchases?user_hash="+this.main.getSaveHandler().getUserHash(),function(e){if(logger.info(t,"Items loaded",e),0!=e.code)return void i([])
var a=[]
for(var r in e.data.items){var n=e.data.items[r]
a.push({externalId:n.user_hash+"-"+n.created,purchaseId:n.package_id})}i(a)}).fail(function(){i([])})},e.prototype.submitStatistic=function(t,e){console.warn("Can't submit stats to kongregate, API not loaded.")},e})
