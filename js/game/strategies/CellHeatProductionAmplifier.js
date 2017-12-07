define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,n){return'<span class="description">增加相邻地块的热量生产 <b>'+Math.round(100*t._getBonus(e,n))+"%</b></span>"},t.prototype.calculateTileBonuses=function(e){var n=this.tile.findOffsetTiles([[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&"Cell"==t.getMeta().strategy.type})
for(var o in n)e.tiles[n[o].getXY()].heatProductionBonus+=t._getBonus(this.reactor,this.tile.getMeta())},t._getBonus=function(t,e){var n=t.getUpgradeBonuses().components[e.id].isolationMultiplayer
return e.strategy.heatProductionBonus*n},t})
