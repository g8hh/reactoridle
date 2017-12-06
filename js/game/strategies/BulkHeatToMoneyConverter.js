define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,n){return'<span class="description">Takes heat from adjacent tiles if amount is over <b class="heat">'+nf(t._getConvertAmount(e,n))+"</b> and sells it all at once. Can take heat from heat batteries and generators.</span>"},t.prototype.calculateBulkSale=function(e){var n=this.tile.findOffsetTiles([[-1,0],[0,-1],[1,0],[0,1]],function(t){return!!t.getMeta()}),a=0
for(var r in n)a+=n[r].getHeat()
var o=t._getConvertAmount(this.tile.getReactor(),this.tile.getMeta())
if(!(o>a)){var i=a-o,s=i/a
for(var r in n)n[r].setHeat(n[r].getHeat()*s)
e.moneyProduction+=o}},t._getConvertAmount=function(t,e){var n=t.getUpgradeBonuses().components[e.id].bulkHeatSellMultiplayer
return e.strategy.convertHeatToMoney*n},t})
