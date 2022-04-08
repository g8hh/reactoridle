define(["actions/BuyComponentAction"],function(t){var e=function(t){this.tile=t,this.reactor=t.getReactor()}
return e.prototype.calculateHeat=function(e){var i=this.tile.getMeta(),a=10,l=this.tile.getWater()*a
if(this.tile.getLifetime()>0&&l>0)this.tile.setHeat(this.tile.getHeat()+l),this.tile.setWater(this.tile.getWater()-l/a),console.log(l+" "+this.tile.getHeat()+" "+this.tile.getWater()),this.tile.addLifetime(-1),0==this.tile.getLifetime()&&this.tile.getReactor().getEventManager().invokeEvent(ReactorEvent.tileLifeOver,this.tile)
else if(this.tile.getReactor().getGame().getResearch(i.id+"AutoRebuild")){var n=new t(this.tile,i)
n.canAutoRestore()&&(n.build(),this.tile.getReactor().getEventManager().invokeEvent(ReactorEvent.tileMetaChanged,this.tile))}},e})
