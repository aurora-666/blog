var version = '0.171.5.8.9.6.3.9';
var adversion =     'ad0.171.5.8.4.5.8.';
var html5PlayerWidth ;
var html5PlayerHeight ;
var hls_vod_url;// = "http://221.192.142.85/cache/gzhls.m3u8";
var hds_vod_url;// = "http://221.192.142.85/cache/gzhds.f4m";
var rtsp_vod_url;
var backUrl;
var preView;
var pageurl = window.location.href;
var VideoName="";
var videoTVChannel = "";
var ChannelID="";
//对借口文档的新字段进行初始化；
var vdn_tsp =new Date().getTime().toString().slice(0,10);
var vdn_vnFlash = "1537";										//央视网页FlashV1.0--No1
var staticCheck_Flash = "B4B51E8523157ED8D17ADB76041BCD09";
var vdn_vnHtml5 = "2049";										//央视网页Html5V1.0--No1
var staticCheck_Html5 = "47899B86370B879139C08EA3B5E88267";
var vdn_vc = "";
var vdn_uid = "";
var vdn_wlan = "";
var Fingerprint = "";//定义设备指纹信息的key值
var isHtml5VdnMsg = "0";

var media_events = new Array();
media_events["loadstart"] = 0;
media_events["progress"] = 0;
media_events["suspend"] = 0;
media_events["emptied"] = 0;
media_events["stalled"] = 0;
media_events["play"] = 0;
media_events["pause"] = 0;
media_events["loadedmetadata"] = 0;
media_events["loadeddata"] = 0;
media_events["waiting"] = 0;
media_events["playing"] = 0;
media_events["canplay"] = 0;
media_events["canplaythrough"] = 0;
media_events["seeking"] = 0;
media_events["seeked"] = 0;
media_events["timeupdate"] = 0;
media_events["ended"] = 0;
media_events["ratechange"] = 0;
media_events["durationchange"] = 0;
media_events["volumechange"] = 0;

var isLivePublic = "1";
var isFlashPlayer = true;
var isShowH5VideoLoading = true;

var hdsFo = null;
var jsIsLoaded = 0;
var hdsBaseDiv = "";
var cdnName = "";

var ConvivaImplJs = "http://js.player.cntv.cn/creator/conviva-html5native-impl.js";
var ConvivaLibarylJs = "http://js.player.cntv.cn/creator/conviva-html5native-library.min.js";
var convivaClient = null;
var convivaPlayerStateManager = null;
var isUseConvivaMonitor = true;

var hdsUseCovivaMonitor = true;
var hdsIsNormalVideo = true;
var hdsConvivaVdnSid = "";
var hdsConvivaCdnInfo = {"vdnIP": "","vdnCountryCode": "", "vdnProvinceCode": "","vdnCityCode": "","vdnISPCode": ""};

var guoshuangJs = "http://app.cntv.cn/special/gridsum/vd/200094.js";
var hdsUseGuoshuangMonitor = false;
var html5HdsGuoshuang = null;
var useHdsGuoshuangMonitor = true;

var shuguangJs = "http://sum.cntvwb.cn/flashplayer/musesh5vedioagent.js";
var useHdsShuguangMonitor = false;


var useCntvMonitor = true;   //开启或关闭阿里数据统计
var cntvMonitorJs = "http://js.player.cntv.cn/creator/html5player_analysis_lib.js";
var AliMonitorJs = "http://g.alicdn.com/alilog??aplus_plugin/cctv.js,aplus_plugin/aplus_u.js";
var cntvMonitorVersion = "2018.09.16.01";


var _hdsPauseAdplayerPath="http://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf";
//var _hdsAdplayerPath = "http://player.cntv.cn/adplayer/cntvAdPlayer2.swf";
var _hdsAdplayerPath = "http://player.cntv.cn/adplayer/cntvAdPlayer20150521.swf";
var _hdsCornerAdplayerPath = "http://player.cntv.cn/adplayer/cntvCornerADPlayer.swf";
var hdsBgAdVersion = 'ad0.171.5.8.4.5.3..';
var hdsBgAdW = 960;
var hdsBgAdH = 480;

var _hdsAdPause = typeof(_Adpause)=="undefined" ? "" : _Adpause;
var _hdsAdCall = typeof(channelAD)=="undefined" ? "" : channelAD;

var hdsBtime = "";
var hdsBauth = "";
var html5AuthFlag = "1";



if(navigator.userAgent.toLowerCase().indexOf("micromessenger")!==-1){
    hdsUseCovivaMonitor = false;
}

if(!_hdsAdPause && typeof(attributes)!="undefined" && attributes['adpause'])
{
    _hdsAdPause = attributes['adpause'];
}

if(!_hdsAdCall &&  typeof(attributes)!="undefined" && attributes['adloading'])
{
    _hdsAdCall = attributes['adloading'];
}


function isIPad() {
    return /(iphone|ipad)/i.test(navigator.userAgent)|| /(Android)/i.test(navigator.userAgent);
}
function IsMaxthon()
{
    try{
        window.external.max_invoke("GetHotKey");
        return true;
    }catch(ex){
        return false;
    }
}

function createByUrl(playerId,w,h,f4m)
{
    hds_vod_url = f4m;
    return createHdsLivePlayer(playerId,w,h,f4m);
}
//动态加载fingerprint2.js
function getfingerprint2(){
    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","jsFingerLoader","absolute","0px","0px","0px","0px");
    jsLoader.src = "http://js.player.cntv.cn/creator/fingerprint2.js";
    //jsLoader.src = "js/fingerprint2.js";
    _doc.appendChild(jsLoader);
    if(typeof jsLoader.onload != "undefined"){
        jsLoader.onload = function() {
            getFingerprint();
        };
    }

    if(typeof jsLoader.onreadystatechange != "undefined"){
        jsLoader.onreadystatechange = function(){
            if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete'){
                getFingerprint();
            }
        };
    }
}

function getVodUrl()
{
    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","jsLoader","absolute","0px","0px","0px","0px");
    jsLoader.src = "http://vdn.apps.cntv.cn/api/getLiveUrlHtml5Api.do?channel=cctv_hds_hdcctv13";
    _doc.appendChild(jsLoader);


    if(typeof jsLoader.onload != "undefined")
    {

        jsLoader.onload = function()
        {

            addr = getVideoAddr(videoType);

            if(platform=="android" && osVersion<4)
            {
                location.href = addr;
            }
            else
            {
                document._html5Player.src = addr;
            }

        };

    }

    if(typeof jsLoader.onreadystatechange != "undefined")
    {
        jsLoader.onreadystatechange = function()
        {
            if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete')
            {
                addr = getVideoAddr(videoType);
                document._html5Player.src = addr;
            }
        }

    }

}


