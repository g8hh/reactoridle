define(["actions/BuyComponentAction","strategies/WaterExchanger"],function(t,e){var r=function(t){this.tile=t,this.waterExchanger=new e(t)}
return r.getInfoText=function(t,e,a){var n=""
return e.strategy.waterProduction>0&&(n+='<span class="productionTitle">生产水: </span><b class="power">'+nf(r._getWaterProduction(t,e))+"</b> "),n},r.prototype.getInfoText=function(){return r.getInfoText(this.tile.getReactor(),this.tile.getMeta(),this)},r.prototype.calculateWater=function(){var t=this.tile.getWater()+this._getWaterProduction()
t>this.tile.getMaxWater()&&(t=this.tile.getMaxWater()),this.tile.setWater(t)
this.tile.findOffsetTiles([[0,0],[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&t.getMeta().acceptsWater})},r.prototype.balanceWater=function(t){this.tile.getMeta().strategy.balancesWater&&this.waterExchanger.balanceWater(t)},r.prototype._getWaterProduction=function(){return r._getWaterProduction(this.tile.getReactor(),this.tile.getMeta())},r._getWaterProduction=function(t,e){var r=t.getUpgradeBonuses().components[e.id].waterProductionMultiplayer
return e.strategy.waterProduction*r},r})
