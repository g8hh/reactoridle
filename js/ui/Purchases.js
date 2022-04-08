define(["text!template/purchases.html","config/Meta"],function(e,t){var a="purchases",r=function(e){this.main=e}
return r.prototype.display=function(){var r=this,n=[]
t.purchases.map(function(e){(!e.requiredPurchase||r.main.getGame().getPurchase(e.requiredPurchase))&&n.push({id:e.id,name:e.name,description:e.description,price_str:r.main.getExternalApi().getItemPriceStr(e),is_bought:e.allowOnce&&r.main.getGame().getPurchase(e.id)?!0:!1})}),$("body").append(Handlebars.compile(e)({purchases:n}))
var i=$("#purchases")
i.css("left",($("html").width()-i.width())/2),$("#closePurchasesButton").click(function(){r.destroy()}),$(".buyButton").click(function(){r.main.getExternalApi().purchase($(this).attr("data-purchaseId"))}),r.main.getGame().getEventManager().addListener(GameEvent.purchasesChanged,a,function(){r.destroy(),r.display()})},r.prototype.destroy=function(){this.main.getGame().getEventManager().removeListenerForType(a),$("#purchases").remove(),$("#purchasesBg").remove()},r})