/*解析vdn信息*/
function getHdsVideoAddr(playerId, w, h)
{
    if(jsIsLoaded == 1)
    {
        return;
    }
    if(typeof(html5VideoData) != "undefined")
    {

        var videoData = eval('(' + html5VideoData.replace(/(^\s*)|(\s*$)/g, "") + ')');


        try{
            hdsConvivaVdnSid = videoData.client_sid;
            hdsConvivaCdnInfo = {
                "vdnIP": videoData.lc.ip,
                "vdnCountryCode": videoData.lc.country_code,
                "vdnProvinceCode": videoData.lc.provice_code,
                "vdnCityCode": videoData.lc.city_code,
                "vdnISPCode": videoData.lc.isp_code
            };
        }catch(e){
            hdsConvivaCdnInfo = {"vdnIP": "","vdnCountryCode": "", "vdnProvinceCode": "","vdnCityCode": "","vdnISPCode": ""};
            hdsConvivaVdnSid = "";
            isHtml5VdnMsg = "1";
        }

        try{
            if(typeof(videoData.hds_url)!="undefined" && !isIPad()){

                if(typeof(videoData.hds_url.hds1)!="undefined"){
                    hds_vod_url = videoData.hds_url.hds1;
                }

                if(typeof(videoData.hds_url.hds2)!="undefined"){
                    backUrl = videoData.hds_url.hds2;
                }

                if(typeof(videoData.hds_url.hds5)!="undefined"){
                    rtsp_vod_url = videoData.hds_url.hds5;
                }

            }

            isLivePublic = videoData.public;

            if(typeof(videoData.hls_url.hls2)!="undefined" && videoData.hls_url.hls2)
            {
                hls_vod_url = videoData.hls_url.hls2;
                if(hls_vod_url.indexOf("uid=default")===-1)
                {
                    if(hls_vod_url.indexOf("?")>0)
                    {
                        hls_vod_url += "&uid=default";
                    } else{
                        hls_vod_url += "?uid=default";
                    }
                }
            }
            else if(typeof(videoData.hls_url.hls4)!="undefined" && videoData.hls_url.hls4)
            {
                hls_vod_url = videoData.hls_url.hls4;
            }
            else{
                hls_vod_url = videoData.hls_url.hls1;
            }

            if(isIPad() && isLivePublic==="0" && (ChannelID==="cctv5" || ChannelID==="cctv5plus")) {
                if(typeof(videoData.hls_url.hls6)!="undefined" && videoData.hls_url.hls6)
                {
                    hls_vod_url = videoData.hls_url.hls6;
                    isLivePublic = "2";
                    hdsIsNormalVideo = false;
                }
            }

            if(hls_vod_url.toLowerCase().indexOf("dianpian.mp4") > 0)
            {
                hdsIsNormalVideo = false;
            }





            if(isIPad()){
                var _0x1576=["\x63\x75\x6C\x33", "\x63\x71\x6C\x36"];html5Aauth= _0x1576[0];
                if(typeof(videoData.hls_cdn_info.cdn_code)!="undefined") {
                    cdnName = videoData.hls_cdn_info.cdn_code;
                }

                /*h5走阿里、腾讯单独时采用
                if(typeof(html5LiveBackCndCode)!== "undefined" && typeof(videoData.hds_cdn_info.cdn_code)!="undefined") {
                    html5LiveBackCndCode = videoData.hds_cdn_info.cdn_code;
                }

                if(typeof(html5LiveBackAddr)!="undefined" && typeof(videoData.hds_url.hds4)!="undefined") {
                    html5LiveBackAddr = videoData.hds_url.hds4;

                    if(!html5LiveBackAddr && typeof(videoData.flv_url.flv4)!="undefined" && videoData.flv_url.flv4){
                        html5LiveBackAddr = videoData.flv_url.flv4;
                    }

                }
                */
                html5LiveBackAddr = hls_vod_url;
                html5LiveBackCndCode = cdnName;

                if(location.href.indexOf("stime=")>0) {
                    hls_vod_url += "&start=" + getQueryString("stime");
                    if(location.href.indexOf("etime=")>0) {
                        hls_vod_url += "&end=" + getQueryString("etime");
                    }
                }


                if(isLivePublic==="1" && (_0x1576[1]="\x63\x67\x6C\x35") && typeof(videoData.hls_url.hls3)!="undefined" && videoData.hls_url.hls3 && videoData.hls_url.hls3.indexOf("cctv?")!==-1 && (cdnName!=="LIVE-HLS-CDN-AK" && cdnName!=="LIVE-HLS-CDN-TTA")){
                    html5CdnStr = _0x1576[1] + html5Aauth;

                    if(cdnName !== "LIVE-HLS-CDN-TXY") {
                        cdnName = "LIVE-HLS-CDN-ALI";
                    }
                }

                if(isLivePublic==="1" && cdnName!=="LIVE-HLS-CDN-ALI" && cdnName!=="LIVE-HLS-CDN-TXY" && cdnName!=="LIVE-HLS-CDN-BS" && cdnName!=="LIVE-HLS-CDN-KS" && cdnName!=="LIVE-HLS-CDN-AK" && cdnName!=="LIVE-HLS-CDN-TTA" && hls_vod_url.indexOf("AUTH=")!==-1 && hls_vod_url.indexOf("amode=1")!==-1) {

                    if(ChannelID!=="cctv_news01"&&ChannelID!=="cctv_news02"&&ChannelID!=="cctv_news03"&&ChannelID!=="cctv_news04") {
                        var pageUrl = location.href;
                        pageUrl = deleteUrlPara(pageUrl, "vdn_data");
                        pageUrl = deleteUrlPara(pageUrl, "bauth");
                        pageUrl = deleteUrlPara(pageUrl, "btime");
                        pageUrl = deleteUrlPara(pageUrl, "vdn_last");

                        hls_vod_url = encodeURIComponent(hls_vod_url);

                        var vdn_data = {
                            "liveurl": hls_vod_url,
                            "hdsConvivaVdnSid": hdsConvivaVdnSid,
                            "hdsConvivaCdnInfo": hdsConvivaCdnInfo,
                            "cdnName": cdnName,
                            "isLivePublic": isLivePublic,
                            "html5LiveBackAddr": typeof(html5LiveBackAddr)!=="undefined" ? encodeURIComponent(html5LiveBackAddr) : "",
                            "html5LiveBackCndCode": typeof(html5LiveBackCndCode)!=="undefined" ? html5LiveBackCndCode : ""

                        };

                        vdn_data = JSON.stringify(vdn_data);
                        if(pageUrl.indexOf("?") > 0) {
                            pageUrl += "&vdn_data=" + vdn_data;
                        } else{
                            pageUrl += "?vdn_data=" + vdn_data;
                        }

                        pageUrl += "&vdn_last=" + Date.parse(new Date())/1000;

                        location.href = pageUrl;
                        return;




                    }


                }

            } else{
                cdnName = videoData.hds_cdn_info.cdn_code;
            }


            preView = videoData.hls_url.hls5;

            var aliInitTimer = setInterval(function () {
                if(typeof goldlog!= "undefined" && goldlog.initSession!= "undefined") {
                    clearInterval(aliInitTimer);

                    setCntvMetadata("init");

                }
            }, 100);


        }
        catch(e)
        {
            if(isHtml5VdnMsg==="0") {
                isHtml5VdnMsg = "2";
            }

            isLivePublic = videoData.public;
        }



        jsIsLoaded = 1;




        //var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20170417.swf";
        //var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20170419.swf";
        //var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20170623.swf";
        //var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer2017092602.swf";
        //var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20171107.swf";
        var playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20180105.swf";


        if(ChannelID==="cctv5" || ChannelID==="cctv5plus") {
            //playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20170928.swf";
            //playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer2017110702.swf";
            playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayerty20180105.swf";
        }

        if(location.href.indexOf("ipanda.com") > 0 && location.href.indexOf("livechina.ipanda.com")==-1) {
            playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayer20180206.swf";
        }

        /*2019年网络春晚播放器*/
        if(typeof(vodPlayerType)!="undefined" && vodPlayerType=="wlcw") {
            playerurl = "http://player.cntv.cn/standard/cntvHdsLivePlayerChunWan.swf";
        }

        var myUserAgent = navigator.userAgent.toLowerCase();
        if(myUserAgent.indexOf("tencenttraveler")!==-1 || IsMaxthon() || (myUserAgent.indexOf('msie')!==-1 && (myUserAgent.indexOf("windows nt 6.1")!==-1 || myUserAgent.indexOf("windows 7")!==-1 || myUserAgent.indexOf("msie 7")!==-1)))
        {
            hdsFo = new SWFObject(playerurl + "?v=18"+version+"&a="+Math.random(), "hds_flash_player", w, h, "10.0.0.0", "#000000");
        }else
        {
            hdsFo = new SWFObject(playerurl + "?v=18"+version, "hds_flash_player", w, h, "10.0.0.0", "#000000");
        }

        if(typeof(hds_bitaRates)!="undefined" && typeof(hds_bitaRates)=="string")
        {
            hdsFo.addVariable("bitaRates", hds_bitaRates);

        }


        hdsFo.addVariable("vdnSID", hdsConvivaVdnSid);
        hdsFo.addVariable("vdnIP", hdsConvivaCdnInfo.vdnIP);
        hdsFo.addVariable("vdnCountryCode", hdsConvivaCdnInfo.vdnCountryCode);
        hdsFo.addVariable("vdnProvinceCode", hdsConvivaCdnInfo.vdnProvinceCode);
        hdsFo.addVariable("vdnCityCode", hdsConvivaCdnInfo.vdnCityCode);
        hdsFo.addVariable("vdnISPCode", hdsConvivaCdnInfo.vdnISPCode);

        hds_vod_url = encodeURIComponent(hds_vod_url);
        hdsFo.addVariable("addrs",hds_vod_url);

        backUrl = encodeURIComponent(backUrl);
        hdsFo.addVariable("backUrl",backUrl);
        hdsFo.addVariable("preView",preView);
        hdsFo.addVariable("cdn", cdnName);
        hdsFo.addVariable("tai", ChannelID);
        hdsFo.addVariable("Url", hds_vod_url);
        hdsFo.addVariable("VideoName", VideoName);
        hdsFo.addVariable("ChannelID", ChannelID);
        hdsFo.addVariable("videoTVChannel", videoTVChannel);
        hdsFo.addVariable("P2PChannelID", "pa://cctv_p2p_hd" + ChannelID);
        var liveTimeUrl = videoData.flv_url.flv5;
        hdsFo.addVariable("timeUrl", liveTimeUrl);

        hdsFo.addVariable("ack", videoData.ack);
        hdsFo.addVariable("public", videoData.public);

        /*close bgAd
         if(typeof(live_Ad_BG) != "undefined")
         {
         var bgDiv = document.createElement("div");
         bgDiv.setAttribute("id","bgAd_div");
         bgDiv.style.width = '960px';
         bgDiv.style.height = '480px';
         document._baseDiv.appendChild(bgDiv);

         var bgfo = new SWFObject("http://player.cntv.cn/adplayer/advBack.swf?v="+hdsBgAdVersion,"hdsBgAdPlayer",hdsBgAdW,hdsBgAdH,"10.0.0.0");
         bgfo.addParam("flashvars","xmlPath="+live_Ad_BG);
         bgfo.addParam("wmode", "transparent");
         bgfo.addParam("quality", "high");
         bgfo.addParam("menu","false");
         bgfo.addParam("allowFullScreen", "true");
         bgfo.addParam("allowScriptAccess","always");
         bgfo.write("bgAd_div");
         }
         */


        if(typeof(live_Ad_Calls) != "undefined")
        {
            hdsFo.addVariable("adCalls", live_Ad_Calls);
            hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
        }
        else
        {
            if(_hdsAdCall)
            {
                hdsFo.addVariable("adCall", _hdsAdCall);
                hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
            }

        }

        if(typeof(live_Ad_Pause) != "undefined")
        {
            hdsFo.addVariable("adPause", live_Ad_Pause);
            hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
        }
        else
        {
            if(_hdsAdPause)
            {
                hdsFo.addVariable("adPause",_hdsAdPause );
                hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
            }
        }

        if(typeof(live_Ad_Corner) != "undefined")
        {
            hdsFo.addVariable("adCorner", live_Ad_Corner);
            hdsFo.addVariable("cornerAdplayerPath",_hdsCornerAdplayerPath);
        }
        if(typeof(live_Ad_Banner) != "undefined")
        {
            hdsFo.addVariable("adBanner", live_Ad_Banner);
        }
        if(typeof(live_Ad_Wenzi) != "undefined")
        {
            hdsFo.addVariable("adText", live_Ad_Wenzi);
        }

        hdsFo.addVariable("BannerWidth", 600);
        hdsFo.addVariable("BannerInterval", 20);
        hdsFo.addVariable("playBackType","common");

        if(ChannelID==="studio1" || (typeof(isHdsRuleVisible)!="undefined" && isHdsRuleVisible)){
            hdsFo.addVariable("ruleVisible","false");
        } else
        {
            hdsFo.addVariable("ruleVisible","true");
        }

        if(location.href.indexOf(".pandaplace.nl/pandacam")===-1&&location.href.indexOf("ipanda.com.de/monitor")===-1&&location.href.indexOf("en.ipanda.com/live")===-1 && location.href.indexOf("live.ipanda.com/webapp")===-1  && location.href.indexOf("live.ipanda.com/ipandade_iframe")===-1 && location.href.indexOf("live.ipanda.com/pandaplace")===-1)
        {
            hdsFo.addVariable("languageXml","");
            if(ChannelID==="cctv5" || ChannelID==="cctv5plus"){
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_HD.xml");
            } else{
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig.xml");
            }

            /*
             if(ChannelID==="cctv1"){
             hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig1080p.xml");
             }
             */

        }
        else
        {
            hdsFo.addVariable("languageXml","http://player.cntv.cn/xml/english/hdsLanguage.xml");
            hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig-English.xml");
        }

        if(location.href.indexOf("en.ipanda.com") !== -1) {
            hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_panda.xml");
        }
        hdsFo.addVariable("referrer", document.referrer);




        //获取cookie并传递指纹信息
        if(!getCookie_vdn("Fingerprint")){
            //获取设备指纹信息
            getfingerprint2();
        } else{
            Fingerprint = getCookie_vdn("Fingerprint");
        }
        //把指纹信息传给播放器
        hdsFo.addVariable("fingerprint",Fingerprint);

        hdsFo.addVariable("public", isLivePublic);

        if(typeof(channelAbled) !== "undefined") {
            hdsFo.addVariable("channelAbled", channelAbled);
        }

        if(typeof(hdsSelectChannel) !== "undefined") {
            hdsFo.addVariable("selectChannel", hdsSelectChannel);
        }

        if(typeof(isHdsAbroad) !== "undefined") {
            hdsFo.addVariable("isabroad", isHdsAbroad);
        }

        if(typeof(isPlayerOpaque)!="undefined"&&isPlayerOpaque==true || location.href.indexOf("tv.cntv.cn/live")!==-1 || location.href.indexOf("tv.cctv.com/live")!==-1){
            hdsFo.addParam("wmode", "opaque");
        } else if(typeof(isPlayerTransParent)!="undefined"&&isPlayerTransParent==true){
            hdsFo.addParam("wmode", "transparent");
        } else {
            hdsFo.addParam("wmode", "direct");
        }


        hdsFo.addParam("quality", "high");
        hdsFo.addParam("menu","false");
        hdsFo.addParam("allowFullScreen", "true");
        hdsFo.addParam("allowScriptAccess","always");


        if(hdsBaseDiv)
        {
            writePlayer(hdsFo, hdsBaseDiv);
        }
        else
        {
            writePlayer(hdsFo, "video-play-js");
        }


        if(document.getElementById("hds_flash_player"))
        {
            document.getElementById("hds_flash_player").focus();
        }


    }

}

