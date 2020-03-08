/*!
 * google-custom-search (http://github.com/xiexianbin/google-custom-search)
 * Copyright 2019 xiexianbin
 * Licensed under MIT (https://github.com/xiexianbin/google-custom-search/blob/master/LICENSE)
 */

var _prevIndex = 0;
var _nextIndex = 0;
var _resultsPerPage = 10;
var _pageNumber = 1;

var $ = {
  getJSON: function(url, params, callback) {
    var paramsUrl = "", params_arr = [];
      jsonp = callback; // this.getQueryString(url)[callbackFuncName];

    for (var key in params) {
      params_arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
    paramsUrl = params_arr.join('&');
    url += "?" + paramsUrl;
    window[jsonp] = function(data) {
      window[jsonp] = undefined;
      try {
        delete window[jsonp];
      } catch (e) {}

      if (head) {
        head.removeChild(script);
      }
      callback(data);
    };

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.charset = "UTF-8";
    script.src = url;
    document.head.appendChild(script);
    return true;
  },
  getQueryString: function(url) {
    if (url) {
      url = url.split("?")[1];
    }
    var result = {},
      queryString = url || location.search.substring(1),
      re = /([^&=]+)=([^&]*)/g,
      m;
    while (m = re.exec(queryString)) {
      result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return result;
  },
  search: function(q, direction) {
    var startIndex = 1;
    if (direction === -1) {
      startIndex = _prevIndex;
      _pageNumber--;
    }
    if (direction === 1) {
      startIndex = _nextIndex;
      _pageNumber++;
    }
    if (direction === 0) {
      startIndex = 1;
      _pageNumber = 1;
    }

    console.log("q: " + q)
    // $.getJSON(
    //   "https://www.googleapis.com/customsearch/v1",
    //   {"key": key, "cx": cx, "q": q, "start": _pageNumber, "num": _resultsPerPage, "callback": "searchResult"},
    //   searchResult);
    var api = {
 "kind": "customsearch#search",
 "url": {
  "type": "application/json",
  "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
 },
 "queries": {
  "request": [
   {
    "title": "Google Custom Search - tengine",
    "totalResults": "7",
    "searchTerms": "tengine",
    "count": 7,
    "startIndex": 1,
    "inputEncoding": "utf8",
    "outputEncoding": "utf8",
    "safe": "off",
    "cx": "007480820547784409176:acha4wg42mx"
   }
  ]
 },
 "context": {
  "title": "Xiexianbin.cn"
 },
 "searchInformation": {
  "searchTime": 0.11562,
  "formattedSearchTime": "0.12",
  "totalResults": "19",
  "formattedTotalResults": "19"
 },
 "items": [
  {
   "kind": "customsearch#result",
   "title": "Tengine 安装部署|谢先斌的博客",
   "htmlTitle": "\u003cb\u003eTengine\u003c/b\u003e 安装部署|谢先斌的博客",
   "link": "https://xiexianbin.cn/linux/nginx/2018-10-10-tengine/",
   "displayLink": "xiexianbin.cn",
   "snippet": "2018年10月10日 ... Tengine 是淘宝发起基于nginx的一个开源项目，旨在打造一个高效，安全的web\n平台。",
   "htmlSnippet": "2018年10月10日 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eTengine\u003c/b\u003e 是淘宝发起基于nginx的一个开源项目，旨在打造一个高效，安全的web\u003cbr\u003e\n平台。",
   "cacheId": "bzKH8DahFioJ",
   "formattedUrl": "https://xiexianbin.cn/linux/nginx/2018-10-10-tengine/",
   "htmlFormattedUrl": "https://xiexianbin.cn/linux/nginx/2018-10-10-\u003cb\u003etengine\u003c/b\u003e/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "210",
      "height": "240",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIYc6SGcmKDZ4fvqI2CQAWpo_sB4J6ug7g6DsW1RKEq2b9SMtOlmvO3u_A"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Tengine 安装部署",
      "og:description": "Tengine 是淘宝发起基于nginx的一个开源项目，旨在打造一个高效，安全的web平台。 官方 rpm 配置源 cd /etc/yum.repos.d/ wget https://mirrors.aliyun.com/opensource/149994924900000037/opsx/centos7/opsx-centos7.repo yum clean all && yum makecache yum install tengine 默认安装目录在：/opt",
      "og:type": "article",
      "og:url": "https://xiexianbin.cn/linux/nginx/2018-10-10-tengine/",
      "article:published_time": "2018-10-10T15:55:29+08:00",
      "article:modified_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Tengine 安装部署",
      "twitter:description": "Tengine 是淘宝发起基于nginx的一个开源项目，旨在打造一个高效，安全的web平台。 官方 rpm 配置源 cd /etc/yum.repos.d/ wget https://mirrors.aliyun.com/opensource/149994924900000037/opsx/centos7/opsx-centos7.repo yum clean all && yum makecache yum install tengine 默认安装目录在：/opt",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ],
    "cse_image": [
     {
      "src": "x-raw-image:///1fe0342a2e41fc9d12f43964cd18eb8a40af90ea98854b1c27537f859384f842"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Tengine|谢先斌的博客",
   "htmlTitle": "\u003cb\u003eTengine\u003c/b\u003e|谢先斌的博客",
   "link": "https://xiexianbin.cn/tags/tengine/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine|谢先斌的博客. ... tengine. Tengine 安装部署. 谢先斌的博客. 本网站内容由\n本人整理总结，并遵循CC BY 3.0协议发布。 关于. 关于本人 · 支付信息 · 开源软件 ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e|谢先斌的博客. ... \u003cb\u003etengine\u003c/b\u003e. \u003cb\u003eTengine\u003c/b\u003e 安装部署. 谢先斌的博客. 本网站内容由\u003cbr\u003e\n本人整理总结，并遵循CC BY 3.0协议发布。 关于. 关于本人 &middot; 支付信息 &middot; 开源软件&nbsp;...",
   "cacheId": "pZ3IkXox-w0J",
   "formattedUrl": "https://xiexianbin.cn/tags/tengine/",
   "htmlFormattedUrl": "https://xiexianbin.cn/tags/\u003cb\u003etengine\u003c/b\u003e/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Tengine",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/tags/tengine/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Tengine",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "首页_谢先斌的博客",
   "htmlTitle": "首页_谢先斌的博客",
   "link": "https://xiexianbin.cn/page/2/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · Tengine 是淘宝发起基于nginx的一个开源项目，旨在打造一个\n高效，安全的web平台。 Oct 10, 2018 linux linux,tengine,nginx,proxy,rpm ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; \u003cb\u003eTengine\u003c/b\u003e 是淘宝发起基于nginx的一个开源项目，旨在打造一个\u003cbr\u003e\n高效，安全的web平台。 Oct 10, 2018 linux linux,\u003cb\u003etengine\u003c/b\u003e,nginx,proxy,rpm&nbsp;...",
   "cacheId": "LpN4sfSrdKcJ",
   "formattedUrl": "https://xiexianbin.cn/page/2/",
   "htmlFormattedUrl": "https://xiexianbin.cn/page/2/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "chinese",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/",
      "og:updated_time": "2019-01-03T00:00:00+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "chinese",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Tags|谢先斌的博客",
   "htmlTitle": "Tags|谢先斌的博客",
   "link": "https://xiexianbin.cn/tags/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Caddy 介绍 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Caddy 介绍 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态\u003cbr\u003e\n&nbsp;...",
   "cacheId": "eN4j06adXDoJ",
   "formattedUrl": "https://xiexianbin.cn/tags/",
   "htmlFormattedUrl": "https://xiexianbin.cn/tags/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Tags",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/tags/",
      "og:updated_time": "2017-03-27T00:00:00+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Tags",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Linux|谢先斌的博客",
   "htmlTitle": "Linux|谢先斌的博客",
   "link": "https://xiexianbin.cn/categories/linux/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态修改内核参数\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态修改内核参数\u003cbr\u003e\n&nbsp;...",
   "cacheId": "RozD09gXBNsJ",
   "formattedUrl": "https://xiexianbin.cn/categories/linux/",
   "htmlFormattedUrl": "https://xiexianbin.cn/categories/linux/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Linux",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/categories/linux/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Linux",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Linux|谢先斌的博客",
   "htmlTitle": "Linux|谢先斌的博客",
   "link": "https://xiexianbin.cn/categories/linux/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态修改内核参数\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态修改内核参数\u003cbr\u003e\n&nbsp;...",
   "cacheId": "RozD09gXBNsJ",
   "formattedUrl": "https://xiexianbin.cn/categories/linux/",
   "htmlFormattedUrl": "https://xiexianbin.cn/categories/linux/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Linux",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/categories/linux/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Linux",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Linux|谢先斌的博客",
   "htmlTitle": "Linux|谢先斌的博客",
   "link": "https://xiexianbin.cn/categories/linux/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态修改内核参数\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态修改内核参数\u003cbr\u003e\n&nbsp;...",
   "cacheId": "RozD09gXBNsJ",
   "formattedUrl": "https://xiexianbin.cn/categories/linux/",
   "htmlFormattedUrl": "https://xiexianbin.cn/categories/linux/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Linux",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/categories/linux/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Linux",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Linux|谢先斌的博客",
   "htmlTitle": "Linux|谢先斌的博客",
   "link": "https://xiexianbin.cn/categories/linux/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态修改内核参数\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态修改内核参数\u003cbr\u003e\n&nbsp;...",
   "cacheId": "RozD09gXBNsJ",
   "formattedUrl": "https://xiexianbin.cn/categories/linux/",
   "htmlFormattedUrl": "https://xiexianbin.cn/categories/linux/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Linux",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/categories/linux/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Linux",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Linux|谢先斌的博客",
   "htmlTitle": "Linux|谢先斌的博客",
   "link": "https://xiexianbin.cn/categories/linux/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Tengine 安装部署 · 清除Linux 的最近登录日志和Bash 命令历史 · 搭建私有Ngrok \n内网穿透服务 · Linux Tools 汇总 · Linux Chattr 命令介绍 · Linux 动态修改内核参数\n ...",
   "htmlSnippet": "\u003cb\u003eTengine\u003c/b\u003e 安装部署 &middot; 清除Linux 的最近登录日志和Bash 命令历史 &middot; 搭建私有Ngrok \u003cbr\u003e\n内网穿透服务 &middot; Linux Tools 汇总 &middot; Linux Chattr 命令介绍 &middot; Linux 动态修改内核参数\u003cbr\u003e\n&nbsp;...",
   "cacheId": "RozD09gXBNsJ",
   "formattedUrl": "https://xiexianbin.cn/categories/linux/",
   "htmlFormattedUrl": "https://xiexianbin.cn/categories/linux/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Linux",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/categories/linux/",
      "og:updated_time": "2018-10-10T15:55:29+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Linux",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Hugo-bootstrap-x 开源|谢先斌的博客",
   "htmlTitle": "Hugo-bootstrap-x 开源|谢先斌的博客",
   "link": "https://xiexianbin.cn/open-sources/2018-10-27-hugo-bootstrap-x/",
   "displayLink": "xiexianbin.cn",
   "snippet": "2018年10月27日 ... 上一页：Tengine 安装部署; 下一页：2019年书单. 相关文章. Bootstrap 使用语法 · \nGoogle Container Registry(gcr.io) Docker 官方镜像 · StaticGen ...",
   "htmlSnippet": "2018年10月27日 \u003cb\u003e...\u003c/b\u003e 上一页：\u003cb\u003eTengine\u003c/b\u003e 安装部署; 下一页：2019年书单. 相关文章. Bootstrap 使用语法 &middot; \u003cbr\u003e\nGoogle Container Registry(gcr.io) Docker 官方镜像 &middot; StaticGen&nbsp;...",
   "cacheId": "W64T8CNmJQMJ",
   "formattedUrl": "https://xiexianbin.cn/open-sources/2018-10-27-hugo-bootstrap-x/",
   "htmlFormattedUrl": "https://xiexianbin.cn/open-sources/2018-10-27-hugo-bootstrap-x/",
   "pagemap": {
    "cse_thumbnail": [
     {
      "width": "210",
      "height": "240",
      "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIYc6SGcmKDZ4fvqI2CQAWpo_sB4J6ug7g6DsW1RKEq2b9SMtOlmvO3u_A"
     }
    ],
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Hugo-bootstrap-x 开源",
      "og:description": "Hugo-bootstrap-x 开源 简介 完毕。",
      "og:type": "article",
      "og:url": "https://xiexianbin.cn/open-sources/2018-10-27-hugo-bootstrap-x/",
      "article:published_time": "2018-10-27T00:00:00+08:00",
      "article:modified_time": "2018-10-27T00:00:00+08:00",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Hugo-bootstrap-x 开源",
      "twitter:description": "Hugo-bootstrap-x 开源 简介 完毕。",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ],
    "cse_image": [
     {
      "src": "x-raw-image:///1fe0342a2e41fc9d12f43964cd18eb8a40af90ea98854b1c27537f859384f842"
     }
    ]
   }
  },
  {
   "kind": "customsearch#result",
   "title": "Archives|谢先斌的博客",
   "htmlTitle": "Archives|谢先斌的博客",
   "link": "https://xiexianbin.cn/archives/",
   "displayLink": "xiexianbin.cn",
   "snippet": "Oct 27, 2018 » Hugo-bootstrap-x 开源; Oct 10, 2018 » Tengine 安装部署; Sep 1, \n2018 » 清除Linux 的最近登录日志和Bash 命令历史; Aug 21, 2018 » Django ORM\n ...",
   "htmlSnippet": "Oct 27, 2018 » Hugo-bootstrap-x 开源; Oct 10, 2018 » \u003cb\u003eTengine\u003c/b\u003e 安装部署; Sep 1, \u003cbr\u003e\n2018 » 清除Linux 的最近登录日志和Bash 命令历史; Aug 21, 2018 » Django ORM\u003cbr\u003e\n&nbsp;...",
   "cacheId": "Et1YFDDvZMYJ",
   "formattedUrl": "https://xiexianbin.cn/archives/",
   "htmlFormattedUrl": "https://xiexianbin.cn/archives/",
   "pagemap": {
    "metatags": [
     {
      "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
      "author": "谢先斌",
      "publisher": "me@xiexianbin.cn",
      "og:title": "Archives",
      "og:type": "website",
      "og:url": "https://xiexianbin.cn/archives/",
      "og:site_name": "chinese",
      "twitter:card": "summary",
      "twitter:title": "Archives",
      "shenma-site-verification": "45bb3e657be2347ca77751fc7b08bcf5_1558358206"
     }
    ]
   }
  }
 ]
}
  searchResult(api)
  },
};

function searchResult(response) {
  console.log(response.items)
  var html = "";

  if (response.items == null || response.items.length === 0) {
    document.querySelector('#search-result').innerHTML = "No matching pages found";
    return;
  } else {
    document.querySelector('#search-terms').innerHTML = response.queries.request[0].searchTerms;
    document.querySelector('#total-results').innerHTML = response.queries.request[0].totalResults;
    document.querySelector('#search-time').innerHTML = response.searchInformation.searchTime;
  }

  document.querySelector('#search-result-true').className = "d-block";
  document.querySelector('#search-result-false').className = "d-none";

  if (response.queries.nextPage != null) {
    _nextIndex = response.queries.nextPage[0].startIndex;
    document.querySelector('#lnk-next').classList.add("show");
  } else {
    document.querySelector('#lnk-next').classList.add("hide");
  }

  if (response.queries.previousPage != null) {
    _prevIndex = response.queries.previousPage[0].startIndex;
    document.querySelector('#lnk-prev').classList.add("show");
  } else {
    document.querySelector('#lnk-prev').classList.add("hide");
  }

  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    html += "<li class='modal-open pt-2 pb-1 mb-1 border-bottom'>";
    html += "<h5 class='mb-0'>"
    html += "<a href='" + item.link + "' target='_blank'> " + item.htmlTitle + "</a>";
    html += "</h5>"
    html += "<div>"
    html += "<a href='" + item.link + "' target='_blank'> " + item.link + "</a>";
    html += " - <a href='http://www.google.com/search?q=cache:" + item.cacheId + ":" + item.displayLink + "' target='_blank'>Snapshoot</a>";
    html += "</div>"
    html += "<div>"
    html += item.htmlSnippet;
    html += "</div>"
    html += "</li>"
  }
  document.querySelector('#search-result-items').innerHTML = html;
}
