
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"login { position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); color: #999; width: 80%; }\n.",[1],"login-welcome { text-align: center; font-size: ",[0,28],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"login-welcome-line { position: relative; }\n.",[1],"login-welcome-line::after { content: \x22 \x22; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #eee; color: #eee; -webkit-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); }\n.",[1],"login-welcome wx-text { white-space: nowrap; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"login-welcome-title { padding-left: ",[0,10],"; padding-right: ",[0,10],"; }\n.",[1],"login-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; text-align: center; font-size: ",[0,30],"; padding-top: ",[0,80],"; }\n.",[1],"login-list-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"login-list-item wx-text { display: block; }\n",],undefined,{path:"./pages/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      