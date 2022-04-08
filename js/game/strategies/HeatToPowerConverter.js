define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,i,a){var n=t._getAmount(e,i),r=""
if(a){var s=a.getWaterConsumption()*a.getMeta().strategy.waterEffectiveness
s>0&&(n+=s,r=' 水奖金: <b class="heat">'+nf(s)+"</b>")}return'<span class="description">转换 <b class="heat">'+nf(n)+"</b> 热量为能量。"+r+"</span>"},t.prototype.getInfoText=function(){return t.getInfoText(this.reactor,this.tile.getMeta(),this.tile)},t.prototype.calculate=function(e){var i=Math.min(this.tile.getHeat(),t._getAmount(this.reactor,this.tile.getMeta()))
if(e.powerMaxProduction+=i,this.tile.addHeat(-i),this.tile.getMeta().strategy.waterEffectiveness){var a=Math.min(this.tile.getHeat(),this.tile.getWater()*this.tile.getMeta().strategy.waterEffectiveness)
e.powerMaxProduction+=a,this.tile.addHeat(-a),this.tile.setWaterConsumption(a/this.tile.getMeta().strategy.waterEffectiveness),this.tile.addWater(-this.tile.getWaterConsumption())}},t._getAmount=function(t,e){var i=t.getUpgradeBonuses().components[e.id].heatToPowerConversionMultiplayer
return e.strategy.convertHeatToPower*i},t})