function deleteUrlPara(url, ref){
    var str = "";
    if (url.indexOf('?') != -1) {
        str = url.substr(url.indexOf('?') + 1);
    }
    else {
        return url;
    }
    var arr = "";
    var returnurl = "";
    var setparam = "";
    if (str.indexOf('&') != -1) {
        arr = str.split('&');
        for (i in arr) {
            if (arr[i].split('=')[0] != ref) {
                returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
            }
        }
        return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
    }
    else {
        arr = str.split('=');
        if (arr[0] == ref) {
            return url.substr(0, url.indexOf('?'));
        }
        else {
            return url;
        }
    }

}



function html5HdsCopyrightMsg(mainDivId,_w,_h,type,errorMsg)
{
    _w += "";
    _h += "";

    if(_w.indexOf("%") === -1) {
        _w += "px";
    }

    if(_h.indexOf("%") === -1) {
        _h += "px";
    }

    var baseDiv = document.getElementById(mainDivId);
    baseDiv.innerHTML = "";
    baseDiv.style.position = "relative";
    baseDiv.style.width = _w;
    baseDiv.style.height = _h;
    var appUrl = "http://download.cntv.cn/app/cbox/index.html";
    var msg = "";
    var msgT = "200px";

    if(_h.indexOf("%") !== -1) {
        msgT = parseInt(_h)/2 + "%";
    } else{
        msgT = parseInt(_h)/3 + "px";
    }


    if(type == "live")
    {
        msg = "由于播出安排，请速下&nbsp;<a style='font-weight:bold;border:0;font-size:20px;color:#cc0000'  href='"+appUrl+"'>央视影音客户端</a>&nbsp;畅享海量直播节目";
    }
    else if(type === "audio")
    {
        msgT -= 60;
        msg = "由于播出安排，仅提供该时段播出内容音频，敬请收听。";
    }
    else if(type === "ouzhoubei")
    {
        msg = "由于版权原因，您所在的地区暂时无法观看";
    }
    else if(type === "auth") {
        msg = "对不起，认证没有通过，暂时无法播放此视频。";
        hls_vod_url = "";
        setConvivaMetadata(errorMsg);

    }
    else
    {
        msgL = parseInt(_w/2) - 288;
        msg = "由于节目播出安排，该视频无法播放。速下&nbsp;<a style='font-weight:bold;border:0;font-size:20px; color:#cc0000'  href='"+appUrl+"'>央视影音客户端</a>&nbsp;畅享世界杯海量视频";
    }

    //msgWidth = _w - msgL - 30;

    baseDiv.style.backgroundColor = "#000";
    baseDiv.innerHTML = "<div style='position:relative;margin:0 auto;padding:0 auto;text-align:center;width:" + _w + ";border:0;font-size:16px;top:" + msgT + ";color:#FFF;z-index:99'>" + msg +"<div>";

}


function isDrmChannels(c) {
    var flag = false;
    var channels = ["daka01","daka02","cctv_olympic01","cctv_olympic02","cctv_olympic03","cctv5","cctv5plus","cctvamerica","cctveurope","cctv1","cctv4","cctv13","cctv2","cctv3","cctv6","cctv7","cctv8","cctv10","cctv11","cctv12","cctvchild","cctv15","taiqiu","cctvjilu","xinkedongman","tiyuip1","tiyuip2","tiyuip3","tiyuip4","tiyuip5","tiyuip6","studio4"];
    var len = channels.length;
    for(var i=0; i<len; i++) {
        if(c === channels[i]) {
            flag = true;
            break;
        }
    }

    return flag;
}


function isNotDrmChannels(c) {
    var flag = false;
    var channels = ["ipanda", "ipanda1000","studio4","studio5","studio6","studio7","studio8","studio9","studio10","studio11","studio12","studio13","studio14","studio15"];
    var len = channels.length;
    for(var i=0; i<len; i++) {
        if(c === channels[i]) {
            flag = true;
            break;
        }
    }

    return flag;
}


