define(["text!template/upgrades.html","actions/BuyUpgradeAction","actions/SellUpgradeAction","calculators/UpgradeCalculator","ui/ConfirmBox"],function(e,t,a,n,r){var i="upgradesArea",o=function(e){this.reactor=e,this.game=this.reactor.getGame(),this.upgradeCalculator=new n(this.reactor)}
return o.prototype.display=function(n){var o=this
this.container=n
var s=[],c=null
for(var u in this.game.getMeta().upgrades){var d=this.game.getMeta().upgrades[u]
if(!d.requiresResearch||this.game.getResearch(d.requiresResearch)>0){var g=""
d.icon?g=d.icon:d.bonus&&d.bonus.componentId?g=d.bonus.componentId:d.bonus&&d.bonus.componentTypeId?g=d.bonus.componentTypeId:d.bonus&&d.bonus.componentTypeId&&(g=d.id)
var p=new t(this.reactor,d)
s.push({id:d.id,name:d.name,description:d.description,max:d.max,price:nf(p.getPrice()),priceResearchPoints:nf(p.getResearchPointsPrice()),bonus:this.upgradeCalculator.getInfoText(d),icon:g,changeGroup:c&&c!=d.group,canSell:d.allowSelling&&this.reactor.getUpgrade(d.id)>0}),c=d.group}}this.container.html(Handlebars.compile(e)({upgrades:s})),this.game.getEventManager().addListener(GameEvent.moneyChanged,i,function(){o.update()}),this.container.find(".buyButton").click(function(e){var a=$(e.target).attr("data-id"),n=new t(o.reactor,o.game.getMeta().upgradesById[a]),i=function(){if(n.canBuy()){n.buy()
var e=o.container
o.destroy(),o.display(e)}},s=n.getFirstBuyWarning()
s?new r("警告",s,function(){i()}).display():i()}),this.container.find(".sellButton").click(function(e){var t=$(e.target).attr("data-id"),n=new a(o.reactor,o.game.getMeta().upgradesById[t])
if(n.canSell()){n.sell()
var r=o.container
o.destroy(),o.display(r)}}),$("#backToReactor").click(function(){o.game.getEventManager().invokeEvent(UiEvent.selectReactor)}),this.update()},o.prototype.update=function(){this.container.find("#money").html("$"+nf(this.game.getMoney()))
var e=this
$(".upgradeItem .bought").each(function(){$(this).html(e.reactor.getUpgrade($(this).attr("data-id")))}),$(".upgradeItem .buyButton").each(function(){var a=$(this).attr("data-id")
$(this).show()
var n=new t(e.reactor,e.game.getMeta().upgradesById[a])
n.canBuy()?$(this).removeClass("cantBuy"):$(this).addClass("cantBuy")})},o.prototype.destroy=function(){this.game.getEventManager().removeListenerForType(i),this.container.html(""),this.container=null},o})
