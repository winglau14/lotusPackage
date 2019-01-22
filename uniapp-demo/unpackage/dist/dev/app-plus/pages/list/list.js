
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"list-item { font-size: ",[0,30],"; position: relative; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-sizing: border-box; box-sizing: border-box; color: #666; }\n.",[1],"list-item::after { content: \x22 \x22; position: absolute; left: 0; bottom: 0; right: 0; height: 1px; border-bottom: 1px solid #eee; color: #eee; -webkit-transform-origin: 0 100%; -ms-transform-origin: 0 100%; transform-origin: 0 100%; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); }\n.",[1],"list-item-link { padding: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; position: relative; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"list-item-link::after { content: \x22\x22; width: ",[0,24],"; height: ",[0,24],"; border-top-color: #dbdbdb; border-top-style: solid; border-right-color: #dbdbdb; border-right-style: solid; border-top-width: ",[0,4],"; border-right-width: ",[0,4],"; position: absolute; top: 50%; right: ",[0,50],"; -webkit-transform: rotate(45deg) translateY(-50%); -ms-transform: rotate(45deg) translateY(-50%); transform: rotate(45deg) translateY(-50%); }\n.",[1],"list-item wx-text { display: block; }\n.",[1],"list-item-pic { width: ",[0,120],"; height: ",[0,120],"; border-radius: ",[0,10],"; }\n.",[1],"list-item-r { padding-left: ",[0,30],"; padding-right: ",[0,44],"; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"list-item-time { font-size: ",[0,28],"; color: #999; }\n",],undefined,{path:"./pages/list/list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/list/list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      