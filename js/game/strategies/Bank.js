define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,n){return'<span class="description">提高周围办公室销售额 <b>'+nf(1+t._getBonus(e,n))+"</b> 次.</span>"},t.prototype.calculateTileBonuses=function(e){var n=this.tile.findOffsetTiles([[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&"PowerToMoneyConverter"==t.getMeta().strategy.type})
for(var o in n)e.tiles[n[o].getXY()].powerToMoneyMultiplayer+=t._getBonus(this.reactor,this.tile.getMeta())},t._getBonus=function(t,e){var n=t.getUpgradeBonuses().components[e.id].powerToMoneyAmountBonusMultiplayer
return e.strategy.sellAmountBonus*n},t})
