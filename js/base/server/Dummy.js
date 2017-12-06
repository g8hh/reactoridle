define([],function(){var t="Dummy",e=function(t){this.main=t,this.purchases=[],this._isApiLoaded=!1}
return e.prototype.init=function(){var e=this
logger.info(t,"Init"),this._isApiLoaded=!1,setTimeout(function(){logger.info(t,"API loaded"),e._isApiLoaded=!0,e.loadPurchases()},2e3)},e.prototype.isApiLoaded=function(){return this._isApiLoaded},e.prototype.getItemPriceStr=function(t){return"$"+t.price_usd},e.prototype.purchase=function(t){this.purchases.push({externalId:Math.random(),purchaseId:t}),this.loadPurchases()},e.prototype.loadPurchases=function(){var t=this
setTimeout(function(){t.main.getGame().getPurchaseManager().updatePurchases(t.purchases)},1e3)},e.prototype.submitStatistic=function(t,e){logger.info("Dummy","Submitted statistic "+t+":"+e)},e})
