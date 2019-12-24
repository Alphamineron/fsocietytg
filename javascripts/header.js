// Copyright(c) 2019 by Lionel Radisson(https://codepen.io/MAKIO135/pen/KrZEak)
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
window.addEventListener("load",function(){function t(){h=s.offsetWidth,c=s.offsetHeight,l.attr({width:h,height:c}),d3.select("#border").attr("width",h)}function n(){function t(){d3.select("#rectmask").attr({width:0,height:c,y:0}).transition().duration(500).attr("width",h).transition().duration(800).transition().duration(500).attr({height:0,y:c/2}).each("end",n),d3.select("#pattern").select("path").attr("stroke-width",4).transition().delay(1e3).duration(500).attr("stroke-width",30)}function n(){a.remove(),r.remove(),d3.select("#pattern").remove(),l.select("defs").remove(),e()}var r,a;!function(){r=l.append("clipPath").attr("id","mask"),r.append("rect").attr({id:"rectmask",x:0,y:0,width:0,height:c});var n=textures.lines().thinner().heavier().stroke("rgb( 251, 53, 80 )").orientation(""+(2*~~(1+3*Math.random())+(Math.random()<.5?-1:1))+"/8").id("pattern");l.call(n),a=l.append("text").attr({x:h/2,"font-size":"250px",fill:n.url(),"clip-path":"url(#mask)"}).style("text-anchor","middle").style("font-family","Raleway").style("font-size","7rem").text("Enigma".toUpperCase()),a.attr("y",c/2);var e=a.node().getBBox();a.attr("y",c/2+c/2-(e.y+e.height/2)),t()}()}function e(){function t(){var t=0;f.attr({opacity:1,fill:"rgb( 251, 53, 80 )",y:c/2,width:8,height:0}).attr("x",function(t,n){return u+d/2+(s+d)*~~(n/3)+n%3*11}).transition().delay(function(t,n){return 10*n}).attr("height",function(t,n){return m[~~(n/3)].cumul[n%3]}).attr("y",function(t,n){return t.pos<0?c/2-m[~~(n/3)].cumul[n%3]:c/2}).transition().duration(300).each("end",function(){t++,t===3*p&&n()})}function n(){var t=0;f.transition().attr("y",function(t,n){var e;e=t.pos<0?c/2-t.height:c/2;for(var r=0;r<n%3;r++)e+=m[~~(n/3)].cumul[r];return e}).transition().attr("x",function(t,n){return u+d/2+(s+d)*~~(n/3)}).attr("opacity",function(t){return t.opacity}).attr("width",s).transition().duration(300).each("end",function(){t++,t===3*p&&e()})}function e(){var t=0;f.transition().duration(300).attr("height",function(t,n){var e=0;return t.pos<0?n%3===0&&(e=Math.abs(t.height)):n%3===2&&(e=Math.abs(t.height)),e}).attr("y",function(t,n){var e=c/2;return t.pos<0&&n%3===0&&(e=c/2-t.height),e}).each("end",function(){t++,t===3*p&&a()})}function a(){var t=0,n=0,e=m.map(function(t){return t.height*t.pos}).sort(function(t,n){return-(t-n)});f.datum(function(n){var r=e.indexOf(n.height*n.pos);return r==t&&r++,t=r,{orderedIndex:r}}).transition().duration(500).attr("x",function(t){return u+d/2+(s+d)*t.orderedIndex}).transition().duration(300).each("end",function(){n++,n===m.length&&i()})}function i(){var t=0;f.transition().duration(300).attr({y:c/2,height:0}).each("end",function(){t++,t===3*p&&o()})}function o(){f.remove(),g.remove(),r()}var u,d,s,f,p,g,m;!function(){u=50,d=10,s=30,p=Math.floor((h-2*u)/(s+d)),u=(h-p*(s+d))/2,g=l.append("g").attr("id","bars"),m=d3.range(p).map(function(){var t=Math.random()<.5?-1:1,n=20+Math.random()*(c/2-20-20),e=5+Math.random()*(n/2-10),r=5+Math.random()*(n/2-10),a=n-e-r;return{pos:t,height:n,cumul:[e,r,a]}}),f=g.selectAll("rect").remove().data(d3.range(3*p)).enter().append("rect").datum(function(t,n){var e=1;return m[~~(n/3)].pos<0?n%3===1?e=.6:n%3===2&&(e=.3):n%3===1?e=.6:n%3===0&&(e=.3),{opacity:e,pos:m[~~(n/3)].pos,height:m[~~(n/3)].height}}),t()}()}function r(){function t(t){t.attrTween("d",function(t){var n=d3.interpolate(t.endAngle,t.toAngle);return function(e){return t.endAngle=n(e),s(t)}})}function n(t){t.attrTween("d",function(t){var n=d3.interpolate(t.startAngle,t.toAngle);return function(e){return t.startAngle=n(e),s(t)}})}function e(){var n=0;g.transition().duration(500).ease("sin").call(t).each("end",function(){n++,n===u.length&&r()})}function r(){var n=0;m.transition().duration(500).call(t).transition().duration(300).each("end",function(){n++,n===d.length&&i()})}function i(){var t=0;m.transition().duration(500).call(n),g.transition().duration(500).call(n).each("end",function(){t++,t===u.length&&o()})}function o(){f.remove(),p.remove(),a()}var u,d,s,f,p,g,m;!function(){u=[];for(var t=h-100,n=0;n<t;n+=u[u.length-1].size){var r=30+~~(70*Math.random());n+r>t&&(r=t-n),u.push({size:r,x:n+r/2,upper:Math.random()<.5})}d=[],index=0;for(var a=0;a<u.length-1;a++)if(u[a].upper==u[a+1].upper){if(d[index])d[index].size+=u[a+1].size;else{var r=u[a].size+u[a+1].size;d.push({size:r,x:u[a].x-u[a].size/2,upper:u[a].upper})}a==u.length-2&&(d[index].x+=d[index].size/2)}else d[index]&&(d[index].x+=d[index].size/2,index++);s=d3.svg.arc().innerRadius(0).outerRadius(function(t){return t.size/2}),p=l.append("g").attr("id","g2"),f=l.append("g").attr("id","g1"),g=f.selectAll("path").data(u.map(function(t){return t.startAngle=3*Math.PI/2,t.endAngle=3*Math.PI/2,t})).enter().append("path").attr("d",s).attr("fill","rgb( 251, 53, 80 )").attr("transform",function(t){return"translate("+(50+t.x)+","+c/2+")"}).data(u.map(function(t){return t.toAngle=t.upper?Math.PI/2:5*Math.PI/2,t})),m=p.selectAll("path").data(d.map(function(t){return t.startAngle=3*Math.PI/2,t.endAngle=3*Math.PI/2,t})).enter().append("path").attr("d",s).attr("fill","rgba( 251, 53, 80, .3 )").attr("transform",function(t){return"translate("+(50+t.x)+","+c/2+")"}).data(d.map(function(t){return t.toAngle=t.upper?Math.PI/2:5*Math.PI/2,t})),e()}()}function a(){function t(){var t=0;o.transition().duration(500).delay(function(t,n){return 100*(r.length-n)}).attr("width",function(t){return(t.pos3+1)/r.length*(h-100)}).attr("height",~~((c-100)/r.length)).attr("x",function(t){return h/2-(t.pos3+1)/r.length*(h-100)/2}).attr("opacity",function(t){return 1/r.length*(t.pos3+1)}).transition().duration(300).each("end",function(){t++,t===r.length&&n()})}function n(){var t=0;o.transition().duration(500).attr("width",function(t){return(t.pos2+1)/r.length*(h-100)}).attr("x",function(t){return h/2-(t.pos2+1)/r.length*(h-100)/2}).attr("opacity",function(t){return 1/r.length*(t.pos2+1)}).transition().duration(300).transition().duration(500).attr("width",function(t){return(t.pos1+1)/r.length*(h-100)}).attr("x",function(t){return h/2-(t.pos1+1)/r.length*(h-100)/2}).attr("opacity",function(t){return 1/r.length*(t.pos1+1)}).transition().duration(300).transition().duration(500).attr("width",h-100).attr("x",50).attr("opacity",function(t){return 1/r.length*(t.pos1+1)}).each("end",function(){t++,t===r.length&&e()})}function e(){o.remove(),a.remove(),i(r)}var r,a,o;!function(){var n=10,e=d3.shuffle(d3.range(n)),i=d3.shuffle(d3.range(n));r=d3.range(n).map(function(t){return{pos1:t,pos2:e[t],pos3:i[t]}}),a=l.append("g"),o=a.selectAll("rect").data(r).enter().append("rect").attr({x:h/2,width:0,height:0,fill:"rgb( 251, 53, 80 )",opacity:0}).attr("y",function(t){return 50+~~((c-100)/r.length)*t.pos1}),t()}()}function i(t){function n(){u.transition().duration(500).attr("d",function(t){var n=" M "+~~(h-50)+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(5/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(4/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(h/2+15)+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(h/2-15)+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(2/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(1/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L 50 "+(50+~~((c-100)/i.length)*(t.pos1+.5));return n}).transition().duration(500).attr("d",function(t){var n=" M "+~~(h-50)+" "+(50+~~((c-100)/i.length)*(t.pos3+.5))+" L "+~~(5/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos3+.5))+" L "+~~(4/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(h/2+15)+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(h/2-15)+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(2/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos2+.5))+" L "+~~(1/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L 50 "+(50+~~((c-100)/i.length)*(t.pos1+.5));return n}).transition().duration(300).each("end",e)}function e(){var t=0;u.transition().duration(500).attr("stroke-width",3).transition().duration(300).each("end",function(){t++,t===i.length&&r()})}function r(){var t=0;l.selectAll("path").datum(function(){return{length:this.getTotalLength()}}).attr("stroke-dasharray",function(t){return t.length/10+" 0"}).transition().delay(function(t,n){return 50*n}).duration(1e3).attr("stroke-dasharray",function(t){return"0 "+t.length/10}).each("end",function(){t++,t==i.length&&a()})}function a(){u.remove(),o()}var i,u;!function(){i=t,u=l.selectAll("path").data(i).enter().append("path").attr({stroke:"rgb( 251, 53, 80 )",fill:"none","stroke-width":~~((c-100)/i.length)}).attr("opacity",function(t){return 1/i.length*(t.pos1+1)}).attr("d",function(t){var n=" M "+~~(h-50)+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(5/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(4/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(h/2+15)+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(h/2-15)+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(2/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L "+~~(1/6*(h-100))+" "+(50+~~((c-100)/i.length)*(t.pos1+.5))+" L 50 "+(50+~~((c-100)/i.length)*(t.pos1+.5));return n}),n()}()}function o(){function t(t){t.attrTween("d",function(t){var n=d3.interpolate(t.endAngle,t.toAngle);return function(e){return t.endAngle=n(e),f(t)}})}function n(){var n=0,r=d3.scale.linear().domain([0,2*Math.PI]).range([0,500]);s.transition().ease("linear").delay(function(t){return r(t.startAngle)}).duration(100).transition().duration(function(t){return r(t.diff)}).call(t).each("start",function(){d3.select(this).attr("stroke","rgb( 251, 53, 80 )").attr("stroke-width",3)}).transition().duration(500).each("end",function(){n++,n===a.length&&e()})}function e(){var t=0;o.transition().duration(800).delay(function(t,n){return 50*n}).attr("y",function(t,n){return n%2===0?c:-c}).each("end",function(){t++,20===t&&r()})}function r(){s.remove(),d.remove(),o.remove(),i.remove(),a.forEach(function(t,n){d3.select("#pattern"+n).remove()}),l.selectAll("defs").remove(),u()}var a,i,o,d,s,f=d3.svg.arc().innerRadius(0).outerRadius(h);!function(){i=l.append("clipPath").attr("id","mask"),o=i.selectAll("rect").data(d3.range(20)).enter().append("rect").attr({y:0,width:h/20+2,height:c}).attr("x",function(t,n){return n*(h/20)}),a=[];for(var t=0;t<2*Math.PI;){var e=.4+Math.random()*(Math.PI/2-.3);t+e+.4>2*Math.PI&&(e=2*Math.PI-t),a.push({startAngle:t+Math.PI/2,endAngle:t+Math.PI/2,toAngle:t+Math.PI/2+e,diff:e}),t+=e}var r=d3.scale.linear().domain([.4,Math.PI/2]).range([1,.1]),u=a.map(function(t,n){var e=textures.lines().stroke("rgb( 251, 53, 80 )").thinner(r(t.diff)).orientation(""+~~(1+7*Math.random())+"/8").id("pattern"+n);return l.call(e),e});d=l.append("g").attr("clip-path","url(#mask)"),s=d.selectAll("path").data(a).enter().append("path").attr("d",f).attr("opacity",1).attr("transform","translate("+h/2+","+c/2+")").attr("fill",function(t,n){return u[n].url()}),n()}()}function u(){function t(){var t=0;s.transition().delay(function(t,n){return 150*(u.length-n)}).duration(500).attr("stroke-dasharray",function(t){return t.length+" 0"}).each("end",function(){t++,t==u.length&&n()})}function n(){var t=0;f=l.selectAll("line").data(d3.range(5)).enter().append("line").attr({stroke:"rgba( 251, 53, 80, 0.5 )","stroke-width":2,x1:o.x,y1:o.y,x2:o.x,y2:o.y}).transition().duration(300).attr("x2",function(t){return u[u.length-1][t].x}).attr("y2",function(t){return u[u.length-1][t].y}).each("end",function(){t++,t==u.length&&e()})}function e(){var t=0;p=l.append("g"),g=p.selectAll("path").data(d3.range(4)).enter().append("path").attr({fill:"rgba( 251, 53, 80, 0.5 )",d:d3.range(5).map(function(t){return(0===t?"M ":"L ")+o.x+" "+o.y}).join(" ")+" Z"}),function n(){var e=0;g.transition().duration(300).delay(function(n){return 0===t?500*n:0}).attr("d",function(){return d3.range(5).map(function(t){var n=~~(5*Math.random());return(0===t?"M ":"L ")+u[n][t].x+" "+u[n][t].y}).join(" ")+" Z"}).each("end",function(){e++,4==e&&(t++,5===t?r():n())})}()}function r(){d3.selectAll("line").transition().duration(300).attr("x2",o.x).attr("y2",o.y);var t=0;s.data(u).attr("d",function(t){return t.reverse().map(function(t,n){return(0===n?"M ":"L ")+t.x+" "+t.y}).join(" ")+" Z"}).datum(function(){return{length:this.getTotalLength()}}).attr("stroke-dasharray",function(t){return t.length/5+" 0"}).transition().delay(function(t,n){return 300+150*(u.length-n)}).duration(500).attr("stroke-dasharray",function(t){return"0 "+t.length/5}).each("end",function(){t++,t===u.length&&a()}),g.transition().duration(300).attr("d",d3.range(5).map(function(t){return(0===t?"M ":"L ")+o.x+" "+o.y}).join(" ")+" Z")}function a(){s.remove(),d3.selectAll("line").remove(),p.remove(),d()}var i,o,u,s,f,p,g;!function(){i=d3.range(5).map(function(t){return{sin:Math.sin(2*Math.PI/5*t-Math.PI/2),cos:Math.cos(2*Math.PI/5*t-Math.PI/2)}}),o={x:h/2,y:c/2+20},u=d3.range(5).map(function(t){return i.map(function(n){return{x:~~(o.x+n.cos*(t+1)*50),y:~~(o.y+n.sin*(t+1)*50)}})}),s=l.selectAll("path").data(u).enter().append("path").attr({"stroke-width":2,fill:"none"}).attr("stroke",function(t,n){return"rgba( 251, 53, 80, "+(n===u.length-1?1:.5)+" )"}).attr("d",function(t){return t.map(function(t,n){return(0===n?"M ":"L ")+t.x+" "+t.y}).join(" ")+" Z"}).datum(function(){return{length:this.getTotalLength()}}).attr("stroke-dasharray",function(t){return"0 "+t.length}),t()}()}function d(){function t(){i.transition().duration(1e3).attr("x",h/2).attr("opacity",1).each("end",function(){d3.select(this).attr("clip-path","")}).transition().duration(2500).transition().duration(800).attr("opacity",0).transition().duration(1500).each("end",e),o.transition().duration(1e3).attr("x",h/2).attr("opacity",1).remove()}function e(){i.remove(),d3.select("#pathmask").remove(),r.remove(),d3.select("#pathmask2").remove(),a.remove(),n()}var r,a,i,o;!function(){r=l.append("clipPath").attr("id","mask"),r.append("path").attr({id:"pathmask",d:"M "+(h-1)+" "+c+" L "+h+" 0 L -1 "+c+" Z"}),a=l.append("clipPath").attr("id","mask2"),a.append("path").attr({id:"pathmask2",d:"M 0 0 L "+(h+1)+" 0 L 1 "+c+" Z"}),i=l.append("text").attr({x:-h/2,"font-size":"100px",fill:"rgb( 251, 53, 80 )","clip-path":"url(#mask)",opacity:0}).style("text-anchor","middle").style("font-family","Raleway").style("font-size","2rem").text("Ai Research".toUpperCase()),o=l.append("text").attr({x:h+h/2,"font-size":"100px",fill:"rgb( 251, 53, 80 )","clip-path":"url(#mask2)",opacity:0}).style("text-anchor","middle").style("font-family","Raleway").style("font-size","2rem").text("Ai Research".toUpperCase()),i.attr("y",c/2);var n=i.node().getBBox();i.attr("y",c/2+c/2-(n.y+n.height/2)),o.attr("y",c/2+c/2-(n.y+n.height/2)),t()}()}var c,h,l=d3.select("header").append("svg"),s=document.getElementsByTagName("header")[0];console.log(window.innerWidth),console.log(s),console.log(s.offsetWidth),t(),window.addEventListener("resize",t),n()});