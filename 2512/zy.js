{"spider":"./czy001.png",

"sites":
	[
	{"key":"逗比","name":"〔余影官弹专线〕","type":3,"api":"./JS/drpy.min.js","ext":"./JS/d.b.js","searchable":0,"quickSearch":0,"filterable":1},

        {
            "key": "csp_Gz360",
            "name": "瓜子┃影视",
            "jar": "./fm.jar",
            "type": 3,
            "api": "csp_Gz360",
            "playerType": 2
        },
        {
            "key": "荐片",
            "name": "荐片┃影视",
            "jar": "./fm.jar",
            "api": "csp_Jianpian",
            "type": 3,
            "playerType": "2",
            "ext":"https://ev2089.zxbwv.com"
            
        },
        {
            "key": "厂长",
            "name": "厂长┃影视",
            "jar": "./fm.jar",
            "type": 3,
            "playerType": "2",
            "api": "csp_Czsapp",
            "searchable": 1,
            "quickSearch": 1,
            "filterable": 1,
            "ext": "https://www.czzymovie.com/"
        },

    {
      "key": "tt",
      "name": "精准弹小鹅",
      quickSearch":0,
      "searchable":0,
      "type": 3,
      "api": "./czyx/apiv239drpy2.min.js",
      "ext": "./czyx/tx.js"
    },
    {
      "key": "yy",
      "name": "精准弹小酷",
      "searchable":0,
      "type": 3,
      "api": "./czyx/apiv239drpy2.min.js",
      "ext": "./czyx/yk.js"
    },
    {
      "key": "mm",
      "name": "精准弹小笀",
      "searchable":0,
      "type": 3,
      "api": "./czyx/apiv239drpy2.min.js",
      "ext": "./czyx/mg.js"
    },
    {
      "key": "aa",
      "name": "精准弹小乙",
      "searchable":0,
      "type": 3,
      "api": "./czyx/apiv239drpy2.min.js",
      "ext": "./czyx/aqy.js"
    }
    ,
{
      "key": "bb",
      "name": "精准弹小里",
      "searchable":0,
      "type": 3,
      "api": "./czyx/apiv221drpy2.min.js",
      "ext": "./czyx/bl.js"
    },
{
      "key": "三",
      "name": "弹卤零",
      "searchable":0,
      "type": 3,
      "api": "csp_SP360"
    }
		
],
	 
	 
"parses":
	[
	{
      "name": "json并发",
      "type": 2,
      "url": "Parallel"
    },
	
	{"name":"余影","type":3,"url":"Demo"},
    {"name":"解析","type":3,"url":"Web"},
	

{
    "name": "精准解析",
    "type": 1,
    "url": "http://jx.8688688.xyz/parse?url=",
    "ext": {
        "flag": ["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili","1905","NetFilx"],
        "header": {
            "User-Agent": "okhttp/4.9.1"
        }
    }
},

{"name":"解析0","type":1,
"url":"https://api.jiexi.icu/feiku.php?url=",

"ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili"],"header":{"User-Agent":"okhttp/4.9.1"}}},

{"name":"解析1","type":1,
"url":"https://json.789jiexi.com/?url=",

"ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili"],"header":{"User-Agent":"okhttp/4.9.1"}}},

