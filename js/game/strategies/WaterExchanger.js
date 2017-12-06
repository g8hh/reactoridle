define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.prototype.balanceWater=function(t){var e=this.tile.findOffsetTiles([[0,0],[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&t.getMeta().acceptsWater})
this._calculateRound(e,0)},t.prototype._calculateRound=function(t,e){var a=e
for(var r in t)a+=t[r].getWater()
var n=0,i=[],c=a/t.length
for(var r in t){var o=t[r],u=c
u>o.getMaxWater()?(n+=u-o.getMaxWater(),u=o.getMaxWater()):i.push(o),o.setWater(u)}t.length>0&&n>0&&this._calculateRound(i,n)},t})
