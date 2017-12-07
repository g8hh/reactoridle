define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.getInfoText=function(e,o,n){var r=n?n._getConvertAmount():t._getConvertAmount(e,o)
return'<span class="description">出售 <b class="power">'+nf(r)+"</b> 能量。</span>"},t.prototype.getInfoText=function(){return t.getInfoText(this.reactor,this.tile.getMeta(),this)},t.prototype.calculate=function(t){t.maxPowerToMoney+=this._getConvertAmount()},t._getConvertAmount=function(t,e){var o=t.getUpgradeBonuses().components[e.id].powerSellAmountMultiplayer
return e.strategy.maxSellPower*o},t.prototype._getConvertAmount=function(){return t._getConvertAmount(this.reactor,this.tile.getMeta())*this.tile.getBonuses().powerToMoneyMultiplayer},t})
