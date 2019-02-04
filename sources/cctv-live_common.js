var cntv_flash_live_player_version = '0.1.3.7';
var isFlashPlayer = true;
var cntv_flash_live_player_w;
var cntv_flash_live_player_h;
var cntv_flash_live_player_div;
var cntv_flash_live_channelid;
var cntv_flash_live_isRtmp = "false";
var cntv_flash_live_rtmpName = "";
var cntv_flash_live_rtmpName2 = "";
var cntv_flash_live_url = "";
var cntv_flash_live_url2 = "";
var firstSegmentStart = 0;
var endSegmentEnd = 0;



var version = '0.171.5.8.9.6.3.9';
var _hdsPauseAdplayerPath="http://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf";
//var _hdsAdplayerPath = "http://player.cntv.cn/adplayer/cntvAdPlayer2.swf";
var _hdsAdplayerPath = "http://player.cntv.cn/adplayer/cntvAdPlayer20150521.swf";
var _hdsCornerAdplayerPath = "http://player.cntv.cn/adplayer/cntvCornerADPlayer.swf";
var hdsBgAdVersion = 'ad0.171.5.8.4.5.3..';
var hdsBgAdW = 960;
var hdsBgAdH = 480;

var _hdsAdPause = typeof(_Adpause)=="undefined" ? "" : _Adpause;
var _hdsAdCall = typeof(channelAD)=="undefined" ? "" : channelAD;


var isFlvLivePublic = "1";

var ConvivaImplJs = "http://js.player.cntv.cn/creator/conviva-html5native-impl.js";
var ConvivaLibarylJs = "http://js.player.cntv.cn/creator/conviva-html5native-library.min.js";
var flvConvivaClient = null;
var flvConvivaPlayerStateManager = null;
var isUseConvivaMonitor = true;

var guoshuangJs = "http://app.cntv.cn/special/gridsum/vd/200094.js";
var useGuoshuangMonitor = true;
var html5Guoshuang = null;

var convivaVdnSid = "";
var convivaCdnInfo = { "vdnIP": "", "vdnCountryCode": "", "vdnProvinceCode": "", "vdnCityCode": "", "vdnISPCode": "" };
var cdnName = "";

var shuguangJs = "http://sum.cntvwb.cn/flashplayer/musesh5vedioagent.js";
var useShuguangMonitor = false;


var useCntvMonitor = true;   //开启或关闭阿里数据统计
var cntvMonitorJs = "http://js.player.cntv.cn/creator/html5player_analysis_lib.js";
var AliMonitorJs = "http://g.alicdn.com/alilog??aplus_plugin/cctv.js,aplus_plugin/aplus_u.js";
var cntvMonitorVersion = "2018.09.16.01";

//var convivaInterVal;
var videoName = "none"; //视频名称
var liveBackPath = "http://vdn.apps.cntv.cn/api/livebackForIpad.do";

var isFirstFile = true;

var p2pAdIsPlayed = false;

var isNormalVideo = true;
var rest = 0;
var html5PlayerWidth = 640;
var html5PlayerHeight = 480;
var isGetJsData = false;
var isGetJsDataTimeOut = false;
var timeOutTimer;
var html5LiveBackStarted = false;
var html5LiveBackCndCode = "";
var html5LiveBackTitle = "";

var html5LiveBackAddr = "";
var isHtml5LiveBackTimeShift = false;
var isShowH5VideoLoading = true;

var chapterVos;
var totalLength;
var html5IsRtmp = false;
var currentIndex = 0;
var startTime;
var endTime;

var isMulty = false;
var multiCdnStreamNames = "CNTV-RTMP-OVERSEA-AKAMAI{#}CNTV-RTMP-OVERSEA-LEVEL3";
var streamBits = "2000#1200#850#450#200";
var multiStreamName = "";

var isAkamaiFlv = false;

var html5PlayerLeft = 0;
var html5PlayerTop = 0;

//对借口文档的新字段进行初始化； 2017年7月28日16:26:34
var vdn_tsp =new Date().getTime().toString().slice(0,10);
var vdn_vnFlash = "1537";										//央视网页FlashV1.0
var staticCheck_Flash_02 = "B4B51E8523157ED8D17ADB76041BCD09";	//第二条验证码
var vdn_vnHtml5 = "2049";										//央视网页Html5V1.0
var staticCheck_Html5_02 = "47899B86370B879139C08EA3B5E88267";	//第二条验证码
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
var addOnStr;

var isMultiPlayer = false;
var isAkamaiPlayer = false;
var ourPlayer = false;

var player_info_obj = { w: 640, h: 480, div: "", n: "cctv1", id: "", version: "2012.11.28.1" }; //pa://cctv_p2p_hdcctv5
var isPlayerCreated = false;
//var ptp1_browser_arr = ["IE"];
var ptp1_browser_arr = [];
var isDebug = false;
var p2p2Language = 0;
var useCovivaMonitor = true;
var lct = window.location.href;
var lastP2pTimestamp = 0;

var flvBtime = "";
var flvBauth = "";
var flvHtml5AuthFlag = "1";

if(lct.indexOf("id=debug") > 0) {
    alert("debug ...... ");
    isDebug = true;
    lct = lct.split("?id=debug")[0];
}

var p2p_1_chanel_arr = ["zhuhaiyitao", "zhuhaiertao", "yantaixinwenzonghe", "yantaijingjishenghuo", "yantaigonggong", "xingtaizonghe", "xingtaiyule", "xingtaishenghuo", "xiangyangtai", "shaoguanzonghe", "shaoguangonggong", "ningbosantao", "ningboertao", "nantongxinwen", "nantongshenghuo", "nantongshejiao", "lvliangguangbo", "lijiangzonghe", "lijianggonggong", "jznews", "hebeinongmin", "foshanxinwen", "wuxixinwenzonghe", "wuxidoushizixun", "wuxiyuele", "wuxijingji", "wuxiyidong", "wuxishenghuo", "guangzhouxinwen", "guangzhoujingji", "guangzhoushaoer", "guangzhouzonghe", "guangzhooyingyu", "zhongxueshengpindao", "hubeigouwu", "hubeiyingshi", "hubeijingshi", "hubeitiyu", "hubeijingshi", "hubeijiaoyu", "hubeigonggong", "hubeidst"];

var p2p_2_flv_arr = ["dangyuanwang", "mdy1", "ncpa", "dajuyuan", "waicai01", "waicai02", "waicai03", "waicai04", "studio3", "wlcw"];

var channelCDN = ch_cdn_hd = '';

if(lct.indexOf("tv.cntv.cn/live/") > 0) {

    var ch = lct.split("tv.cntv.cn/live/")[1];
    ch = ch.replace("/", "");
    if(ch.indexOf("?") > 0) {
        ch = ch.split("?")[0];
    }

    for(var i = 0; i < p2p_1_chanel_arr.length; i++) {
        if(ch == p2p_1_chanel_arr[i]) {
            ptp1_browser_arr = ["IE"];
            break;
        }
    }

}
//动态加载fingerprint2.js       2017年7月28日16:11:17
function getfingerprint2(){
    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","jsFingerLoader","absolute","0px","0px","0px","0px");
    jsLoader.src = "http://js.player.cntv.cn/creator/fingerprint2.js";

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

!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.setH5Str=t}(this);

//定义指纹信息在cookie中的key值
function getFingerprint(){
    var fp = new Fingerprint2();
    fp.get(function(result) {
        setCookie_vdn("Fingerprint",result.toUpperCase(),7);
    });
}

function IsMaxthon() {
    try {
        window.external.max_invoke("GetHotKey");
        return true;
    } catch(ex) {
        return false;
    }
}

function createLiveCommonPlayer(divID, w, h, channelid, type) {

    if(document.getElementById(divID)) {
        document.getElementById(divID).innerHTML = "";
    }

    if(document.getElementById('chaoqing_player')) {
        document.getElementById('chaoqing_player').innerHTML = "";
    }

    if(document.getElementById('video-play-js')) {
        document.getElementById('video-play-js').innerHTML = "";
    }

    if(type == "chaoqing") {
        var fo = createHdsLivePlayer(divID, w, h, channelid);
        writePlayer(fo, divID);
    } else if(type == "akamai") {
        creatMultiLivePlayer(divID, w, h, channelid);
    } else {
        isPlayerCreated = false;
        isMultiPlayer = false;
        creatLivePlayer(divID, w, h, channelid);
    }

}

function html5CopyrightMsg(mainDivId, _w, _h, type,errorMsg) {
    var baseDiv = document.getElementById(mainDivId);

    baseDiv.style.position = "relative";
    baseDiv.style.width = _w + "px";
    baseDiv.style.height = _h + "px";
    var appUrl = "http://download.cntv.cn/app/cbox/index.html";
    var msg = "";
    var msgL = 0;
    var msgT = parseInt(_h / 2) - 8;
    var msgWidth = _w;

    if(type === "copyright") {
        msgL = parseInt(_w / 2) - 210;
        msg = "由于播出安排变更，暂时不提供该时段内容。";
        if(videoName.indexOf("2018.cctv.com") !==1) {
            msg = "由于版权原因，您所在的地区暂时无法观看";
        }
    } else if(type === "audio") {
        msgL = parseInt(_w / 2) - 210;
        msgT -= 60;
        msg = "由于播出安排，仅提供该时段播出内容音频，敬请收听。";
    } else if(getQueryString("fromapp") === "cctvnews" || type === "ouzhoubei") {
        msgL = parseInt(_w / 2) - 210;
        msg = "<p style='margin-bottom:10px'>由于版权原因，您所在的地区暂时无法观看</p>";
        msg += "<p>请下载&nbsp;<a style='font-weight:bold;font-size:16px;border:0;color:#cc0000'  href='http://download.cntv.cn/app/cctvnews/index.html'>央视新闻客户端</a>&nbsp;观看</p>";
    } else if(type === "ouzhoubei") {
        msgL = parseInt(_w / 2) - 210;
        msg = "由于版权原因，您所在的地区暂时无法观看";
    } else if(type == "live") {
        msgL = parseInt(_w / 2) - 210;
        msg = "由于播出安排，请速下&nbsp;<a style='font-weight:bold;font-size:16px;border:0;color:#cc0000'  href='" + appUrl + "'>央视影音客户端</a>&nbsp;畅享海量直播节目";
    } else if(type === "auth") {
        msgL = parseInt(_w / 2) - 210;
        msg = "对不起，认证没有通过，暂时无法播放此视频。";
        setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""),errorMsg);
    } else {
        msgL = parseInt(_w / 2) - 288;
        msg = "由于节目播出安排，该视频无法播放。速下&nbsp;<a style='font-weight:bold;font-size:16px;border:0;color:#cc0000'  href='" + appUrl + "'>央视影音客户端</a>&nbsp;畅享世界杯海量视频";
    }
    msgWidth = _w - msgL - 30;

    baseDiv.style.backgroundColor = "#000";
    baseDiv.innerHTML = "<div style='position:relative;z-index:99;width:" + msgWidth + "px;margin: 0px auto;padding:0 auto;text-align: center;border:0;font-size:14px;top:" + msgT + "px;color:#FFF'>" + msg + "<div>";

}

function creatLivePlayer(divID, w, h, channelid, isShowLoading) {

    videoName = channelid.replace("pa://cctv_p2p_hd", "");

    if((videoName === "cctv5" || videoName === "cctv5plus" || videoName === "sportsteama" || videoName === "sportsteamb") && (typeof(area_info_array_country) === "string" && area_info_array_country && area_info_array_country !== "CN" && area_info_array_country !== "MO" || typeof(area_info) === "string" && area_info && area_info.indexOf("CN|") === -1 && area_info.indexOf("MO|") === -1)) {
        html5CopyrightMsg(divID, w, h, "ouzhoubei");
        return;
    }

    player_info_obj.w = w;
    player_info_obj.h = h;
    player_info_obj.n = channelid;
    player_info_obj.div = divID;

    try {
        var domainUrl = document.domain;
        var urlArr = domainUrl.split(".");
        var keyDomain = urlArr[urlArr.length - 2];
        if(keyDomain == "com" || keyDomain == "net" || keyDomain == "org") {
            keyDomain = urlArr[urlArr.length - 3];
        }
        var legalDomains = ["cctv", "cntv", "12371", "gov", "xmtv", "baidu", "hao123", "360", "qihoo", "so", "ipanda", "ncpa-classic", "livechina"];

        for(var num = 0; num < legalDomains.length; num++) {
            if(keyDomain == legalDomains[num]) {
                break;
            }
        }

        if(num >= legalDomains.length) {
            return;
        }
    } catch(e) {
        var preUrl = document.referrer;
        if(preUrl.indexOf(".cctvdream.com.cn") == -1) {
            return;
        }
    }

    if(!isIPad()) {
        var thisP2pTimestamp = parseInt(Date.parse(new Date()));
        if(thisP2pTimestamp - lastP2pTimestamp < 2000) {
            lastP2pTimestamp = thisP2pTimestamp;
            return;
        }
        lastP2pTimestamp = thisP2pTimestamp;
    }

    if(isIPad() && lct.indexOf("date=") > 0 && lct.indexOf("index=") > 0 && player_info_obj.div == "") {
        p2pAdIsPlayed = true;
        return;
    }

    isPlayerCreated = false;
    try {
        if(document.getElementById(divID)) {
            document.getElementById(divID).innerHTML = "";
        }
    } catch(e) {

    }

    debug("creatLivePlayer: channelid ::" + channelid);
    getFlashLiveAddrs(channelid);
    if(isIPad()) {
        if(typeof(isShowLoading) !== "undefined" && isShowLoading === false) {
            isShowH5VideoLoading = false;
        }

        if(videoName == "waicai01" || videoName == "waicai02" || videoName === "cctv5" || videoName === "cctv5plus" || videoName === "cctv1" || videoName === "cctv3" || videoName === "cctv4" || videoName === "cctv7" || videoName === "cctv13" || videoName === "cctv1000" || videoName === "cctvchild") {

            try {
                if(flvConvivaClient) {
                    flvConvivaClient.cleanupSession(flvSessionKey);
                }
            } catch(e) {}
            document.getElementById(divID).innerHTML = "";

            createHtml5LivePlayer(divID, w, h);
            playM3U8Stream(channelid);
        } else {
            html5CopyrightMsg(divID, w, h, "live");
        }

    } else {
        getFlashVer();
        if(!isFlashPlayer || (getChromeVersion() >= 55 && flashChecker().v < 23)) {
            showInstallFlashPlayerMsg(divID, w, h);
            return;
        }

        var channelSimple = channelid.replace("pa://cctv_p2p_hd", "");
        for(var i = 0; i < p2p_2_flv_arr.length; i++) {
            if(channelSimple == p2p_2_flv_arr[i]) {
                createFlashLivePlayer(divID, w, h, channelid);
                return;
            }

        }

        if(isPlayerCreated) return;
        isPlayerCreated = true;

        if(isMultiPlayer) {
            cntv_player_create_flash_live_player(divID, w, h, channelid);
        } else {
            createPtp2Player(divID, w, h, channelid);
        }
    }
}

