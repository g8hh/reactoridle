define(["text!template/research.html","actions/BuyResearchAction"],function(e,t){var a="researchArea",r=function(e){this.game=e}
return r.prototype.display=function(r){var i=this
this.container=r
var n=[],s=null
for(var c in this.game.getMeta().research){var h=this.game.getMeta().research[c]
if(!h.requiresResearch||this.game.getResearch(h.requiresResearch)>0){var o=new t(this.game,h)
n.push({id:h.id,name:h.name,description:h.description,max:h.max,showMax:h.max>1,priceResearchPoints:o.getPriceResearchPoints()?nf(o.getPriceResearchPoints()):null,price:o.getPrice()?nf(o.getPrice()):null,icon:h.icon?h.icon:h.id,changeGroup:s&&s!=h.group}),s=h.group}}this.container.html(Handlebars.compile(e)({research:n})),this.game.getEventManager().addListener(GameEvent.researchPointsChanged,a,function(){i.update()}),this.container.find(".buyButton").click(function(e){var a=$(e.target).attr("data-id"),r=new t(i.game,i.game.getMeta().researchById[a])
if(r.canBuy()){r.buy()
var n=i.container
i.destroy(),i.display(n)}}),$("#backToReactor").click(function(){i.game.getEventManager().invokeEvent(UiEvent.selectReactor)}),this.update()},r.prototype.update=function(){this.container.find("#researchPoints").html(nf(this.game.getResearchPoints()))
var e=0,a=0
for(var r in this.game.getMeta().research){var i=this.game.getMeta().research[r]
e+=i.max,a+=this.game.getResearch(i.id)}this.container.find("#technologies").html(a+"/"+e)
var n=this
$(".researchItem .bought").each(function(){$(this).html(n.game.getResearch($(this).attr("data-id")))}),$(".researchItem .buyButton").each(function(){var e=$(this).attr("data-id")
if(n.game.getResearch(e)>=n.game.getMeta().researchById[e].max)$(this).hide()
else{$(this).show()
var a=new t(n.game,n.game.getMeta().researchById[e])
a.canBuy()?$(this).removeClass("cantBuy"):$(this).addClass("cantBuy")}})},r.prototype.destroy=function(){this.game.getEventManager().removeListenerForType(a),this.container.html(""),this.container=null},r})
