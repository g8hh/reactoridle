define(["calculators/UpgradeCalculator"],function(e){var t=function(t){this.reactor=t,this.game=t.getGame(),this.upgradeBonusCalculator=new e(this.reactor)}
return t.prototype.tick=function(){this.reactor.setUpgradeBonuses(this.upgradeBonusCalculator.getBonuses()),this.calculateTileBonuses(),this.calculateWater(),this.calculateHeat(),this.calculatePowerAndMoneyAndRelated(),this.calculateOverheatedElements()},t.prototype.calculateTileBonuses=function(){var e=this.reactor.getTiles(),t={tiles:[]}
for(var a in e)t.tiles[a]={heatProductionBonus:1,powerToMoneyMultiplayer:1,maxWaterBonus:1,waterEffectivenessBonus:1},e[a]&&e[a].setBonuses(t.tiles[a])
for(var a in e)e[a]&&e[a].getStrategy()&&e[a].getStrategy().calculateTileBonuses&&e[a].getStrategy().calculateTileBonuses(t)},t.prototype.calculateWater=function(){var e=this.reactor.getTiles(),t=[]
for(var a in e){var r=e[a]
r&&r.getStrategy()&&r.getStrategy().calculateWater&&r.getStrategy().calculateWater(),r&&r.getStrategy()&&r.getStrategy().balanceWater&&t.push(r)}for(var o=0;1>o;o++){for(var n=0;n<t.length;n++)t[n].getStrategy().balanceWater()
for(var c=t.length-1;c>=0;c--)t[c].getStrategy().balanceWater()}},t.prototype.calculateHeat=function(){var e=this.reactor.getTiles(),t=[],a=[],r=[]
for(var o in e){var n=e[o]
n&&n.getStrategy()&&n.getStrategy().calculateHeat&&n.getStrategy().calculateHeat(),n&&n.getStrategy()&&(n.getStrategy().balanceHeat&&t.push(n),n.getStrategy().inputToOutputHeat&&a.push(n),n.getStrategy().acceptInletHeat&&r.push(n))}for(var o in a)a[o].getStrategy().inputToOutputHeat(r)
for(var c=0;6>c;c++){for(var l=0;l<t.length;l++)t[l].getStrategy().balanceHeat()
for(var g=t.length-1;g>=0;g--)t[g].getStrategy().balanceHeat()}},t.prototype.calculatePowerAndMoneyAndRelated=function(){var e={powerMaxProduction:0,maxPowerToMoney:0,maxPowerBonus:0,moneyProduction:0,researchProduction:0},t=this.reactor.getTiles()
for(var a in t)t[a]&&t[a].getStrategy()&&t[a].getStrategy().calculate&&t[a].getStrategy().calculate(e)
for(var a in t)t[a]&&t[a].getStrategy()&&t[a].getStrategy().calculateBulkSale&&t[a].getStrategy().calculateBulkSale(e)
this.reactor.setTileBonuses({maxPowerBonus:e.maxPowerBonus})
var r=this.reactor.getPower()+e.powerMaxProduction
e.powerToMoney=Math.min(e.maxPowerToMoney,r),r-=e.powerToMoney,r>this.reactor.getMaxPower()&&(r=this.reactor.getMaxPower()),e.powerProduction=r-this.reactor.getPower(),e.moneyProduction+=e.powerToMoney
var o=this.reactor.getGame().getPurchaseInfo("extramoney")
e.moneyProduction*=o.amount?o.meta.multiplayer:1,this.reactor.addPower(e.powerProduction),this.game.addMoney(e.moneyProduction),this.game.addResearchPoints(e.researchProduction),this.reactor.getEventManager().invokeEvent(ReactorEvent.tickResult,e)},t.prototype.calculateOverheatedElements=function(){var e=this.reactor.getTiles()
for(var t in e){var a=e[t]
a&&a.getMeta()&&a.getMeta().maxHeat&&a.getHeat()>a.getMaxHeat()&&(a.setComponent(null),this.reactor.getEventManager().invokeEvent(ReactorEvent.tileExplode,a))}},t})
