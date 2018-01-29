define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,a){var n="",r=t.getMaxHeatTransfer(e,a)
return n+='<span class="description">每秒传递 <b class="heat">'+nf(r)+"</b> 热量到散热口。</span>"},t.prototype.getInfoText=function(){return t.getInfoText(this.tile.getReactor(),this.tile.getMeta())},t.prototype.inputToOutputHeat=function(e){if(e.length>0){var a=Math.min(t.getMaxHeatTransfer(this.reactor,this.tile.getMeta()),this.tile.getHeat())
for(var n in e)e[n].addHeat(a/e.length)
this.tile.setHeat(this.tile.getHeat()-a)}},t.getMaxHeatTransfer=function(t,e){return e.strategy.transferHeat*t.getUpgradeBonuses().components[e.id].heatInletMaxTransferMultiplayer},t})