function createFlashLivePlayer(divID, w, h, channelid, isShowLoading) {

    videoName = channelid.replace("pa://cctv_p2p_hd", "");

    if((videoName === "cctv5" || videoName === "cctv5plus" || videoName === "sportsteama" || videoName === "sportsteamb") && (typeof(area_info_array_country) === "string" && area_info_array_country !== "CN" && area_info_array_country !== "MO" || typeof(area_info) === "string" && area_info.indexOf("CN|") === -1 && area_info.indexOf("MO|") === -1)) {
        html5CopyrightMsg(divID, w, h, "ouzhoubei");
        return;
    }

    if(isIPad()) {

        if(typeof(isShowLoading) !== "undefined" && isShowLoading === false) {
            isShowH5VideoLoading = false;
        }

        if(videoName === "sportsteama" || videoName === "sportsteamb") {
            html5CopyrightMsg(divID, w, h, "live");
        } else {
            player_info_obj.w = w;
            player_info_obj.h = h;
            player_info_obj.n = videoName;
            player_info_obj.div = divID;

            try {
                if(flvConvivaClient) {
                    flvConvivaClient.cleanupSession(flvSessionKey);
                }
            } catch(e) {}
            document.getElementById(divID).innerHTML = "";

            createHtml5LivePlayer(divID, w, h);
            playM3U8Stream(channelid);
        }

    } else {

        getFlashVer();
        if(!isFlashPlayer || (getChromeVersion() >= 55 && flashChecker().v < 23)) {
            showInstallFlashPlayerMsg(divID, w, h);
            return;
        }

        if(isDrmLegalDomainUrl()) {
            createFlashDrmPlayer(divID, w, h, channelid, isShowLoading);
        } else {
            ourPlayer = true;
            cntv_player_create_flash_live_player(divID, w, h, channelid);
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



function createFlashDrmPlayer(divID, w, h, channelid, isShowLoading) {

    if(isIPad()) {
        createFlashLivePlayer(divID, w, h, channelid, isShowLoading);
        return;
    }

    var cid = channelid.replace("pa://cctv_p2p_hd", "");
    var ChannelID = cid;
    var videoTVChannel = cid;
    var VideoName = cid;

    if(typeof goldlog === "undefined") {
        doLoadAliAnalyticsJs();
    }

    /*
    if(isNotDrmChannels(ChannelID)) {
        return;
    }
    */


    var playerurl = "http://player.cntv.cn/standard/live_HLSDRM20181022.swf";
    if(typeof is0HomepagePlayer !=="undefined" && is0HomepagePlayer) {
        playerurl = "http://player.cntv.cn/standard/smallDRMplayer.swf";
    }



    var hdsFo = null;
    if(IsMaxthon())
    {
        hdsFo = new SWFObject(playerurl + "?v=18"+version+"&a="+Math.random(), "hds_flash_player"+"_"+divID, w, h, "10.0.0.0", "#000000");
    }else
    {
        hdsFo = new SWFObject(playerurl + "?v=18"+version, "hds_flash_player"+"_"+divID, w, h, "10.0.0.0", "#000000");
    }


    if(typeof(hds_bitaRates)!="undefined" && typeof(hds_bitaRates)=="string")
    {
        hdsFo.addVariable("bitaRates", hds_bitaRates);

    }


    if(typeof is0HomepagePlayer !=="undefined" && is0HomepagePlayer) {
        if(w/h < 1.5) {
            hdsFo.addVariable("playErrorImg", "http://player.cntv.cn/images/ipad/h5_0shouye_error4x3.png");
        } else{
            hdsFo.addVariable("playErrorImg", "http://player.cntv.cn/images/ipad/h5_0shouye_error16x9.png");
        }

        hdsFo.addVariable("playErrorJumpUrl", "http://tv.cctv.com/");
    }

    hdsFo.addVariable("ChannelID", ChannelID);
    hdsFo.addVariable("videoTVChannel", videoTVChannel);
    if(channelid.indexOf("pe://cctv_p2p_hd")!==-1) {
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


    if(document.getElementById("hds_flash_player"))
    {
        document.getElementById("hds_flash_player").focus();
    }


    hdsFo.write(divID);
    if(typeof(isPlayerOpaque)!="undefined"&&isPlayerOpaque==true || location.href.indexOf("tv.cntv.cn/live")!==-1 || location.href.indexOf("tv.cctv.com/live")!==-1){
        try{
            document.getElementById(divID).style.backgroundColor = "#000";
        } catch(e){
        }
    }


}


function isDrmLegalDomainUrl() {
    var legalDomainArr = ["cctv.com", "cntv.cn"];
    var isLegal = false;
    var urlArr = window.location.href.split("/");
    domainUrl = urlArr[2];
    urlArr = domainUrl.split(".");
    domainUrl = urlArr[urlArr.length-2] + "." + urlArr[urlArr.length-1];

    for(var i=0; i<legalDomainArr.length; i++) {
        if(legalDomainArr[i] === domainUrl) {
            isLegal = true;
            break;
        }
    }

    try {

        if(window.top && window.top!=window.parent) {
            isLegal = false;
        }
    } catch (e) {
    }

    return isLegal;
}

function changeFlashPlayerTai(divID, w, h, channelid) {
    document.getElementById(divID).innerHTML = "";
    createFlashLivePlayer(divID, w, h, channelid);

}

function debug(s) {
    if(isDebug) {
        alert(s);
    }
}

function creatMultiLivePlayer(divID, w, h, channelid) {
    if(isIPad()) {
        player_info_obj.w = w;
        player_info_obj.h = h;
        player_info_obj.div = divID;

        createHtml5LivePlayer(divID, w, h);
        playM3U8Stream(channelid);
        videoName = channelid;
    } else {
        isMultiPlayer = true;
        creatLivePlayer(divID, w, h, channelid);
    }
}

function datetimeToUnix(datetime) {
    var tmp_datetime = datetime.replace(/:/g, '-');
    tmp_datetime = tmp_datetime.replace(/ /g, '-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return parseInt(now.getTime() / 1000);
}

function createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle) {

    if(document._html5Player) {
        document._html5Player.pause();
    }

    if(!document._baseDiv) {
        document._baseDiv = document.getElementById(divid);
    }

    var startYear = start.substr(0, 4);
    var startMouth = start.substr(4, 2);
    var startDay = start.substr(6, 2);
    var startHour = start.substr(8, 2);
    var startMinute = start.substr(10, 2);
    var startTimeStr = startYear + "-" + startMouth + "-" + startDay + " " + startHour + ":" + startMinute + ":" + "00";
    var startTimestamp = datetimeToUnix(startTimeStr);
    startTimestamp += 60;
    startTime = startTimestamp;

    var endYear = end.substr(0, 4);
    var endMouth = end.substr(4, 2);
    var endDay = end.substr(6, 2);
    var endHour = end.substr(8, 2);
    var endMinute = end.substr(10, 2);
    var endTimeStr = endYear + "-" + endMouth + "-" + endDay + " " + endHour + ":" + endMinute + ":" + "00";
    var endTimestamp = datetimeToUnix(endTimeStr);

    var liveBackUrl = "";
    var isHtml5VdnMsg = 0;

    var _doc = document.getElementsByTagName('head')[0];
    var jsLoader = document.createElement('script');
    jsLoader.setAttribute('type', 'text/javascript');
    jsLoader.charset = "utf-8";
    var vdnUrl = "http://vdn.live.cntv.cn/api2/liveTimeshiftHtml5.do?channel=pa://cctv_p2p_hd" + channel + "&client=html5&starttime=" + startTimestamp;
    vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5_02+vdn_uid)).toUpperCase();
    vdnUrl += "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    jsLoader.setAttribute('src', vdnUrl);
    _doc.appendChild(jsLoader);
    var isHtml5VdnMsg = "0";

    try {
        if(isUseConvivaMonitor) {
            if(!flvConvivaClient || !flvConvivaPlayerStateManager) {
                doLoadHtml5FlvConvivaJs();
            }
            setTimeout(function (){

                if(isHtml5VdnMsg !== "3") {
                    cdnName = "";
                    html5LiveBackCndCode = "";
                    convivaVdnSid = "";
                    convivaCdnInfo = { "vdnIP": "", "vdnCountryCode": "", "vdnProvinceCode": "", "vdnCityCode": "", "vdnISPCode": "" };

                    if(typeof hdsConvivaCdnInfo !== "undefined") {
                        hdsConvivaVdnSid = "";
                        hdsConvivaCdnInfo = {"vdnIP": "","vdnCountryCode": "", "vdnProvinceCode": "","vdnCityCode": "","vdnISPCode": ""};
                    }

                    if(isHtml5VdnMsg !== "0") {
                        if(flvConvivaClient && flvSessionKey !== null) {
                            flvConvivaClient.cleanupSession(flvSessionKey);
                        }

                        try {
                            if(convivaClient && convivaSessionKey !== null) {
                                convivaClient.cleanupSession(convivaSessionKey);
                            }

                        } catch(e) {}
                    }
                }



                if(isHtml5VdnMsg === "1") {
                    setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""), "VDN_RESPONSE_EMPTY");
                    setCntvFlvMetadata("690003", "VDN_RESPONSE_EMPTY");
                } else if(isHtml5VdnMsg === "2"){
                    setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""), "VDN_RESPONSE_PARSE_ERROR");
                    setCntvFlvMetadata("690003", "VDN_RESPONSE_PARSE_ERROR");
                } else if(isHtml5VdnMsg === "0"){
                    setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""));
                    setCntvFlvMetadata("690003", "VDN_RESPONSE_ERROR");
                }

            }, 10000);

        }
    } catch(e) {
    }

    if(typeof jsLoader.onload != "undefined") {
        jsLoader.onload = function() {
            if(typeof(html5VideoData) != "undefined") {
                try{
                    var videoData = eval('(' + html5VideoData.replace(/(^\s*)|(\s*$)/g, "") + ')');
                    var isPublic = "";
                    if(typeof(videoData["public"]) != "undefined") {
                        isPublic = videoData["public"];
                    }

                    if(isPublic!=="0" && isPublic!=="1") {
                        isHtml5VdnMsg = "1";
                    }
                } catch(e) {
                    isHtml5VdnMsg = "1";
                }


                if(isPublic != 1) {
                    html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "copyright");
                    isFlvLivePublic = "0";
                    createFlvHtml5ConvivaEvent();
                    return;
                } else {
                    var fromStart = startTimestamp + 60;
                    if(html5LiveBackAddr.indexOf("?") > 0) {
                        liveBackUrl = html5LiveBackAddr + "&start=" + fromStart + "&end=" + endTimestamp;
                    } else {
                        liveBackUrl = html5LiveBackAddr + "?start=" + fromStart + "&end=" + endTimestamp;
                    }
                }

                html5IsRtmp = false;
                isGetJsData = true;
                chapterVos = [];

                if(liveBackUrl.indexOf(".m3u8") > 0) {
                    totalLength = parseInt(endTimestamp - (startTimestamp - 60));
                } else {
                    errStr = "未能获得视频数据";
                    isGetJsData = false;
                }

                if(isGetJsData) {
                    currentIndex = 0;
                    chapterVos[0] = [];
                    chapterVos[0]["url"] = liveBackUrl;

                    setTimeout(function() {
                        document.getElementById(divid).innerHTML = "";
                        if(document.getElementById("_video_player_box")) {
                            document.getElementById("_video_player_box").innerHTML = "";
                        }

                        try{
                            convivaVdnSid = getVideoAddr("client_sid");
                            convivaCdnInfo = {
                                "vdnIP": getVideoAddr("lc", "ip"),
                                "vdnCountryCode": getVideoAddr("lc", "country_code"),
                                "vdnProvinceCode": getVideoAddr("lc", "provice_code"),
                                "vdnCityCode": getVideoAddr("lc", "city_code"),
                                "vdnISPCode": getVideoAddr("lc", "isp_code")
                            };
                            isHtml5VdnMsg = "3";
                        } catch(e) {
                            isHtml5VdnMsg = "2";
                        }

                        if(flvConvivaClient && flvSessionKey !== null) {
                            flvConvivaClient.cleanupSession(flvSessionKey);
                        }

                        try {
                            if(convivaClient && convivaSessionKey !== null) {
                                convivaClient.cleanupSession(convivaSessionKey);
                            }

                        } catch(e) {}

                        createPlayerElement2();
                        html5InitEvent();
                        htmlPlayAFile2();


                    }, 100);

                    //motifyConviva();
                } else {
                    showError(errStr);
                }

            }
        };

    }
}

var html5LiveBackAuthedAddr = "";
function createHtml5LiveBackPlayer(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle) {
    if(html5LiveBackAddr == "") {
        return;
    }

    if(isFlvLivePublic!== "1" || (typeof(isLivePublic)!="undefined"&&isLivePublic!=="1")) {
        setFlvHtml5AliNewUrl("liveback");
        //createHtml5LivePlayer(divid, videowidth, videoheight);

    }

    if(html5LiveBackCndCode=="LIVE-HDS-CDN-ALI" || html5LiveBackCndCode=="LIVE-HDS-CDN-BS" || html5LiveBackCndCode=="LIVE-HDS-CDN-KS") {

        if(html5LiveBackAddr.indexOf("amode=1") === -1){
            createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);
            return;
        }

        var xmlhttp;
        if(window.XMLHttpRequest) {
            xmlhttp=new XMLHttpRequest();
        } else {
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }

        var url = "";

        if(html5LiveBackCndCode === "LIVE-HDS-CDN-ALI") {
            url = "http://api1.cntv.myalicdn.com";
        } else if(html5LiveBackCndCode === "LIVE-HDS-CDN-BS"){
            url = "http://h5.cntv.qingcdn.com";
        } else if(html5LiveBackCndCode === "LIVE-HDS-CDN-KS"){
            url = "http://h5.api.cctv.kcdnvip.com";
            //hls_vod_url = "http://h5.api.cctv.kcdnvip.com/live/cctv1/index.m3u8?ptype=1&amode=1&AUTH=y70gU/liWcjKfUVlSTk4YlNYqhqZijZ0mqxl+GWp7nJCplkkiw7vNiSNaZ1Qq+Mki3W0oU8aj9jHJ+KazuNPLQ==&uid=default";
        }

        var s = html5LiveBackAddr.split("/");

        for(var i=3; i<s.length; i++) {
            url += "/" + s[i];
        }

        //var url = "http://api1.cntv.myalicdn.com/cntvlive/cctv1md.m3u8?amode=3&AUTH=kQPzJPm9lMsSntO4JSau9BcM9IyMpf3MlzSwgqDald6i0Jh5nuRe97bLFZbJXj6ODskTMaU9q+2daGd5kBN88Q==&start=1512345678";
        var sendData = "";


        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                /*console.log(url+":"+xmlhttp.responseText);*/

                var obj = JSON.parse(xmlhttp.responseText);
                html5LiveBackAddr = obj.url;
                createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);

            }
        }

        xmlhttp.open("GET",url, false);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset=utf-8");
        xmlhttp.send(sendData);

        return;
    }


    if(html5LiveBackCndCode==="LIVE-HDS-CDN-AK" || html5LiveBackCndCode==="LIVE-HDS-CDN-TTA") {

        createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);
        return;
    }

    if((html5LiveBackAddr.indexOf("AUTH=")==-1) || html5LiveBackAddr.indexOf("amode=1")==-1 || html5LiveBackAuthedAddr) {
        if(html5LiveBackAuthedAddr.length > 10) {
            html5LiveBackAddr = html5LiveBackAuthedAddr;
        }
        createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);
    } else{
        var xmlhttp;
        if(window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var url = "http://h5.cntv.powzamedia.com/cntv/new_url";
        var flvBtime = getQueryString("btime");
        var flvBauth = getQueryString("bauth");

        var sendData = "btime=" + flvBtime + "&bauth=" + flvBauth;
        sendData += "&url=" + encodeURIComponent(html5LiveBackAddr);

        sendData += "&referer=" + encodeURIComponent(location.href);

        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
        xmlhttp.send(sendData);

        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                /*console.log(url+":"+xmlhttp.responseText);*/

                var obj = JSON.parse(xmlhttp.responseText);
                var flag = obj.tag;
                if(flag != 1) {
                    flvHtml5AuthFlag = "0";
                }


                if(obj.new_url && flvHtml5AuthFlag === "1") {
                    if(typeof "decipher" !== "undefined") {
                        html5LiveBackAddr = html5LiveBackAuthedAddr = decipher(obj.new_url);
                        createHtml5LiveBackPlayerByAuth(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);

                    }

                } else {
                    html5CopyrightMsg(divid, videowidth, videoheight, "auth", "autherror:new_url");
                }

            }
        }
    }



}

function creatIpadFlashPlayer(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle) {
    try {

        var domainUrl = top.document.domain;
        var urlArr = domainUrl.split(".");
        var keyDomain = urlArr[urlArr.length - 2];
        if(keyDomain == "com") {
            keyDomain = urlArr[urlArr.length - 3];
        }
        var legalDomains = ["cctv", "cntv", "12371", "gov", "xmtv", "baidu", "hao123", "360", "qihoo", "so", "ipanda", "ncpa-classic"];

        for(var num = 0; num < legalDomains.length; num++) {
            if(keyDomain == legalDomains[num]) {
                break;
            }
        }

        if(num >= legalDomains.length) {
            return;
        }
    } catch(e) {
        return;
    }

    player_info_obj.w = videowidth;
    player_info_obj.h = videoheight;
    player_info_obj.n = channel;
    player_info_obj.div = divid;

    if(isIPad()) {
        ///如果是ipad模式
        //?channel=cctv5&starttime=201203220612&endtime=201203220627&from=web&url=bugu.cntv.cn/nettv/ibugu/test_lpy/bugu_test.html
        //html5LiveBackAddr = "";
        if(lct.indexOf("date=") > 0 && lct.indexOf("index=") > 0 && typeof(document._html5Player) == "undefined") {
            setTimeout(function() {
                creatIpadFlashPlayer(divid, videowidth, videoheight, channel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);

            }, 500);
        }

        html5LiveBackStarted = true;
        html5LiveBackTitle = backTitle;
        isFirstFile = true
        startTime = start;
        endTime = end;

        try {
            var epgChannel = channel.replace("pa://cctv_p2p_hd", "");
            //var timeShiftChannel = [];
            var timeShiftChannel = ["btv9", "btv3", "btv8", "btv7", "btv6", "btv2", "btv4", "cctvdoc", "cctvjilu", "shenzhen", "btv5", "jiangsu", "shandong", "xinjiang", "shan1xi", "dongfang", "btv1", "travel", "ningxia", "gansu", "xizang", "qinghai", "dongnan", "neimenggu", "guangdong", "jilin", "shan3xi", "hebei", "guangxi", "yunnan", "henan", "hubei", "guizhou", "heilongjiang", "chongqing", "sichuan", "jiangxi", "tianjin", "liaoning", "anhui", "hunan", "zhejiang", "cctv1", "cctv2", "cctv3", "cctv4", "cctv5", "cctv6", "cctv7", "cctv8", "cctv9", "cctv10", "cctv11", "cctv12", "cctv13", "cctv15", "cctv5plus", "cctvchild", "taiqiu", "taiqiu", "cctvgaowang", "cctvamerica", "cctvamerica", "cctveurope", "cctvfrench", "cctvarabic", "russian", "xiyu", "ipanda"];
            for(var i = 0; i < timeShiftChannel.length; i++) {
                if(epgChannel == timeShiftChannel[i]) {
                    isHtml5LiveBackTimeShift = true;
                    createHtml5LiveBackPlayer(divid, videowidth, videoheight, epgChannel, start, end, videofromurl, type, adlocal, adcorner, adafter, adpause, wrating, backTitle);
                    return;
                }

            }
        } catch(e) {}

        isHtml5LiveBackTimeShift = false;

        var st = Math.floor(startTime / 5) * 5;
        var jsDataUrl = liveBackPath + "?channel=" + channel + "&starttime=" + st + "&endtime=" + end + "&from=ipad" + "&url=" + videofromurl;
        vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5_02+vdn_uid)).toUpperCase();
        jsDataUrl += "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
        createHtml5Player2(divid, videowidth, videoheight, jsDataUrl);

    } else { //flash 回看。。。。。。

        if(channel.indexOf("cctv7") !== -1 && typeof(pagefunc_call_by_player) == "function" && lct.indexOf("date=") === -1 && lct.indexOf("index=") === -1) {
            return;
        }

        playAFlashLiveBack(divid, channel, start, end, videowidth, videoheight, backTitle);

    }
}