function createHdsLivePlayer(playerId,w,h,cid,isShowLoading)
{

    html5PlayerWidth = w;
    html5PlayerHeight = h;

    if(cid.indexOf("pe://cctv_p2p_hd")!==-1) {
        VideoName = videoTVChannel = cid.replace("pe://cctv_p2p_hd", "");
        ChannelID = VideoName;
    } else{
        cid = cid.replace("pa://cctv_p2p_hd", "");

        VideoName = videoTVChannel = cid;
        ChannelID = cid;
    }


    if(playerId=="flash_video" && document.getElementById("_video_player_box") && !document.getElementById("flash_video"))
    {
        playerId = "_video_player_box";
    }

    if(playerId=="player_id" && document.getElementById("flash_video") && !document.getElementById("player_id"))
    {
        playerId = "flash_video";
    }


    jsIsLoaded = 0;


    if(typeof(isShowLoading)!=="undefined" && isShowLoading===false) {
        isShowH5VideoLoading = false;
    }


    try
    {

        var domainUrl = top.document.domain;
        var urlArr = domainUrl.split(".");
        var keyDomain = urlArr[urlArr.length-2];

        if(keyDomain=="com" || keyDomain=="net" || keyDomain=="org")
        {
            keyDomain = urlArr[urlArr.length-3];
        }
        if(keyDomain!="cntv" && keyDomain!="cctv" && keyDomain!="cntvna"  && keyDomain!="12371" && keyDomain!="ipanda" && keyDomain!="ncpa-classic" && keyDomain!="panda" && keyDomain!="pandaplace" && keyDomain!="pandamuseum" && keyDomain!="giantpanda" && keyDomain!="panda-adoption" && keyDomain!="pambassador" && keyDomain!="wwf" && keyDomain!="cctvdream" && keyDomain!="gov" && keyDomain!="livechina" && keyDomain!="panda-adoption" && keyDomain!="chinalive" && keyDomain!="kzntv" && keyDomain!="uyntv")
        {
            return;
        }

    }
    catch(e)
    {
        if(document.domain!=="live.ipanda.com" && document.domain!=="player.cntv.cn"){
            return;
        }


        domainUrl = document.referrer;

    }


    if((ChannelID==="cctv5" || ChannelID==="cctv5plus" || ChannelID==="sportsteama" || ChannelID==="sportsteamb") && (typeof(area_info_array_country)==="string"&&area_info_array_country&&area_info_array_country!=="CN"&&area_info_array_country!=="MO" || typeof(area_info)==="string"&&area_info&&area_info.indexOf("CN|")===-1&&area_info.indexOf("MO|")===-1))
    {
        html5HdsCopyrightMsg(playerId, w, h, "ouzhoubei");
        return;
    }

    var clientInfo = navigator.userAgent.toLowerCase();
    if(/(android)/i.test(clientInfo) && clientInfo.indexOf("firefox")!==-1 && document.getElementById(playerId))
    {
        var baseDiv = document.getElementById(playerId);
        baseDiv.innerHTML = "";
        baseDiv.style.position = "relative";
        baseDiv.style.backgroundColor = "#000";
        baseDiv.style.width = html5PlayerWidth+"px";
        baseDiv.style.height = html5PlayerHeight+"px";
        var appUrl = "http://download.cntv.cn/app/cbox/index.html";
        var msg = "";
        var msgL = 0;
        var msgT = parseInt(html5PlayerHeight/2) - 8;
        msgL = parseInt(html5PlayerWidth/2) - 213;
        msg = "请下载&nbsp;<a style='font-weight:bold;font-size:30px; color:#cc0000'  href='"+appUrl+"'>央视影音客户端</a>&nbsp;畅享海量直播节目";
        baseDiv.innerHTML = "<div style='position:relative;font-size:25px;left:" + msgL + "px;top:" + msgT + "px;color:#FFF'>" + msg +"<div>";
        return;
    }


    if(isIPad()) {
        var pageUrl = "";
        hdsBtime = getQueryString("btime");
        hdsBauth = getQueryString("bauth");

        var vdnData = getQueryString("vdn_data");
        var vdn_last = getQueryString("vdn_last");
        var now_time = Date.parse(new Date())/1000;

        if(vdn_last && now_time-vdn_last<60) {
            if(getQueryString("autherror") === "illegal") {
                html5HdsCopyrightMsg(playerId, w, h, "auth", "autherror:illegal");
                doLoadHtml5ConvivaJs();
                return;

            } else if(hdsBtime.length>5 && hdsBauth.length>10 && vdnData.length>10) {

                checkHtml5Auth(false, "b_matching", "http://h5.cntv.powzamedia.com/cntv/b_matching");

                if(html5AuthFlag === "0") {
                    var jumpUrl = "http://h5.cntv.powzamedia.com/cntv/err_check";
                    pageUrl = location.href;
                    pageUrl = deleteUrlPara(pageUrl, "vdn_data");
                    jumpUrl += "?referer=" + encodeURIComponent(pageUrl);
                    location.href = jumpUrl;
                    return;
                } else{
                    html5ParseJsonFromUrl(vdnData);
                    return hdsFo;
                }
            } else if(vdnData.length>10 && hdsBtime.length<5 && hdsBauth.length<10){
                var jumpUrl = "http://h5.cntv.powzamedia.com/cntv/b_match";
                pageUrl = location.href;
                pageUrl = deleteUrlPara(pageUrl, "bauth");
                pageUrl = deleteUrlPara(pageUrl, "btime");

                jumpUrl += "?referer=" + encodeURIComponent(pageUrl);
                location.href = jumpUrl;
                return;
            }
        }


    } else{
        if(typeof goldlog === "undefined") {
            doLoadAliAnalyticsJs();
        }

        if(!isNotDrmChannels(ChannelID)) {

            //var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180524.swf";
            //var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180606.swf";
            //var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180618.swf";
            /*
            if(cid.indexOf("pe://cctv_p2p_hd")!==-1) {
                playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180624.swf";
            }
            */

            //var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180625.swf";
            //var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20180906.swf";
            var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20181022.swf";

            if(window.location.href.indexOf("chunwan.cctv.com/2019/4Mlive")!==-1) {
                playerurl = "http://player.cntv.cn/standard/live_DRM4Mlive.swf";
            }


            if(IsMaxthon())
            {
                hdsFo = new SWFObject(playerurl + "?v=18"+version+"&a="+Math.random(), "hds_flash_player", w, h, "10.0.0.0", "#000000");
            }else
            {
                hdsFo = new SWFObject(playerurl + "?v=18"+version, "hds_flash_player", w, h, "10.0.0.0", "#000000");
            }


            if(typeof(hds_bitaRates)!="undefined" && typeof(hds_bitaRates)=="string")
            {
                hdsFo.addVariable("bitaRates", hds_bitaRates);

            }
            //ChannelID = ChannelID + "_4M";
            //hdsFo.addVariable("vdnSID", hdsConvivaVdnSid);
            //hdsFo.addVariable("vdnIP", hdsConvivaCdnInfo.vdnIP);
            //hdsFo.addVariable("vdnCountryCode", hdsConvivaCdnInfo.vdnCountryCode);
            //hdsFo.addVariable("vdnProvinceCode", hdsConvivaCdnInfo.vdnProvinceCode);
            //hdsFo.addVariable("vdnCityCode", hdsConvivaCdnInfo.vdnCityCode);
            //hdsFo.addVariable("vdnISPCode", hdsConvivaCdnInfo.vdnISPCode);

            hdsFo.addVariable("ChannelID", ChannelID);
            hdsFo.addVariable("videoTVChannel", videoTVChannel);
            if(cid.indexOf("pe://cctv_p2p_hd")!==-1) {
                hdsFo.addVariable("P2PChannelID", cid);
                hdsFo.addVariable("tai", ChannelID+"_4M");
            } else{
                hdsFo.addVariable("P2PChannelID", "pa://cctv_p2p_hd" + ChannelID);
                hdsFo.addVariable("tai", ChannelID);
            }


            hdsFo.addVariable("VideoName", VideoName);
            hdsFo.addVariable("channelID", ChannelID);



            if(typeof(live_Ad_Calls) != "undefined")
            {
                hdsFo.addVariable("adCalls", live_Ad_Calls);
                hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
            }
            else
            {
                if(_hdsAdCall)
                {
                    hdsFo.addVariable("adCall", _hdsAdCall);
                    hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
                }

            }

            if(typeof(live_Ad_Pause) != "undefined")
            {
                hdsFo.addVariable("adPause", live_Ad_Pause);
                hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
            }
            else
            {
                if(_hdsAdPause)
                {
                    hdsFo.addVariable("adPause",_hdsAdPause );
                    hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
                }
            }

            if(typeof(live_Ad_Corner) != "undefined")
            {
                hdsFo.addVariable("adCorner", live_Ad_Corner);
                hdsFo.addVariable("cornerAdplayerPath",_hdsCornerAdplayerPath);
            }
            if(typeof(live_Ad_Banner) != "undefined")
            {
                hdsFo.addVariable("adBanner", live_Ad_Banner);
            }
            if(typeof(live_Ad_Wenzi) != "undefined")
            {
                hdsFo.addVariable("adText", live_Ad_Wenzi);
            }

            hdsFo.addVariable("BannerWidth", 600);
            hdsFo.addVariable("BannerInterval", 20);
            hdsFo.addVariable("playBackType","common");
            if(ChannelID==="studio1" || (typeof(isHdsRuleVisible)!="undefined" && isHdsRuleVisible)){
                hdsFo.addVariable("ruleVisible","false");
            } else
            {
                hdsFo.addVariable("ruleVisible","true");
            }

            if(location.href.indexOf(".pandaplace.nl/pandacam")===-1&&location.href.indexOf("ipanda.com.de/monitor")===-1&&location.href.indexOf("en.ipanda.com/live")===-1 && location.href.indexOf("live.ipanda.com/webapp")===-1  && location.href.indexOf("live.ipanda.com/ipandade_iframe")===-1 && location.href.indexOf("live.ipanda.com/pandaplace")===-1)
            {
                hdsFo.addVariable("languageXml","");
                if(ChannelID==="cctv5" || ChannelID==="cctv5plus"){

                    if(cid.indexOf("pe://cctv_p2p_hd")!==-1) {
                        hdsFo.addVariable("bitaRates", "4096");
                        hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_1080P.xml");
                    } else{
                        //hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_HD.xml");
                        hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                    }
                } else{
                    //hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig.xml");
                    hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                }

                /*
                 if(ChannelID==="cctv1"){
                 hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig1080p.xml");
                 }
                 */

            }
            else
            {
                hdsFo.addVariable("languageXml","http://player.cntv.cn/xml/english/hdsLanguage.xml");
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig-English.xml");
            }

            if(location.href.indexOf("en.ipanda.com") !== -1) {
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_panda.xml");
            }
            hdsFo.addVariable("referrer", document.referrer);
            //获取cookie并传递指纹信息
            if(!getCookie_vdn("Fingerprint")){
                //获取设备指纹信息
                getfingerprint2();
            } else{
                Fingerprint = getCookie_vdn("Fingerprint");
            }
            //把指纹信息传给播放器
            hdsFo.addVariable("fingerprint",Fingerprint);

            if(typeof(channelAbled) !== "undefined") {
                hdsFo.addVariable("channelAbled", channelAbled);
            }

            if(typeof(hdsSelectChannel) !== "undefined") {
                hdsFo.addVariable("selectChannel", hdsSelectChannel);
            }

            if(typeof(isHdsAbroad) !== "undefined") {
                hdsFo.addVariable("isabroad", isHdsAbroad);
            }

            if(typeof(isPlayerOpaque)!="undefined"&&isPlayerOpaque==true || location.href.indexOf("tv.cntv.cn/live")!==-1 || location.href.indexOf("tv.cctv.com/live")!==-1){
                hdsFo.addParam("wmode", "opaque");
            } else if(typeof(isPlayerTransParent)!="undefined"&&isPlayerTransParent==true){
                hdsFo.addParam("wmode", "transparent");
            } else {
                hdsFo.addParam("wmode", "direct");
            }


            hdsFo.addParam("quality", "high");
            hdsFo.addParam("menu","false");
            hdsFo.addParam("allowFullScreen", "true");
            hdsFo.addParam("allowScriptAccess","always");
            jsIsLoaded = 1;


            if(document.getElementById("hds_flash_player"))
            {
                document.getElementById("hds_flash_player").focus();
            }

            return hdsFo;
        }
    }

    getHdsJsonData(ChannelID, playerId, w, h);
    return hdsFo;
}

function html5ParseJsonFromUrl(data) {
    var obj = eval('(' + data.replace(/(^\s*)|(\s*$)/g, "") + ')');
    hls_vod_url = decodeURIComponent(obj.liveurl);

    hdsConvivaVdnSid = obj.hdsConvivaVdnSid;
    hdsConvivaCdnInfo = obj.hdsConvivaCdnInfo
    cdnName = obj.cdnName;
    isLivePublic = obj.isLivePublic;


    if(typeof(html5LiveBackAddr)!=="undefined") {
        html5LiveBackAddr = decodeURIComponent(obj.html5LiveBackAddr);
    }

    if(typeof(html5LiveBackCndCode)!=="undefined") {
        html5LiveBackCndCode = obj.html5LiveBackCndCode;
    }


    setTimeout(function () {
        jsIsLoaded = 1;
        try {
            if(isUseConvivaMonitor){
                doLoadHtml5ConvivaJs();

            }

            doLoadHtml5AnalyticsJs("guoshuang", "jsLoader5", checkHdsGuoshuang);
            doLoadHtml5AnalyticsJs("shuguang", "jsLoader6", checkHdsShuguang);

            doLoadHtml5AnalyticsJs("cntv", "jsLoader7", checkHdsCntv);

        } catch(e) {

        }



        if(hdsBaseDiv)
        {
            writePlayer(hdsFo, hdsBaseDiv);
        }
        else
        {
            writePlayer(hdsFo, "video-play-js");
        }


    }, 100);


}

function writePlayer(fo,divId)
{

    hdsBaseDiv = divId;
    if(jsIsLoaded==0)
    {
        return false;
    }

    if(isIPad())
    {
        if(ChannelID==="sportsteama" || ChannelID==="sportsteamb"){
            html5HdsCopyrightMsg(divId, html5PlayerWidth, html5PlayerHeight, "live");
            return;
        }

        if(isLivePublic === "0"){
            html5HdsCopyrightMsg(divId, html5PlayerWidth, html5PlayerHeight, "ouzhoubei");
            createHtml5ConvivaEvent();
            return;
        }

        try{
            if(flvConvivaClient && flvSessionKey!==null) {
                flvConvivaClient.cleanupSession(flvSessionKey);
            }
        } catch(e){
        }


        if(isLivePublic === "2"){
            html5HdsCopyrightMsg(divId, html5PlayerWidth, html5PlayerHeight, "audio");
            setHtml5VideoNewUrl(hls_vod_url);
        } else{
            document.getElementById(divId).innerHTML = "";
            //hls_vod_url= hls_vod_url.replace("&amode=1", "");
            if(cdnName === "LIVE-HLS-CDN-ALI" || cdnName === "LIVE-HLS-CDN-TXY" || cdnName === "LIVE-HLS-CDN-BS" ||  cdnName==="LIVE-HLS-CDN-KS") {

                if(hls_vod_url.indexOf("amode=1") > 0){

                    setHtml5AliNewUrl();
                } else{
                    createHtml5Player(hdsBaseDiv);
                    createPlayerElement();
                    html5InitEvent2();

                    htmlPlayAFile();
                    if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
                        document._html5Player.load();
                    }

                    if(useHdsGuoshuangMonitor){
                        html5HdsGuoshuang = new HdsGuoshuangAnalytics();
                        setHdsGuoshuangInitData(document._html5Player.src);
                    }
                }

            } else if(cdnName==="LIVE-HLS-CDN-AK" || cdnName==="LIVE-HLS-CDN-TTA"){
                createHtml5Player(hdsBaseDiv);
                createPlayerElement();
                html5InitEvent2();

                htmlPlayAFile();
                if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
                    document._html5Player.load();
                }
                if(useHdsGuoshuangMonitor){
                    html5HdsGuoshuang = new HdsGuoshuangAnalytics();
                    setHdsGuoshuangInitData(document._html5Player.src);
                }

                if(typeof(html5LiveBackAddr)!="undefined" && !html5LiveBackAddr) {
                    html5LiveBackAddr = document._html5Player.src;
                }
            } else if(ChannelID!=="cctv_news01"&&ChannelID!=="cctv_news02"&&ChannelID!=="cctv_news03"&&ChannelID!=="cctv_news04") {
                if((hls_vod_url.indexOf("AUTH=")==-1) || hls_vod_url.indexOf("amode=1")==-1) {
                    setHtml5VideoNewUrl(hls_vod_url);
                } else{
                    checkHtml5Auth(true, "new_url", "http://h5.cntv.powzamedia.com/cntv/new_url");
                }
            } else{
                setHtml5VideoNewUrl(hls_vod_url);
            }

        }

    }
    else
    {
        getFlashVer();

        if(!isFlashPlayer || (getChromeVersion()>=55&&flashChecker().v<23))
        {
            document.getElementById(divId).innerHTML = "";
            showInstallFlashPlayerMsg(divId, html5PlayerWidth, html5PlayerHeight);
            return;
        }

        fo.write(divId);
        if(typeof(isPlayerOpaque)!="undefined"&&isPlayerOpaque==true || location.href.indexOf("tv.cntv.cn/live")!==-1 || location.href.indexOf("tv.cctv.com/live")!==-1){
            try{
                document.getElementById(divId).style.backgroundColor = "#000";
            } catch(e){
            }
        }

    }
}


