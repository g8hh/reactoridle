define(["config/Meta/Reactors","config/Meta/Components","config/Meta/Upgrades","config/Meta/Research"],function(e,s,r,o){var i={version:1,startingMoney:1,startingResearchPoints:0,maxBonusTicks:4e3,minBonusTicks:10,offlineSlower:10,reactors:e,components:s,upgrades:r,research:o,achievements:[],purchases:[{id:"bonusticks1",name:"12 000 bonus ticks",bonusTicks:12e3,type:"bonusTicks",description:"",price_kreds:30,price_usd:2.99},{id:"bonusticks2",name:"30 000 bonus ticks",bonusTicks:3e4,type:"bonusTicks",description:'<b style="color:red;font-size:0.9em">+50% more!</b>',price_kreds:50,price_usd:4.99},{id:"bonusticks3",name:"150 000 bonus ticks",bonusTicks:15e4,type:"bonusTicks",description:'<b style="color:red;font-size:0.9em">+240% more!</b>',price_kreds:110,price_usd:9.99},{id:"researchproduction",name:"5x research points production",description:'<b style="color:red;font-size:0.9em">That will speed things up!</b>',multiplayer:5,type:"oneTime",price_kreds:110,price_usd:9.99,allowOnce:!0},{id:"researchproduction2",name:"8x research points production",description:'<b style="color:red;font-size:0.9em">Get tech even faster!</b>',multiplayer:8,type:"oneTime",price_kreds:110,price_usd:9.99,allowOnce:!0,requiredPurchase:"researchproduction"},{id:"extraticks",name:"+4 extra ticks per second",description:'<b style="color:red;font-size:0.9em">What a boost!</b>',bonusTicks:4,type:"oneTime",price_kreds:225,price_usd:19.99,allowOnce:!0},{id:"extramoney",name:"x3 money",description:'<b style="color:red;font-size:0.9em">Three times more money. wow!</b>',multiplayer:3,type:"oneTime",price_kreds:225,price_usd:19.99,allowOnce:!0,requiredPurchase:"extraticks"},{id:"bonusticks4",name:"600 000 bonus ticks",bonusTicks:6e5,type:"bonusTicks",description:'<b style="color:red;font-size:0.9em">+560% more!</b>',price_kreds:225,price_usd:19.99},{id:"bonusticks5",name:"2 000 000 bonus ticks",bonusTicks:2e6,type:"bonusTicks",description:'<b style="color:red;font-size:0.9em">+2122% more!</b>',price_kreds:565,price_usd:49.99}]}
i.componentsById={}
for(var n in i.components)i.componentsById[i.components[n].id]=i.components[n]
i.componentsByType={}
for(var n in i.components){var c=i.components[n].type
i.componentsByType[c]||(i.componentsByType[c]=[]),i.componentsByType[c].push(i.components[n])}i.reactorsById={}
for(var n in i.reactors)i.reactorsById[i.reactors[n].id]=i.reactors[n]
i.upgradesById={}
for(var n in i.upgrades)i.upgradesById[i.upgrades[n].id]=i.upgrades[n]
i.researchById={}
for(var n in i.research)i.researchById[i.research[n].id]=i.research[n]
i.achievementsById={}
for(var n in i.achievements)i.achievementsById[i.achievements[n].id]=i.achievements[n]
i.purchasesById={}
for(var n in i.purchases)i.purchasesById[i.purchases[n].id]=i.purchases[n]
return i})