function playerfunc_call_by_page(obj) {

    try {

        if(lct.indexOf("date=") > 0 && lct.indexOf("index=") > 0) {

            if(obj.IsLive.toString() == "true" && obj.ShiftTime.toString() == "0" && player_info_obj.n) {
                p2pAdIsPlayed = true;
                creatLivePlayer(player_info_obj.div, player_info_obj.w, player_info_obj.h, player_info_obj.n);
            }

            return;
        }

        thisMovie("vplayer").PageCallFlash(obj);
        //console.log("页面传参:"+obj.DateIndex + "***" + obj.IsLive + "***" + obj.ShiftTime);
    } catch(e) {
        //alert(e.description);
    }
}

function FlashCallPage(obj) {

    try {
        //thisMovie("vplayer").PageCallFlash(obj);
        pagefunc_call_by_player(obj);
        //console.log("播放器传参:"+obj.DateIndex + "***" + obj.IsLive + "***" + obj.ShiftTime);
    } catch(e) {
        //alert(e);
    }

}

function createHtml5Player2(mainDivId, _w, _h, dataUrl) {
    html5PlayerWidth = _w;
    html5PlayerHeight = _h - 30;
    //progressBarWidth = html5PlayerWidth- 310;
    var baseDiv = document.getElementById(mainDivId);
    baseDiv.innerHTML = "";
    baseDiv.style.position = "relative";
    baseDiv.style.width = html5PlayerWidth + "px";
    baseDiv.style.height = _h + "px";
    document._baseDiv = baseDiv;
    var html5VideoBack = createElementByType("div", "html5VideoBack", "absolute", html5PlayerWidth + "px", html5PlayerHeight + "px", "0px", "0px");
    html5VideoBack.style.backgroundColor = "#000000";
    document._baseDiv.appendChild(html5VideoBack);
    document._html5VideoBack = document.getElementById("html5VideoBack");

    html5LoadJsData(dataUrl);
}

function html5LoadJsData(url) {
    var jsLoader = createElementByType("script", "jsLoader", "absolute", "0px", "0px", "0px", "0px");
    jsLoader.src = url;
    document._baseDiv.appendChild(jsLoader);
    timeOutTimer = setTimeout(loadJsDataFail, 60000);
}

function loadJsDataFail() {
    isGetJsDataTimeOut = true;
    isGetJsData = false;
    showError("未能获得视频数据");
}

function getHtml5VideoData(data) {
    if(!isIPad() || isHtml5LiveBackTimeShift) {
        return;
    }
    if(!isGetJsDataTimeOut) {
        clearTimeout(timeOutTimer);
        var errStr = "";
        try {
            var obj = eval('(' + data + ')');
        } catch(e) {
            errStr = "数据格式错误";
            isGetJsData = false;
            showError(errStr);
            return;
        }
        if(obj["ack"] == "yes") {
            html5IsRtmp = false;
            isGetJsData = true;
            chapterVos = [];
            html5LiveBackCndCode = obj["hls_cdn_info"]["cdn_code"];

            if(obj["video"]["chapters"]) {
                chapterVos = (obj["video"]["chapters"]);
                totalLength = getTotalLength();
            } else {
                errStr = "未能获得视频数据";
                isGetJsData = false;
            }

        } else {
            errStr = "未能获得视频数据";
            isGetJsData = false;
        }
        if(isGetJsData) {
            //createControlBar();
            dealCharpters();
            createPlayerElement2();
            html5InitEvent();
            htmlPlayAFile2();

            //motifyConviva();
        } else {
            showError(errStr);
        }
    }
}

function createPlayerElement2() {

    var _w = 0;
    var _h = 0;
    if(player_info_obj.w > 0) {
        _w = player_info_obj.w;
        _h = player_info_obj.h;
    } else {
        _w = html5PlayerWidth;
        _h = html5PlayerHeight;
    }

    var playerDiv = document.createElement("video");
    playerDiv.setAttribute("id", "html5Player_live");
    playerDiv.style.position = "absolute";
    playerDiv.style.zIndex = "1";
    playerDiv.style.width = _w + "px";
    playerDiv.style.height = _h + "px";
    playerDiv.style.left = html5PlayerLeft + "px";
    playerDiv.style.top = html5PlayerTop + "px";
    //playerDiv.src = chapterVos[currentIndex]["url"];
    playerDiv.controls = "controls";
    playerDiv.preload = "none";
    playerDiv.setAttribute("webkit-playsinline", "");
    playerDiv.setAttribute("playsinline", "");
    playerDiv.setAttribute("x-webkit-airplay", "isHtml5UseAirPlay");
    document._baseDiv.appendChild(playerDiv);
    document._html5Player = document.getElementById("html5Player_live");

    if(!document.getElementById("html5VideoBack")) {
        var html5VideoBack = createElementByType("div", "html5VideoBack", "absolute", _w + "px", _h + "px", "0px", "0px");
        html5VideoBack.style.backgroundColor = "#000000";
        document._baseDiv.appendChild(html5VideoBack);
        document._html5VideoBack = document.getElementById("html5VideoBack");
    }

    if(!document.getElementById("flv_video_content_is_loading")) {
        var videoContentIsLoadingTag = document.createElement("img");
        videoContentIsLoadingTag.setAttribute("id", "flv_video_content_is_loading");
        videoContentIsLoadingTag.setAttribute("src", "http://player.cntv.cn/html5Player/images/cctv_html5player_loading.gif");
        videoContentIsLoadingTag.style.position = "absolute";
        videoContentIsLoadingTag.style.width = '120px';
        videoContentIsLoadingTag.style.height = '42px';
        videoContentIsLoadingTag.style.left = _w / 2 - 60 + "px";
        videoContentIsLoadingTag.style.top = _h / 2 - 21 + "px";
        videoContentIsLoadingTag.style.zIndex = "109";
        videoContentIsLoadingTag.style.display = "none";
        videoContentIsLoadingTag.onclick = function() {
            document._html5Player.play();
        }
        document._baseDiv.appendChild(videoContentIsLoadingTag);
    }

}

function showError(err) {
    var errorPanel = createElementByType("div", "errorPanel", "relative", "", "", "0px", "45%");
    errorPanel.style.color = "#FFFFFF";
    errorPanel.innerHTML = err;
    errorPanel.align = "center";
    try {
        document._html5VideoBack.appendChild(errorPanel);
    } catch(e) {}
}

function getTotalLength() {
    var totalLength = 0.0;
    for(var i = 0; i < chapterVos.length; i++) {
        totalLength += parseInt(chapterVos[i]["duration"]);
    }
    return totalLength;
}

function isIPad() {
    return /(iphone|ipad)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent);
}

function checkLegalDomain() {
    var isLegal = true;
    try {
        var domainUrl = document.domain;
        var urlArr = domainUrl.split(".");
        var keyDomain = urlArr[urlArr.length - 2];
        if(keyDomain == "com" || keyDomain == "net" || keyDomain == "org") {
            keyDomain = urlArr[urlArr.length - 3];
        }
        var legalDomains = ["cctv", "cntv", "12371", "gov", "xmtv", "baidu", "hao123", "ipanda", "ncpa-classic", "livechina", "chinalive", "cctvdream", "uyntv", "qhbtv", "qhtb", "panda", "pandamuseum", "giantpanda", "panda-adoption", "pambassador","alicdn","amap"];

        for(var num = 0; num < legalDomains.length; num++) {
            if(keyDomain == legalDomains[num]) {
                break;
            }
        }

        if(num >= legalDomains.length) {
            isLegal = false;
        }
    } catch(e) {
        var preUrl = document.referrer;
        if(preUrl.indexOf(".cctvdream.com.cn") == -1) {
            isLegal = false;
        }
    }

    return isLegal;

}

function getVndApi2Data(channelId, type1, type2) {

    var addr = "";
    var channelPa = "";
    if(channelId.indexOf("pa://") >= 0) {
        channelPa = channelId;
    } else {
        channelPa = "pa://cctv_p2p_hd" + channelId;
    }

    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script", "jsLoader", "absolute", "0px", "0px", "0px", "0px");
    var vdnUrl = "http://vdn.live.cntv.cn/api2/liveHtml5.do?channel=" + channelPa;

    if(!getCookie_vdn("Fingerprint")){
        //获取设备指纹信息
        getfingerprint2();
    } else{
        vdn_uid = getCookie_vdn("Fingerprint");
    }
    if(!checkLegalDomain()) {
        return;
    }
    if(isIPad()) {
        vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5_02+vdn_uid)).toUpperCase();
        vdnUrl += "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    } else {
        vdn_vc = setH5Str((vdn_tsp+vdn_vnFlash+staticCheck_Flash_02+vdn_uid)).toUpperCase();
        vdnUrl += "&client=flash"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnFlash + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    }
    //console.log(vdnUrl)
    jsLoader.src = vdnUrl;
    _doc.appendChild(jsLoader);

    if(typeof jsLoader.onload != "undefined") {

        jsLoader.onload = function() {

            try {
                var cdnCode = "";
                var countryCode = "";
                addr = getVideoAddr(type1, type2);

                if(addr) {
                    cntv_flash_live_url = encodeURIComponent(addr);

                }


                cdnCode = getVideoAddr("flv_cdn_info", "cdn_code");


                countryCode = getVideoAddr("lc", "country_code");


                clearTimeout(loadVdnJsTimeout);
                isFlvLivePublic = getVideoAddr("public", "");
            } catch(e) {
                clearTimeout(loadVdnJsTimeout);
                isFlvLivePublic = getVideoAddr("public", "");
            }

            goOn("", channelId);
        };

    }

    if(typeof jsLoader.onreadystatechange != "undefined") {
        jsLoader.onreadystatechange = function() {
            if(jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete') {
                try {
                    var cdnCode = "";
                    var countryCode = "";
                    addr = getVideoAddr(type1, type2);
                    if(addr) {
                        cntv_flash_live_url = encodeURIComponent(addr);
                        cdnCode = getVideoAddr("flv_cdn_info", "cdn_code");

                        countryCode = getVideoAddr("lc", "country_code");


                    }

                    clearTimeout(loadVdnJsTimeout);
                    isFlvLivePublic = getVideoAddr("public", "");
                } catch(e) {
                    clearTimeout(loadVdnJsTimeout);
                    isFlvLivePublic = getVideoAddr("public", "");
                }

                goOn("", channelId);
            }
        }

    }

    var loadVdnJsTimeout = null;
    if(location.href.indexOf("chunwan.cntv.cn") !== -1 || location.href.indexOf("player.cntv.cn/flashplayer/players/testplayer/") !== -1) {
        try {

            loadVdnJsTimeout = setTimeout(function() {
                if(typeof(attributes) != "undefined") {
                    isMultiPlayer = false;
                    creatLivePlayer("_video_player_box", attributes["video_width"], attributes["video_height"], attributes["video_channel_name"]);
                }

            }, 15000);

            jsLoader.onerror = function() {
                clearTimeout(loadVdnJsTimeout);
                if(typeof(attributes) != "undefined") {
                    isMultiPlayer = false;
                    creatLivePlayer("_video_player_box", attributes["video_width"], attributes["video_height"], attributes["video_channel_name"]);
                }
            };

        } catch(e) {

        }
    }

}

function cntv_player_create_flash_live_player(divID, w, h, channelid) {
    cntv_flash_live_player_div = divID;
    cntv_flash_live_player_w = w;
    cntv_flash_live_player_h = h;
    cntv_flash_live_channelid = channelid;
    var addr = getFlashLiveAddrs(channelid);
    getVndApi2Data(channelid, "flv_url", "flv2");
}
var get_flash_live_id_server = "http://211.100.48.133/playlive.php?";
var testId = "http://biz.vsdn.tv380.com/playlive.php?5B63686E5D445830303030303034367C313833337C317C323030307C434354562D33E6B58BE8AF9528E5A487297C687474707C666C765B2F63686E5D5B74735D307C687474705B2F74735DVSDNSOOONERCOM00";

function goP2p() {
    location.href = "http://tv.cntv.cn/live/cctv5?Error";
}

function goOn(url, channelid) {

    if(cntv_flash_live_url.indexOf("rtmp") >= 0) {
        var arr = decodeURIComponent(cntv_flash_live_url).split("/live/");
        cntv_flash_live_url = arr[0] + "/live";
        cntv_flash_live_rtmpName = arr[1];
        cntv_flash_live_isRtmp = true;
    }

    var fo = null;
    if(channelid.indexOf("wlcw") != -1) {
        fo = new SWFObject("http://player.cntv.cn/standard/rtmpLiveBackPlayer20150122.swf?v=" + cntv_flash_live_player_version + "&t=" + Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w, cntv_flash_live_player_h, "10.0.0.0", "#000000");
        cntv_flash_live_url = cntv_flash_live_url + "/ld";
        fo.addVariable("streamNum", 5);

        if(typeof(live_Ad_Calls) != "undefined") {

            fo.addVariable("adCalls", live_Ad_Calls);
        }
    } else {
        //fo = new SWFObject("http://player.cntv.cn/standard/cntvLivePlayer20150427.swf?v=" + cntv_flash_live_player_version+"&t="+Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w,cntv_flash_live_player_h, "10.0.0.0", "#000000");
        //fo = new SWFObject("http://player.cntv.cn/standard/cntvLivePlayer20150511.swf?v=" + cntv_flash_live_player_version+"&t="+Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w,cntv_flash_live_player_h, "10.0.0.0", "#000000");
        //fo = new SWFObject("http://player.cntv.cn/standard/cntvLivePlayer20150610.swf?v=" + cntv_flash_live_player_version+"&t="+Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w,cntv_flash_live_player_h, "10.0.0.0", "#000000");
        var playerurl = "http://player.cntv.cn/standard/cntvLivePlayer20150623.swf";
        if(location.href.indexOf("ipanda.com")>0 && location.href.indexOf("livechina.ipanda.com")==-1 && location.href.indexOf("greatwall.ipanda.com")==-1) {
            playerurl = "http://player.cntv.cn/standard/cntvLivePlayer20171122.swf";
        }

        fo = new SWFObject(playerurl + "?v=" + cntv_flash_live_player_version + "&t=" + Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w, cntv_flash_live_player_h, "10.0.0.0", "#000000");

    }

    fo.addVariable("public", isFlvLivePublic);

    var flvAdCall = "";

    if(typeof(live_Ad_Calls) !== "undefined" && live_Ad_Calls) {
        flvAdCall = live_Ad_Calls;
    } else if(typeof(ad_Calls) !== "undefined" && ad_Calls) {
        flvAdCall = ad_Calls;
    } else {
        flvAdCall = "";
    }

    if(flvAdCall) {
        fo.addVariable("adCall", flvAdCall);
        fo.addVariable("adCalls", flvAdCall);
        fo.addVariable("adplayerPath", "http://player.cntv.cn/adplayer/cntvAdPlayer2.swf");
    }

    if(typeof(live_Ad_Pause) != "undefined") {
        fo.addVariable("adPause", live_Ad_Pause);
        fo.addVariable("pauseAdplayerPath", "http://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf");
    }

    if(typeof(live_Ad_Corner) != "undefined") {
        fo.addVariable("adCorner", live_Ad_Corner);
        fo.addVariable("cornerAdplayerPath", "http://player.cntv.cn/adplayer/cntvCornerADPlayer.swf");
    }
    if(typeof(live_Ad_Banner) != "undefined") {
        fo.addVariable("adBanner", live_Ad_Banner);
    }
    if(typeof(live_Ad_Wenzi) != "undefined") {
        fo.addVariable("adText", live_Ad_Wenzi);
    }

    fo.addVariable("vodURL", cntv_flash_live_url);
    fo.addVariable("streamName", cntv_flash_live_rtmpName);

    fo.addVariable("isRtmp", cntv_flash_live_isRtmp);

    fo.addVariable("vodURL2", cntv_flash_live_url2);
    fo.addVariable("streamName2", cntv_flash_live_rtmpName2);

    fo.addVariable("isChannelRight", true);
    fo.addVariable("tai", channelid);

    if(!getCookie_vdn("Fingerprint")){
        //获取设备指纹信息
        getfingerprint2();
    } else{
        vdn_uid = getCookie_vdn("Fingerprint");
    }

    if(lct.indexOf("en.ipanda.com") > 0) {
        fo.addVariable("languageConfig", "http://js.player.cntv.cn/xml/english/main.xml");
    }

    var channelPa = "";
    if(channelid.indexOf("pa://") >= 0) {
        channelPa = channelid;
    } else {
        channelPa = "pa://cctv_p2p_hd" + channelid;
    }

    fo.addVariable("channelId", channelPa);
    fo.addVariable("videoName", channelid.replace("pa://cctv_p2p_hd", ""));

    var cdnCode = "";

    cdnCode = getVideoAddr("flv_cdn_info", "cdn_code");

    if(typeof(isAutoPlay) != "undefined") {
        fo.addVariable("isAutoPlay", isAutoPlay.toString());
    }

    if(typeof(isFlvCanHideControlBar) != "undefined") {
        fo.addVariable("canHideControlBar", isFlvCanHideControlBar);
    }

    fo.addVariable("cdn", cdnCode);

    if(typeof(channelAbled) !== "undefined") {
        fo.addVariable("channelAbled", channelAbled);
    }

    if(typeof(hdsSelectChannel) !== "undefined") {
        fo.addVariable("selectChannel", hdsSelectChannel);
    }

    if(typeof(isHdsAbroad) !== "undefined") {
        fo.addVariable("isabroad", isHdsAbroad);
    }

    fo.addParam("isGridSum", "true");

    if(typeof(isPlayerOpaque) != "undefined" && isPlayerOpaque == true) {
        fo.addParam("wmode", "Opaque");
    } else if(typeof(isPlayerOpaque) != "undefined") {
        fo.addParam("wmode", isPlayerOpaque);
    } else{
        fo.addParam("wmode", "window");
    }

    //fo.addParam("quality", "high");
    fo.addParam("menu", "false");
    fo.addParam("allowFullScreen", "true"); ///fo.addVariable("gulouPath", "http://115.182.34.19/getLog.php");
    fo.addParam("allowScriptAccess", "always");
    fo.write(cntv_flash_live_player_div);
}

