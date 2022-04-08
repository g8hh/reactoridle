define([],function(){var t=function(t,e){this.game=t,this.reactorMeta=e}
return t.prototype.canBuy=function(){return this.game.getMoney()>=this.reactorMeta.price},t.prototype.buy=function(){this.game.addMoney(-this.reactorMeta.price),this.game.getReactor(this.reactorMeta.id).setIsBought(!0)},t})
