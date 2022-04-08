define([],function(){var e="Kongregate",t=function(e){this.main=e,this.kongregate=null,this._isApiLoaded=!1}
return t.prototype.init=function(){var t=this
logger.info(e,"Init"),this._isApiLoaded=!1
var o={success:function(){logger.info(e,"API loaded"),t._isApiLoaded=!0,t.kongregate=kongregateAPI.getAPI(),t.loadPurchases()},error:function(){t._isApiLoaded||t.loadPurchases()}}
kongregateAPI.loadAPI(o.success),setTimeout(o.error,1e4)},t.prototype.isApiLoaded=function(){return this._isApiLoaded},t.prototype.getItemPriceStr=function(e){return e.price_kreds+" Kreds"},t.prototype.purchase=function(e){var t=function(){confirm("Kongregate API failed to load... Dmn...\n\n Do you want to go to Kongregate to play the game there?\n (you will not lose progress.)")&&(document.location="http://www.kongregate.com/games/Baldurans/reactor-idle")}
if(!this.kongregate)return void t()
var o=this
this.kongregate.mtx.purchaseItems([e],function(){o.loadPurchases()})},t.prototype.loadPurchases=function(){var t=this,o=function(e){t.main.getGame().getPurchaseManager().updatePurchases(e)}
return this.kongregate?(logger.info(e,"Load items"),void this.kongregate.mtx.requestUserItemList(this.kongregate.services.getUsername(),function(t){if(logger.info(e,"Items loaded",t),!t||!t.success)return void o([])
var r=[]
for(var n in t.data){var a=t.data[n]
r.push({externalId:a.id,purchaseId:a.identifier})}o(r)})):(logger.warning(e,"Kongregate API not loaded"),void o([]))},t.prototype.submitStatistic=function(e,t){this.kongregate?this.kongregate.stats.submit(e,t):console.warn("Can't submit stats to kongregate, API not loaded.")},t})