function goOnMulty(channelid) {
    var fo = new SWFObject("http://player.cntv.cn/standard/cntvMultyLivePlayer20130911.swf?v=" + cntv_flash_live_player_version + "&t=" + Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w, cntv_flash_live_player_h, "10.0.0.0", "#000000");
    fo.addVariable("isRtmp", true);
    fo.addVariable("streamName", multiStreamName);
    fo.addVariable("streamBits", streamBits);
    fo.addVariable("serviceNames", multiCdnStreamNames);

    fo.addVariable("isChannelRight", true);
    fo.addVariable("tai", channelid);
    fo.addParam("wmode", "window");

    fo.addParam("menu", "false");
    fo.addParam("allowFullScreen", "true"); //fo.addVariable("gulouPath", "http://115.182.34.19/getLog.php");
    fo.addParam("allowScriptAccess", "always");
    fo.write(cntv_flash_live_player_div);

}

function goOnAkamai(channelid) {
    var fo = null;

    if(navigator.userAgent.toLowerCase().indexOf("tencenttraveler") !== -1 || IsMaxthon()) {
        fo = new SWFObject("http://player.cntv.cn/standard/AkamaiLive20140127.swf?v=" + cntv_flash_live_player_version + "&t=" + Math.random(), "cntv_live_flash_player", cntv_flash_live_player_w, cntv_flash_live_player_h, "10.0.0.0", "#000000");
    } else {
        fo = new SWFObject("http://player.cntv.cn/standard/AkamaiLive20140127.swf?v=" + cntv_flash_live_player_version, "cntv_live_flash_player", cntv_flash_live_player_w, cntv_flash_live_player_h, "10.0.0.0", "#000000");
    }

    fo.addVariable("public", isFlvLivePublic);

    fo.addVariable("vodURL", cntv_flash_live_url);

    fo.addVariable("videoURL", cntv_flash_live_url);

    var channelPa = "";
    if(channelid.indexOf("pa://") >= 0) {
        channelPa = channelid;
    } else {
        channelPa = "pa://cctv_p2p_hd" + channelid;
    }

    fo.addVariable("videoID", channelPa);
    fo.addVariable("videoName", channelid.replace("pa://cctv_p2p_hd", ""));
    fo.addVariable("tai", channelid.replace("pa://cctv_p2p_hd", ""));

    var cdnCode = "";
    cdnCode = getVideoAddr("hds_cdn_info", "cdn_code");
    if(cdnCode == "") {
        cdnCode = getVideoAddr("flv_cdn_info", "cdn_code");

    }

    fo.addVariable("cdnCode", cdnCode);

    fo.addVariable("addrs", cntv_flash_live_url);
    fo.addVariable("backUrl", akamaiBackUrl);
    fo.addVariable("preView", akamaiPreView);
    fo.addVariable("cdn", cdnCode);
    fo.addVariable("Url", cntv_flash_live_url);

    fo.addVariable("ChannelID", channelPa.replace("pa://cctv_p2p_hd", ""));
    fo.addVariable("videoTVChannel", channelPa.replace("pa://cctv_p2p_hd", ""));
    fo.addVariable("P2PChannelID", channelPa);
    fo.addVariable("timeUrl", akamaiLiveTimeUrl);

    if(typeof(isPlayerOpaque) != "undefined" && isPlayerOpaque == true) {
        fo.addParam("wmode", "Opaque");
    } else if(typeof(isPlayerTransParent) != "undefined" && isPlayerTransParent == true) {
        fo.addParam("wmode", "transparent");

    } else {
        fo.addParam("wmode", "window");
    }

    fo.addParam("menu", "false");
    fo.addParam("allowFullScreen", "true");

    fo.addParam("allowScriptAccess", "always");
    fo.write(cntv_flash_live_player_div);
}

function createHtml5LivePlayer(mainDivId, _w, _h) {
    var baseDiv = document.getElementById(mainDivId);
    if(isFlvLivePublic !== "2") {
        baseDiv.innerHTML = "";
    }

    baseDiv.style.position = "relative";
    baseDiv.style.width = _w + "px";
    baseDiv.style.height = _h + "px";
    document._baseDiv = baseDiv;
    /*
     baseDiv.onclick = function (event) {
     event.preventDefault();
     event.stopPropagation();
     }
     */
    var playerDiv = document.createElement("video");
    //playerDiv.setAttribute("autoplay","autoplay");
    playerDiv.setAttribute("id", "html5Player_live");
    playerDiv.style.position = "absolute";
    //playerDiv.src = url;
    playerDiv.style.zIndex = "1";
    playerDiv.style.width = _w + "px";
    playerDiv.style.height = _h + "px";
    playerDiv.style.left = "0px";
    playerDiv.style.top = "0px";
    playerDiv.preload = "none";
    playerDiv.style.backgroundColor = "#000000";

    if(typeof(hdsPosterImg) != "undefined" && hdsPosterImg.length > 3) {
        playerDiv.poster = hdsPosterImg;
    }

    playerDiv.setAttribute("webkit-playsinline", "");
    playerDiv.setAttribute("playsinline", "");
    playerDiv.setAttribute("x-webkit-airplay", "isHtml5UseAirPlay");
    document._baseDiv.appendChild(playerDiv);
    document._html5Player = document.getElementById("html5Player_live");


    playerDiv.controls = false;

    if(typeof is0HomepagePlayer !=="undefined" && is0HomepagePlayer) {
        show0ShouyePlayButton();
    } else{
        showFlvPlayButton();
    }



    var videoContentIsLoadingTag = document.createElement("img");
    videoContentIsLoadingTag.setAttribute("id", "flv_video_content_is_loading");
    videoContentIsLoadingTag.setAttribute("src", "http://player.cntv.cn/html5Player/images/cctv_html5player_loading.gif");
    videoContentIsLoadingTag.style.position = "absolute";
    videoContentIsLoadingTag.style.width = '120px';
    videoContentIsLoadingTag.style.height = '42px';
    videoContentIsLoadingTag.style.left = _w / 2 - 60 + "px";
    videoContentIsLoadingTag.style.top = _h / 2 - 21 + "px";
    videoContentIsLoadingTag.style.zIndex = "999";
    videoContentIsLoadingTag.style.display = "none";
    videoContentIsLoadingTag.onclick = function() {
        document._html5Player.play();
    }
    document._baseDiv.appendChild(videoContentIsLoadingTag);

    html5InitEvent();
}

function createElementByType(type, _id, position, _w, _h, _l, _t) {
    var el = document.createElement(type);
    el.setAttribute("id", _id);
    el.style.position = position;
    el.style.width = _w;
    el.style.height = _h;
    el.style.left = _l;
    el.style.top = _t;
    return el;
}

function getIPadVersion() {
    var ipadVersion = 30201;
    var VersionStr = "Version/";
    var info = navigator.userAgent;
    var arr; // = [];
    var pos = navigator.userAgent.indexOf(VersionStr);

    if(pos > 0) {
        var pStart = pos + VersionStr.length;
        var pEnd = pStart;
        while((navigator.userAgent[pEnd] >= '0' && navigator.userAgent[pEnd] <= '9') || navigator.userAgent[pEnd] == '.') {
            pEnd++
        }

        info = info.slice(pStart, pEnd); //info = 5.0.2.1

        arr = info.split(".");

        if(arr != null) //如果数组有效
        {
            if(arr.length > 0) {
                ipadVersion = Number(arr[0]) * 10000;
            }
            if(arr.length > 1) {
                ipadVersion += Number(arr[1]) * 100;
            }
            if(arr.length > 2) {
                ipadVersion += Number(arr[2]);
            }
        }
    }

    return ipadVersion;
}

function getAndroidVersion() {
    var version = "";
    var clientInfo = navigator.userAgent.toLowerCase();
    var pos = clientInfo.indexOf("android");
    if(pos > 0) {
        version = clientInfo.substr(pos + 7);
        version = parseInt(version);

        if(!version) {
            version = clientInfo.substr(pos + 8);
            version = parseInt(version);
        }
    }
    return version;

}

function getVideoAddr(videoType, videoType2) {
    var videoAddr = "";
    if(typeof html5VideoData != "undefined") {
        if(typeof html5VideoData === "string") {
            html5VideoData = eval('(' + html5VideoData.replace(/(^\s*)|(\s*$)/g, "") + ')');
        }

        try {
            if(videoType2) {
                videoAddr = html5VideoData[videoType][videoType2] ? html5VideoData[videoType][videoType2] : "";
            } else {
                videoAddr = html5VideoData[videoType] ? html5VideoData[videoType] : "";
            }
        } catch(e) {
            videoAddr = "";
        }
    }
    return videoAddr;
}

function html5CheckOs() {
    var os = "";
    if(/(iphone|ipad)/i.test(navigator.userAgent)) {
        os = "ios";
    } else if(/(android)/i.test(navigator.userAgent)) {
        os = "android";
    } else if(/(Windows NT 6.2)/i.test(navigator.userAgent)) {
        os = "windows";
    } else {
        os = "other";
    }

    return os;

}

function setGuoshuangInitData(addr) {
    html5Guoshuang.infoProvider = {
        getFramesPerSecond: function() {
            return 0;
        },
        getPosition: function() {
            return 0.00;
        },
        getBitRate: function() {
            return 0;
        }
    };

    html5Guoshuang.metadata = {
        videoDuration: 0, //点播视频的总时长
        getFramesPerSecond: function() {
            return 0; //每秒的帧数
        },
        getBitRateKbps: function() {
            return 0; //码率
        },
        getIsBitRateChangeable: function() {
            return false; //码率是否可变
        }
    };

    addr = addr.indexOf("?") !== -1 ? addr.substr(0, addr.indexOf("?")) : addr;
    if(html5LiveBackStarted) {
        html5Guoshuang.videoInfo.VideoOriginalName = html5LiveBackTitle;
        html5Guoshuang.videoInfo.VideoName = html5LiveBackTitle;

        html5Guoshuang.metadata.videoDuration = parseInt(totalLength);

    } else {

        html5Guoshuang.videoInfo.VideoOriginalName = videoName;
        html5Guoshuang.videoInfo.VideoName = videoName;
    }

    html5Guoshuang.videoInfo.VideoUrl = addr;
    html5Guoshuang.videoInfo.VideoID = videoName;
    html5Guoshuang.videoInfo.VideoTVChannel = videoName;
    html5Guoshuang.videoInfo.VideoWebChannel = videoName;
    html5Guoshuang.videoInfo.Cdn = html5LiveBackCndCode;

}

function GuoshuangAnalytics() {
    this.videoPlay = null;
    this.played = false;
    this.isPlaying = false;
    this.infoProvider = {
        getFramesPerSecond: function() {
            return "";
        },
        getPosition: function() {
            return ""
        },
        getBitRate: function() {
            return "";
        }
    };

    this.videoInfo = {
        VideoID: videoName,
        VideoOriginalName: "",
        VideoName: "",
        VideoUrl: "",
        VideoTag: "",
        VideoTVChannel: "",
        VideoWebChannel: "",
        VideoFocus: "",
        VideoParent: "",
        Cdn: "",
        extendProperty1: "HTML5",
        extendProperty2: "20170113" //没有的话传更新日期
    };

    this.metadata = {
        videoDuration: 20, //点播视频的总时长
        getFramesPerSecond: function() {
            return 25; //每秒的帧数
        },
        getBitRateKbps: function() {
            return 450; //码率
        },
        getIsBitRateChangeable: function() {
            return true; //码率是否可变
        }
    };

    this.doStart = function() {
        var track = null;
        if(getQueryString("fromapp") === "cctvnews") {
            track = new GridsumVideoDissector("GVD-200094", "GSD-200094");
        } else {
            track = new GridsumVideoDissector("GVD-200084", "GSD-200084");
        }
        try {

            if(typeof(sns_userid) == "undefined") {
                sns_userid = window.parent.sns_userid;
                sns_islogin = window.parent.passport.isLoginedStatus().toString();
            } else {
                sns_islogin = passport.isLoginedStatus().toString();
            }

            if(sns_userid == null) {
                sns_userid = "";
            }

        } catch(e) {
            sns_userid = "";
            sns_islogin = "false";
        }
        if(sns_islogin == "true" && sns_userid) {
            track.setUserId(sns_userid);
        }

        track.setPlatform('Html5');
        if(html5LiveBackStarted) {
            this.videoPlay = track.newVodPlay(this.videoInfo, this.infoProvider);
        } else {
            this.videoPlay = track.newLivePlay(this.videoInfo, this.infoProvider);
        }

        /*
         this.videoPlay.beginPreparing();
         this.videoPlay.endPreparing(true, this.metadata);
         this.played = true;
         */
    };

    this.doPlaying = function() {
        if(this.played) {
            this.videoPlay.onStateChanged("playing");
        }
    };

    this.doPause = function() {
        if(this.played) {
            this.videoPlay.onStateChanged("paused");
        }
    };

    this.doEnd = function() {
        if(this.played) {
            this.videoPlay.endPlay();
        }
    };
}

function checkGuoshuang() {
    var timer = null;
    //var videoUrl = "";
    if(html5Guoshuang) {

        //videoUrl = html5Guoshuang.videoInfo.VideoUrl;
        timer = setInterval(function() {
            if(html5Guoshuang.videoInfo.VideoUrl) {
                clearInterval(timer);
                html5Guoshuang.doStart();
            }
        }, 300);
    }

}

function checkShuguang() {
    var timer = null;
    timer = setInterval(function() {
        if(typeof(musesagent) != "undefined" && musesagent && typeof(document._html5Player) != "undefined" && document._html5Player.src) {
            clearInterval(timer);
            initMusesPlugin();
        }

    }, 300);

}

function initMusesPlugin() {
    var agent = new musesagent(document._baseDiv);

    agent.playtype("lvpl");
    agent.dataSource("html5Player_live");
    agent.vName(videoName);
    agent.u(document._html5Player.src);
    agent.vp("GVD-200084");
    agent.vWebChannel(videoName);
    agent.cdn(html5LiveBackCndCode);
    agent.vlength(1);
}

function doLoadFlvHtml5AnalyticsJs(from, jsId, callback) {
    var jsUrl = "";
    var isLoaded = false;
    if(from === "shuguang") {
        jsUrl = shuguangJs;
        isLoaded = useShuguangMonitor;
    } else if(from === "guoshuang") {
        jsUrl = guoshuangJs;
        isLoaded = useGuoshuangMonitor;
    } else {
        jsUrl = convivaJs;
        isLoaded = useConviva;
    }

    if(isLoaded) {
        var jsLoader5 = createElementByType("script", jsId, "absolute", "0px", "0px", "0px", "0px");
        jsLoader5.src = jsUrl;

        var _doc = document.getElementsByTagName('head')[0];
        _doc.appendChild(jsLoader5);

        jsLoader5.onload = function() {
            callback();
        };

        jsLoader5.onreadystatechange = function() {
            if(jsLoader5.readyState == 'loaded' || jsLoader5.readyState == 'complete') {
                callback();
            }
        }
    }

}

