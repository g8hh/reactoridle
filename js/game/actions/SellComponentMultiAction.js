define(["actions/SellComponentAction"],function(t){var e=function(t){this.tile=t,this.reactor=t.getReactor()}
return e.prototype._sellMany=function(){var t=this.reactor.getTiles(),e=this.tile.getMeta().id
for(var i in t)t[i]&&t[i].getMeta()&&t[i].getMeta().id==e&&this._sellOne(t[i])},e.prototype._sellOne=function(e){var i=new t(e)
i.canSell()&&i.sell()},e.prototype.sell=function(t){this.tile&&this.tile.getMeta()&&(t?this._sellMany():this._sellOne(this.tile))},e})
