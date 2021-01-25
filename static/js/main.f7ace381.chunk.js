(this.webpackJsonpWaves=this.webpackJsonpWaves||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(12),o=n.n(i),s=n(4),l=n.n(s),u=n(6),p=n(3),d=n(8),b=n(7),h=n(5),j=function(e){var t=e.audioRef,n=e.currentSong,c=e.isPlaying,r=e.setIsPlaying,i=e.setSongInfo,o=e.songInfo,s=e.songs,d=e.setCurrentSong,j=e.setSongs,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{active:!0}):Object(p.a)(Object(p.a)({},t),{},{active:!1})}));j(t)},m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(u.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===n.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,d(s[(r+1)%s.length]);case 4:f(s[(r+1)%s.length]);case 5:if("skip-back"!==a){e.next=13;break}if((r-1)%s.length!==-1){e.next=12;break}return e.next=9,d(s[s.length-1]);case 9:return f(s[s.length-1]),c&&t.current.play(),e.abrupt("return");case 12:d(s[(r-1)%s.length]);case 13:c&&t.current.play();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(o.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:m(o.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(n.color[0],",").concat(n.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){t.current.currentTime=e.target.value,i(Object(p.a)(Object(p.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:v,className:"animate-track"})]}),Object(a.jsx)("p",{children:o.duration?m(o.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(b.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(a.jsx)(b.a,{onClick:function(){c?(t.current.pause(),r(!c)):(t.current.play(),r(!c))},className:"play",size:"2x",icon:c?h.d:h.e}),Object(a.jsx)(b.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},f=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:t.cover,alt:""}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},m=(n(24),n(27));var g=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!1},{name:"Plants",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg",artist:"Philanthrope, Guillaume Muschalle",audio:"https://mp3.chillhop.com/serve.php/?mp3=10255",color:["#8C4237","#AF8C62"],id:Object(m.a)(),active:!1},{name:"Wildlife",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg",artist:"Philanthrope, chromonicci",audio:"https://mp3.chillhop.com/serve.php/?mp3=10263",color:["#8C4237","#AF8C62"],id:Object(m.a)(),active:!1}]},v=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.id,i=e.audioRef,o=e.isPlaying,s=e.setSongs,d=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===r})),e.next=3,c(t[0]);case 3:a=n.map((function(e){return e.id===r?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})})),s(a),o&&i.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{src:t.cover,alt:t.name}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,o=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(o?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(v,{songs:t,setCurrentSong:n,song:e,id:e.id,audioRef:c,isPlaying:r,setSongs:i},e.id)}))})]})},x=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"YouStink"}),Object(a.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(a.jsx)(b.a,{icon:h.c})]})]})};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(g()),n=Object(d.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(r[0]),s=Object(d.a)(o,2),b=s[0],h=s[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),y=v[0],S=v[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(d.a)(k,2),w=C[0],P=C[1],N=Object(c.useState)(!1),A=Object(d.a)(N,2),I=A[0],M=A[1],T=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);P(Object(p.a)(Object(p.a)({},w),{},{currentTime:t,duration:n,animationPercentage:r}))},F=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.findIndex((function(e){return e.id===b.id})),t.next=3,h(r[(n+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(a.jsx)(x,{libraryStatus:I,setLibraryStatus:M}),Object(a.jsx)(f,{currentSong:b}),Object(a.jsx)(j,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:b,setSongInfo:P,songInfo:w,songs:r,setCurrentSong:h,setSongs:i}),Object(a.jsx)(O,{audioRef:e,songs:r,setCurrentSong:h,isPlaying:y,setSongs:i,libraryStatus:I}),Object(a.jsx)("audio",{onTimeUpdate:T,onLoadedMetadata:T,ref:e,src:b.audio,onEnded:F})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.f7ace381.chunk.js.map