function setFlvHtml5VideoNewUrl(newUrl, isNodecipher) {
    var addr = newUrl;
    platform = html5CheckOs();
    if(isNodecipher || (platform == "android" && getAndroidVersion() < 4)) {
        if(isFlvLivePublic !== "1") {
            createFlvHtml5ConvivaEvent();
        }

        document._html5Player.src = addr;
        if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
            document._html5Player.load();
        }

        if(addr.toLowerCase().indexOf("dianpian.mp4") > 0) {
            isNormalVideo = false;
        }

        setGuoshuangInitData(addr);
        if(!html5LiveBackAddr) {
            html5LiveBackAddr = addr;
        }

        if(typeof(hdsPosterImg) != "undefined" && hdsPosterImg.length > 3) {
            document._html5Player.poster = hdsPosterImg;
        }
    } else {
        //document._html5Player.pause();
        var ua = navigator.userAgent.toLowerCase();
        var _doc = document.getElementsByTagName("head")[0];
        var jsLoader17 = createElementByType("script", "convivaJs17", "absolute", "0px", "0px", "0px", "0px");
        jsLoader17.src = "http://h5.cntv.powzamedia.com/decipher171025d41d8cd98f00b204e9800998ecf8427e.js?r=" + Math.random();

        _doc.appendChild(jsLoader17);

        jsLoader17.onload = function() {
            if(typeof "decipher" !== "undefined") {
                addr = decipher(addr);
            }

            if(isFlvLivePublic !== "1") {
                createFlvHtml5ConvivaEvent();
            }

            document._html5Player.src = addr;
            if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
                document._html5Player.load();
            }

            if(addr.toLowerCase().indexOf("dianpian.mp4") > 0) {
                isNormalVideo = false;
            }

            if(isFlvLivePublic == "1") {
                setGuoshuangInitData(addr);
            }
            if(!html5LiveBackAddr) {
                html5LiveBackAddr = addr;
            }

            if(typeof(hdsPosterImg) != "undefined" && hdsPosterImg.length > 3) {
                document._html5Player.poster = hdsPosterImg;
            }
        };

        jsLoader17.onerror = function() {
            document._html5Player.src = addr;
            if(/(android)/i.test(ua)) {
                document._html5Player.load();
            }

            if(addr.toLowerCase().indexOf("dianpian.mp4") > 0) {
                isNormalVideo = false;
            }

            if(isFlvLivePublic == "1") {
                setGuoshuangInitData(addr);
            }
            if(!html5LiveBackAddr) {
                html5LiveBackAddr = addr;
            }

            if(typeof(hdsPosterImg) != "undefined" && hdsPosterImg.length > 3) {
                document._html5Player.poster = hdsPosterImg;
            }
        }

    }

}

function checkFlvHtml5Auth(asyn, mod, url, videoUrl) {
    var xmlhttp;
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var sendData = "btime=" + flvBtime + "&bauth=" + flvBauth;
    if(mod === "new_url") {
        sendData += "&url=" + encodeURIComponent(videoUrl);
    }
    sendData += "&referer=" + encodeURIComponent(location.href);

    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            /*console.log(url+":"+xmlhttp.responseText);*/

            var obj = JSON.parse(xmlhttp.responseText);
            var flag = obj.tag;
            if(flag != 1) {
                flvHtml5AuthFlag = "0";
            }

            if(mod === "new_url") {
                if(obj.new_url && flvHtml5AuthFlag === "1") {
                    setFlvHtml5VideoNewUrl(obj.new_url);
                } else {
                    html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "auth","autherror:new_url");
                }
            }
        }
    }

    xmlhttp.open("POST", url, asyn);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
    xmlhttp.send(sendData);
}

function html5FlvParseJsonFromUrl(data) {
    var obj = eval('(' + data.replace(/(^\s*)|(\s*$)/g, "") + ')');
    var addr = decodeURIComponent(obj.liveurl);

    convivaVdnSid = obj.convivaVdnSid;
    convivaCdnInfo = obj.convivaCdnInfo
    cdnName = obj.cdnName;

    html5LiveBackAddr = decodeURIComponent(obj.html5LiveBackAddr);
    html5LiveBackCndCode = obj.html5LiveBackCndCode;


    try {
        if(isUseConvivaMonitor) {
            doLoadHtml5FlvConvivaJs();
        }

        if(useGuoshuangMonitor) {
            html5Guoshuang = new GuoshuangAnalytics();
            doLoadFlvHtml5AnalyticsJs("guoshuang", "jsLoader3", checkGuoshuang);
        }
    } catch(e) {}

    if(videoName!="ipanda"&&videoName!=="cctv_news01"&&videoName!=="cctv_news02"&&videoName!=="cctv_news03"&&videoName!=="cctv_news04") {

        if((addr.indexOf("AUTH=")==-1) || addr.indexOf("amode=1")==-1) {
            setFlvHtml5VideoNewUrl(addr, true);
        } else{
            checkFlvHtml5Auth(true, "new_url", "http://h5.cntv.powzamedia.com/cntv/new_url", addr);
        }
    } else{
        setFlvHtml5VideoNewUrl(addr, true);
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



function playM3U8Stream(channelid) {
    if(!checkLegalDomain())
    {
        html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "live");
        return;
    }

    html5LiveBackAddr = "";
    if(isIPad()) {

        //hds直播清除session
        if(typeof(convivaClient)!=="undefined" && typeof(convivaSessionKey)!=="undefined" && convivaClient) {
            convivaClient.cleanupSession(convivaSessionKey);
        }

        //flv直播清除session
        if(typeof(flvConvivaClient)!=="undefined" && typeof(flvSessionKey)!=="undefined" && flvConvivaClient) {
            flvConvivaClient.cleanupSession(flvSessionKey);
        }

        var pageUrl = "";
        flvBtime = getQueryString("btime");
        flvBauth = getQueryString("bauth");

        var vdnData = getQueryString("vdn_data");
        var vdn_last = getQueryString("vdn_last");
        var now_time = Date.parse(new Date())/1000;

        if(vdn_last && now_time-vdn_last<60) {
            if(getQueryString("autherror") === "illegal") {
                html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "auth","autherror:illegal");
                doLoadHtml5FlvConvivaJs();
                return;

            } else if(flvBtime.length>5 && flvBauth.length>10 && vdnData.length>10) {

                checkFlvHtml5Auth(false, "b_matching", "http://h5.cntv.powzamedia.com/cntv/b_matching");
                if(flvHtml5AuthFlag === "0") {
                    var jumpUrl = "http://h5.cntv.powzamedia.com/cntv/err_check";
                    pageUrl = location.href;
                    pageUrl = deleteUrlPara(pageUrl, "vdn_data");
                    jumpUrl += "?referer=" + encodeURIComponent(pageUrl);
                    location.href = jumpUrl;

                } else{
                    html5FlvParseJsonFromUrl(vdnData);
                }
                return;
            } else if(vdnData.length>10 && flvBtime.length<5 && flvBauth.length<10){
                var jumpUrl = "http://h5.cntv.powzamedia.com/cntv/b_match";
                pageUrl = location.href;
                pageUrl = deleteUrlPara(pageUrl, "bauth");
                pageUrl = deleteUrlPara(pageUrl, "btime");

                jumpUrl += "?referer=" + encodeURIComponent(pageUrl);
                location.href = jumpUrl;
                return;
            }
        }

    }

    try {
        if(isUseConvivaMonitor) {
            doLoadHtml5FlvConvivaJs();
            setTimeout(function (){
                if(!document.getElementById("html5Player_live").src) {
                    if(isHtml5VdnMsg === "1") {
                        setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""), "VDN_RESPONSE_EMPTY");
                        setCntvFlvMetadata("690003", "VDN_RESPONSE_EMPTY");
                    } else if(isHtml5VdnMsg === "2"){
                        setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""), "VDN_RESPONSE_PARSE_ERROR");
                        setCntvFlvMetadata("690003", "VDN_RESPONSE_PARSE_ERROR");
                    } else{
                        setFlvConvivaMetadata("", player_info_obj.n.replace("pa://cctv_p2p_hd", ""));
                        setCntvFlvMetadata("690003", "VDN_RESPONSE_ERROR");
                    }

                }

            }, 10000);

        }

        if(useCntvMonitor) {
            doLoadHtml5FlvCntvJs();
        }
    } catch(e) {}

    html5LiveBackStarted = false;
    getFlashLiveAddrs(channelid);
    var addr = player_info_obj.id;
    var videoType = "";
    var videoType2 = "";
    var platform = "";
    var osVersion = "";



    if(addr.indexOf(".m3u8") !== -1) {
        document._html5Player.src = addr;
    } else {

        if(platform == "ios") {

            if(/(ipad)/i.test(navigator.userAgent)) {
                osVersion = getIPadVersion();
                videoType = "hls_url";
                videoType2 = "hls2";
            } else {
                videoType = "hls_url";
                videoType2 = "hls2";
            }
        } else if(platform == "android") {
            osVersion = getAndroidVersion();
            if(osVersion < 4) {
                videoType = "hds_url";
                videoType2 = "hds5";
            } else {
                videoType = "hls_url";
                videoType2 = "hls2";
            }
        } else {
            videoType = "hls_url";
            videoType2 = "hls2";
        }

        isHtml5LiveBackTimeShift = true;

        var _doc = document.getElementsByTagName("head")[0];
        var jsLoader = createElementByType("script", "jsLoader", "absolute", "0px", "0px", "0px", "0px");

        //判断，从cookie内获取指纹信息
        if(!getCookie_vdn("Fingerprint")){
            //获取设备指纹信息
            getfingerprint2();
        } else{
            vdn_uid = getCookie_vdn("Fingerprint");
        }

        vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5_02+vdn_uid)).toUpperCase();//2017年7月31日11:17:11

        var vdnUrl = "http://vdn.live.cntv.cn/api2/liveHtml5.do?channel=" + addr + "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
        vdnUrl += "&ip=101.248.0.0";


        jsLoader.src = vdnUrl;
        _doc.appendChild(jsLoader);

        if(typeof jsLoader.onload != "undefined") {

            jsLoader.onload = function() {

                if(typeof html5VideoData != "undefined") {
                    if(typeof html5VideoData === "string") {
                        html5VideoData = eval('(' + html5VideoData.replace(/(^\s*)|(\s*$)/g, "") + ')');
                    }

                    try {
                        if(typeof(html5VideoData.hls_url.hls2) != "undefined" && html5VideoData.hls_url.hls2) {
                            addr = html5VideoData.hls_url.hls2;
                        } else if(typeof(html5VideoData.hls_url.hls4) != "undefined" && html5VideoData.hls_url.hls4) {
                            addr = html5VideoData.hls_url.hls4;
                        } else {
                            addr = html5VideoData.hls_url.hls1;
                        }

                        isFlvLivePublic = html5VideoData.public;

                        if(isFlvLivePublic === "0" && (channelid === "cctv5" || channelid === "cctv5plus")) {
                            if(typeof(html5VideoData.hls_url.hls6) != "undefined" && html5VideoData.hls_url.hls6) {
                                addr = html5VideoData.hls_url.hls6;
                                isFlvLivePublic = "2";
                                isNormalVideo = false;
                            }
                        }

                        cdnName = getVideoAddr("hls_cdn_info", "cdn_code");
                    } catch(e) {
                        isHtml5VdnMsg = "1";
                        addr = getVideoAddr(videoType, videoType2);
                        isFlvLivePublic = getVideoAddr("public", "");
                    }

                } else{
                    addr = getVideoAddr(videoType, videoType2);
                    isFlvLivePublic = getVideoAddr("public", "");
                }

                try {
                    convivaVdnSid = getVideoAddr("client_sid");
                    convivaCdnInfo = {
                        "vdnIP": getVideoAddr("lc", "ip"),
                        "vdnCountryCode": getVideoAddr("lc", "country_code"),
                        "vdnProvinceCode": getVideoAddr("lc", "provice_code"),
                        "vdnCityCode": getVideoAddr("lc", "city_code"),
                        "vdnISPCode": getVideoAddr("lc", "isp_code")
                    };

                    /*h5走阿里、腾讯单独时采用
                    html5LiveBackAddr = getVideoAddr("hds_url", "hds4");
                    html5LiveBackCndCode = getVideoAddr("hds_cdn_info", "cdn_code");
                    */

                    html5LiveBackAddr = addr;
                    html5LiveBackCndCode = cdnName;
                } catch(e) {
                    if(isHtml5VdnMsg === "0") {
                        isHtml5VdnMsg = "2";
                    }
                }


                var aliInitTimer = setInterval(function () {
                    if(typeof goldlog!= "undefined" && goldlog.initSession!= "undefined") {
                        clearInterval(aliInitTimer);
                        setCntvFlvMetadata("init");

                    }
                }, 100);


                if(isFlvLivePublic === "0") {
                    html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "copyright");
                    createFlvHtml5ConvivaEvent();
                    if(!html5LiveBackAddr) {
                        html5LiveBackAddr = addr;
                    }
                    return;
                }


                if(isFlvLivePublic!="2" && typeof(html5VideoData.hls_url.hls3)!="undefined" && html5VideoData.hls_url.hls3 && html5VideoData.hls_url.hls3.indexOf("cctv?")!==-1 && (cdnName!=="LIVE-HLS-CDN-AK" && cdnName!=="LIVE-HLS-CDN-TTA")){
                    if(cdnName !== "LIVE-HLS-CDN-TXY") {
                        cdnName = "LIVE-HLS-CDN-ALI";
                    }

                }



                if(isFlvLivePublic === "2") {

                    html5CopyrightMsg(player_info_obj.div, player_info_obj.w, player_info_obj.h, "audio");
                    createHtml5LivePlayer(player_info_obj.div, player_info_obj.w, player_info_obj.h);
                    if((addr.indexOf("AUTH=")==-1) || addr.indexOf("amode=1")==-1) {
                        setFlvHtml5VideoNewUrl(addr, true);
                    }


                } else if(cdnName!=="LIVE-HLS-CDN-ALI" && cdnName!=="LIVE-HLS-CDN-TXY" && cdnName!=="LIVE-HLS-CDN-BS" && cdnName!=="LIVE-HLS-CDN-KS" && cdnName!=="LIVE-HLS-CDN-AK" && cdnName!=="LIVE-HLS-CDN-TTA") {
                    var pageUrl = location.href;
                    pageUrl = deleteUrlPara(pageUrl, "vdn_data");
                    pageUrl = deleteUrlPara(pageUrl, "bauth");
                    pageUrl = deleteUrlPara(pageUrl, "btime");
                    pageUrl = deleteUrlPara(pageUrl, "vdn_last");

                    addr = encodeURIComponent(addr);


                    var vdn_data = {
                        "liveurl": addr,
                        "convivaVdnSid": convivaVdnSid,
                        "convivaCdnInfo": convivaCdnInfo,
                        "cdnName": cdnName,
                        "html5LiveBackAddr": encodeURIComponent(html5LiveBackAddr),
                        "html5LiveBackCndCode": html5LiveBackCndCode

                    };

                    vdn_data = JSON.stringify(vdn_data);

                    if((addr.indexOf("AUTH=")==-1) || addr.indexOf("amode=1")==-1) {
                        html5FlvParseJsonFromUrl(vdn_data);
                    } else{
                        if(pageUrl.indexOf("?") > 0) {
                            pageUrl += "&vdn_data=" + vdn_data;
                        } else{
                            pageUrl += "?vdn_data=" + vdn_data;
                        }

                        pageUrl += "&vdn_last=" + Date.parse(new Date())/1000;

                        location.href = pageUrl;
                    }
                    return;
                } else{
                    try {
                        if(useGuoshuangMonitor) {
                            html5Guoshuang = new GuoshuangAnalytics();
                            doLoadFlvHtml5AnalyticsJs("guoshuang", "jsLoader3", checkGuoshuang);
                        }

                        doLoadFlvHtml5AnalyticsJs("shuguang", "jsLoader9", checkShuguang);

                    } catch(e) {}


                    if(addr.indexOf("amode=1")>0  && cdnName!=="LIVE-HLS-CDN-AK" && cdnName!=="LIVE-HLS-CDN-TTA"){
                        setFlvHtml5AliNewUrl(addr);
                    } else{

                        if(isFlvLivePublic !== "1") {
                            createFlvHtml5ConvivaEvent();
                        }

                        document._html5Player.src = addr;
                        if(navigator.userAgent.toLowerCase().indexOf("huawei")>0) {
                            document._html5Player.load();
                        }

                        if(typeof is0HomepagePlayer !=="undefined" && is0HomepagePlayer) {
                            if(navigator.userAgent.toLowerCase().indexOf("qqbrowser")===-1 || !/(iphone|ipad)/i.test(navigator.userAgent)) {
                                document._html5Player.play();
                            }

                        }

                        if(addr.toLowerCase().indexOf("dianpian.mp4") > 0) {
                            isNormalVideo = false;
                        }

                        setGuoshuangInitData(addr);
                        if(!html5LiveBackAddr) {
                            html5LiveBackAddr = addr;
                        }

                        if(typeof(hdsPosterImg) != "undefined" && hdsPosterImg.length > 3) {
                            document._html5Player.poster = hdsPosterImg;
                        }
                    }

                }

            };

        }

    }

}

function checkWeixinVerson(ua) {
    var v = 0;
    var pos = ua.indexOf("micromessenger");
    if(pos > 0) {
        v = parseFloat(ua.substr(pos + 15));
    }
    return v;
}


