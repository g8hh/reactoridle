define(["actions/BuyComponentAction"],function(t){var e=function(t){this.tile=t}
return e.getInfoText=function(t,i,o){var n=""
if(i.strategy.powerProduction>0&&(n+='<span class="productionTitle">Produces power: </span><b class="power">'+nf(e._getPowerProduction(t,i))+"</b> "),i.strategy.heatProduction>0){var r=e._getHeatProduction(t,i)
o&&(r=o._getHeatProduction()),n+='<span class="productionTitle">Produces heat: </span><b class="heat">'+nf(r)+"</b> "}return n},e.prototype.getInfoText=function(){return e.getInfoText(this.tile.getReactor(),this.tile.getMeta(),this)},e.prototype.calculate=function(i){var o=this.tile.getMeta(),n=this.tile.getMeta().strategy
if(this.tile.getLifetime()>0)n.powerProduction>0&&(i.powerMaxProduction+=e._getPowerProduction(this.tile.getReactor(),o)),this.tile.addLifetime(-1),0==this.tile.getLifetime()&&this.tile.getReactor().getEventManager().invokeEvent(ReactorEvent.tileLifeOver,this.tile)
else if(this.tile.getReactor().getGame().getResearch(o.id+"AutoRebuild")){var r=new t(this.tile,o)
r.canAutoRestore()&&(r.build(),this.tile.getReactor().getEventManager().invokeEvent(ReactorEvent.tileMetaChanged,this.tile))}},e.prototype.calculateHeat=function(){if(this.tile.getMeta().strategy.heatProduction>0&&this.tile.getLifetime()>0){var t=this.tile.getHeat()+this._getHeatProduction(),e={1:[[-1,0],[0,-1],[1,0],[0,1]],2:[[-1,0],[0,-1],[1,0],[0,1],[-1,-1],[-1,1],[1,1],[1,-1],[-2,0],[0,-2],[2,0],[0,2]],3:[[-1,0],[0,-1],[1,0],[0,1],[-1,-1],[-1,1],[1,1],[1,-1],[-2,0],[0,-2],[2,0],[0,2],[-3,0],[0,-3],[3,0],[0,3],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]},i={1:[[-1,1],[1,1],[1,-1],[-1,-1]],2:[[-1,1],[1,1],[1,-1],[-1,-1],[-2,2],[2,2],[2,-2],[-2,-2]],3:[[-1,1],[1,1],[1,-1],[-1,-1],[-2,2],[2,2],[2,-2],[-2,-2],[-3,3],[3,3],[3,-3],[-3,-3]],4:[[-1,1],[1,1],[1,-1],[-1,-1],[-2,2],[2,2],[2,-2],[-2,-2],[-3,3],[3,3],[3,-3],[-3,-3],[-4,4],[4,4],[4,-4],[-4,-4]]},o=this.tile.getMeta().strategy.distributeSize
o||(o=1)
var n=[]
n="diagonal"==this.tile.getMeta().strategy.distributeType?i[o]:e[o]
var r=this.tile.findOffsetTiles(n,function(t){return t.getMeta()&&t.getMeta().acceptsHeat})
if(r.length>0)for(var a in r)r[a].addHeat(t/r.length)
else this.tile.setComponent(null),this.tile.getReactor().getEventManager().invokeEvent(ReactorEvent.tileExplode,this.tile)}},e._getPowerProduction=function(t,e){var i=t.getUpgradeBonuses().components[e.id].powerProductionMultiplayer
return e.strategy.powerProduction*i},e.prototype._getHeatProduction=function(){return e._getHeatProduction(this.tile.getReactor(),this.tile.getMeta())*this.tile.getBonuses().heatProductionBonus},e._getHeatProduction=function(t,e){var i=t.getUpgradeBonuses().components[e.id].heatProductionMultiplayer
return e.strategy.heatProduction*i},e})