function setHtml5VideoNewUrl(newUrl) {
    createHtml5Player(hdsBaseDiv);
    createPlayerElement();
    html5InitEvent2();

    if(newUrl === hls_vod_url) {
        htmlPlayAFile();
        if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
            document._html5Player.load();
        }

        if(useHdsGuoshuangMonitor){
            html5HdsGuoshuang = new HdsGuoshuangAnalytics();
            setHdsGuoshuangInitData(document._html5Player.src);
        }
    } else{
        hls_vod_url = newUrl;
        var _doc = document.getElementsByTagName("head")[0];
        var jsLoader12 = createElementByType("script","convivaJs12","absolute","0px","0px","0px","0px");
        jsLoader12.src = "http://h5.cntv.powzamedia.com/decipher171025d41d8cd98f00b204e9800998ecf8427e.js?r=" + Math.random();


        _doc.appendChild(jsLoader12);

        jsLoader12.onload = function() {
            if(typeof "decipher" !== "undefined") {
                hls_vod_url = decipher(hls_vod_url);
            }

            htmlPlayAFile();
            if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
                document._html5Player.load();
            }
            if(useHdsGuoshuangMonitor){
                html5HdsGuoshuang = new HdsGuoshuangAnalytics();
                setHdsGuoshuangInitData(document._html5Player.src);
            }

            if(typeof(html5LiveBackAddr)!="undefined" && !html5LiveBackAddr) {
                html5LiveBackAddr = document._html5Player.src;
            }

        };

        jsLoader12.onerror = function () {
            htmlPlayAFile();

            if(useHdsGuoshuangMonitor){
                html5HdsGuoshuang = new HdsGuoshuangAnalytics();
                setHdsGuoshuangInitData(document._html5Player.src);
            }

            if(typeof(html5LiveBackAddr)!="undefined" && !html5LiveBackAddr) {
                html5LiveBackAddr = document._html5Player.src;
            }
        }

    }



}

function checkHtml5Auth(asyn, mod, url) {
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp=new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    var sendData = "btime=" + hdsBtime + "&bauth=" + hdsBauth;
    if(mod === "new_url") {
        sendData += "&url=" + encodeURIComponent(hls_vod_url);
    }
    sendData += "&referer=" + encodeURIComponent(location.href);

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            /*console.log(url+":"+xmlhttp.responseText);*/

            var obj = JSON.parse(xmlhttp.responseText);
            var flag = obj.tag;
            if(flag != 1) {
                html5AuthFlag = "0";
            }

            if(mod==="new_url") {
                if(obj.new_url && html5AuthFlag==="1") {
                    setHtml5VideoNewUrl(obj.new_url);
                } else{
                    html5HdsCopyrightMsg(hdsBaseDiv, html5PlayerWidth, html5PlayerHeight, "auth", "autherror:new_url");
                }
            }
        }
    }

    xmlhttp.open("POST",url, asyn);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8");
    xmlhttp.send(sendData);
}



function getChromeVersion(){
    var ver = "";
    var start = navigator.userAgent.indexOf("Chrome/");
    var cutStr = navigator.userAgent.substr(start + 7);
    ver = parseInt(cutStr);
    return ver;
}

function html5InitEvent2(){
    for (key in media_events) {
        html5AddListener(document._html5Player,key,capture2);
    }
}

function capture2(event){
    if(event.type == "ended")
    {

        if(html5HdsGuoshuang){
            html5HdsGuoshuang.isPlaying = false;
            html5HdsGuoshuang.doEnd();
        }
    }

    if(event.type == "playing")
    {
        if(html5HdsGuoshuang && !html5HdsGuoshuang.isPlaying){
            html5HdsGuoshuang.isPlaying = true;
            html5HdsGuoshuang.doPlaying();
        }

        if(document.getElementById("playbtn_img")) {
            removeHdsStartPlayBtn();
        }
    }

    if(event.type=="play" && html5HdsGuoshuang && !html5HdsGuoshuang.played){

        html5HdsGuoshuang.videoPlay.beginPreparing();
        html5HdsGuoshuang.videoPlay.endPreparing(true, html5HdsGuoshuang.metadata);
        html5HdsGuoshuang.played = true;
    }

    if(event.type == "pause"){

        if(html5HdsGuoshuang){
            html5HdsGuoshuang.isPlaying = false;
            html5HdsGuoshuang.doPause();
        }
    }

    if(isShowH5VideoLoading) {
        if (event.type == "waiting" || event.type == "seeking" || event.type == "seeked") {
            if (/(iphone|ipad)/i.test(navigator.userAgent)) {
                document.getElementById("hds_video_content_is_loading").style.display = "block";
            }

        } else {

            if (/(iphone|ipad)/i.test(navigator.userAgent) && (event.type == "canplaythrough")) {
                document.getElementById("hds_video_content_is_loading").style.display = "none";
            }
        }
    }
}


function html5AddListener(obj,type,handler)
{
    if(obj.attachEvent)
    {
        obj.attachEvent('on'+type,handler);
    }else if(obj.addEventListener)
    {
        obj.addEventListener(type,handler,false);
    }
}



function createHtml5Player(mainDivId)
{

    var baseDiv = document.getElementById(mainDivId);
    if(isLivePublic !== "2"){
        baseDiv.innerHTML = "";
    }
    baseDiv.style.position = "relative";
    baseDiv.style.width = html5PlayerWidth+"px";
    baseDiv.style.height = html5PlayerHeight+"px";
    document._baseDiv = baseDiv;
    var html5VideoBack = createElementByType("div","html5VideoBack","absolute",html5PlayerWidth+"px",html5PlayerHeight+"px","0px","0px");
    html5VideoBack.style.backgroundColor = "#000000";
    document._baseDiv.appendChild(html5VideoBack);
    document._html5VideoBack =  document.getElementById("html5VideoBack");

}
function createPlayerElement()
{


    var playerDiv = document.createElement("video");
    playerDiv.setAttribute("id","html5Player");
    playerDiv.style.position = "absolute";
    playerDiv.style.zIndex = "1";
    playerDiv.style.width = html5PlayerWidth+"px";
    playerDiv.style.height = html5PlayerHeight+"px";
    //playerDiv.style.left = html5PlayerLeft;
    //playerDiv.style.top = html5PlayerTop;
    playerDiv.setAttribute("webkit-playsinline", "");
    playerDiv.setAttribute("playsinline", "");
    playerDiv.setAttribute("x-webkit-airplay", "isHtml5UseAirPlay");

    if(typeof(hdsPosterImg)!="undefined" && hdsPosterImg.length > 3)
    {
        playerDiv.poster = hdsPosterImg;
    }


    /*
     if(/(android)/i.test(navigator.userAgent) && getAndroidVersion()<4)
     {
     playerDiv.src = rtsp_vod_url;
     }
     else
     {
     playerDiv.src = hls_vod_url;// "http://cntv.soooner.com/flash/mp4video27/TMS/wuxi/2013/02/10/9c749d2433643ddd528fd8ab0a4e5c44_h264818000nero_aac32-1.mp4";
     }
     */

    //playerDiv.src = hls_vod_url;//"http://cntv.soooner.com/flash/mp4video27/TMS/wuxi/2013/02/10/9c749d2433643ddd528fd8ab0a4e5c44_h264818000nero_aac32-1.mp4";
    //playerDiv.controls = "controls";
    /*
     var clientInfo = navigator.userAgent.toLowerCase();
     if((typeof(isAutoPlay)!="undefined" && isAutoPlay) || (clientInfo.indexOf("baiduboxapp")!==-1 && /(android)/i.test(clientInfo))){
     playerDiv.setAttribute("autoplay","autoplay");
     }
     */

    playerDiv.controls = false;

    playerDiv.preload="none";
    document._baseDiv.appendChild(playerDiv);
    document._html5Player = document.getElementById("html5Player");
    showHdsPlayButton();


    var videoContentIsLoadingTag = document.createElement("img");
    videoContentIsLoadingTag.setAttribute("id","hds_video_content_is_loading");
    videoContentIsLoadingTag.setAttribute("src", "http://player.cntv.cn/html5Player/images/cctv_html5player_loading.gif");
    videoContentIsLoadingTag.style.position = "absolute";
    videoContentIsLoadingTag.style.width = '120px';
    videoContentIsLoadingTag.style.height = '42px';
    videoContentIsLoadingTag.style.left = html5PlayerWidth/2 - 60 + "px";
    videoContentIsLoadingTag.style.top = html5PlayerHeight/2 -21 + "px";
    videoContentIsLoadingTag.style.zIndex = "999";
    videoContentIsLoadingTag.style.display = "none";
    videoContentIsLoadingTag.onclick = function() {
        document._html5Player.play();
    }
    document._baseDiv.appendChild(videoContentIsLoadingTag);


}

function createElementByType(type,_id,position,_w,_h,_l,_t)
{
    var el = document.createElement(type);
    el.setAttribute("id",_id);
    el.style.position = position;
    el.style.width = _w;
    el.style.height = _h;
    el.style.left = _l;
    el.style.top = _t;
    return el;
}

var isfirst = true;