function show0ShouyePlayButton() {
    var playerWidth = document.getElementById("html5Player_live").style.width.replace("px", "");
    var playerHeight = document.getElementById("html5Player_live").style.height.replace("px", "");
    var isStartToPlay = false;
    var errorCount = 0;

    var shouyeBar = createElementByType("div", "h5_0shouye_bar", "absolute", playerWidth + "px", "45px", "0px", playerHeight-45+"px");
    shouyeBar.style.zIndex = "100";
    document._baseDiv.appendChild(shouyeBar);

    //显示右上角"直播中"
    var shouyeBarPlaying = createElementByType("img", "h5_0shouye_playing", "absolute", "88px", "30px", playerWidth-100+"px", "10px");
    shouyeBarPlaying.style.zIndex = "100";
    shouyeBarPlaying.src = "http://player.cntv.cn/images/ipad/h5_0shouye_playing.png";
    document._baseDiv.appendChild(shouyeBarPlaying);

    //控制条背景
    var shouyeBarBgd = createElementByType("img", "h5_0shouye_bar_bgd", "absolute", playerWidth + "px", "45px", "0px", "0px");
    shouyeBarBgd.src = "http://player.cntv.cn/images/ipad/h5_0shouye_controlbar.png";
    shouyeBar.appendChild(shouyeBarBgd);

    //暂停按钮
    var shouyeBarPauseBtn = createElementByType("img", "h5_0shouye_pause", "absolute", "45px", "45px", "0px", "0px");

    shouyeBarPauseBtn.src = "http://player.cntv.cn/images/ipad/h5_0shouye_pause.png";
    shouyeBar.appendChild(shouyeBarPauseBtn);
    shouyeBarPauseBtn.addEventListener("click",function () {

        if(!isStartToPlay) {
            document.getElementById("html5Player_live").load();
            if(isUseConvivaMonitor) {
                setFlvConvivaMetadata(document.getElementById("html5Player_live").src, player_info_obj.n.replace("pa://cctv_p2p_hd", "")); //启动conviva统计
            }

            if(useCntvMonitor) {
                setCntvFlvMetadata();
            }
        }
        isStartToPlay = true;

        document.getElementById("html5Player_live").play();
        this.style.display = "none";
        document.getElementById("h5_0shouye_play").style.display = "block";



    }, false);

    //播放按钮
    var shouyeBarPlayBtn = createElementByType("img", "h5_0shouye_play", "absolute", "45px", "45px", "0px", "0px");
    shouyeBarPlayBtn.src = "http://player.cntv.cn/images/ipad/h5_0shouye_play.png";
    shouyeBarPlayBtn.style.display = "none";
    shouyeBar.appendChild(shouyeBarPlayBtn);

    shouyeBarPlayBtn.addEventListener("click",function () {
        document.getElementById("html5Player_live").pause();
        this.style.display = "none";
        document.getElementById("h5_0shouye_pause").style.display = "block";
    },false);

    //静音
    var shouyeBarMute = createElementByType("img", "h5_0shouye_mute", "absolute", "45px", "45px", playerWidth-50+"px", "0px");
    shouyeBarMute.src = "http://player.cntv.cn/images/ipad/h5_0shouye_mute.png";
    shouyeBar.appendChild(shouyeBarMute);
    shouyeBarMute.addEventListener("click",function () {
        document.getElementById("html5Player_live").muted = false;
        this.style.display = "none";
        document.getElementById("h5_0shouye_sound").style.display = "block";
    },false);

    //非静音
    var shouyeBarSound = createElementByType("img", "h5_0shouye_sound", "absolute", "45px", "45px", playerWidth-50+"px", "0px");
    shouyeBarSound.src = "http://player.cntv.cn/images/ipad/h5_0shouye_sound.png";
    shouyeBarSound.style.display = "none";
    shouyeBar.appendChild(shouyeBarSound);
    shouyeBarSound.addEventListener("click",function () {
        document.getElementById("html5Player_live").muted = true;
        this.style.display = "none";
        document.getElementById("h5_0shouye_mute").style.display = "block";
    },false);

    var shouyeBarPlayText = createElementByType("a", "h5_0shouye_text", "absolute", playerWidth-100+"px", "30px", "60px", "10px");
    shouyeBarPlayText.style.fontSize = "18px";
    shouyeBarPlayText.style.color = "#FFF";
    //shouyeBarPlayText.style.textAlign = "center";
    shouyeBarPlayText.style.verticalAlign = "middle";
    shouyeBarPlayText.innerHTML = "";
    shouyeBarPlayText.style.textDecoration = "none";
    shouyeBarPlayText.href = "http://tv.cctv.com/live/" + videoName;
    shouyeBar.appendChild(shouyeBarPlayText);


    //默认背景图片覆盖播放器
    var shouyeBarBb = createElementByType("div", "h5_0shouye_bg", "absolute", playerWidth + "px", playerHeight+"px", "0px", "0px");
    shouyeBarBb.style.backgroundImage = "url(http://player.cntv.cn/images/ipad/h5_0shouye_bg.png) ";
    shouyeBarBb.style.backgroundRepeat = "no-repeat";
    shouyeBarBb.style.backgroundSize = playerWidth+"px " + playerHeight+"px";
    shouyeBarBb.style.zIndex = "110";

    document._baseDiv.appendChild(shouyeBarBb);
    shouyeBarBb.addEventListener("click",function () {

        document.getElementById("html5Player_live").play();
        this.style.display = "none";
    },false);

    var shouyeBarBbBtn = createElementByType("img", "h5_0shouye_bg_btn", "absolute", "88px", "88px", "0px", "0px");
    shouyeBarBbBtn.src = "http://player.cntv.cn/images/ipad/h5_0shouye_bg_btn.png?3";
    shouyeBarBbBtn.style.zIndex = "110";
    shouyeBarBbBtn.style.margin = "0 auto";
    shouyeBarBbBtn.style.left = playerWidth/2 - 44 + "px";
    shouyeBarBbBtn.style.top = playerHeight/2 - 44 + "px";
    shouyeBarBb.appendChild(shouyeBarBbBtn);

    getH50shouyeEpg();

    document.getElementById("html5Player_live").style.backgroundColor = "gray";
    document.getElementById("html5Player_live").style.objectFit = "fill";


    if(navigator.userAgent.toLowerCase().indexOf("qqbrowser")>0 && /(iphone|ipad)/i.test(navigator.userAgent)) {
        document.getElementById("html5Player_live").autoplay=false;
    } else{
        document.getElementById("html5Player_live").autoplay=true;
    }


    document.getElementById("html5Player_live").muted = true;


    document.getElementById("html5Player_live").addEventListener("playing", function (ev) {
        document.getElementById("h5_0shouye_pause").style.display = "none";
        document.getElementById("h5_0shouye_play").style.display = "block";

        shouyeBarBb.style.display = "none";

        document._baseDiv.removeChild(shouyeBarBb);

        if(navigator.userAgent.toLowerCase().indexOf("qqbrowser") === -1) {
            errorCount = 0;
        }

        if(!isStartToPlay) {
            if(isUseConvivaMonitor) {
                setFlvConvivaMetadata(document.getElementById("html5Player_live").src, player_info_obj.n.replace("pa://cctv_p2p_hd", "")); //启动conviva统计
            }

            if(useCntvMonitor) {
                setCntvFlvMetadata();
            }
        }
        isStartToPlay = true;
    }, false);


    document.getElementById("html5Player_live").addEventListener("pause", function (ev) {
        document.getElementById("h5_0shouye_play").style.display = "none";
        document.getElementById("h5_0shouye_pause").style.display = "block";
    }, false);





    document.getElementById("html5Player_live").addEventListener("error", function (ev) {

        isStartToPlay = true;
        if(isStartToPlay) {
            if(errorCount > 2) {
                h50shouyErrorHandle(playerWidth, playerHeight);
            } else{
                errorCount++;
                //alert(errorCount)
                document.getElementById("html5Player_live").load();
                document.getElementById("html5Player_live").play();
            }
        }

    }, false);




    //document.getElementById("html5Player_live").style.backgroundColor = "gray";
    //document.getElementById("html5Player_live").poster = "http://player.cntv.cn/images/ipad/h5_0shouye_error16x9.png";
    //document.getElementById("html5Player_live").style.objectFit = "fill";


}

function h50shouyErrorHandle(playerWidth, playerHeight) {
    document.getElementById("html5Player_live").pause();
    document.getElementById("html5Player_live").style.display = "none";
    document.getElementById("h5_0shouye_bar").style.display = "none";
    document.getElementById("h5_0shouye_playing").style.display = "none";

    if(document.getElementById("flv_video_content_is_loading")) {
        document.getElementById("flv_video_content_is_loading").style.display = "none";
    }

    var shouyePlayError = createElementByType("img", "h5_0shouye_payerror", "absolute", playerWidth + "px", playerHeight + "px", "0px", "0px");
    if(playerWidth/playerHeight < 1.5) {
        shouyePlayError.src = "http://player.cntv.cn/images/ipad/h5_0shouye_error4x3.png";
    } else{
        shouyePlayError.src = "http://player.cntv.cn/images/ipad/h5_0shouye_error16x9.png";
    }

    shouyePlayError.style.zIndex = "111";

    shouyePlayError.addEventListener("click", function (ev) {
        location.href = "http://tv.cctv.com/"
    }, false);


    if(document.getElementById("h5_0shouye_bg")) {
        document.getElementById("h5_0shouye_bg").style.display = "none";
        document._baseDiv.removeChild(document.getElementById("h5_0shouye_bg"));
    }
    document._baseDiv.appendChild(shouyePlayError);
}

function getH50shouyeEpg() {

    var nowDate = new Date();
    var epgMonth = nowDate.getMonth() + 1 + "";
    if(epgMonth.length < 2) {
        epgMonth = "0" + epgMonth;
    }
    var epgDay = nowDate.getDate() + "";
    if(epgDay.length < 2) {
        epgDay = "0" + epgDay;
    }

    var epgDate = nowDate.getFullYear() + epgMonth + epgDay;

    var jsLoader = createElementByType("script","convivaJs29","absolute","0px","0px","0px","0px");
    jsLoader.src = "http://api.cntv.cn/epg/epginfo?serviceId=shiyi&d=" + epgDate + "&c=" + videoName + "&cb=updateH50shouye";
    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);
}

function showH50shouyeTitle(programLen, programList, timer) {

    var nowDate = new Date();
    var nowTimestamp = Date.parse(nowDate)/1000;
    var nowHour = nowDate.getHours();
    var nowMin = nowDate.getMinutes();

    for(var i=0; i<programLen; i++) {
        if(programList[i].st<=nowTimestamp && nowTimestamp<programList[i].et) {
            document.getElementById("h5_0shouye_text").innerHTML = decodeURIComponent(programList[i].t);
            break;
        }
    }

    if(i>=programLen && nowHour==0 && nowMin==0) {
        clearInterval(timer);
        getH50shouyeEpg();
    }
}

function updateH50shouye(epg) {
    var programLen = 0;
    try{
        var programList = epg[videoName]['program'];
        programLen = programList.length;
    } catch (e) {
        programLen = 0;
    }

    if(programLen > 0) {
        showH50shouyeTitle(programLen, programList);
        var showTitleTimer = setInterval(function () {
            showH50shouyeTitle(programLen, programList, showTitleTimer);
        }, 10000);
    }
}

function live0ShouyePlayOrPause(v) {

    try{
        if(isIPad()) {
            if(v == "pause") {
                document.getElementById("html5Player_live").pause();
            } else{
                document.getElementById("html5Player_live").play();
            }
        } else{
            if(v == "pause") {
                thisMovie("hds_flash_player__video_player_box").smallPlayer_pauseVideo();
            } else{
                thisMovie("hds_flash_player__video_player_box").smallPlayer_playVideo();
            }
        }
    } catch (e) {
    }

}

function showFlvPlayButton() {
    //var playbtnBackgroundDiv = document.createElement("div");
    var playerWidth = document.getElementById("html5Player_live").style.width.replace("px", "");
    var playerHeight = document.getElementById("html5Player_live").style.height.replace("px", "");
    //var playerLeft = document.getElementById("html5Player_live").style.left.replace("px","");
    //var playerTop = document.getElementById("html5Player_live").style.top.replace("px","");

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

    document.getElementById("html5Player_live").removeAttribute("controls");
    //playbtnBackgroundDiv.addEventListener('click', removeStartPlayBtn, false);
    playbtnDiv.addEventListener('click', removeFlvStartPlayBtn, false);

    //document._baseDiv.appendChild(playbtnBackgroundDiv);
    document._baseDiv.appendChild(playbtnDiv);

    document.getElementById("html5Player_live").addEventListener('click', removeFlvStartPlayBtn, false);
}

function removeFlvStartPlayBtn() {

    var playbtnTag = document.getElementById("playbtn_img");

    try {
        if(playbtnTag) {
            playbtnTag.parentNode.removeChild(playbtnTag);
        } else{
            return;
        }

        document.getElementById("html5Player_live").removeEventListener('click', removeFlvStartPlayBtn, false);

        if(isUseConvivaMonitor) {
            setFlvConvivaMetadata(document.getElementById("html5Player_live").src, player_info_obj.n.replace("pa://cctv_p2p_hd", "")); //启动conviva统计
        }

        if(useCntvMonitor) {
            setCntvFlvMetadata();
        }

    } catch(e) {
    }

    document.getElementById("html5Player_live").controls = true;
    if(navigator.userAgent.toLowerCase().indexOf("huawei")===-1) {
        document.getElementById("html5Player_live").load();
    }
    document.getElementById("html5Player_live").play();

}

function htmlPlayAFile2() {

    try {
        if(isUseConvivaMonitor) {
            checkFlvConviva();
            setTimeout(function() {
                setFlvConvivaMetadata(chapterVos[currentIndex]["url"], player_info_obj.n); //启动conviva统计
            }, 30);

        }

    } catch(e) {

    }

    document._html5Player.pause();
    document._html5Player.src = chapterVos[currentIndex]["url"];
    try {
        document._html5Player.load();
        document._html5Player.play();

        isFirstFile = false;
    } catch(e) {

    }
}

function html5InitEvent() {
    for(key in media_events) {
        html5AddListener(document._html5Player, key, capture);
    }
}

function html5AddListener(obj, type, handler) {
    if(obj.attachEvent) {
        obj.attachEvent('on' + type, handler);
    } else if(obj.addEventListener) {
        obj.addEventListener(type, handler, false);
    }
}

function capture(event) {
    if(event.type == "ended") {
        html5PlayerNext();

        if(html5Guoshuang && currentIndex + 1 >= chapterVos.length) {
            html5Guoshuang.isPlaying = false;
            html5Guoshuang.doEnd();
        }
    }
    if(event.type == "timeupdate") {
        //setPlayed();
    }
    if(event.type == "pause") {
        isPlaying(false);

        if(html5Guoshuang) {
            html5Guoshuang.isPlaying = false;
            html5Guoshuang.doPause();
        }
    }
    if(event.type == "playing") {
        isPlaying(true);
        fadeTo(1);
        if(html5IsRtmp) {
            totalLength = document._html5Player.duration;
        }
        if(rest != 0) {
            setTimeout(timeToRest, 500);
        }

        if(html5Guoshuang && !html5Guoshuang.isPlaying) {
            html5Guoshuang.isPlaying = true;
            html5Guoshuang.doPlaying();
        }
    }

    if(event.type == "play" && html5Guoshuang && !html5Guoshuang.played) {

        html5Guoshuang.videoPlay.beginPreparing();
        html5Guoshuang.videoPlay.endPreparing(true, html5Guoshuang.metadata);
        html5Guoshuang.played = true;
    }

    if(addOnStr != event.type) {
        debug(event.type);
    }
    addOnStr = event.type;
    if(isShowH5VideoLoading) {
        if(event.type == "waiting" || event.type == "seeking" || event.type == "seeked") {
            if(/(iphone|ipad)/i.test(navigator.userAgent)) {
                document.getElementById("flv_video_content_is_loading").style.display = "block";
            }

        } else {

            if(/(iphone|ipad)/i.test(navigator.userAgent) && (event.type == "canplaythrough")) {
                document.getElementById("flv_video_content_is_loading").style.display = "none";
            }
        }
    }
}

function timeToRest() {
    document._html5Player.currentTime = rest;
    rest = 0;
}

function html5PlayerNext() {
    if(currentIndex + 1 < chapterVos.length) {
        currentIndex++;
        htmlPlayAFile2();
    } else {
        document._html5Player.src = chapterVos[0]["url"];
        document._html5Player.load();
        document._html5Player.pause();
        currentIndex = 0;
        fadeTo(0);
        showReplay();
    }
}


