define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,r){return'<span class="description">增加相邻发电机的最大水量 <b>'+Math.round(100*t._getBonus(e,r))+"%</b>。不与其他循环器叠加。</span>"},t.prototype.calculateTileBonuses=function(e){var r=this.tile.findOffsetTiles([[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&"HeatToPowerConverter"==t.getMeta().strategy.type})
for(var a in r)e.tiles[r[a].getXY()].maxWaterBonus=Math.max(1+t._getBonus(this.reactor,this.tile.getMeta()),e.tiles[r[a].getXY()].maxWaterBonus)},t._getBonus=function(t,e){var r=t.getUpgradeBonuses().components[e.id].circulatorMaxPowerMultiplayer
return e.strategy.maxWaterBonus*r},t})