function getAndroidVersion()
{
    var version = "";
    var clientInfo = navigator.userAgent.toLowerCase();
    var pos = clientInfo.indexOf("android");
    if(pos > 0)
    {
        version = clientInfo.substr(pos+7);
        version = parseInt(version);

        if(!version)
        {
            version = clientInfo.substr(pos+8);
            version = parseInt(version);
        }
    }
    return version;

}


function htmlPlayAFile()
{
    if(isLivePublic !== "1") {
        createHtml5ConvivaEvent();
    }


    //document._html5Player.pause();
    if(/(android)/i.test(navigator.userAgent) && getAndroidVersion()<4)
    {
        document._html5Player.src = rtsp_vod_url;
    }
    else
    {
        document._html5Player.src = hls_vod_url;
    }
    if(!isfirst)
    {
        document._html5Player.load();
        document._html5Player.play();
    }
    isfirst = false;
    //alert(document._html5Player.src);
}


function getQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null)
    {
        return unescape(r[2]);
    }
    else
    {
        return "";
    }

}

var _0x40ce=["\x75\x64\x6B\x32\x37\x76\x6E\x38\x6C\x64\x66\x33\x6C\x63\x76\x31\x73\x70","\x70\x61\x72\x73\x65","\x30","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x2F\x63\x6E\x74\x76\x6C\x69\x76\x65\x2F","\x6D\x64\x2E\x6D\x33\x75\x38","\x2D","\x64\x6C\x39\x32\x66\x39\x63\x6A\x68\x33\x68\x38\x32\x76\x63\x36\x32\x6B\x78\x61\x6C\x69\x77\x6C\x31\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x6C\x73\x32\x2E\x63\x6E\x74\x76\x2E\x6D\x79\x61\x6C\x69\x63\x64\x6E\x2E\x63\x6F\x6D","\x3F\x61\x75\x74\x68\x5F\x6B\x65\x79\x3D","\x4C\x49\x56\x45\x2D\x48\x4C\x53\x2D\x43\x44\x4E\x2D\x54\x58\x59","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x63\x74\x76\x35\x2E\x74\x78\x74\x79\x2E\x35\x32\x31\x33\x2E\x6C\x69\x76\x65\x70\x6C\x61\x79\x2E\x6D\x79\x71\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6C\x69\x76\x65\x2F","\x5F\x74\x78\x74\x79\x2E\x6D\x33\x75\x38","\x68\x75\x61\x77\x65\x69","\x69\x6E\x64\x65\x78\x4F\x66","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x6C\x6F\x61\x64","\x5F\x68\x74\x6D\x6C\x35\x50\x6C\x61\x79\x65\x72","\x73\x72\x63","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x4C\x49\x56\x45\x2D\x48\x44\x53\x2D\x43\x44\x4E\x2D\x41\x4C\x49"];function setHtml5AliNewUrl(){var _0x692ax2=_0x40ce[0];var _0x692ax3=Date[_0x40ce[1]]( new Date())/ 1000;var _0x692ax4=_0x40ce[2];var _0x692ax5=Math[_0x40ce[4]](Math[_0x40ce[3]]()* 1000);var _0x692ax6=_0x40ce[5]+ ChannelID+ _0x40ce[6];var _0x692ax7=setH5Str(_0x692ax6+ _0x40ce[7]+ _0x692ax3+ _0x40ce[7]+ _0x692ax5+ _0x40ce[7]+ _0x692ax4+ _0x40ce[7]+ _0x40ce[8][19]+ html5Aauth+ _0x692ax2[_0x40ce[9]](5,11)+ html5CdnStr);var _0x692ax8=_0x692ax3+ _0x40ce[7]+ _0x692ax5+ _0x40ce[7]+ _0x692ax4+ _0x40ce[7]+ _0x692ax7;hls_vod_url= _0x40ce[10]+ _0x692ax6+ _0x40ce[11]+ _0x692ax8;var _0x692ax9=hls_vod_url;if(isHtml5Tengxun(ChannelID)){cdnName= _0x40ce[12];hls_vod_url= _0x40ce[13]+ ChannelID+ _0x40ce[14]};createHtml5Player(hdsBaseDiv);createPlayerElement();html5InitEvent2();htmlPlayAFile();if(navigator[_0x40ce[18]][_0x40ce[17]]()[_0x40ce[16]](_0x40ce[15])> 0){document[_0x40ce[20]][_0x40ce[19]]()};if(useHdsGuoshuangMonitor){html5HdsGuoshuang=  new HdsGuoshuangAnalytics();setHdsGuoshuangInitData(document[_0x40ce[20]][_0x40ce[21]])};if( typeof (html5LiveBackCndCode)!== _0x40ce[22]){html5LiveBackCndCode= _0x40ce[23]};if( typeof (html5LiveBackCndCode)!== _0x40ce[22]){html5LiveBackAddr= _0x692ax9}};



function isHtml5Tengxun(channel) {

    var flag = false;
    var channels = [];
    var len = channels.length;
    for(var i=0; i<len; i++) {
        if(channel === channels[i]) {
            flag = true;
            break;
        }
    }

    if(cdnName === "LIVE-HLS-CDN-TXY") {
        flag = true;
    }

    return flag;
}


function showHdsPlayButton() {
    //var playbtnBackgroundDiv = document.createElement("div");
    var playerWidth = document.getElementById("html5Player").style.width.replace("px", "");
    var playerHeight = document.getElementById("html5Player").style.height.replace("px", "");
    //var playerLeft = document.getElementById("html5Player").style.left.replace("px","");
    //var playerTop = document.getElementById("html5Player").style.top.replace("px","");

    // playbtnBackgroundDiv.setAttribute("id","playbtn_background");
    // playbtnBackgroundDiv.style.zIndex = "50";
    // playbtnBackgroundDiv.style.position = "absolute";
    // playbtnBackgroundDiv.style.width = "70px";
    // playbtnBackgroundDiv.style.height = "70px";
    // playbtnBackgroundDiv.style.left = playerLeft + "px";
    // playbtnBackgroundDiv.style.top = playerTop + "px";
    // playbtnBackgroundDiv.style.background = "black";
    // playbtnBackgroundDiv.style.opacity = "0.5";

    var playbtnDiv = document.createElement("div");
    playbtnDiv.setAttribute("id", "playbtn_img");
    playbtnDiv.style.zIndex = "100";
    playbtnDiv.style.position = "absolute";
    playbtnDiv.style.width = "70px";
    playbtnDiv.style.height = "70px";
    playbtnDiv.style.opacity = "1";
    playbtnDiv.style.margin = "0px auto";
    playbtnDiv.style.background = "url(http://player.cntv.cn/images/ipad/playBtnH5.png) no-repeat";
    playbtnDiv.style.backgroundSize = "70px 70px";
    playbtnDiv.style.textAlign = "center";
    playbtnDiv.style.left = parseInt(playerWidth / 2) - 35 + "px";
    playbtnDiv.style.top = parseInt(playerHeight / 2) - 35 + "px";
    //playbtnDiv.innerHTML = '<img src="http://player.cntv.cn/images/ipad/playBtnH5.png?3" style="width:70px;height:70px;" />';

    document.getElementById("html5Player").removeAttribute("controls");
    //playbtnBackgroundDiv.addEventListener('click', removeStartPlayBtn, false);
    playbtnDiv.addEventListener('click', removeHdsStartPlayBtn, false);

    //document._baseDiv.appendChild(playbtnBackgroundDiv);
    document._baseDiv.appendChild(playbtnDiv);

    document.getElementById("html5Player").addEventListener('click', removeHdsStartPlayBtn, false);

}

function removeHdsStartPlayBtn() {

    var playbtnTag = document.getElementById("playbtn_img");

    try{
        if(playbtnTag) {
            playbtnTag.parentNode.removeChild(playbtnTag);
        } else{
            return;
        }
        document.getElementById("html5Player").removeEventListener('click', removeHdsStartPlayBtn, false);

        if(isUseConvivaMonitor){
            setConvivaMetadata();   //启动conviva统计
        }

        if(useCntvMonitor) {
            setCntvMetadata();
        }

    } catch(e){

    }

    document.getElementById("html5Player").controls = true;
    if(navigator.userAgent.toLowerCase().indexOf("huawei")===-1) {
        document.getElementById("html5Player").load();
    }
    document.getElementById("html5Player").play();

}



function getFlashVer(){
    var fls=flashChecker();
    var s="";
    if(fls.f&&(fls.v>=10))
    {
        isFlashPlayer = true;
    }
    else {
        isFlashPlayer = false;
    }
}