var _0x51cf=["\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x75\x64\x6B\x32\x37\x76\x6E\x38\x6C\x64\x66\x33\x6C\x63\x76\x31\x73\x70","\x70\x61\x72\x73\x65","\x30","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x63\x75\x6C\x33","\x63\x71\x6C\x36","\x63\x67\x6C\x35","\x2F\x63\x6E\x74\x76\x6C\x69\x76\x65\x2F","\x6D\x64\x2E\x6D\x33\x75\x38","\x2D","\x64\x6C\x39\x32\x66\x39\x63\x6A\x68\x33\x68\x38\x32\x76\x63\x36\x32\x6B\x78\x61\x6C\x69\x77\x6C\x31\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x6C\x73\x32\x2E\x63\x6E\x74\x76\x2E\x6D\x79\x61\x6C\x69\x63\x64\x6E\x2E\x63\x6F\x6D","\x3F\x61\x75\x74\x68\x5F\x6B\x65\x79\x3D","\x6C\x69\x76\x65\x62\x61\x63\x6B","\x4C\x49\x56\x45\x2D\x48\x4C\x53\x2D\x43\x44\x4E\x2D\x54\x58\x59","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x63\x74\x76\x35\x2E\x74\x78\x74\x79\x2E\x35\x32\x31\x33\x2E\x6C\x69\x76\x65\x70\x6C\x61\x79\x2E\x6D\x79\x71\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x6C\x69\x76\x65\x2F","\x5F\x74\x78\x74\x79\x2E\x6D\x33\x75\x38","\x31","\x73\x72\x63","\x5F\x68\x74\x6D\x6C\x35\x50\x6C\x61\x79\x65\x72","\x68\x75\x61\x77\x65\x69","\x69\x6E\x64\x65\x78\x4F\x66","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x6C\x6F\x61\x64","\x64\x69\x61\x6E\x70\x69\x61\x6E\x2E\x6D\x70\x34","\x6C\x65\x6E\x67\x74\x68","\x70\x6F\x73\x74\x65\x72","\x4C\x49\x56\x45\x2D\x48\x44\x53\x2D\x43\x44\x4E\x2D\x41\x4C\x49"];function setFlvHtml5AliNewUrl(_0x86d5x2){if( typeof ChannelID!== _0x51cf[0]&& ChannelID){videoName= ChannelID};var _0x86d5x3=_0x51cf[1];var _0x86d5x4=Date[_0x51cf[2]]( new Date())/ 1000;var _0x86d5x5=_0x51cf[3];var _0x86d5x6=Math[_0x51cf[5]](Math[_0x51cf[4]]()* 1000);var _0x86d5x7=[_0x51cf[6],_0x51cf[7]];var _0x86d5x8=_0x86d5x7[0];var _0x86d5x9=_0x51cf[8]+ _0x86d5x8;var _0x86d5xa=_0x51cf[9]+ videoName+ _0x51cf[10];var _0x86d5xb=setH5Str(_0x86d5xa+ _0x51cf[11]+ _0x86d5x4+ _0x51cf[11]+ _0x86d5x6+ _0x51cf[11]+ _0x86d5x5+ _0x51cf[11]+ _0x51cf[12][19]+ _0x86d5x8+ _0x86d5x3[_0x51cf[13]](5,11)+ _0x86d5x9);var _0x86d5xc=_0x86d5x4+ _0x51cf[11]+ _0x86d5x6+ _0x51cf[11]+ _0x86d5x5+ _0x51cf[11]+ _0x86d5xb;var _0x86d5xd=_0x51cf[14]+ _0x86d5xa+ _0x51cf[15]+ _0x86d5xc;var _0x86d5xe=_0x86d5xd;if(_0x86d5x2!== _0x51cf[16]){if(isHtml5Tengxun(videoName)){cdnName= _0x51cf[17];_0x86d5xd= _0x51cf[18]+ videoName+ _0x51cf[19]};if(isFlvLivePublic!== _0x51cf[20]){createFlvHtml5ConvivaEvent()};document[_0x51cf[22]][_0x51cf[21]]= _0x86d5xd;if(navigator[_0x51cf[26]][_0x51cf[25]]()[_0x51cf[24]](_0x51cf[23])> 0){document[_0x51cf[22]][_0x51cf[27]]()};if(_0x86d5xd[_0x51cf[25]]()[_0x51cf[24]](_0x51cf[28])> 0){isNormalVideo= false};setGuoshuangInitData(_0x86d5xd);if(!html5LiveBackAddr){html5LiveBackAddr= _0x86d5xd};if( typeof (hdsPosterImg)!= _0x51cf[0]&& hdsPosterImg[_0x51cf[29]]> 3){document[_0x51cf[22]][_0x51cf[30]]= hdsPosterImg}};html5LiveBackCndCode= _0x51cf[31];html5LiveBackAddr= _0x86d5xe};



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

function dealCharpters() {
    var i, b;
    b = startTime.slice(11);
    if(b < 5) {
        i = b * 60;
    } else {
        i = (b - 5) * 60;
    }
    firstSegmentStart = i;
    chapterVos[0]["url"] = chapterVos[0]["url"] + "?start=" + firstSegmentStart;

}

function showReplay() {

}

function fadeTo(v) {
    //document._html5Player.style.opacity = v;
}

function timeToString(v) {
    var intV = parseInt(v);
    var min = parseInt(intV / 60);
    var sec = parseInt(intV % 60);
    return(fillTo2Bit(min) + ":" + fillTo2Bit(sec));
}

function fillTo2Bit(v) {
    if(v < 10) {
        return "0" + v;
    } else {
        return v;
    }
    return v;
}

function getCurrentTimeBase() {
    var r = 0;
    if(chapterVos) {
        for(var i = 0; i < currentIndex; i++) {
            if(currentIndex != 0) {
                r += parseInt(chapterVos[i]["duration"]);
            }
        }
    }
    return r;
}

function setPlayed() {
    var base = getCurrentTimeBase();
    var playedTime = timeToString(getCurrentTimeBase() + document._html5Player.currentTime);
    var totalTime = timeToString(totalLength);
    document._timePanel.value = playedTime + " / " + totalTime;
    var setTo = ((getCurrentTimeBase() + document._html5Player.currentTime) / totalLength);
    document._progressPlayed.style.width = parseInt(setTo * progressBarWidth) + "px";
    document._playTip.style.left = parseInt(setTo * progressBarWidth + progressBarX - 8) + "px";
}

function clickPlayButton(event) {
    playOrPause();
}

function isPlaying(v) {
    /*
     if(v)
     {
     document._playButton.style.visibility = "hidden";
     document._pauseButton.style.visibility = "visible";
     }else
     {
     document._playButton.style.visibility = "visible";
     document._pauseButton.style.visibility = "hidden";
     }
     */
}

function playOrPause() {
    if(document._html5Player.paused) {
        document._html5Player.play();
    } else {
        document._html5Player.pause();
    }
    isPlaying(!document._html5Player.paused);
}

function getFlashLiveAddrs(n) {
    var url = "";
    var id = "";
    switch(n) {
        case "cctv1":
        case "cctv1_biaoqing":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctv1";
            } else {
                cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvcctv1&type=ipad");
            }
            id = "pa://cctv_p2p_hdcctv1";
            break;
        case "cctv2":
        case "cctv2_biaoqing":
            id = "pa://cctv_p2p_hdcctv2";
            break;
        case "cctv3":
        case "cctv3_biaoqing":
            id = "pa://cctv_p2p_hdcctv3";
            break;
        case "cctv4":
        case "cctv4_biaoqing":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctv4";
            } else {
                cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvcctv4&type=ipad");
            }
            id = "pa://cctv_p2p_hdcctv4";
            break;

        case "cctv4-america_biaoqing":
        case "cctv4-america":
        case "cctvamericas":
        case "cctvamerica":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctvamerica";
            }
            id = "pa://cctv_p2p_hdcctvamerica";
            break;

        case "cctv4-euro_biaoqing":
        case "cctv4-euro":
        case "cctveuro":
        case "cctveurope":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctveuro";
            }
            id = "pa://cctv_p2p_hdcctveurope";
            break;
        case "cctv9":
        case "cctvnews":
        case "cctvnews_biaoqing":
        case "cctv-news":
        case "cctv-news_biaoqing":
            if(!ourPlayer) {
                isAkamaiPlayer = false;
                cntv_flash_live_url = "http://ak.live.cntv.cn/z/cctv9_1@139238/manifest.f4m";
            } else {
                cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvcctvnews&type=ipad");
            }
            id = "pa://cctv_p2p_hdcctv9";
            break;
        case "cctvxiyu":
        case "cctv-xiyu":
        case "cctvxiyu_biaoqing":
        case "cctv-xiyu_biaoqing":
        case "cctve":
        case "xiyu":
            //if(!ourPlayer)
            // {
            //isAkamaiPlayer = true;
            //cntv_flash_live_url="http://cctvhds-f.akamaihd.net/z/cctvxiyu_1@71834/manifest.f4m";
            // }
            if(isMultiPlayer) { isMulty = true;
                multiStreamName = "cctvxiyu"; }
            id = "pa://cctv_p2p_hdcctvxiyu";
            break; //西语
        case "cctv5":
        case "cctv5_biaoqing":
            id = "pa://cctv_p2p_hdcctv5";

            break;
        case "cctv6":
        case "cctv6_biaoqing":
            id = "pa://cctv_p2p_hdcctv6";
            break;
        case "cctv7":
        case "cctv7_biaoqing":
            id = "pa://cctv_p2p_hdcctv7";
            break;
        case "cctv8":
        case "cctv8_biaoqing":
            id = "pa://cctv_p2p_hdcctv8";
            break;
        //case "cctv9":break;
        case "cctv10":
        case "cctv10_biaoqing":
            id = "pa://cctv_p2p_hdcctv10";
            break;
        case "cctv11":
        case "cctv11_biaoqing":
            id = "pa://cctv_p2p_hdcctv11";
            break;
        case "cctv12":
        case "cctv12_biaoqing":
            id = "pa://cctv_p2p_hdcctv12";
            break;
        case "cctv13":
        case "cctv13_biaoqing":
            id = "pa://cctv_p2p_hdcctv13";
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctv13";
            } else {
                cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvlianghui&type=ipad");
            }
            break;

        case "cctvmusic":
        case "cctv-music":
        case "cctvmusic_biaoqing":
        case "cctv15":
            id = "pa://cctv_p2p_hdcctv15";
            break;

        case "cctv14":
        case "cctvchildren":
            id = "pa://cctv_p2p_hdcctvchild";
            break;

        case "cctv-gaowang":
        case "cctv-gaowang_biaoqing":
        case "cctvgaowang":
        case "gaoerfuwangqiu":
        case "cctvgaowang_biaoqing":
            id = "pa://cctv_p2p_hdcctvgaowang";
            break;
        case "cctv9doc":
        case "CCTV9ducumentary":
        case "cctv9doc_biaoqing":
            id = "pa://cctv_p2p_hdcctvdoc";
            break; //cctv9-记录英文
        case "cctv9jilu":
        case "cctv9d":
        case "cctv9jilu_biaoqing":
            id = "pa://cctv_p2p_hdcctvjilu";
            break; //cctv9-记录英文

        case "cctv-gaoqing":
        case "cctv-gaoqing_biaoqing":
        case "cctvgaoqing":
        case "cctvgaoqing_biaoqing":
        case "cctv22":
            id = "pa://cctv_p2p_hdcctvgaoqing";
            break;
        case "cctv-fayu":
        case "cctv-fayu_biaoqing":
        case "cctvfayu":
        case "cctvfayu_biaoqing":
        case "cctvf":
        case "cctvfrench":

            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctvfrench";
            }
            id = "pa://cctv_p2p_hdcctvfrench";
            break; //法语
        case "cctv4euro":
            break; //欧洲台
        case "cctv4america":
            break; //美洲台

        case "cctvshaoer":
        case "cctvshaoer_biaoqing":
            break; //少儿台

        case "cctv-ayu":
        case "cctvayu":
        case "cctv-ayu_biaoqing":
        case "cctvayu_biaoqing":
        case "cctvarabic":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctvarabic";
            }
            id = "pa://cctv_p2p_hdcctvarabic";
            useCovivaMonitor = false;
            break;

        case "cctv-eyu":
        case "cctv-eyu_biaoqing":
        case "cctveyu":
        case "cctveyu_biaoqing":
        case "russian":
        case "cctvrussian":
            if(isMultiPlayer) {
                isMulty = true;
                multiStreamName = "cctvrussian";
            }
            id = "pa://cctv_p2p_hdcctvrussian";
            break;

        case "test":
            isMulty = true;
            streamNames = "sd2000@37696#sd1200@37696#sd850@37696#sd450@37696#sd200@37696";
            streamBits = "2000#1200#850#450#200";
            serviceNames = "rtmp://cp78663.live.edgefcs.net/live/";
            break;
        case "guangzhou":
            cntv_flash_live_rtmpName = "guangzhou";
            cntv_flash_live_url = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_rtmpName2 = "guangzhou";
            cntv_flash_live_url2 = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_isRtmp = "true";
            break;
        case "dajuyuan":
            cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvncpa&type=ipad");
            id = "pa://cctv_p2p_hdncpa";
            break;
        case "xiongmao01":
            id = "pa://cctv_p2p_hdxiongmao01";
            break;

        case "yinyue1":
            cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvyinyue1&type=ipad");
            id = "pa://cctv_p2p_yinyue1";
            break;
        case "flvzhengxie":
            cntv_flash_live_url = escape("http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=flvzhengxie&type=ipad");
            id = "pa://cctv_p2p_hdstudio2";
            break;
        case "fyxtlive1":
            cntv_flash_live_rtmpName = "shuishoubo";
            cntv_flash_live_url = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_rtmpName2 = "shuishoubo";
            cntv_flash_live_url2 = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_isRtmp = "true";
            break;
        case "cctv-fengyunzuqiu":
        case "cctv-fengyunzuqiu_biaoqing":
        case "cctvfengyunzuqiu":
        case "fengyunzuqiu":
        case "cctvfengyunzuqiu_biaoqing":
            id = "pa://cctv_p2p_hdcctvfyzq";
            break;
        case "wlchunwan":
            cntv_flash_live_rtmpName = "wangluochunwan";
            cntv_flash_live_url = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_rtmpName2 = "wangluochunwan";
            cntv_flash_live_url2 = escape("rtmp://fmslive.cctvpic.com/live/");
            cntv_flash_live_isRtmp = "true";
            break;
        case "gouwu":
        case "dianshigouwu":
        case "hdgouwu":
            break;
        case "zhongxueshengpindao":
            break;

        case "sports_biaoqing":
        case "sports":
            break;
        case "stu1_biaoqing":
        case "stu1":
            break;
        case "stu2_biaoqing":
        case "stu2":
            break;
        case "stu3_biaoqing":
        case "stu3":
            break;
        case "wefa1":
            break;
        case "wefa2":
            break;
        case "wefa3":
            break;
        case "wefa4":
            break;
        case "wefa5":
            break;
        case "wefa6":
            break;

        case "dangyuan":
        case "dangyuanwang":
        case "pa://cctv_p2p_dangyuanwang":
            id = "pa://cctv_p2p_hddangyuanwang";
            break;
        case "shijiedili":
            n = "dili";
            break;
        case "hdxjtv2":
            n = "xjtv2";
            break;
        case "hdxjtv3":
            n = "xjtv3";
            break;
        case "hdxjtv5":
            n = "xjtv5";
            break;
        case "hdxjtv8":
            n = "xjtv8";
            break;
        case "hdxjtv9":
            n = "xjtv9";
            break;
        case "hdxizang2tv":
            n = "xizang2tv";
            break;
        case "hdneimenggu2tv":
            n = "neimenggu2tv";
            break;
        case "fyjc":
            n = "cctvfyjc";
            break;
        case "fyyy":
            n = "cctvfyyy";
            break;
        case "hjjc":
            n = "cctvhjjc";
            break;

        case "xms":
        case "xiamen":
        case "xiamentv":
        case "xiamenweishi":
            n = "xiamen";
            break;
        case "xm1":
            n = "xiamen1";
            break;
        case "xm2":
            n = "xiamen2";
            break;
        case "xm3":
            n = "xiamen3";
            break;
        case "hdbtvgongong":
            n = "btv9";
            break;

        default:
            break;
    }

    if(id == "") {
        if(n.indexOf("pa://") >= 0) {
            player_info_obj.id = n;

        } else {
            player_info_obj.id = "pa://cctv_p2p_hd" + n;
        }
    } else {
        player_info_obj.id = id;
    }
    return escape(url);
}

function getIpadLiveUrl(n) {
    var url = player_info_obj.id;
    switch(n) {
        case "stu1_biaoqing":
            url = "stu1";
            break;
        case "stu1":
            url = "stu1";
            break;
        case "stu2_biaoqing":
            url = "stu2";
            break;
        case "stu2":
            url = "stu2";
            break;
        case "gouwu":
            url = "gouwu";
            break;
        case "hdgouwu":
            url = "gouwu";
            break;
        case "stu1_biaoqing":
        case "stu1":
            url = "stu1";
            break;
        case "stu2_biaoqing":
        case "stu2":
            url = "stu2";
            break;

        case "xms":
            url = "pa://cctv_p2p_hdxiamen";
            break; //厦门卫视
        case "xm1":
            url = "pa://cctv_p2p_hdxiamen1";
            break; //厦门1套
        case "xm2":
            url = "pa://cctv_p2p_hdxiamen2";
            break; //厦门
        case "xm3":
            url = "pa://cctv_p2p_hdxiamen3";
            break; //厦门
        case "hddiyijuchang":
            break; //第一剧场
        case "hdshanghaikatong":
            url = "tm64";
            break; //上海卡通 炫动卡通
        case "ningxia":
            url = "tm82";
            break; //宁夏卫视
        default:
            break;
    }
    debug(url);
    url = "http://vdn.apps.cntv.cn/api/getLiveUrlCommonRedirectApi.do?channel=" + url + "&type=ipad";
    debug(url);
    if(n == "waicai" || n == "pl://cctv_p2p_yb3" || n == "stu3_biaoqing" || n == "stu3") url = "http://ipad.vsdn.tv380.com/5B63686E5D445830303030303034367C343338387C317C343030307C7962337C687474707C74735B2F63686E5D5B74735D307C687474705B2F74735DVSDNSOOONERCOM00/yb3.m3u8";
    return url;
}

