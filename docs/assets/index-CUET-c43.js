(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}})();const tt="/rex-chrome-game/assets/jump-DLmE50Cr.mp3",et="/rex-chrome-game/assets/gameOver-Cc0EuQ7y.mp3",st="/rex-chrome-game/assets/level-CiqqNo6d.mp3",at="data:image/png;base64,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",w=new Image,Y=new Audio,P=new Audio,M=new Audio,ot=async()=>{w.src=at,await w.decode()},it=async()=>{Y.src=tt,P.src=et,M.src=st,await Y.load(),await P.load(),await M.load()},lt=async()=>{await ot(),await it()};let l,c,h,C;const rt=()=>{C=document.getElementById("app"),c=document.createElement("canvas"),h=window.devicePixelRatio,c.style.width=`${s.canvasInitialWidth}px`,c.style.height="150px",c.width=Math.floor(s.canvasInitialWidth*h),c.height=Math.floor(150*h),c.style.backgroundColor="transparent",l=c.getContext("2d"),l.scale(h,h),l.imageSmoothingEnabled=!0,C.appendChild(c)};let s={duck:!1,groundx:0,groundy:123,clouds:{x1:800,x2:500},initialVelocity:7,dinoDrawLeg:"RightLeg",canvasInitialWidth:70,canvasMaxWidth:600,jump:!1,dinoY:140,dinoX:20,obstacles:["cactus","bird"],cactusTypes:["cactus","cactusDouble","cactusDoubleB","cactusTriple"]},J,S=!1;const O=()=>{if(!p){l.clearRect(0,0,c.width,c.height),j(g.ground),It(g.cloud),Ct(),Lt(),Dt(),wt();const t=mt(),e=g[t];if(R(e),!$){requestAnimationFrame(O);return}S||nt();return}clearInterval(J),S=!1},nt=()=>{S=!0,J=setInterval(()=>{O()},1e3/60)},U=()=>{X(),xt(),O(),pt(),V()},ct=()=>{St(),_(),O(),yt(),N(),Yt(),Bt(),V()};let d=s.dinoY,y=13;const ut=90,dt=s.dinoY-ut;let x=!1,G=!1;const gt=()=>{if(dt<d-1){y-=y*.11,d-=y;return}G=!1},ft=()=>{if(d<s.dinoY-6){y+=y*.13,s.dinoY>d?d+=y:d=s.dinoY;return}d=140,y=13,x=!1},wt=()=>{if(x)return G?gt():ft()},N=()=>{x||(x=!0,G=!0)};let Z=!1,L=!1;const At=()=>{window.addEventListener("keydown",t=>{if(t.key==="ArrowUp"){if(p&&(X(),U()),!Z)return Z=!0,ct();N(),Y.play()}if(t.key==="ArrowDown"){if(L)return;L=!0}}),window.addEventListener("keyup",t=>{t.key==="ArrowDown"&&(L=!1)})},ht=(t,e,o,n)=>{c.addEventListener("click",i=>{let r=c.getBoundingClientRect(),f=i.clientX-r.x,B=i.clientY-r.y;console.log(r.x,r.y),console.log(f,B,t,e,o,n,p),f>t&&f<t+o&&B>e&&B<e+n&&p&&(X(),U())})};let W="RightLeg";const yt=()=>{setInterval(()=>{W=W==="RightLeg"?"LeftLeg":"RightLeg"},1e3/10)},R=({h:t,w:e,x:o,y:n})=>{l.drawImage(w,o,n,e,t,s.dinoX,d-t/2,e/2,t/2)},mt=()=>s.dinoY===d?L?`dinoDuck${W}`:`dino${W}`:"dino";let m=s.initialVelocity,u=0,A="0",D,F=!1,T=!1,E=0;const pt=()=>{m=s.initialVelocity},bt=()=>{F&&(l.font="25px Pixelify Sans",l.fillStyle="gray",l.fillText("NEW RECORD!",227,35),localStorage.setItem("record",A),F=!1),u=0},Bt=()=>{A=localStorage.getItem("record")},V=()=>{setTimeout(()=>{u++,u%100===0&&(Q(),M.play()),u%50===0&&m<1.5*s.initialVelocity&&(m+=s.initialVelocity*.125),p||V()},100)},Q=()=>{setTimeout(()=>{if(T=!T,E===5)return E=0;E++,Q()},2e3/6)},Ct=()=>{T||(D=u.toString().length===1?`000${u}`:u.toString().length===2?`00${u}`:u.toString().length===3?`0${u}`:u.toString(),l.font="25px Pixelify Sans",l.fillStyle="gray",l.fillText(D,540,25))},Lt=()=>{u>Number(A)*1&&(A=D,F=!0),A=u>Number(A)*1?D:A,l.fillText(A,470,25)},g={birdUp:{h:52,w:84,x:708,y:31},birdDown:{h:60,w:84,x:708,y:85},cactus:{h:92,w:46,x:70,y:31},cactusDouble:{h:66,w:64,x:118,y:31},cactusDoubleB:{h:92,w:80,x:184,y:31},cactusTriple:{h:66,w:82,x:266,y:31},dino:{h:86,w:80,x:350,y:31},dinoLeftLeg:{h:86,w:80,x:432,y:31},dinoRightLeg:{h:86,w:80,x:514,y:31},dinoDuckLeftLeg:{h:52,w:110,x:596,y:31},dinoDuckRightLeg:{h:52,w:110,x:596,y:85},ground:{h:28,w:2400,x:0,y:2},cloud:{h:28,w:92,x:794,y:31},replayIcon:{h:60,w:68,x:0,y:31}},It=({h:t,w:e,x:o,y:n})=>{s.clouds.x1-=m/3,s.clouds.x2-=m/3,l.drawImage(w,o,n,e,t,s.clouds.x1,20,e,t),l.drawImage(w,o,n,e,t,s.clouds.x2,70,e*.7,t*.7),s.clouds.x1<=-100&&(s.clouds.x1=600),s.clouds.x2<=-100&&(s.clouds.x2=600)},j=({h:t,w:e,y:o})=>{s.groundx+=m,l.drawImage(w,s.groundx,o,e,t,0,s.groundy,e,t),s.groundx>e-600&&(l.drawImage(w,0,o,e,t,e-s.groundx,123,e,t),s.groundx>=e?s.groundx=0:s.groundx)};let b,k,I,q=[{type:"cactus",x:0,y:0,w:0,h:0,initialX:1e3,obstacleActualX:0,drawY:0,obstacleHeight:0,obstacleWidth:0,isDrawingObstacle:!1,isDrawingBird:!1,baseY:0},{type:"cactus",x:0,y:0,w:0,h:0,initialX:700,obstacleActualX:0,drawY:0,obstacleHeight:0,obstacleWidth:0,isDrawingObstacle:!1,isDrawingBird:!1,baseY:0}],a=structuredClone(q);const xt=()=>{a=structuredClone(q),I=null},Wt=t=>{if(a[t].isDrawingObstacle===!1){a[t].isDrawingObstacle=!0,Ot(t),I=I?t===0?a[1].obstacleActualX+(350+Math.floor(Math.random()*200)):a[0].obstacleActualX+(350+Math.floor(Math.random()*200)):a[t].initialX,a[t].obstacleActualX=I;return}if(Gt(a[t]),a[t].obstacleActualX>-90){Pt(a[t]),a[t].obstacleActualX-=m;return}a[t].isDrawingBird=!1,a[t].isDrawingObstacle=!1},Dt=()=>{for(let t=0;t<a.length;t++)Wt(t)},Ot=t=>{let e=u>200?s.obstacles[Math.floor(Math.random()*s.obstacles.length)]:"cactus";return e=k==="bird"?"cactus":e,k=e,e==="cactus"?Et(t):vt(t)},Et=t=>{let e=s.cactusTypes[Math.floor(Math.random()*s.cactusTypes.length)],o=g[e];a[t].type=e,K(t,o,e),a[t].drawY=e==="cactus"||e==="cactusDoubleB"?161-o.h:155-o.h},K=(t,e,o)=>{a[t].w=e.w,a[t].h=e.h,a[t].x=e.x,a[t].y=e.y;let n=o==="birdDown"||o==="birdUp"?.5:.8;a[t].obstacleHeight=e.h*n,a[t].obstacleWidth=e.w*n},vt=t=>{a[t].isDrawingBird=!0;let e=Math.floor(Math.random()*2);a[t].baseY=e===0?70:90,z(t)},z=t=>{b=b==="birdDown"?"birdUp":"birdDown";let e=g[b];a[t].type=b,K(t,e,b),a[t].drawY=b==="birdUp"?a[t].baseY:a[t].baseY+10},Yt=()=>{setInterval(()=>{for(let t=0;t<a.length;t++)a[t].isDrawingBird===!0&&z(t)},150)},Pt=({x:t,y:e,w:o,h:n,obstacleActualX:i,drawY:r,obstacleHeight:f,obstacleWidth:B})=>{l.drawImage(w,t,e,o,n,i,r,B,f)};let v=s.canvasInitialWidth,$=!1;const _=()=>{setTimeout(()=>(v+=4,Mt(v),v<s.canvasMaxWidth?_():$=!0),1)},Mt=t=>{c.style.width=`${t}px`,c.width=Math.floor(t*h),l.scale(h,h)},St=()=>{C.style.filter="drop-shadow(0 0 7px rgba(0, 0, 0, 0.2))",C.style.boxShadow="0 0 30px rgba(0, 0, 0, 0.1)",C.style.borderRadius="20px"};let Ft=g.dino.w/2,Tt=g.dino.h/2;const Gt=({obstacleActualX:t,drawY:e,obstacleHeight:o,obstacleWidth:n,type:i})=>{let r=L?g.dinoDuckLeftLeg.h/2:Tt;e=i==="cactus"||i==="cactusDoubleB"?e+6:e,s.dinoX+Ft-13>t&&s.dinoX+10<t+n&&d-5>e+e*.2&&d-r<e+o&&Vt()};let p=!1,H=!1;const Vt=()=>{P.play(),p=!0,l.font="50px Pixelify Sans",l.fillStyle="#505050",l.fillText("GAME OVER",170,80),Xt(g.replayIcon),bt()},X=()=>{p=!1},Xt=({h:t,w:e,x:o,y:n})=>{l.drawImage(w,o,n,e,t,s.canvasMaxWidth/2-t/4,90,e/2,t/2),H||(ht(s.canvasMaxWidth/2-t/4,90,e/2,t/2),H=!0)};(async()=>(async()=>{await lt(),await rt(),At(),j(g.ground),R(g.dino)})())();