define(["actions/BuyComponentAction","actions/BuyComponentMultiAction","actions/SellComponentMultiAction","ui/ReactorMap"],function(e,t,n,o){var r="reactor",a=function(e){this.reactor=e,this.container=null,this.reactorMap=null,this.selectedComponent=null}
return a.prototype.display=function(a){this.container=a
var i=this
this.reactorMap=new o(this.reactor,a),this.reactorMap.display()
this.reactor.getEventManager().addListener(ReactorEvent.tileExplode,r,function(e){i.reactorMap.showExplosion(e)}),this.reactor.getGame().getEventManager().addListener(UiEvent.componentSelected,r,function(e){i.selectedComponent=e}),this.reactor.getEventManager().addListener(ReactorEvent.tileMetaChanged,r,function(e){i.reactorMap.refreshTile(e)}),this.reactor.getEventManager().addListener(ReactorEvent.tickResult,r,function(){i.reactorMap.tick()})
var c=function(e,o,r,a){1==o?new t(e,i.selectedComponent).build(r,a):3==o&&new n(e).sell(r,a)},s=null,l=null
$(document).keyup(function(){s=null,l=null}),$(".tile").mousedown(function(e){var t=$(e.target),n=i.reactor.getTile(Number(t.attr("data-x")),Number(t.attr("data-y")))
s=e.which,l=e.shiftKey,c(n,s,e.ctrlKey,!1)}).mouseover(function(t){t=$(t.target),t.css("cursor","pointer")
var n=i.reactor.getTile(Number(t.attr("data-x")),Number(t.attr("data-y")))
if(!n||!n.canBuild())return void i.reactor.getGame().getEventManager().invokeEvent(UiEvent.showInfo,"text","你不能在这个地块上建造")
if(s&&l&&c(n,s,!1,!0),n.getMeta())i.reactor.getGame().getEventManager().invokeEvent(UiEvent.showInfo,"tile",n)
else{var o="您可以将组件添加到此图块。 你可以从风力涡轮机开始，他们产生的动力，你可以卖更多的钱。"
if(i.selectedComponent){var r=new e(n,i.selectedComponent),a=r.canBuild()||r.canRestore()
a||(t.css("cursor","no-drop"),o+="<br/><br /><span class='cantBuyText'>你没有足够的钱购买 "+i.selectedComponent.name+".</span>",i.reactor.getMeta().heatCellsAllowed>0&&(o+="<br /><span style='color:orange'>你可以建立最多 <b>"+i.reactor.getMeta().heatCellsAllowed+"</b> 个在这个反应器上产生热量的元件。</span>"))}i.reactor.getGame().getEventManager().invokeEvent(UiEvent.showInfo,"text",o)}})},a.prototype.destroy=function(){this.reactorMap.destroy(),this.reactorMap=null,this.reactor.getGame().getEventManager().removeListenerForType(r),this.reactor.getEventManager().removeListenerForType(r),this.container.html(""),this.container=null},a})
