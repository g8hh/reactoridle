define([],function(){var e=function(e,t){this.game=e,this.researchMeta=t}
return e.prototype.getPriceResearchPoints=function(){var e=0
this.researchMeta.priceResearchPoints&&(e=this.researchMeta.priceResearchPoints)
for(var t=0;t<this.game.getResearch(this.researchMeta.id);t++)e*=this.researchMeta.priceIncrease
return e},e.prototype.getPrice=function(){var e=0
this.researchMeta.price&&(e=this.researchMeta.price)
for(var t=0;t<this.game.getResearch(this.researchMeta.id);t++)e*=this.researchMeta.priceIncrease
return e},e.prototype.canBuy=function(){return this.game.getResearchPoints()>=this.getPriceResearchPoints()&&this.game.getMoney()>=this.getPrice()},e.prototype.buy=function(){this.game.addMoney(-this.getPrice()),this.game.addResearchPoints(-this.getPriceResearchPoints())
var e=Number(this.game.getResearch(this.researchMeta.id));(!e||isNaN(e))&&(e=0),this.game.setResearch(this.researchMeta.id,e+1)},e})
