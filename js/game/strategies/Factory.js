define(["strategies/Cell","strategies/PowerToMoneyConverter","strategies/HeatToPowerConverter","strategies/MaxPowerIncrease","strategies/HeatAbsorber","strategies/CellHeatProductionAmplifier","strategies/HeatExchanger","strategies/ResearchCenter","strategies/BulkHeatToMoneyConverter","strategies/Bank","strategies/WaterPump","strategies/WaterExchanger","strategies/HeatInlet","strategies/HeatOutlet","strategies/HeatBooster","strategies/Circulator"],function(e,t,r,a,n,o,s,g,i,l,u,c,H,C,f,y){var v={Cell:e,PowerToMoneyConverter:t,HeatToPowerConverter:r,MaxPowerIncrease:a,HeatAbsorber:n,CellHeatProductionAmplifier:o,HeatExchanger:s,ResearchCenter:g,BulkHeatToMoneyConverter:i,Bank:l,WaterPump:u,WaterExchanger:c,HeatInlet:H,HeatOutlet:C,HeatBooster:f,Circulator:y}
return{get:function(e){if(e.getMeta()&&e.getMeta().strategy){var t=e.getMeta().strategy.type
if(v[t])return new v[t](e)
console.error("未知的策略: "+t)}return null},getInfoText:function(e,t){if(!t||!t.strategy)return""
var r=t.strategy.type
return v[r]?v[r].getInfoText?v[r].getInfoText(e,t):"":void console.error("未知的策略: "+r)}}})
