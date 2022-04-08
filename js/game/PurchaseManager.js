define([],function(){var e="PurchaseManager",r=function(e){this.game=e}
return r.prototype.updatePurchases=function(e){var r={},o={}
for(var a in e){var s=e[a]
o[s.externalId]=s.purchaseId}var i=this.game.getExternalPurchases()
for(var n in i)o[n]||(r[n]=i[n])
for(var n in r)this._removePurchase(n,r[n])
for(var n in o)this._applyPurchase(n,o[n])},r.prototype._applyPurchase=function(r,o){if(logger.info(e,"Apply purchase "+r+" "+o),this.game.getExternalPurchase(r))return void logger.info(e,"Already applied")
this.game.setExternalPurchase(r,o)
var a=this.game.getMeta().purchasesById[o]
return a?void("bonusTicks"==a.type?(logger.info(e,"Added "+a.bonusTicks+" bonus ticks"),this.game.addBonusTicks(a.bonusTicks)):"oneTime"==a.type&&(logger.info(e,"Applied "+o+" purchase"),this.game.addPurchase(o))):void logger.error(e,"Unknown purchase to apply "+o)},r.prototype._removePurchase=function(r,o){logger.info(e,"Remove purchase "+r+" "+o),this.game.removeExternalPurchase(r)
var a=this.game.getMeta().purchasesById[o]
return a?void("bonusTicks"==a.type?(logger.info(e,"Removed "+a.bonusTicks+" bonus ticks"),this.game.removeBonusTicks(a.bonusTicks)):"oneTime"==a.type&&(logger.info(e,"Removed "+o+" purchase"),this.game.removePurchase(o))):void logger.error(e,"Unknown purchase to remove "+o)},r})
