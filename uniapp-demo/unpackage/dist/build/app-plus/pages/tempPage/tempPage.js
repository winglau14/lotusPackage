
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"index-splash { position: absolute; left: 0; top: 50%; -webkit-transform: translate3d(0, -50%, 0); transform: translate3d(0, -50%, 0); z-index: 999; background: #fff; width: 100%; opacity: 0; text-align: center; -webkit-animation: splash_top_move 2s ease forwards; animation: splash_top_move 2s ease forwards; }\n.",[1],"index-splash-top { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #666; }\n.",[1],"index-splash-top wx-text { display: block; font-size: ",[0,60],"; width: ",[0,100],"; }\n.",[1],"index-splash-top .",[1],"_p:nth-of-type(2) { margin-top: ",[0,400],"; }\n.",[1],"index-splash-footer { margin-top: ",[0,260],"; }\n.",[1],"index-splash-logo { width: ",[0,50],"; height: ",[0,50],"; margin-left: auto; margin-right: auto; }\n.",[1],"index-splash-text { padding-top: ",[0,40],"; font-size: ",[0,20],"; }\n@-webkit-keyframes splash_top_move { 0% { opacity: 0; }\n50% { opacity: 1; }\n100% { opacity: 0; }\n}@keyframes splash_top_move { 0% { opacity: 0; }\n50% { opacity: 1; }\n100% { opacity: 0; }\n}@-webkit-keyframes splash_bottom_move { 0% { opacity: 0; -webkit-transform: translate3d(0, -100%, 0); transform: translate3d(0, -100%, 0); }\n100% { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }\n}@keyframes splash_bottom_move { 0% { opacity: 0; -webkit-transform: translate3d(0, -100%, 0); transform: translate3d(0, -100%, 0); }\n100% { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }\n}",],undefined,{path:"./pages/tempPage/tempPage.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tempPage/tempPage.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      