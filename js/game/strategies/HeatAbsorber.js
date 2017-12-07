define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(t,e){return'<span class="description">每秒失去 <b>'+nf(100*e.strategy.loseHeat)+"%</b> 吸收的热量</span>"},t.prototype.calculate=function(t){this.tile.setHeat(this.tile.getHeat()*(1-this.tile.getMeta().strategy.loseHeat))},t})
