define([],function(){var e=function(e){this.tile=e}
return e.getInfoText=function(t,n){return'<span class="description">Increases reactor max power by <b class="power">'+nf(e._getIncrease(t,n))+"</b></span>"},e.prototype.calculate=function(t){t.maxPowerBonus+=e._getIncrease(this.tile.getReactor(),this.tile.getMeta())},e._getIncrease=function(e,t){var n=e.getUpgradeBonuses().components[t.id].maxPowerMultiplayer
return t.strategy.maxPowerIncrease*n},e})
