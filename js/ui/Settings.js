define(["text!template/settings.html","base/UrlHandler","base/SaveHandler"],function(e,t,a){var s="settings",i=function(e){this.main=e,this.saveHandler=this.main.getSaveHandler(),this.isVisible=!1}
return i.prototype.display=function(){if(!this.isVisible){$("body").append(Handlebars.compile(e)({hasPaypal:"kongregate"!=t.identifySite()}))
var a=this
this.isVisible=!0
var s=$("#settings")
s.css("left",($("html").width()-s.width())/2),$("#saveData").val(this.saveHandler.getSaveData()),$("#loadButton").click(function(){a.saveHandler.updateFromSaveData($("#saveData").val())?a.destroy():alert("Invalid save file!")}),$("#resetButton").click(function(){confirm("Are you sure you want to reset, it will delete all progress!")&&(a.saveHandler.deleteFromStorage(),a.main.destroy(),a.main.init(),a.destroy())}),$("#userHashButton").click(function(){a.saveHandler.updateUserHash($("#userHash").val()),location.reload()}),$("#closeButton").click(function(){a.destroy()}),$("#userHash").val(a.saveHandler.getUserHash())}},i.prototype.destroy=function(){this.main.getGame().getEventManager().removeListenerForType(s),this.isVisible=!1,$("#settings").remove(),$("#settingsBg").remove()},i})
