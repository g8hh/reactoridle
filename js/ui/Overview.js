define(["text!template/overview.html","game/actions/SellPowerManuallyAction"],function(e,n){var t="overviewArea",a=function(e){this.reactor=e,this.game=e.getGame()}
return a.prototype.display=function(a){var r=this
this.container=a,this.container.html(Handlebars.compile(e)({})),this.game.getEventManager().addListener(GameEvent.moneyChanged,t,function(e){r.container.find("#money").html("$"+nf(e))}),this.game.getEventManager().addListener(GameEvent.researchPointsChanged,t,function(e){r.container.find("#research").html(nf(e))}),this.reactor.getEventManager().addListener(ReactorEvent.tickResult,t,function(e){r.container.find("#powerProduction").html("+"+nf(e.powerMaxProduction)),r.container.find("#income").html("+"+nf(e.moneyProduction)),r.container.find("#researchProduction").html("+"+nf(e.researchProduction))
var n=r.container.find("#sellPowerButton")
r.game.getMoney()<=1&&r.reactor.getPower()>=1?n.addClass("sellPowerButtonHighlighted").clearQueue().animate({opacity:.1},200).animate({opacity:1},200):n.removeClass("sellPowerButtonHighlighted")}),this.reactor.getEventManager().addListener(ReactorEvent.powerChanged,t,function(e){r.container.find("#power").html(nf(e)),r.container.find("#maxPower").html(nf(r.reactor.getMaxPower()))
var n=Math.round(100*e/r.reactor.getMaxPower())
r.container.find("#powerStored").html(n+"%")
var t=r.container.find("#powerBar")
if(t.css("width",n+"%").removeClass("barWarning1").removeClass("barWarning2"),n>=90?t.addClass("barWarning2"):n>=70&&t.addClass("barWarning1"),n>=100){var a=t.queue("fx")
0==a.length&&t.fadeOut().fadeIn()}}),this.game.getEventManager().invokeEvent(GameEvent.moneyChanged,r.game.getMoney()),this.game.getEventManager().invokeEvent(GameEvent.researchPointsChanged,r.game.getResearchPoints()),this.reactor.getEventManager().invokeEvent(ReactorEvent.powerChanged,r.reactor.getPower()),$("#sellPowerButton").click(function(){var e=new n(r.reactor)
e.sell()})},a.prototype.destroy=function(){this.game.getEventManager().removeListenerForType(t),this.reactor.getEventManager().removeListenerForType(t),this.container.html(""),this.container=null},a})
