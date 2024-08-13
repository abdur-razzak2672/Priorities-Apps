import{d as e,t,f as s,n as r,a as o}from"./DSbh8JJz.js";class i extends e{constructor(e="/api/allOurIdeas"){super(),this.baseUrlPath=e}async getChoices(e,t,s){return this.fetchWrapper(this.baseUrlPath+`/${e||t}/choices/${s}${e?"/throughDomain":""}?showAll=true`)}async submitIdeasForCreation(e,t,s,r){return this.fetchWrapper(this.baseUrlPath+`/${e||t}/questions${e?"/throughDomain":""}`,{method:"POST",body:JSON.stringify({ideas:s,question:r})},!0,void 0,!0)}async startGenerateIdeas(e,t,s,r,o){return this.fetchWrapper(this.baseUrlPath+`/${t||s}/generateIdeas${t?"/throughDomain":""}`,{method:"PUT",body:JSON.stringify({currentIdeas:o,wsClientSocketId:r,question:e})},!0,void 0,!0)}async updateChoice(e,t,s,r,o){return this.fetchWrapper(this.baseUrlPath+`/${e||t}/questions/${s}/choices/${r}${e?"/throughDomain":""}`,{method:"PUT",body:JSON.stringify({data:o})},!0,void 0,!0)}async updateGroupChoice(e,t,s,r){return this.fetchWrapper(this.baseUrlPath+`/${e}/questions/${t}/choices/${s}/throughGroup`,{method:"PUT",body:JSON.stringify({data:r})},!0,void 0,!0)}async updateActive(e,t,s,r,o){return this.fetchWrapper(this.baseUrlPath+`/${e||t}/questions/${s}/choices/${r}/active${e?"/throughDomain":""}`,{method:"PUT",body:JSON.stringify({active:o})},!0,void 0,!0)}async updateName(e,t,s,r){return this.fetchWrapper(this.baseUrlPath+`/${e||t}/questions/${s}/name${e?"/throughDomain":""}`,{method:"PUT",body:JSON.stringify({name:r})},!0,void 0,!0)}async toggleIdeaActive(e,t){return this.fetchWrapper(this.baseUrlPath+`/${e}/choices/${t}/toggleActive`,{method:"PUT",body:JSON.stringify({})},!0,void 0,!0)}}var a=function(e,t,s,r){for(var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(i<3?o(a):i>3?o(t,s,a):o(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a};let n=class extends s{constructor(e){super(),this.imageType="icon",this.hexColor=e}hexToRgb(e){e.startsWith("#")&&(e=e.slice(1));return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)}}rgbToHsl(e,t,s){e/=255,t/=255,s/=255;const r=Math.max(e,t,s),o=Math.min(e,t,s);let i,a,n=(r+o)/2;if(r===o)i=a=0;else{const h=r-o;switch(a=n>.5?h/(2-r-o):h/(r+o),r){case e:i=(t-s)/h+(t<s?6:0);break;case t:i=(s-e)/h+2;break;case s:i=(e-t)/h+4}i/=6}return{h:360*i,s:100*a,l:100*n}}hslToHex(e,t,s){t/=100,s/=100;let r=(1-Math.abs(2*s-1))*t,o=r*(1-Math.abs(e/60%2-1)),i=s-r/2,a=0,n=0,h=0;return e>=0&&e<60?(a=r,n=o,h=0):e>=60&&e<120?(a=o,n=r,h=0):e>=120&&e<180?(a=0,n=r,h=o):e>=180&&e<240?(a=0,n=o,h=r):e>=240&&e<300?(a=o,n=0,h=r):e>=300&&e<360&&(a=r,n=0,h=o),a=Math.round(255*(a+i)).toString(16),n=Math.round(255*(n+i)).toString(16),h=Math.round(255*(h+i)).toString(16),1===a.length&&(a="0"+a),1===n.length&&(n="0"+n),1===h.length&&(h="0"+h),`#${a}${n}${h}`}getComplementaryColor(e){const{r:t,g:s,b:r}=this.hexToRgb(e),{h:o,s:i,l:a}=this.rgbToHsl(t,s,r),n=(o+180)%360;return this.hslToHex(n,i,a)}hexToColorDescription(e){e.startsWith("#")&&(e=e.slice(1));const t=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16),o=Math.max(t,s,r),i=t===o,a=s===o,n=r===o;let h="";return i&&a&&n?h="gray":i&&a?h="yello":i&&n?h="purple":a&&n?h="cyan":i?h="red":a?h="green":n&&(h="blue"),o>200?h="light "+h:o<55&&(h="dark "+h),h}get promptDraft(){const e=this.getComplementaryColor(this.hexColor);return`Very simple cartoon icon.\n\nUse a simple color scheme based on ${this.hexToColorDescription(this.hexColor)} background and ${this.hexToColorDescription(e)} foreground. No text.\n`}async generateImage(){return new Promise(((e,t)=>{const s=t=>{this.removeEventListener("got-image",s),this.removeEventListener("image-generation-error",r),console.error("Got image",t.detail),e(t.detail)},r=e=>{this.removeEventListener("got-image",s),this.removeEventListener("image-generation-error",r),t(e.detail)};this.addEventListener("got-image",s),this.addEventListener("image-generation-error",r),this.submit().catch((e=>{this.removeEventListener("got-image",s),this.removeEventListener("image-generation-error",r),t(e)}))}))}get finalPrompt(){return this.promptFromUser}async generateIcon(e,t){return t=`Text to create tiny icon from: ${e}\nIcon style: ${t}`,this.promptFromUser=t,await this.generateImage()}};n=a([t("aoi-generate-ai-logos")],n);var h=function(e,t,s,r){for(var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(i<3?o(a):i>3?o(t,s,a):o(t,s))||a);return i>3&&a&&Object.defineProperty(t,s,a),a};class l extends o{constructor(){super(),this.chatLog=[],this.webSocketsErrorCount=0,this.scrollElementSelector="#chat-messages",this.userScrolled=!1,this.currentFollowUpQuestions="",this.programmaticScroll=!1,this.scrollStart=0,this.defaultDevWsPort=4242,this.disableWebsockets=!1,this.wsManuallyClosed=!1,this.heartBeatRate=55e3}connectedCallback(){super.connectedCallback(),this.disableWebsockets||this.initWebSockets()}initWebSockets(){let e;this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=void 0),e="localhost"===window.location.hostname||"192.1.168"===window.location.hostname?`ws://${window.location.hostname}:${this.defaultDevWsPort}`:`wss://${window.location.hostname}:443`;try{this.ws=new WebSocket(e),console.error("WebSocket Opened"),this.ws.onmessage=this.onMessage.bind(this),this.ws.onopen=this.onWsOpen.bind(this),this.ws.onerror=e=>{this.webSocketsErrorCount++,console.error("WebSocket Error "+e),setTimeout((()=>this.initWebSockets()),this.webSocketsErrorCount>1?1e3*this.webSocketsErrorCount:2e3),this.fire("yp-ws-error",{error:e})},this.ws.onclose=e=>{console.error("WebSocket Close "+e),this.webSocketsErrorCount++,this.wsManuallyClosed||setTimeout((()=>this.initWebSockets()),this.webSocketsErrorCount>1?1e3*this.webSocketsErrorCount:2e3),this.fire("yp-ws-closed")}}catch(e){console.error("WebSocket Error "+e),this.webSocketsErrorCount++,setTimeout((()=>this.initWebSockets()),this.webSocketsErrorCount>1?1e3*this.webSocketsErrorCount:1500),this.fire("yp-ws-error",{error:e})}}sendHeartbeat(){this.ws.readyState===WebSocket.OPEN?(console.error("Sending heartbeath"),this.ws.send(JSON.stringify({type:"heartbeat"}))):console.error("WebSocket not open")}onWsOpen(){console.error("WebSocket onWsOpen"),this.sendHeartbeat(),this.heartbeatInterval&&clearInterval(this.heartbeatInterval),this.heartbeatInterval=setInterval((()=>this.sendHeartbeat()),this.heartBeatRate),this.ws.onmessage=e=>{const t=JSON.parse(e.data);t.clientId?(this.wsClientId=t.clientId,this.ws.onmessage=this.onMessage.bind(this),console.error(`WebSocket clientId: ${this.wsClientId}`),this.fire("yp-ws-opened",{clientId:this.wsClientId})):console.error("Error: No clientId received from server!")}}handleScroll(){if(this.programmaticScroll||!this.$$(this.scrollElementSelector))return;const e=this.$$(this.scrollElementSelector).scrollTop;0===this.scrollStart&&(this.scrollStart=e);this.$$(this.scrollElementSelector).scrollHeight-e-this.$$(this.scrollElementSelector).clientHeight<=10?(this.userScrolled=!1,this.scrollStart=0):Math.abs(this.scrollStart-e)>10&&(this.userScrolled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=void 0),this.ws&&(this.wsManuallyClosed=!0,this.ws.close())}async onMessage(e){const t=JSON.parse(e.data);switch(t.sender){case"bot":this.addChatBotElement(t);break;case"you":this.addChatUserElement(t)}"stream_followup"!==t.type&&this.scrollDown()}scrollDown(){if(!this.userScrolled&&this.$$(this.scrollElementSelector)){this.programmaticScroll=!0;const e=this.$$(this.scrollElementSelector);"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"MD-OUTLINED-TEXT-FIELD"===e.tagName?(e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight-100):e.scrollTop=e.scrollHeight,setTimeout((()=>{this.programmaticScroll=!1}),100)}else console.error("User scrolled, not scrolling down")}addUserChatBotMessage(e){this.addChatBotElement({sender:"you",type:"start",message:e})}addThinkingChatBotMessage(){this.addChatBotElement({sender:"bot",type:"thinking",message:""})}addChatUserElement(e){this.chatLog=[...this.chatLog,e]}get simplifiedChatLog(){return this.chatLog.filter((e=>"thinking"!=e.type&&"noStreaming"!=e.type&&e.message)).map((e=>({sender:"bot"==e.sender?"assistant":"user",message:e.rawMessage?e.rawMessage:e.message})))}reset(){this.chatLog=[],this.ws&&(this.ws.close(),this.initWebSockets()),this.serverMemoryId=void 0,this.requestUpdate()}}h([r({type:Array})],l.prototype,"chatLog",void 0),h([r({type:String})],l.prototype,"wsClientId",void 0),h([r({type:Number})],l.prototype,"webSocketsErrorCount",void 0),h([r({type:String})],l.prototype,"wsEndpoint",void 0),h([r({type:Object})],l.prototype,"ws",void 0),h([r({type:String})],l.prototype,"scrollElementSelector",void 0),h([r({type:Boolean})],l.prototype,"userScrolled",void 0),h([r({type:String})],l.prototype,"currentFollowUpQuestions",void 0),h([r({type:Boolean})],l.prototype,"programmaticScroll",void 0),h([r({type:Number})],l.prototype,"scrollStart",void 0),h([r({type:String})],l.prototype,"serverMemoryId",void 0),h([r({type:Number})],l.prototype,"defaultDevWsPort",void 0);export{i as A,l as Y,n as a};
