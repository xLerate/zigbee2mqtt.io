"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11897],{85330:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>L,data:()=>v});var o=a(37711);const d=(0,o.Lk)("h1",{id:"aqara-znms11lm",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#aqara-znms11lm"},[(0,o.Lk)("span",null,"Aqara ZNMS11LM")])],-1),l=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),n=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"ZNMS11LM")],-1),i=(0,o.Lk)("td",null,"Vendor",-1),s=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smart door lock")],-1),c=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"state, reverse, action, linkquality")],-1),r=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNMS11LM.png",alt:"Aqara ZNMS11LM"})])],-1),u=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1),p=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1),h=(0,o.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> state is ON, if <code>LOCK</code> OFF.</p><h3 id="reverse-binary" tabindex="-1"><a class="header-anchor" href="#reverse-binary"><span>Reverse (binary)</span></a></h3><p>Value can be found in the published state on the <code>reverse</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>UNLOCK</code> reverse is ON, if <code>LOCK</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>finger_not_match</code>, <code>password_not_match</code>, <code>reverse_lock</code>, <code>reverse_lock_cancel</code>, <code>locked</code>, <code>lock_opened</code>, <code>finger_add</code>, <code>finger_delete</code>, <code>password_add</code>, <code>password_delete</code>, <code>lock_opened_inside</code>, <code>lock_opened_outside</code>, <code>ring_bell</code>, <code>change_language_to</code>, <code>finger_open</code>, <code>password_open</code>, <code>door_closed</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),k={},L=(0,a(3790).A)(k,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[d,(0,o.Lk)("table",null,[l,(0,o.Lk)("tbody",null,[n,(0,o.Lk)("tr",null,[i,(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,o.k6)((()=>[(0,o.eW)("Aqara")])),_:1})])]),s,c,r])]),u,(0,o.Lk)("p",null,[(0,o.eW)("This device supports OTA updates, for more information see "),(0,o.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>[(0,o.eW)("OTA updates")])),_:1}),(0,o.eW)(".")]),p,(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>[(0,o.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/ZNMS11LM.html","title":"Aqara ZNMS11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNMS11LM control via MQTT","description":"Integrate your Aqara ZNMS11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-26T17:45:15.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Reverse (binary)","slug":"reverse-binary","link":"#reverse-binary","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723570797000},"filePathRelative":"devices/ZNMS11LM.md"}')}}]);