function flashChecker()
{
    var hasFlash=0;         //是否安装了flash
    var flashVersion=0; //flash版本
    var isIE=/*@cc_on!@*/0;      //是否IE浏览器

    if(isIE)
    {
        try{
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if(swf) {
                hasFlash=1;
                VSwf=swf.GetVariable("$version");
                flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        }catch(e)
        {
            //alert(e);
        }
    }else{
        if (navigator.plugins && navigator.plugins.length > 0)
        {
            try{
                var swf=navigator.plugins["Shockwave Flash"];
                if (swf)
                {
                    hasFlash=1;
                    var words = swf.description.split(" ");
                    for (var i = 0; i < words.length; ++i)
                    {
                        if (isNaN(parseInt(words[i]))) continue;
                        flashVersion = parseInt(words[i]);

                        if(!isIPad() && getChromeVersion()>=55 && flashVersion>=23 && swf.filename==="internal-not-yet-present"){
                            flashVersion = 22;
                        }
                    }
                }
            }catch(e){
                //alert(e);
            }
        }
    }
    return {
        f:hasFlash,
        v:flashVersion
    };
}


function  showInstallFlashPlayerMsg(playerId, w, h){
    w += "";
    h += "";

    if(w.indexOf("%")===-1) {
        w += "px"
    }

    if(h.indexOf("%")===-1) {
        h += "px"
    }

    var msg = "请点此安装最新Flash";
    var str = "<div class=\"flash_install\"><a style='color:#cccccc;font-size:16px;text-decoration:underline;' href=\"http://www.adobe.com/go/getflashplayer_cn\" onfocus=\"this.blur()\"><img src=\"http://player.cntv.cn/flashplayer/logo/get_adobe_flash_player.png\"/><p style='margin-top:8px;color:#cccccc'>" + msg + "</p></a></div>";

    if(playerId === "vplayer" && document.getElementById("myFlash") && !document.getElementById("vplayer")) {
        playerId = "myFlash";
    }
    var result_box = document.getElementById(playerId);
    result_box.style.position = "relative";
    result_box.style.width = w;

    result_box.style.height = h;

    var bg = document.createElement("img");
    bg.position = "absolute";
    bg.src = "http://t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif";

    bg.style.width = w;
    bg.style.height = h;
    result_box.style.lineHeight = "20px";
    result_box.appendChild(bg);

    var errorPanel = document.createElement("div");
    errorPanel.style.position = "absolute";
    errorPanel.style.margin = "0 auto";
    errorPanel.style.width = w;
    errorPanel.style.textAlign = "center";
    var errorTop = 0;
    if(h.indexOf("%")===-1) {
        errorTop = 3*parseInt(h)/5 + "px";
    } else{
        errorTop = 3*100/5 + "%";
    }
    errorPanel.style.top = errorTop;
    errorPanel.style.color = "#dddddd";
    errorPanel.style.fontSize = "16px";
    errorPanel.style.fontWeight = "bold";
    errorPanel.innerHTML = str;
    errorPanel.align = "center";
    result_box.appendChild(errorPanel);

    return;
}


function setHdsGuoshuangInitData(addr){
    html5HdsGuoshuang.infoProvider = {
        getFramesPerSecond:function(){
            return 0;
        },
        getPosition:function(){
            return 0.00;
        },
        getBitRate:function(){
            return 0;
        }
    };


    html5HdsGuoshuang.metadata = {
        videoDuration: 0,//点播视频的总时长
        getFramesPerSecond:function(){
            return 0;//每秒的帧数
        },
        getBitRateKbps:function(){
            return 0;//码率
        },
        getIsBitRateChangeable:function(){
            return false;//码率是否可变
        }
    };

    addr = addr.indexOf("?")!==-1 ? addr.substr(0, addr.indexOf("?")) : addr;
    html5HdsGuoshuang.videoInfo.VideoOriginalName = VideoName;
    html5HdsGuoshuang.videoInfo.VideoName = VideoName;

    html5HdsGuoshuang.videoInfo.VideoUrl = addr;
    html5HdsGuoshuang.videoInfo.VideoID = VideoName;
    html5HdsGuoshuang.videoInfo.VideoTVChannel = ChannelID;
    html5HdsGuoshuang.videoInfo.VideoWebChannel = ChannelID;
    html5HdsGuoshuang.videoInfo.Cdn = cdnName;
}

function HdsGuoshuangAnalytics(){
    this.videoPlay = null;
    this.played = false;
    this.isPlaying = false;
    this.infoProvider = {
        getFramesPerSecond:function(){return "";},
        getPosition:function(){
            return ""
        },
        getBitRate:function(){
            return "";
        }
    };

    this.videoInfo = {
        VideoID:ChannelID,
        VideoOriginalName:"",
        VideoName:"",
        VideoUrl:"",
        VideoTag:"",
        VideoTVChannel:"",
        VideoWebChannel:"",
        VideoFocus:"",
        VideoParent:"",
        Cdn:"",
        extendProperty1:"HTML5",
        extendProperty2:"20170113"//没有的话传更新日期
    };

    this.metadata = {
        videoDuration:20,//点播视频的总时长
        getFramesPerSecond:function(){
            return 25;//每秒的帧数
        },
        getBitRateKbps:function(){
            return 450;//码率
        },
        getIsBitRateChangeable:function(){
            return true;//码率是否可变
        }
    };

    this.doStart = function(){
        var track = null;
        if(getQueryString("fromapp")==="cctvnews"){
            track = new GridsumVideoDissector("GVD-200094","GSD-200094");
        } else{
            track = new GridsumVideoDissector("GVD-200084","GSD-200084");
        }
        try{

            if(typeof(sns_userid)=="undefined")
            {
                sns_userid = window.parent.sns_userid;
                sns_islogin = window.parent.passport.isLoginedStatus().toString();
            }
            else
            {
                sns_islogin = passport.isLoginedStatus().toString();
            }

            if(sns_userid == null)
            {
                sns_userid = "";
            }

        }
        catch(e){
            sns_userid = "";
            sns_islogin = "false";
        }
        if(sns_islogin=="true" && sns_userid){
            track.setUserId (sns_userid);
        }
        track.setPlatform ('Html5');
        this.videoPlay = track.newLivePlay(this.videoInfo, this.infoProvider);//如果是点播播放，通过track.newVodPlay方法进行初始化

        /*
         this.videoPlay.beginPreparing();
         this.videoPlay.endPreparing(true, this.metadata);
         this.played = true;
         */
    };

    this.doPlaying = function(){
        if(this.played){
            this.videoPlay.onStateChanged("playing");
        }
    };

    this.doPause = function(){
        if(this.played){
            this.videoPlay.onStateChanged("paused");
        }
    };


    this.doEnd = function(){
        if(this.played){
            this.videoPlay.endPlay();
        }
    };
}

function checkHdsGuoshuang(){
    var timer = null;
    timer = setInterval(function(){
        if(html5HdsGuoshuang && html5HdsGuoshuang.videoInfo.VideoUrl){
            clearInterval(timer);
            html5HdsGuoshuang.doStart();
        }
    }, 300);

}

function doLoadHtml5AnalyticsJs(from, jsId, callback){
    var jsUrl = "";
    var isLoaded = false;
    if(from === "shuguang"){
        jsUrl = shuguangJs;
        isLoaded = useHdsShuguangMonitor;
    } else if(from === "guoshuang"){
        jsUrl = guoshuangJs;
        isLoaded = useHdsGuoshuangMonitor;
    } else if(from === "cntv") {
        jsUrl = cntvMonitorJs;
        isLoaded = useCntvMonitor;
    } else{
        jsUrl = hdsConvivaJs;
        isLoaded = hdsUseCovivaMonitor;
    }

    if(isLoaded){

        var jsLoader5 = createElementByType("script",jsId,"absolute","0px","0px","0px","0px");
        jsLoader5.src = jsUrl;

        var _doc = document.getElementsByTagName('head')[0];
        _doc.appendChild(jsLoader5);

        jsLoader5.onload = function()
        {
            callback();
        };

        jsLoader5.onreadystatechange = function()
        {
            if (jsLoader5.readyState == 'loaded' || jsLoader5.readyState == 'complete')
            {
                callback();
            }
        }
    }

}


function checkHdsCntv() {

}


function checkHdsShuguang(){
    var timer = null;
    timer = setInterval(function(){
        if(typeof(musesagent) != "undefined" && musesagent && hls_vod_url && hdsBaseDiv){
            clearInterval(timer);
            initHdsMusesPlugin();
        }

    }, 300);

}

function initHdsMusesPlugin(){
    var agent = new musesagent(hdsBaseDiv);

    agent.playtype("lvpl");
    agent.dataSource("html5Player");
    agent.vName(VideoName);
    if(/(android)/i.test(navigator.userAgent) && getAndroidVersion()<4)
    {
        agent.u(rtsp_vod_url);
    }
    else
    {
        agent.u(hls_vod_url);
    }
    agent.vp("GVD-200084");
    agent.vWebChannel(ChannelID);
    agent.cdn(cdnName);
    agent.vlength(1);
}


function doLoadHtml5ConvivaJs() {

    var jsLoader = createElementByType("script","convivaJs1","absolute","0px","0px","0px","0px");
    jsLoader.src = ConvivaImplJs;

    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);

    var jsLoader9 = createElementByType("script","convivaJs2","absolute","0px","0px","0px","0px");
    jsLoader9.src = ConvivaLibarylJs;


    _doc.appendChild(jsLoader9);

    jsLoader9.onload = function()
    {
        checkHdsConviva();
    };

    jsLoader9.onreadystatechange = function()
    {
        if (jsLoader9.readyState == 'loaded' || jsLoader9.readyState == 'complete')
        {
            checkHdsConviva();
        }
    }
}


function doLoadAliAnalyticsJs() {

    var jsLoader = createElementByType("script","convivaJs237","absolute","0px","0px","0px","0px");
    jsLoader.src = AliMonitorJs;

    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);
}

function flashSendDataToAli(v1, v2, v3, v4) {
    if(typeof goldlog!="undefined" && typeof goldlog.record!="undefined") {
        goldlog.record(v1, v2, v3, v4);
    }
}


function setCntvMetadata(msgType, errorMsg) {
    var videoId = "";
    var videoData = null;
    var urlSplit = "";
    if(msgType=="690003") {
        videoData = {
            v_id: ChannelID,
            channel: ChannelID,
            ver: cntvMonitorVersion,
            applicationName: "CNTV_HTML5_PLAYER",
            playerName: "live_hds",
            streamType: "live",
            assetName: ChannelID,
            streamUrl: "",
            playAMR: "F",
            streamMBR: "1",
            bit: "500",
            streamProtocol: "HLS",
            referURL: encodeURIComponent(location.href.substr(0, 127)),
            videoProfile: "vdn",
            error_code: msgType,
            error_info: errorMsg
        };

        urlSplit = location.href.split("/");
        if(urlSplit.length > 1 && typeof(goldlog.initSession) != "undefined") {
            videoData.site = encodeURIComponent(urlSplit[2]);
        }

        goldlog.initSession(videoId, videoData);

    } else{
        var checkTimeout = 0;
        var checkSessionTimer = setInterval(function (){
            checkTimeout++;

            if(checkTimeout > 50){
                clearInterval(checkSessionTimer);
            }

            if(typeof(goldlog.startSession) != "undefined") {
                clearInterval(checkSessionTimer);
                videoId = "html5Player";
                videoData = {
                    v_id: ChannelID,
                    channel: ChannelID,
                    ver: cntvMonitorVersion,
                    applicationName: "CNTV_HTML5_PLAYER",
                    playerName: "live_hds",
                    streamType: "live",
                    assetName: ChannelID,
                    streamUrl: encodeURIComponent(hls_vod_url),
                    playAMR: "F",
                    streamMBR: "1",
                    bit: "500",
                    streamProtocol: "HLS",
                    referURL: encodeURIComponent(location.href.substr(0, 127)),
                    cdnCode: cdnName,
                    videoProfile: "vdn",
                    vdnSID: hdsConvivaVdnSid,
                    vdnIP: hdsConvivaCdnInfo.vdnIP,
                    vdnCountryCode: hdsConvivaCdnInfo.vdnCountryCode,
                    vdnProvinceCode: hdsConvivaCdnInfo.vdnProvinceCode,
                    vdnCityCode: hdsConvivaCdnInfo.vdnCityCode,
                    vdnISPCode: hdsConvivaCdnInfo.vdnISPCode,
                    public: isLivePublic

                };


                urlSplit = location.href.split("/");
                if(urlSplit.length > 1) {
                    videoData.site = encodeURIComponent(urlSplit[2]);
                }

                if(msgType == "init") {
                    goldlog.initSession(videoId, videoData);
                } else{
                    goldlog.startSession(videoId, videoData, 20);
                }


            }
        }, 200);
    }



}

