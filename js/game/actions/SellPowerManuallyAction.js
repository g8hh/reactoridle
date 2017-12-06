define([],function(){var t=function(t){this.reactor=t}
return t.prototype.canSell=function(){return this.reactor.getPower()>0},t.prototype.sell=function(){var t=this.reactor.getPower(),e=this.reactor.getGame().getPurchaseInfo("extramoney")
t*=e.amount?e.meta.multiplayer:1,this.reactor.setPower(0),this.reactor.getGame().addMoney(t)},t})
