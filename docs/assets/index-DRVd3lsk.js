(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const w of n.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&r(w)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const $="/rex-chrome-game/assets/jump-DLmE50Cr.mp3",_="/rex-chrome-game/assets/gameOver-Cc0EuQ7y.mp3",tt="/rex-chrome-game/assets/level-CiqqNo6d.mp3",et="data:image/png;base64,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",f=new Image,E=new Audio,Y=new Audio,v=new Audio,st=async()=>{f.src=et,await f.decode()},at=async()=>{E.src=$,Y.src=_,v.src=tt,await E.load(),await Y.load(),await v.load()},ot=async()=>{await st(),await at()};let l,c,h,P,B;const it=()=>{B=document.getElementById("app"),c=document.createElement("canvas"),h=window.devicePixelRatio,c.style.width=`${s.canvasInitialWidth}px`,c.style.height="150px",c.width=Math.floor(s.canvasInitialWidth*h),c.height=Math.floor(150*h),c.style.backgroundColor="transparent",l=c.getContext("2d"),l.scale(h,h),l.imageSmoothingEnabled=!0,B.appendChild(c),P=c.getBoundingClientRect()};let s={duck:!1,groundx:0,clouds:{x1:800,x2:500},initialVelocity:7,dinoDrawLeg:"RightLeg",canvasInitialWidth:70,canvasMaxWidth:600,jump:!1,dinoY:140,dinoX:20,obstacles:["cactus","bird"],cactusTypes:["cactus","cactusDouble","cactusDoubleB","cactusTriple"]};const S=()=>{if(!p){l.clearRect(0,0,c.width,c.height),N(g.ground),Bt(g.cloud),pt(),bt(),It(),dt();const t=At(),e=g[t];return U(e),requestAnimationFrame(S)}},k=()=>{G(),Ct(),S(),ht(),V()},lt=()=>{vt(),requestAnimationFrame(S),wt(),J(),Ot(),K(),mt(),V()};let d=s.dinoY,y=13;const rt=90,nt=s.dinoY-rt;let I=!1,T=!1;const ct=()=>{if(nt<d-1){y-=y*.11,d-=y;return}T=!1},ut=()=>{if(d<s.dinoY-6){y+=y*.13,s.dinoY>d?d+=y:d=s.dinoY;return}d=140,y=13,I=!1},dt=()=>{if(I)return T?ct():ut()},J=()=>{I||(I=!0,T=!0)};let X=!1,C=!1;const gt=()=>{window.addEventListener("keydown",t=>{if(t.key==="ArrowUp"){if(p&&(G(),k()),!X)return X=!0,lt();J(),E.play()}if(t.key==="ArrowDown"){if(C)return;C=!0}}),window.addEventListener("keyup",t=>{t.key==="ArrowDown"&&(C=!1)})},ft=(t,e,o,r)=>{c.addEventListener("click",i=>{let n=i.clientX-P.x,w=i.clientY-P.y;n>t&&n<t+o&&w>e&&w<e+r&&p&&(G(),k())})};let x="RightLeg";const wt=()=>{setInterval(()=>{x=x==="RightLeg"?"LeftLeg":"RightLeg"},1e3/10)},U=({h:t,w:e,x:o,y:r})=>{l.drawImage(f,o,r,e,t,s.dinoX,d-t/2,e/2,t/2)},At=()=>s.dinoY===d?C?`dinoDuck${x}`:`dino${x}`:"dino";let m=s.initialVelocity,u=0,A=0,W,M=!1,F=!1,D=0;const ht=()=>{m=s.initialVelocity},yt=()=>{M&&(l.font="25px Pixelify Sans",l.fillStyle="gray",l.fillText("NEW RECORD!",227,35),localStorage.setItem("record",A),M=!1),u=0},mt=()=>{A=localStorage.getItem("record")},V=()=>{setTimeout(()=>{u++,u%100===0&&(R(),v.play()),u%50===0&&m<1.5*s.initialVelocity&&(m+=s.initialVelocity*.125),p||V()},100)},R=()=>{setTimeout(()=>{if(F=!F,D===5)return D=0;D++,R()},2e3/6)},pt=()=>{F||(W=u.toString().length===1?`000${u}`:u.toString().length===2?`00${u}`:u.toString().length===3?`0${u}`:u.toString(),l.font="25px Pixelify Sans",l.fillStyle="gray",l.fillText(W,540,25))},bt=()=>{u>A*1&&(A=W,M=!0),A=u>A*1?W:A,l.fillText(A,470,25)},g={birdUp:{h:52,w:84,x:708,y:31},birdDown:{h:60,w:84,x:708,y:85},cactus:{h:92,w:46,x:70,y:31},cactusDouble:{h:66,w:64,x:118,y:31},cactusDoubleB:{h:92,w:80,x:184,y:31},cactusTriple:{h:66,w:82,x:266,y:31},dino:{h:86,w:80,x:350,y:31},dinoLeftLeg:{h:86,w:80,x:432,y:31},dinoRightLeg:{h:86,w:80,x:514,y:31},dinoDuckLeftLeg:{h:52,w:110,x:596,y:31},dinoDuckRightLeg:{h:52,w:110,x:596,y:85},ground:{h:28,w:2400,x:0,y:2},cloud:{h:28,w:92,x:794,y:31},replayIcon:{h:60,w:68,x:0,y:31}},Bt=({h:t,w:e,x:o,y:r})=>{s.clouds.x1-=m/3,s.clouds.x2-=m/3,l.drawImage(f,o,r,e,t,s.clouds.x1,20,e,t),l.drawImage(f,o,r,e,t,s.clouds.x2,70,e*.7,t*.7),s.clouds.x1<=-100&&(s.clouds.x1=600),s.clouds.x2<=-100&&(s.clouds.x2=600)},N=({h:t,w:e,y:o})=>{s.groundx+=m,l.drawImage(f,s.groundx,o,e,t,0,123,e,t),s.groundx>e-600&&(l.drawImage(f,0,o,e,t,e-s.groundx,123,e,t),s.groundx>=e&&(s.groundx=0))};let b,Z,L,Q=[{type:"cactus",x:0,y:0,w:0,h:0,initialX:1e3,obstacleActualX:0,drawY:0,obstacleHeight:0,obstacleWidth:0,isDrawingObstacle:!1,isDrawingBird:!1,baseY:0},{type:"cactus",x:0,y:0,w:0,h:0,initialX:700,obstacleActualX:0,drawY:0,obstacleHeight:0,obstacleWidth:0,isDrawingObstacle:!1,isDrawingBird:!1,baseY:0}],a=structuredClone(Q);const Ct=()=>{a=structuredClone(Q),L=null},Lt=t=>{if(a[t].isDrawingObstacle===!1){a[t].isDrawingObstacle=!0,xt(t),L=L?t===0?a[1].obstacleActualX+(350+Math.floor(Math.random()*200)):a[0].obstacleActualX+(350+Math.floor(Math.random()*200)):a[t].initialX,a[t].obstacleActualX=L;return}if(Ft(a[t]),a[t].obstacleActualX>-90){Et(a[t]),a[t].obstacleActualX-=m;return}a[t].isDrawingBird=!1,a[t].isDrawingObstacle=!1},It=()=>{for(let t=0;t<a.length;t++)Lt(t)},xt=t=>{let e=u>200?s.obstacles[Math.floor(Math.random()*s.obstacles.length)]:"cactus";return e=Z==="bird"?"cactus":e,Z=e,e==="cactus"?Wt(t):Dt(t)},Wt=t=>{let e=s.cactusTypes[Math.floor(Math.random()*s.cactusTypes.length)],o=g[e],r=e;a[t].type=r,j(t,o,r),a[t].drawY=e==="cactus"||e==="cactusDoubleB"?161-o.h:155-o.h},j=(t,e,o)=>{a[t].w=e.w,a[t].h=e.h,a[t].x=e.x,a[t].y=e.y;let r=o==="birdDown"||o==="birdUp"?.5:.8;a[t].obstacleHeight=e.h*r,a[t].obstacleWidth=e.w*r},Dt=t=>{a[t].isDrawingBird=!0;let e=Math.floor(Math.random()*2);a[t].baseY=e===0?70:90,q(t)},q=t=>{b=b==="birdDown"?"birdUp":"birdDown";let e=g[b],o=b;a[t].type=o,j(t,e,o),a[t].drawY=b==="birdUp"?a[t].baseY:a[t].baseY+10},Ot=()=>{setInterval(()=>{for(let t=0;t<a.length;t++)a[t].isDrawingBird===!0&&q(t)},150)},Et=({x:t,y:e,w:o,h:r,obstacleActualX:i,drawY:n,obstacleHeight:w,obstacleWidth:z})=>{l.drawImage(f,t,e,o,r,i,n,z,w)};let O=s.canvasInitialWidth;const K=()=>{setTimeout(()=>{if(O+=4,Yt(O),O<s.canvasMaxWidth)return K()},1)},Yt=t=>{c.style.width=`${t}px`,c.width=Math.floor(t*h),l.scale(h,h)},vt=()=>{B.style.filter="drop-shadow(0 0 7px rgba(0, 0, 0, 0.2))",B.style.boxShadow="0 0 30px rgba(0, 0, 0, 0.1)",B.style.borderRadius="20px"};let Pt=g.dino.w/2,Mt=g.dino.h/2;const Ft=({obstacleActualX:t,drawY:e,obstacleHeight:o,obstacleWidth:r,type:i})=>{let n=C?g.dinoDuckLeftLeg.h/2:Mt;e=i==="cactus"||i==="cactusDoubleB"?e+6:e,s.dinoX+Pt-13>t&&s.dinoX+10<t+r&&d-5>e+e*.2&&d-n<e+o&&St()};let p=!1,H=!1;const St=()=>{Y.play(),p=!0,l.font="50px Pixelify Sans",l.fillStyle="#505050",l.fillText("GAME OVER",170,80),Tt(g.replayIcon),yt()},G=()=>{p=!1},Tt=({h:t,w:e,x:o,y:r})=>{l.drawImage(f,o,r,e,t,s.canvasMaxWidth/2-t/4,90,e/2,t/2),H||(ft(s.canvasMaxWidth/2-t/4,90,e/2,t/2),H=!0)};(async()=>(async()=>{await ot(),await it(),gt(),N(g.ground),U(g.dino)})())();