function setConvivaMetadata(errorMsg) {
    var checkTimeout = 0;

    var checkSessionTimer = setInterval(function (){
        checkTimeout++;
        if(convivaClient && convivaPlayerStateManager){
            clearInterval(checkSessionTimer);
            //Create metadata
            var contentMetadata = new Conviva.ContentMetadata();
            contentMetadata.assetName = ChannelID;
            contentMetadata.streamUrl = hls_vod_url;
            contentMetadata.streamType = Conviva.ContentMetadata.StreamType.LIVE;
            contentMetadata.defaultBitrateKbps = Math.floor(500); // in Kbps
            if(isLivePublic === "2") {
                contentMetadata.applicationName = "CNTV_HTML5_AUDIO_PLAYER";
            } else{
                contentMetadata.applicationName = "CNTV_HTML5_PLAYER";
            }
            contentMetadata.defaultResource = cdnName;


            if(typeof(userid)!="undefined" && typeof(userid)=="string")
            {
                contentMetadata.viewerId = userid;
            } else{
                contentMetadata.viewerId = getCookie_vdn("Fingerprint") ? getCookie_vdn("Fingerprint"):"";
            }

            var tags = {};

            tags.cdnCode =  cdnName;

            tags.playScene = "HTML5";
            tags.appName = "WEB.HTML5";

            tags.channel = ChannelID;
            tags.contentId = ChannelID;

            var urlSplit = location.href.split("/");
            if(urlSplit.length > 1)
            {
                tags.site = urlSplit[2];
            }

            if(/(android)/i.test(navigator.userAgent) && getAndroidVersion()<4)
            {
                tags.streamProtocol = "RTMP";
            }
            else
            {
                tags.streamProtocol = "HLS";
            }
            tags.playerVendor = "Internal";
            tags.playerVersion = "2018.09.16.01";
            tags.referURL = location.href.substr(0, 127);
            tags.videoProfileType = "VDN";
            tags.P2PStyle = "F";

            tags.streamMBR = "1";
            tags.playAMR = "F";

            if(hdsIsNormalVideo)
            {
                tags.normalVideo = "T";
            }
            else
            {
                tags.normalVideo = "F";
            }


            tags.vdnSID = hdsConvivaVdnSid;
            tags.vdnIP = hdsConvivaCdnInfo.vdnIP;
            tags.vdnCountryCode = hdsConvivaCdnInfo.vdnCountryCode;
            tags.vdnProvinceCode = hdsConvivaCdnInfo.vdnProvinceCode;
            tags.vdnCityCode = hdsConvivaCdnInfo.vdnCityCode;
            tags.vdnISPCode = hdsConvivaCdnInfo.vdnISPCode;
            tags.playerAlterName = "live_hds";

            contentMetadata.custom = tags;

            var videoElement = document._html5Player;

            // Create a Conviva monitoring session.
            convivaSessionKey = convivaClient.createSession(contentMetadata);

            //vdn请求失败后的报错
            if(!hls_vod_url) {
                convivaClient.reportError(
                    convivaSessionKey,
                    errorMsg?errorMsg:"VDN_REQUEST_FAILED",
                    Conviva.Client.ErrorSeverity.FATAL
                );
                convivaClient.cleanupSession(convivaSessionKey);
            } else {
                var html5PlayerInterface = new Html5PlayerInterface(convivaPlayerStateManager, videoElement);
            }


            // sessionKey was obtained as shown above
            convivaClient.attachPlayer(convivaSessionKey, convivaPlayerStateManager);

            videoElement.addEventListener('error',function() {
                cleanupSession();
            });
            videoElement.addEventListener('ended',function() {
                cleanupSession();
            });
            function cleanupSession() {
                convivaClient.cleanupSession(convivaSessionKey);

            }

        }

        if(checkTimeout > 50){
            clearInterval(checkSessionTimer);
        }

    }, 200);
}

var convivaSessionKey = null;

function createHtml5ConvivaEvent() {
    var voice = "no";
    if(isLivePublic === "2"){
        voice = "yes";
    }
    var eventAttributes = {
        "assetName": ChannelID,
        "device": "[WEB.HTML5].[HTML5].[2018.09.16.01]",
        "client": "[" + hdsConvivaCdnInfo.vdnISPCode + "].[" + hdsConvivaCdnInfo.vdnCityCode + "].[" + hdsConvivaCdnInfo.vdnProvinceCode + "].[" + hdsConvivaCdnInfo.vdnCountryCode + "].[" + hdsConvivaCdnInfo.vdnIP + "]",
        "voice": voice
    };
    var checkTimer = setInterval(function (){
        if(convivaClient && typeof(Conviva)!="undefined") {
            clearInterval(checkTimer);
            convivaClient.sendCustomEvent(Conviva.Client.NO_SESSION_KEY, "NO_COPYRIGHT_EVENT", eventAttributes);
        }
    }, 50);

}

function checkHdsConviva()
{
    var jsLoadTimeout = 0;

    var checkTimer = setInterval(function (){
        jsLoadTimeout++;
        try{

            var systemSettings = new Conviva.SystemSettings();
            var systemInterface = new Html5SystemInterfaceFactory().build();
            var systemFactory = new Conviva.SystemFactory(systemInterface, systemSettings);

            //Customer integration CUSTOMER_KEY
            var CUSTOMER_KEY = "03798c7108aa9ad57f419fa2a1c7e155f38a6343";
            var clientSettings = new Conviva.ClientSettings(CUSTOMER_KEY);
            //clientSettings.gatewayUrl = "";
            convivaClient = new Conviva.Client(clientSettings, systemFactory);
            convivaPlayerStateManager = convivaClient.getPlayerStateManager();
            clearInterval(checkTimer);
        } catch(e){
            if(jsLoadTimeout > 50){
                clearInterval(checkTimer);
            }

        }
    }, 200);
}



!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.setH5Str=t}(this);


//设置cookie    2017年7月28日16:11:42
function setCookie_vdn(key,value,day){
    if(day){
        var d = new Date();
        d.setTime(d.getTime() + day*24*60*60*1000);
        document.cookie=key + "=" + value + ";expires=" + d.toGMTString();
    }else{
        document.cookie=key + "=" + value;
    }

    try{
        if(window.localStorage) {
            localStorage.setItem(key, value);
        }
    } catch (e){
    }

}

//删除cookie
function removeCookie_vdn(key){
    setCookie_vdn(key,"",-1);
}
//获取cookie方法
function getCookie_vdn( key ){

    var v = "";
    //判断是否含有cookie ，有cookie 就获取出来
    if( document.cookie ){
        var str = document.cookie;//获取cookie信息   键1=值1; 键2=值1; 键3=值3;
        var arr = str.split("; ");//将cookie文件按照 ;   拆成数组
        for(var i = 0 ; i <arr.length ; i++){
            var  item = arr[i].split("=");// 将数组中的每一个字符串通过=拆成一个小数组 [键1,值1]
            //判断小数组中 根据已知的键  下标为 [0] 为已知键，找到对应的值
            if(item[0] == key){
                v = item[1].toString();//将key对应的值返回此处返回的为字符串 将return JSON.parse(item[1])
                break;
            }
        }

    }
    v += "";

    try{
        if((!v ||v.length<20) && window.localStorage) {
            v = localStorage[key] ? localStorage[key] : "";
        }
    } catch (e) {
        v = "";
    }

    //如果没有cookie ，返回一个空数组
    return v;
}


//定义指纹信息在cookie中的key值
function getFingerprint(){
    var fp = new Fingerprint2();
    fp.get(function(result) {
        setCookie_vdn("Fingerprint",result.toUpperCase(),7);
    });
}

/*请求vdn信息*/
function getHdsJsonData(channel, playerId, w, h){

    if(!getCookie_vdn("Fingerprint")){
        //获取设备指纹信息
        getfingerprint2();
    } else{
        vdn_uid = getCookie_vdn("Fingerprint");
        //console.log(vdn_uid+"9090909090909090")
    }


    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","hdsJsLoader","absolute","0px","0px","0px","0px");
    var vdnUrl = "http://vdn.live.cntv.cn/api2/liveHtml5.do?channel=pa://cctv_p2p_hd" + channel ;
    if(isIPad()){
        vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5+vdn_uid)).toLocaleUpperCase();
        vdnUrl += "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
        vdnUrl += "&ip=101.248.0.0";
    }
    else {
        vdn_vc = setH5Str((vdn_tsp+vdn_vnFlash+staticCheck_Flash+vdn_uid)).toLocaleUpperCase()
        vdnUrl += "&client=flash"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnFlash + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    }

    getHtml5VideoData = function(){};

    jsLoader.src = vdnUrl;
    _doc.appendChild(jsLoader);

    if(isIPad()){
        try{
            doLoadHtml5AnalyticsJs("guoshuang", "jsLoader5", checkHdsGuoshuang);
            doLoadHtml5AnalyticsJs("shuguang", "jsLoader6", checkHdsShuguang);
            doLoadHtml5AnalyticsJs("cntv", "jsLoader7", checkHdsCntv);
            if(isUseConvivaMonitor){
                if(typeof Conviva === "undefined") {
                    doLoadHtml5ConvivaJs();
                } else{
                    //hds直播清除session
                    if(typeof(convivaClient)!=="undefined" && typeof(convivaSessionKey)!=="undefined" && convivaClient) {
                        convivaClient.cleanupSession(convivaSessionKey);
                    }

                    //flv直播清除session
                    if(typeof(flvConvivaClient)!=="undefined" && typeof(flvSessionKey)!=="undefined" && flvConvivaClient) {
                        flvConvivaClient.cleanupSession(flvSessionKey);
                    }
                }

                setTimeout(function (){
                    if(!hls_vod_url) {
                        if(isHtml5VdnMsg === "1") {
                            setConvivaMetadata("VDN_RESPONSE_EMPTY");
                            setCntvMetadata("690003", "VDN_RESPONSE_EMPTY");
                        } else if(isHtml5VdnMsg === "2"){
                            setConvivaMetadata("VDN_RESPONSE_PARSE_ERROR");
                            setCntvMetadata("690003", "VDN_RESPONSE_PARSE_ERROR");
                        } else{
                            setConvivaMetadata();
                            setCntvMetadata("690003", "VDN_RESPONSE_ERROR");
                        }

                    }
                }, 10000);
            }
        } catch(e){
        }
    }

    if(typeof jsLoader.onload != "undefined"){
        jsLoader.onload = function(){
            getHdsVideoAddr(playerId, w, h);
        };
    }

    if(typeof jsLoader.onreadystatechange != "undefined"){
        jsLoader.onreadystatechange = function(){
            if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete'){
                getHdsVideoAddr(playerId, w, h);
            }
        }
    }
}


function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}

window.addEventListener("beforeunload", function (e) {
    try{

        thisMovie("hds_flash_player").checkExit();
        console.log("beforeunload is ok!");
    } catch(e) {
        
    }
});