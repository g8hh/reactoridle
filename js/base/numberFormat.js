var names={6:" million",9:" billion",12:" trillion",15:" quadrillion",18:" quintillion",21:" sextillion",24:" septillion",27:" octillion",30:" nonillion",33:" decillion",36:" undecillion",39:" duodecillion",42:" tredecillion",45:" quattuordecillion",48:" quindecillion",51:" sexdecillion",54:" septendecillion",57:" octodecillion",60:" novemdecillion",63:" vigintillion"},nf=function(n){return numberFormat.format(n)},nfPlus=function(n){var o=""
return n>0&&(o="+"),o+numberFormat.format(n)},numberFormat={format:function(n){if(void 0==n)return"???"
if(Math.abs(n)<10)return Math.round(100*n)/100
if(Math.abs(n)<1e3)return Math.round(10*n)/10
if(Math.abs(n)<1e6)return Number(n).toFixed(0).replace(/\d(?=(\d{3})+$)/g,"$& ")
n=n.toString().split("e+",2)
var o=n[0],i=0>o?2:1,l=3*Math.floor((Number(o).toFixed(0).length-i)/3),e=l+(n[1]?Number(n[1]):0),r=e%3
return o*=Math.pow(10,r-l),e-=r,Math.round(100*o)/100+(names[e]?names[e]:"e"+e)},test:function(){for(var n in nums){var o=nf(n)
o==nums[n]?console.log(n+" "+nums[n]+" == "+o):console.error(n+" "+nums[n]+" == "+o)
var i=nf("-"+n)
i=="-"+nums[n]?console.log(n+" -"+nums[n]+" == "+i):console.error(n+" -"+nums[n]+" == "+i)}}}
