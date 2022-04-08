define([],function(){var t=function(t,e){this.reactor=t,this.container=e,this.explosions=[]}
return t.prototype.display=function(){this.container.html(this.getHtml())},t.prototype.showExplosion=function(t){var e=this,r=t.getX()+"_"+t.getY(),i=e.container.find(".tile_"+r)
this.explosions[r]=setTimeout(function(){i.html(""),e.explosions[r]=void 0},800),e.container.find(".tile_"+r).html('<img src="img/explosion.gif" style="margin:0;padding:0;width:25px; height:22px;"/>')},t.prototype.refreshTile=function(t){var e=t.getX()+"_"+t.getY()
this.explosions[e]&&(clearTimeout(this.explosions[e]),this.explosions[e]=void 0),this.container.find(".tile_"+e).html(this.getComponentHtml(t))},t.prototype.tick=function(){var t=this
this.container.find(".componentBar").each(function(){var e=$(this).parent(),r=Number(e.attr("data-x")),i=Number(e.attr("data-y")),a=t.reactor.getTile(r,i)
if(a&&a.getMeta()){var n=t.getBarInfo(a)
$(this).removeClass().addClass("componentBar").addClass(n["class"]).css("width",n.percentage+"%"),e.css("opacity",a.getMeta().lifetime>0&&a.getLifetime()<=0?.25:1)}})},t.prototype.destroy=function(){this.container.html("")},t.prototype.getHtml=function(){for(var t="",e=0;e<this.reactor.getMeta().height;e++)for(var r=0;r<this.reactor.getMeta().width;r++){var i=this.reactor.getTile(r,e)
t+=this.getTerrainHtml(i,this.getTerrainBorderHtml(i,this.getComponentHtml(i)))}var a=25*this.reactor.getMeta().width,n=25*this.reactor.getMeta().height
return'<div class="reactorTable" style="width:'+a+"px; height:"+n+'px">'+t+"</div>"},t.prototype.getTerrainHtml=function(t,e){var r=(t.getX()+t.getY())%4+1,i=t.canBuild()?"buildable":"",a=i+" "+t.getTerrain()+r+" tileArea"
return'<div class="'+a+' tileArea ">'+e+"</div>"},t.prototype.getTerrainBorderHtml=function(t,e){var r=this.reactor.getTile(t.getX()+1,t.getY()),i=this.reactor.getTile(t.getX()-1,t.getY()),a=this.reactor.getTile(t.getX(),t.getY()+1),n=this.reactor.getTile(t.getX(),t.getY()-1),o=[]
"water"!=t.getTerrain()||!n||"grass"!=n.getTerrain()&&"mountain"!=n.getTerrain()||o.push("n"),"water"!=t.getTerrain()||!r||"grass"!=r.getTerrain()&&"mountain"!=r.getTerrain()||o.push("e"),"water"!=t.getTerrain()||!a||"grass"!=a.getTerrain()&&"mountain"!=a.getTerrain()||o.push("s"),"water"!=t.getTerrain()||!i||"grass"!=i.getTerrain()&&"mountain"!=i.getTerrain()||o.push("w")
var s="water-grass-"+o.join("-")+" tile tile_"+t.getX()+"_"+t.getY()
return'<div class="'+s+'" data-x="'+t.getX()+'" data-y="'+t.getY()+'">'+e+"</div>"},t.prototype.getComponentHtml=function(t){if(!t.getMeta())return""
var e=this.getBarInfo(t)
return'<div class="component '+t.getMeta().id+'" data-x="'+t.getX()+'" data-y="'+t.getY()+'">   <div class="componentBar '+e["class"]+'" style="width:'+e.percentage+'%"></div></div>'},t.prototype.getBarInfo=function(t){var e=0,r=""
return t.getMeta().maxHeat>0?(e=Math.round(100*t.getHeat()/t.getMaxHeat()),r="componentBarHeat"):t.getMeta().lifetime>0?(e=Math.round(100*t.getLifetime()/t.getMaxLifetime()),r="componentBarLifetime"):t.getMeta().maxWater>0&&(e=Math.round(100*t.getWater()/t.getMaxWater()),r="componentBarWater"),{percentage:e,"class":r}},t})