{"name":"解析2","type":1,
"url":"https://www.wuyanzu.xyz/api.php?url=",

"ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili","1905","NetFilx"],"header":{"User-Agent":"okhttp/4.9.1"}}},


       
{"name":"解析3","type":1,
"url":"https://json.ke-mi.vip/?url=",

"ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili","1905","NetFilx"],"header":{"User-Agent":"okhttp/4.9.1"}}},
    {"name":"解析3","type":1,
"url":"https://json.xophp.com/api/?key=b36364d0485bc2f586ceaf49e11d211d&url=",

"ext":{"flag":["qq","腾讯","qiyi","爱奇艺","奇艺","youku","优酷","sohu","搜狐","letv","乐视","mgtv","芒果","tnmb","seven","bilibili","1905","NetFilx"],"header":{"User-Agent":"okhttp/4.9.1"}}},
    
 {
      "name": "虾米",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/xm.html?xm=",
   "header":{"User-Agent":"okhttp/4.9.1"}
    },
    {
      "name": "虾米2",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/yu.html?yu="
 
    },
    {
      "name": "虾米3",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/xm3.html?01=",
   "header":{"User-Agent":"okhttp/4.9.1"}
    },
    {
      "name": "芒果",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/yuy.html?01="
 
    },
    {
      "name": "7哥",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/yuyxm.html?01="
  
    },
    {
      "name": "聚合",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/jh.html?01="
   
    }
    ,
    {
      "name": "冰豆",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/bd.html?01=",
   "header":{"User-Agent":"okhttp/4.9.1"}
    },
    {
      "name": "盘古",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/pg.html?01="
   ,"header":{"User-Agent":"okhttp/4.9.1"}
    },
    {
      "name": "pay",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/py.html?01="
   
    },
    {
      "name": "payu3",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/payu3.html?01="
  
    }
    ,
    {
      "name": "77",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/77.html?01="
   
    },
    {
      "name": "789",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/789.html?01="
  
    },
    {
      "name": "ck",
      "type": 0,
      "url": "http://www.8688688.xyz/jx/yuyxm2.html?01="
   
    }
    

  ]
  
  
  
  
  
  
  ,
 "rules": [
        {
            "name": "暴风",
            "hosts": [
                "bfzy",
                "bfbfvip",
                "bfengbf"
            ],
            "regex": [
                "#EXTINF.*?\\s+.*?adjump.*?\\.ts"
            ]
        },
        {
            "name": "量子",
            "hosts": [
                "vip.lz",
                "hd.lz",
                ".cdnlz"
            ],
            "regex": [
                "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:7\\.166667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:4\\.066667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "17.19"
            ]
        },
        {
            "name": "非凡",
            "hosts": [
                "vip.ffzy",
                "hd.ffzy",
                "super.ffzy"
            ],
            "regex": [
                "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6\\.400000,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6\\.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXTINF.*?\\s+.*?1171(057).*?\\.ts",
                "#EXTINF.*?\\s+.*?6d7b(077).*?\\.ts",
                "#EXTINF.*?\\s+.*?6718a(403).*?\\.ts",
                "17.99",
                "14.45"
            ]
        },
        {
            "name": "索尼",
            "hosts": [
                "suonizy"
            ],
            "regex": [
                "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:1\\.000000,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXTINF.*?\\s+.*?p1ayer.*?\\.ts",
                "#EXTINF.*?\\s+.*?\\/video\\/original.*?\\.ts"
            ]
        },
        {
            "name": "快看",
            "hosts": [
                "kuaikan"
            ],
            "regex": [
                "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:5,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:2\\.4,[\\s\\S]*?#EXT-X-DISCONTINUITY",
                "#EXT-X-KEY:METHOD=NONE\\r*\\n*#EXTINF:1\\.467,[\\s\\S]*?#EXT-X-DISCONTINUITY"
            ]
        },
        {
            "name": "磁力广告",
            "hosts": [
                "magnet"
            ],
            "regex": [
                "更多",
                "请访问",
                "example",
                "社 區",
                "x u u",
                "直 播",
                "更 新",
                "社 区",
                "有趣",
                "有 趣",
                "英皇体育",
                "全中文AV在线",
                "澳门皇冠赌场",
                "哥哥快来",
                "美女荷官",
                "裸聊",
                "新片首发",
                "UUE29"
            ]
        },
        {
            "name": "火山嗅探",
            "hosts": [
                "huoshan.com"
            ],
            "regex": [
                "item_id="
            ]
        },
        {
            "name": "抖音嗅探",
            "hosts": [
                "douyin.com"
            ],
            "regex": [
                "is_play_url="
            ]
        },
        {
            "name": "农民嗅探",
            "hosts": [
                "toutiaovod.com"
            ],
            "regex": [
                "video/tos/cn"
            ]
        }
    ],
    "doh": [
        {
            "name": "Google",
            "url": "https://dns.google/dns-query",
            "ips": [
                "8.8.4.4",
                "8.8.8.8"
            ]
        },
        {
            "name": "Cloudflare",
            "url": "https://cloudflare-dns.com/dns-query",
            "ips": [
                "1.1.1.1",
                "1.0.0.1",
                "2606:4700:4700::1111",
                "2606:4700:4700::1001"
            ]
        },
        {
            "name": "AdGuard",
            "url": "https://dns.adguard.com/dns-query",
            "ips": [
                "94.140.14.140",
                "94.140.14.141"
            ]
        },
        {
            "name": "DNSWatch",
            "url": "https://resolver2.dns.watch/dns-query",
            "ips": [
                "84.200.69.80",
                "84.200.70.40"
            ]
        },
        {
            "name": "Quad9",
            "url": "https://dns.quad9.net/dns-quer",
            "ips": [
                "9.9.9.9",
                "149.112.112.112"
            ]
        }
    ],

    "flags": [
        "youku",
        "优酷",
        "优 酷",
        "优酷视频",
        "qq",
        "腾讯",
        "腾 讯",
        "腾讯视频",
        "iqiyi",
        "qiyi",
        "奇艺",
        "爱奇艺",
        "爱 奇 艺",
        "m1905",
        "xigua",
        "letv",
        "leshi",
        "乐视",
        "乐 视",
        "sohu",
        "搜狐",
        "搜 狐",
        "搜狐视频",
        "tudou",
        "pptv",
        "mgtv",
        "芒果",
        "imgo",
        "芒果TV",
        "芒 果 T V",
        "bilibili",
        "哔 哩",
        "哔 哩 哔 哩"
    ],
    "ijk": [
        {
            "group": "软解码",
            "options": [
                {
                    "category": 4,
                    "name": "opensles",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "overlay-format",
                    "value": "842225234"
                },
                {
                    "category": 4,
                    "name": "framedrop",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "soundtouch",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "start-on-prepared",
                    "value": "1"
                },
                {
                    "category": 1,
                    "name": "http-detect-range-support",
                    "value": "0"
                },
                {
                    "category": 1,
                    "name": "fflags",
                    "value": "fastseek"
                },
                {
                    "category": 2,
                    "name": "skip_loop_filter",
                    "value": "48"
                },
                {
                    "category": 4,
                    "name": "reconnect",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "enable-accurate-seek",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "mediacodec",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "mediacodec-auto-rotate",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "mediacodec-handle-resolution-change",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "mediacodec-hevc",
                    "value": "0"
                },
                {
                    "category": 1,
                    "name": "dns_cache_timeout",
                    "value": "600000000"
                }
            ]
        },
        {
            "group": "硬解码",
            "options": [
                {
                    "category": 4,
                    "name": "opensles",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "overlay-format",
                    "value": "842225234"
                },
                {
                    "category": 4,
                    "name": "framedrop",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "soundtouch",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "start-on-prepared",
                    "value": "1"
                },
                {
                    "category": 1,
                    "name": "http-detect-range-support",
                    "value": "0"
                },
                {
                    "category": 1,
                    "name": "fflags",
                    "value": "fastseek"
                },
                {
                    "category": 2,
                    "name": "skip_loop_filter",
                    "value": "48"
                },
                {
                    "category": 4,
                    "name": "reconnect",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "enable-accurate-seek",
                    "value": "0"
                },
                {
                    "category": 4,
                    "name": "mediacodec",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "mediacodec-auto-rotate",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "mediacodec-handle-resolution-change",
                    "value": "1"
                },
                {
                    "category": 4,
                    "name": "mediacodec-hevc",
                    "value": "1"
                },
                {
                    "category": 1,
                    "name": "dns_cache_timeout",
                    "value": "600000000"
                }
            ]
        }
    ],
    "ads": [
        "static-mozai.4gtv.tv"
    ]
}