function goServiceUnavailable() {

}

function isChannelRight() {
    if(cntv_flash_live_channelid.indexOf('cctv_p2p_hdcctv5') != -1 || cntv_flash_live_channelid.indexOf('cctv_p2p_ec_c5') != -1 ||
        cntv_flash_live_channelid.indexOf('cctv_p2p264_sports') != -1 || cntv_flash_live_channelid.indexOf('cctv_p2p264_sdsports') != -1 || cntv_flash_live_channelid.indexOf('cctv_p2p_cctv5') != -1) {
        return true;
    } else {
        return false;
    }
    return true;
}


function doLoadHtml5FlvCntvJs() {

    var jsLoader = createElementByType("script","convivaJs18","absolute","0px","0px","0px","0px");
    jsLoader.src = cntvMonitorJs;

    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);
}

function setCntvFlvMetadata(msgType, errorMsg) {
    var videoId = "";
    var videoData = null;
    var urlSplit = "";

    if(msgType=="690003") {
        videoData = {
            v_id: player_info_obj.n,
            channel: player_info_obj.n,
            ver: cntvMonitorVersion,
            applicationName: "CNTV_HTML5_PLAYER",
            playerName: "live_flv",
            streamType: "live",
            assetName: player_info_obj.n,
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
                videoId = "html5Player_live";
                videoData = {
                    v_id: player_info_obj.n,
                    channel: player_info_obj.n,
                    ver: cntvMonitorVersion,
                    applicationName: "CNTV_HTML5_PLAYER",
                    playerName: "live_flv",
                    streamType: "live",
                    assetName: player_info_obj.n,
                    streamUrl: encodeURIComponent(videoId.src),
                    playAMR: "F",
                    streamMBR: "1",
                    bit: "500",
                    streamProtocol: "HLS",
                    referURL: encodeURIComponent(location.href.substr(0, 127)),
                    cdnCode: cdnName,
                    videoProfile: "vdn",
                    vdnSID: convivaVdnSid,
                    vdnIP: convivaCdnInfo.vdnIP,
                    vdnCountryCode: convivaCdnInfo.vdnCountryCode,
                    vdnProvinceCode: convivaCdnInfo.vdnProvinceCode,
                    vdnCityCode: convivaCdnInfo.vdnCityCode,
                    vdnISPCode: convivaCdnInfo.vdnISPCode,
                    public: isFlvLivePublic

                };


                var urlSplit = location.href.split("/");
                if(urlSplit.length > 1)
                {
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


function doLoadHtml5FlvConvivaJs() {

    var jsLoader = createElementByType("script", "convivaJs1", "absolute", "0px", "0px", "0px", "0px");
    jsLoader.src = ConvivaImplJs;

    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);

    var jsLoader9 = createElementByType("script", "convivaJs2", "absolute", "0px", "0px", "0px", "0px");
    jsLoader9.src = ConvivaLibarylJs;

    _doc.appendChild(jsLoader9);

    jsLoader9.onload = function() {
        checkFlvConviva();
    };

    jsLoader9.onreadystatechange = function() {
        if(jsLoader9.readyState == 'loaded' || jsLoader9.readyState == 'complete') {
            checkFlvConviva();
        }
    }
}

function setFlvConvivaMetadata(addr, channel,errorMsg) {

    var checkTimeout = 0;
    var checkSessionTimer = setInterval(function() {
        checkTimeout++;

        if(flvConvivaClient && flvConvivaPlayerStateManager) {
            clearInterval(checkSessionTimer);

            //Create metadata
            var contentMetadata = new Conviva.ContentMetadata();

            contentMetadata.streamUrl = addr;
            contentMetadata.streamType = Conviva.ContentMetadata.StreamType.LIVE;

            var tags = {};
            if(html5LiveBackStarted) {
                contentMetadata.assetName = "[" + channel + "]"+html5LiveBackTitle;
                cdnName = html5LiveBackCndCode;
                tags.playerName = "CNTV_HTML5_LIVEBACKPLAYER"; // optional
                contentMetadata.applicationName = "CNTV_HTML5_LIVEBACKPLAYER";
                var liveNowTime = Date.parse(new Date())/1000;
                tags.livebackOffset = (liveNowTime - startTime) + "";

            } else {
                contentMetadata.assetName = channel;

                if(isFlvLivePublic === "2") {
                    tags.playerName = "CNTV_HTML5_AUDIO_PLAYER";
                    contentMetadata.applicationName = "CNTV_HTML5_AUDIO_PLAYER";
                } else{
                    tags.playerName = "CNTV_HTML5_PLAYER";
                    contentMetadata.applicationName = "CNTV_HTML5_PLAYER";
                }

            }
            contentMetadata.defaultBitrateKbps = Math.floor(500); // in Kbps

            contentMetadata.defaultResource = cdnName;

            if(typeof(userid) != "undefined" && typeof(userid) == "string") {
                contentMetadata.viewerId = userid;
            } else{
                contentMetadata.viewerId = getCookie_vdn("Fingerprint") ? getCookie_vdn("Fingerprint"):"";
            }

            tags.cdnCode = cdnName;
            tags.playScene = "HTML5";
            tags.appName = "WEB.HTML5";

            tags.channel = channel;
            tags.contentId = channel;

            var urlSplit = location.href.split("/");
            if(urlSplit.length > 1) {
                tags.site = urlSplit[2];
            }

            if(/(android)/i.test(navigator.userAgent) && getAndroidVersion() < 4) {
                tags.streamProtocol = "RTMP";
            } else {
                tags.streamProtocol = "HLS";
            }
            tags.playerVendor = "Internal";
            tags.playerVersion = "2018.09.16.01";
            tags.referURL = location.href.substr(0, 127);
            tags.videoProfileType = "VDN";
            tags.P2PStyle = "F";

            tags.streamMBR = "1";
            tags.playAMR = "F";

            if(isNormalVideo) {
                tags.normalVideo = "T";
            } else {
                tags.normalVideo = "F";
            }

            if(convivaVdnSid) {
                tags.vdnSID = convivaVdnSid;
                tags.vdnIP = convivaCdnInfo.vdnIP;
                tags.vdnCountryCode = convivaCdnInfo.vdnCountryCode;
                tags.vdnProvinceCode = convivaCdnInfo.vdnProvinceCode;
                tags.vdnCityCode = convivaCdnInfo.vdnCityCode;
                tags.vdnISPCode = convivaCdnInfo.vdnISPCode;
            } else if(typeof(hdsConvivaVdnSid) !== "undefined") {
                tags.vdnSID = hdsConvivaVdnSid;
                tags.vdnIP = hdsConvivaCdnInfo.vdnIP;
                tags.vdnCountryCode = hdsConvivaCdnInfo.vdnCountryCode;
                tags.vdnProvinceCode = hdsConvivaCdnInfo.vdnProvinceCode;
                tags.vdnCityCode = hdsConvivaCdnInfo.vdnCityCode;
                tags.vdnISPCode = hdsConvivaCdnInfo.vdnISPCode;
            }



            tags.playerAlterName = "live_flv";
            contentMetadata.custom = tags;

            var videoElement = document._html5Player;

            // Create a Conviva monitoring session.
            flvSessionKey = flvConvivaClient.createSession(contentMetadata);

            //vdn请求失败后的报错
            if(!addr) {
                flvConvivaClient.reportError(
                    flvSessionKey,
                    errorMsg?errorMsg:"VDN_REQUEST_FAILED",
                    Conviva.Client.ErrorSeverity.FATAL
                );
                flvConvivaClient.cleanupSession(flvSessionKey);
            } else {
                var html5PlayerInterface = new Html5PlayerInterface(flvConvivaPlayerStateManager, videoElement);
            }


            // sessionKey was obtained as shown above
            flvConvivaClient.attachPlayer(flvSessionKey, flvConvivaPlayerStateManager);

            videoElement.addEventListener('error', function() {
                cleanupSession();
            });
            videoElement.addEventListener('ended', function() {
                cleanupSession();
            });

            function cleanupSession() {
                flvConvivaClient.cleanupSession(flvSessionKey);
            }
        }

        if(checkTimeout > 50) {
            clearInterval(checkSessionTimer);
        }

    }, 200);
}

function createFlvHtml5ConvivaEvent() {
    var voice = "no";
    if(isFlvLivePublic === "2"){
        voice = "yes";
    }
    var eventAttributes = {
        "assetName": player_info_obj.n,
        "device": "[WEB.HTML5].[HTML5].[2018.09.16.01]",
        "client": "[" + convivaCdnInfo.vdnISPCode + "].[" + convivaCdnInfo.vdnCityCode + "].[" + convivaCdnInfo.vdnProvinceCode + "].[" + convivaCdnInfo.vdnCountryCode + "].[" + convivaCdnInfo.vdnIP + "]",
        "voice": voice
    };
    var checkTimer = setInterval(function (){
        if(flvConvivaClient && typeof(Conviva)!="undefined") {
            clearInterval(checkTimer);
            flvConvivaClient.sendCustomEvent(Conviva.Client.NO_SESSION_KEY, "NO_COPYRIGHT_EVENT", eventAttributes);
        }
    }, 50);

}

var flvSessionKey = null;

function checkFlvConviva() {
    var jsLoadTimeout = 0;

    var checkTimer = setInterval(function() {
        jsLoadTimeout++;
        try {

            var systemSettings = new Conviva.SystemSettings();
            var systemInterface = new Html5SystemInterfaceFactory().build();
            var systemFactory = new Conviva.SystemFactory(systemInterface, systemSettings);

            //Customer integration CUSTOMER_KEY
            var CUSTOMER_KEY = "03798c7108aa9ad57f419fa2a1c7e155f38a6343";
            var clientSettings = new Conviva.ClientSettings(CUSTOMER_KEY);
            //clientSettings.gatewayUrl = "";
            flvConvivaClient = new Conviva.Client(clientSettings, systemFactory);
            flvConvivaPlayerStateManager = flvConvivaClient.getPlayerStateManager();
            clearInterval(checkTimer);
        } catch(e) {
            if(jsLoadTimeout > 50) {
                clearInterval(checkTimer);
            }

        }
    }, 200);
}

function playAFlashLiveBack(divid, channel, starttime, endtime, wid, hei, backTitle) {

    try {
        if(document.getElementById(divid)) {
            document.getElementById(divid).innerHTML = "";
        }
    } catch(e) {

    }

    getFlashVer();
    if(!isFlashPlayer || (getChromeVersion() >= 55 && flashChecker().v < 23)) {
        showInstallFlashPlayerMsg(divid, wid, hei);
        return;
    }

    var fo = null;

    if(navigator.userAgent.toLowerCase().indexOf("tencenttraveler") !== -1 || IsMaxthon()) {
        fo = new SWFObject("http://player.cntv.cn/standard/cntvBuguLiveBackPlayer20140117.swf?a=" + Math.random(), "vplayer", wid, hei, "10.0.0.0", "#000000");
    } else {
        fo = new SWFObject("http://player.cntv.cn/standard/cntvBuguLiveBackPlayer20140117.swf", "vplayer", wid, hei, "10.0.0.0", "#000000");
    }

    var url = window.location.href;
    fo.addVariable("videoInfoPath", "http://vdn.apps.cntv.cn/api/liveback.do");

    var vdn_uid = "";
    //判断，从cookie内获取指纹信息
    if(!getCookie_vdn("Fingerprint")){
        //获取设备指纹信息
        getfingerprint2();
    } else{
        vdn_uid = getCookie_vdn("Fingerprint");
    }
    //把指纹信息传给播放器
    fo.addVariable("fingerprint",vdn_uid);


    fo.addVariable("channel", channel);
    fo.addVariable("videoName", backTitle);
    fo.addVariable("starttime", starttime);
    fo.addVariable("endtime", endtime);
    fo.addVariable("videoId", player_info_obj.id);
    fo.addVariable("from", "web");
    fo.addVariable("url", url);
    fo.addParam("allowFullScreen", "true")
    fo.addParam("allowScriptAccess", "always");
    fo.write(divid) //);
}

function playAFlashLiveContinue(channelid) {
    isPlayerCreated = false;
    document.getElementById(player_info_obj.div).innerHTML = "";
    player_info_obj.n = channelid;
    creatLivePlayer(player_info_obj.div, player_info_obj.w, player_info_obj.h, player_info_obj.n);
}

function doCreateAptp2Player() {
    debug("doCreateAptp2Player");
    createFlashPlayer2(player_info_obj);
}

function doGetIpRestriction() {
    var divID = "";
    var w = 0;
    var h = 0;
    var channelId = "";
    if(player_info_obj.w > 0) {
        divID = player_info_obj.div;
        w = player_info_obj.w;
        h = player_info_obj.h;
        channelId = player_info_obj.n;
    } else {
        divID = cntv_flash_live_player_div;
        w = cntv_flash_live_player_w;
        h = cntv_flash_live_player_h;
        channelId = cntv_flash_live_channelid;
    }

    createPtp2Player(divID, w, h, channelId);
}

function createPtp2Player(divID, w, h, channelid) {
    debug("createPtp2Player");
    var url = "http://js.player.cntv.cn/creator/p2plive2.js";
    if(p2p2Language == 1) {
        url = "http://js.player.cntv.cn/creator/p2plive2_language.js";
    }
    createAJs(url + "?" + Math.random(), "doCreateAptp2Player", "aTagForLoadP2plive2");
}

function createAJs(url, f, v) {
    var _doc = document.getElementsByTagName('head')[0];
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    _doc.appendChild(js);
    js.charset = "utf-8";
    var loaded = false;
    if(typeof(js.onload) != "undefined") {
        js.onload = function() {

            if(f != "" && !loaded) {
                loaded = true;
                eval(f)();
            }

        }
    } else if(typeof(js.onreadystatechange) != "undefined") {
        js.onreadystatechange = function() {
            if(js.readyState == 'loaded' || js.readyState == 'complete') {
                if(js.readyState == 'loaded') {

                    if(f != null && !loaded) {
                        loaded = true;
                        eval(f)();
                    }
                }
            }
        }
    }
    js.setAttribute('src', url);
    if(v != "") {
        setTimeout(function() {
            if(!loaded) {
                var obj = eval(v);
                if(obj != null && obj != "" && obj != undefined) {
                    loaded = true;
                    if(f != null) {
                        eval(f)();
                    }
                }
            }

        }, 5000);
    }

}

function getChromeVersion() {
    var ver = "";
    var start = navigator.userAgent.indexOf("Chrome/");
    var cutStr = navigator.userAgent.substr(start + 7);
    ver = parseInt(cutStr);
    return ver;
}

function thisMovie(movieName)
{
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}

function getFlashVer() {

    var fls = flashChecker();
    var s = "";
    if(fls.f && (fls.v >= 10)) {
        isFlashPlayer = true;
    }

    else {
        isFlashPlayer = false;
    }
}

function flashChecker() {
    var hasFlash = 0; //是否安装了flash
    var flashVersion = 0; //flash版本
    var isIE = /*@cc_on!@*/0; //是否IE浏览器

    if(isIE) {
        try {
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if(swf) {
                hasFlash = 1;
                VSwf = swf.GetVariable("$version");
                flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        } catch(e) {
            //alert(e);
        }
    } else {
        if(navigator.plugins && navigator.plugins.length > 0) {
            try {
                var swf = navigator.plugins["Shockwave Flash"];
                if(swf) {
                    hasFlash = 1;
                    var words = swf.description.split(" ");
                    for(var i = 0; i < words.length; ++i) {
                        if(isNaN(parseInt(words[i]))) continue;
                        flashVersion = parseInt(words[i]);

                        if(!isIPad() && getChromeVersion() >= 55 && flashVersion >= 23 && swf.filename === "internal-not-yet-present") {
                            flashVersion = 22;
                        }
                    }
                }
            } catch(e) {
                //alert(e);
            }
        }
    }
    return {
        f: hasFlash,
        v: flashVersion
    };
}

function showInstallFlashPlayerMsg(playerId, w, h) {

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

function getQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) {
        return unescape(r[2]);
    } else {
        return "";
    }

}

function createRtmpPlayer(divID, w, h, channelid) {
    channelid = "hy01";
    if(isIPad()) {
        player_info_obj.w = w;
        player_info_obj.h = h;
        player_info_obj.div = divID;

        createHtml5LivePlayer(divID, w, h);
        playM3U8Stream(channelid);
        videoName = channelid.replace("pa://cctv_p2p_hd", "");
    } else {
        //var fo = new SWFObject("http://player.cntv.cn/standard/rtmpLiveBackPlayer0617.swf?v=0.0.0.1" + "&t=" + Math.random(), "cntv_live_flash_rtmp_player", w,h, "10.0.0.0", "#000000");
        var fo = new SWFObject("http://player.cntv.cn/standard/rtmpLiveBackPlayer0820.swf?v=0.0.0.1" + "&t=" + Math.random(), "cntv_live_flash_rtmp_player", w, h, "10.0.0.0", "#000000");
        fo.addVariable("channel", channelid);
        fo.addParam("isGridSum", "true");
        fo.addParam("wmode", "window");
        fo.addParam("menu", "false");
        fo.addParam("allowFullScreen", "true");
        fo.addParam("allowScriptAccess", "always");
        fo.write(divID);

    }

}