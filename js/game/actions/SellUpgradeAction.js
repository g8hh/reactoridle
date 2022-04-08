define([],function(){var e=function(e,t){this.reactor=e,this.game=e.getGame(),this.upgradeMeta=t}
return e.prototype.getPrice=function(){for(var e=this.upgradeMeta.price,t=0;t<this.reactor.getUpgrade(this.upgradeMeta.id)-1;t++)e*=this.upgradeMeta.priceIncrease
return e},e.prototype.getResearchPointsPrice=function(){var e=this.upgradeMeta.priceResearchPoints
if(!e)return 0
for(var t=0;t<this.reactor.getUpgrade(this.upgradeMeta.id)-1;t++)e*=this.upgradeMeta.priceIncrease
return e},e.prototype.canSell=function(){return this.reactor.getUpgrade(this.upgradeMeta.id)>0&&this.upgradeMeta.allowSelling},e.prototype.sell=function(){this.game.addMoney(.8*this.getPrice(),!1),this.game.addResearchPoints(.8*this.getResearchPointsPrice()),this.reactor.setUpgrade(this.upgradeMeta.id,this.reactor.getUpgrade(this.upgradeMeta.id)-1)},e})
