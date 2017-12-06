define([],function(){var t=function(t){this.reactor=t.getReactor(),this.tile=t}
return t.prototype.canSell=function(){return this.tile.getMeta()?!0:!1},t.prototype.getSellPrice=function(){if(!this.tile.getMeta().refund)return 0
var t=this.tile.getMeta().price*this.tile.getMeta().refund
if(e=1,this.tile.getMeta().maxHeat)var e=1-this.tile.getHeat()/this.tile.getMaxHeat()
return t*e},t.prototype.sell=function(){this.reactor.getGame().addMoney(this.getSellPrice(),!1),this.tile.setComponent(null)},t})
