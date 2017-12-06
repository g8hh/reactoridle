define([],function(){var t=function(t){this.tile=t,this.reactor=t.getReactor()}
return t.prototype.balanceHeat=function(t){var e=this.tile.findOffsetTiles([[0,0],[-1,0],[0,-1],[1,0],[0,1]],function(t){return t.getMeta()&&(t.getMeta().acceptsHeat||t.getMeta().givesHeatOut)}),a=0
e.map(function(t){var e=t.getMeta()
e.givesHeatOut&&(a+=t.getHeat())})
var n=a/e.length,i=0,g=[]
e.map(function(t){var e=t.getMeta()
e.givesHeatOut?!e.acceptsHeat&&n>t.getHeat()||(i+=t.getHeat(),g.push(t)):e.acceptsHeat&&g.push(t)})
var c=i/g.length
g.map(function(t){var e=t.getMeta()
e.givesHeatOut?t.setHeat(c):t.setHeat(t.getHeat()+c)})},t})
