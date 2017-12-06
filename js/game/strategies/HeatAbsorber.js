define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(t,e){return'<span class="description">Loses <b>'+nf(100*e.strategy.loseHeat)+"%</b> absorbed heat each tick.</span>"},t.prototype.calculate=function(t){this.tile.setHeat(this.tile.getHeat()*(1-this.tile.getMeta().strategy.loseHeat))},t})
