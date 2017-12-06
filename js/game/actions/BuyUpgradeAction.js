define([],function(){var e=function(e,t){this.reactor=e,this.game=e.getGame(),this.upgradeMeta=t}
return e.prototype.getFirstBuyWarning=function(){if(!this.upgradeMeta.firstBuyWarning)return!1
var e=this.reactor.getUpgrade(this.upgradeMeta.id)
return e>0?!1:this.upgradeMeta.firstBuyWarning},e.prototype.getPrice=function(){for(var e=this.upgradeMeta.price,t=0;t<this.reactor.getUpgrade(this.upgradeMeta.id);t++)e*=this.upgradeMeta.priceIncrease
return e},e.prototype.getResearchPointsPrice=function(){var e=this.upgradeMeta.priceResearchPoints
if(!e)return 0
for(var t=0;t<this.reactor.getUpgrade(this.upgradeMeta.id);t++)e*=this.upgradeMeta.priceIncrease
return e},e.prototype.canBuy=function(){return this.game.getMoney()>=this.getPrice()&&this.game.getResearchPoints()>=this.getResearchPointsPrice()},e.prototype.buy=function(){this.game.addMoney(-this.getPrice()),this.game.addResearchPoints(-this.getResearchPointsPrice()),this.reactor.setUpgrade(this.upgradeMeta.id,this.reactor.getUpgrade(this.upgradeMeta.id)+1)},e})
