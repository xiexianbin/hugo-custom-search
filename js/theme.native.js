/*!
 * hugo-bootstrap-x common js (http://github.com/xiexianbin/hugo-bootstrap-x)
 * Copyright 2012 - 2019 xiexianbin
 * Licensed under MIT (https://github.com/xiexianbin/hugo-bootstrap-x/blob/master/LICENSE)
 */

var $x = {
  /*
   * example get request
   * getAjax('http://foo.bar/?p1=1&p2=Hello+World', {}, function(data){ var json = JSON.parse(data); console.log(json); });
   */
  getAjax: function(url, headers, callback) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    for (var h in headers) {
      xhr.setRequestHeader(encodeURIComponent(h), encodeURIComponent(headers[h]));
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState>3 && xhr.status==200) {
        callback(xhr.responseText);
      }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
  },

  /*
   * example post request
   * postAjax('http://foo.bar/', 'p1=1&p2=Hello+World', {}, function(data){ console.log(data); });;
   * postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, {}, function(data){ console.log(data); });
   */
  postAjax: function(url, data, headers, callback) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k){
          return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
        }
      ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url);
    for (var h in headers) {
      xhr.setRequestHeader(encodeURIComponent(h), encodeURIComponent(headers[h]));
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState>3 && xhr.status==200) {
        callback(xhr.responseText);
      }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
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

  getScrollTop: function() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
      bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  },

  getScrollHeight: function() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
      bSH = document.body.scrollHeight;
    }
    if(document.documentElement){
      dSH = document.documentElement.scrollHeight;
    }
    scrollHeight = (bSH - dSH > 0) ? bSH : dSH ;
    return scrollHeight;
  },

  getWindowHeight: function() {
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
      windowHeight = document.documentElement.clientHeight;
    }else{
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  },

  addEvent: function(obj, type, fn) {
    if(obj.attachEvent){ //ie
      obj.attachEvent('on'+type,function(){
        fn.call(obj);
      })
    } else {
      obj.addEventListener(type,fn,false);
    }
  },
}
