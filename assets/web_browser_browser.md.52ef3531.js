import{_ as e,c as a,o as i,a as r}from"./app.2cdbdfd8.js";const l="/book/assets/s2022-11-16-15.49.51.8b332aa3.png",g=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u5982\u4F55\u5DE5\u4F5C\u7684","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u822A","slug":"\u5BFC\u822A","link":"#\u5BFC\u822A","children":[{"level":3,"title":"DNS \uFF0C\u67E5\u8BE2 IP \u5730\u5740\u670D\u52A1\u5668","slug":"dns-\u67E5\u8BE2-ip-\u5730\u5740\u670D\u52A1\u5668","link":"#dns-\u67E5\u8BE2-ip-\u5730\u5740\u670D\u52A1\u5668","children":[]},{"level":3,"title":"TCP \u63E1\u624B\uFF0C\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B","slug":"tcp-\u63E1\u624B-\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B","link":"#tcp-\u63E1\u624B-\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B","children":[]},{"level":3,"title":"TLS \u534F\u5546\uFF0CHTTPS \u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5","slug":"tls-\u534F\u5546-https-\u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5","link":"#tls-\u534F\u5546-https-\u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5","children":[]}]},{"level":2,"title":"\u8BF7\u6C42\u548C\u54CD\u5E94","slug":"\u8BF7\u6C42\u548C\u54CD\u5E94","link":"#\u8BF7\u6C42\u548C\u54CD\u5E94","children":[{"level":3,"title":"TCP \u6162\u542F\u52A8/14KB \u89C4\u5219","slug":"tcp-\u6162\u542F\u52A8-14kb-\u89C4\u5219","link":"#tcp-\u6162\u542F\u52A8-14kb-\u89C4\u5219","children":[]}]},{"level":2,"title":"\u89E3\u6790","slug":"\u89E3\u6790","link":"#\u89E3\u6790","children":[]},{"level":2,"title":"\u6E32\u67D3","slug":"\u6E32\u67D3","link":"#\u6E32\u67D3","children":[{"level":3,"title":"\u6784\u5EFA DOM \u6811","slug":"\u6784\u5EFA-dom-\u6811","link":"#\u6784\u5EFA-dom-\u6811","children":[]},{"level":3,"title":"\u6784\u5EFA CSSOM \u6811","slug":"\u6784\u5EFA-cssom-\u6811","link":"#\u6784\u5EFA-cssom-\u6811","children":[]},{"level":3,"title":"\u7EC4\u5408 DOM \u548C CSSOM \u6210\u6E32\u67D3\u6811","slug":"\u7EC4\u5408-dom-\u548C-cssom-\u6210\u6E32\u67D3\u6811","link":"#\u7EC4\u5408-dom-\u548C-cssom-\u6210\u6E32\u67D3\u6811","children":[]},{"level":3,"title":"\u5E03\u5C40","slug":"\u5E03\u5C40","link":"#\u5E03\u5C40","children":[]},{"level":3,"title":"\u7ED8\u753B","slug":"\u7ED8\u753B","link":"#\u7ED8\u753B","children":[]}]},{"level":2,"title":"\u4E92\u52A8\u6027","slug":"\u4E92\u52A8\u6027","link":"#\u4E92\u52A8\u6027","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863","link":"#\u53C2\u8003\u6587\u6863","children":[]}],"relativePath":"web/browser/browser.md"}'),t={name:"web/browser/browser.md"},d=r('<h1 id="\u6D4F\u89C8\u5668\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1">\u6D4F\u89C8\u5668\u5982\u4F55\u5DE5\u4F5C\u7684 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a></h1><p>\u7528\u6237\u5E0C\u671B\uFF1A\u5E94\u7528\u9875\u9762\u5FEB\u901F\u52A0\u8F7D\uFF0C\u4EA4\u4E92\u6D41\u7545\u3002</p><p>Web \u6027\u80FD\u7684\u4E24\u4E2A\u4E3B\u8981\u95EE\u9898\u662F\uFF1A</p><ul><li>\u7406\u89E3\u4E0E\u5EF6\u8FDF\u6709\u5173\u7684\u95EE\u9898</li><li>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u6D4F\u89C8\u5668\u662F\u5355\u7EBF\u7A0B\u7684\u4E8B\u5B9E\u6709\u5173\u7684\u95EE\u9898\u3002</li></ul><p>\u5F53\u7528\u6237\u8BF7\u6C42\u7F51\u7AD9\u6216\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u4E3A\u4E86\u586B\u5145\u6D4F\u89C8\u5668\uFF0C\u6709\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u5305\u62EC DNS \u67E5\u627E\u3001TCP \u63E1\u624B\u548C SSL \u534F\u5546. \u7136\u540E\u6D4F\u89C8\u5668\u89E3\u6790\u63A5\u6536\u5230\u7684\u5185\u5BB9\uFF0C\u6784\u5EFA DOM\u3001CSSOM\u3001\u53EF\u8BBF\u95EE\u6027\u548C\u6E32\u67D3\u6811\uFF0C\u6700\u7EC8\u6E32\u67D3\u9875\u9762\u3002</p><h2 id="\u5BFC\u822A" tabindex="-1">\u5BFC\u822A <a class="header-anchor" href="#\u5BFC\u822A" aria-hidden="true">#</a></h2><p>\u5BFC\u822A\u662F\u52A0\u8F7D\u7F51\u9875\u7684\u7B2C\u4E00\u6B65\u3002\u6BCF\u5F53\u7528\u6237\u901A\u8FC7\u5728\u5730\u5740\u680F\u4E2D\u8F93\u5165 URL\u3001\u5355\u51FB\u94FE\u63A5\u3001\u63D0\u4EA4\u8868\u5355\u4EE5\u53CA\u5176\u4ED6\u64CD\u4F5C\u6765\u8BF7\u6C42\u9875\u9762\u65F6\uFF0C\u5B83\u5C31\u4F1A\u53D1\u751F\u3002</p><h3 id="dns-\u67E5\u8BE2-ip-\u5730\u5740\u670D\u52A1\u5668" tabindex="-1">DNS \uFF0C\u67E5\u8BE2 IP \u5730\u5740\u670D\u52A1\u5668 <a class="header-anchor" href="#dns-\u67E5\u8BE2-ip-\u5730\u5740\u670D\u52A1\u5668" aria-hidden="true">#</a></h3><p>\u5BFC\u822A\u5230\u7F51\u9875\u7684\u7B2C\u4E00\u6B65\u662F\u627E\u5230\u8BE5\u9875\u9762\u7684\u8D44\u4EA7\u6240\u5728\u7684\u4F4D\u7F6E\u3002</p><p>DNS \uFF1A\u57DF\u540D\u89E3\u6790\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u7F51\u5740\u67E5\u627E\u5230\u5BF9\u5E94\u7684 IP \u5730\u5740\u670D\u52A1\u5668\u3002</p><p>\u57FA\u672C\u5212\u5206\uFF1A\u6839\u57DF\u540D\uFF0C\u9876\u7EA7\u57DF\u540D\uFF08cn,com\uFF09,\u4E8C\u7EA7...</p><p>\u57FA\u672C\u6B65\u9AA4\uFF1A</p><ul><li>1 \u9012\u5F52\u67E5\u8BE2\u627E\u6D4F\u89C8\u5668\u7F13\u5B58\u7684</li><li>2 \u627E\u64CD\u4F5C\u7CFB\u7EDF host</li><li>3 \u627E\u672C\u5730\u57DF\u540D\u670D\u52A1\u5668</li><li>4 \u8FED\u4EE3\u67E5\u8BE2\u8FDC\u7A0B\u6839\u57DF\u540D\u670D\u52A1\u5668</li><li>5 \u67E5\u8BE2\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668</li><li>6 \u67E5\u8BE2\u6743\u5A01\u57DF\u540D\u670D\u52A1\u5668</li><li>7 \u672C\u5730\u57DF\u540D\u670D\u52A1\u5668\u7F13\u5B58\u8FED\u4EE3\u67E5\u8BE2\u7684\u7ED3\u679C IP \u5730\u5740</li><li>8 \u64CD\u4F5C\u7CFB\u7EDF\u7F13\u5B58</li><li>9 \u6D4F\u89C8\u5668\u7F13\u5B58</li></ul><h3 id="tcp-\u63E1\u624B-\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B" tabindex="-1">TCP \u63E1\u624B\uFF0C\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B <a class="header-anchor" href="#tcp-\u63E1\u624B-\u786E\u8BA4\u670D\u52A1\u5668\u4E0E\u5BA2\u6237\u7AEF\u7684\u6536\u53D1\u80FD\u529B" aria-hidden="true">#</a></h3><p>\u4E00\u65E6\u77E5\u9053 IP \u5730\u5740\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u901A\u8FC7 TCP \u4E09\u5411\u63E1\u624B\u5EFA\u7ACB\u4E0E\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u3002</p><p>\u4E09\u6B21\u63E1\u624B\uFF1A\u901A\u8FC7\u4E09\u6B21\u63E1\u624B\uFF0C\u5C31\u80FD\u786E\u5B9A\u53CC\u65B9\u7684\u63A5\u6536\u548C\u53D1\u9001\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002 <img src="'+l+'" alt="img"></p><ul><li>\u7B2C\u4E00\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u9001\u7F51\u7EDC\u5305\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u4E86 \u8FD9\u6837\u670D\u52A1\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u5BA2\u6237\u7AEF\u7684\u53D1\u9001\u80FD\u529B\u3001\u670D\u52A1\u7AEF\u7684\u63A5\u6536\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002</li><li>\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF1A\u670D\u52A1\u7AEF\u53D1\u5305\uFF0C\u5BA2\u6237\u7AEF\u6536\u5230\u4E86 \u8FD9\u6837\u5BA2\u6237\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u670D\u52A1\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\uFF0C\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\u662F\u6B63\u5E38\u7684\u3002\u4E0D\u8FC7\u6B64\u65F6\u670D\u52A1\u5668\u5E76\u4E0D\u80FD\u786E\u8BA4\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u80FD\u529B\u662F\u5426\u6B63\u5E38</li><li>\u7B2C\u4E09\u6B21\u63E1\u624B\uFF1A\u5BA2\u6237\u7AEF\u53D1\u5305\uFF0C\u670D\u52A1\u7AEF\u6536\u5230\u4E86\u3002 \u8FD9\u6837\u670D\u52A1\u7AEF\u5C31\u80FD\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u5BA2\u6237\u7AEF\u7684\u63A5\u6536\u3001\u53D1\u9001\u80FD\u529B\u6B63\u5E38\uFF0C\u670D\u52A1\u5668\u81EA\u5DF1\u7684\u53D1\u9001\u3001\u63A5\u6536\u80FD\u529B\u4E5F\u6B63\u5E38</li></ul><h3 id="tls-\u534F\u5546-https-\u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5" tabindex="-1">TLS \u534F\u5546\uFF0CHTTPS \u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5 <a class="header-anchor" href="#tls-\u534F\u5546-https-\u5EFA\u7ACB\u5B89\u5168\u7684\u8FDE\u63A5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 HTTPS \u5EFA\u7ACB\u7684\u5B89\u5168\u8FDE\u63A5,\u786E\u5B9A\u5C06\u4F7F\u7528\u54EA\u79CD\u5BC6\u7801\u6765\u52A0\u5BC6\u901A\u4FE1\u3001\u9A8C\u8BC1\u670D\u52A1\u5668\u5E76\u5728\u5F00\u59CB\u5B9E\u9645\u6570\u636E\u4F20\u8F93\u4E4B\u524D\u5EFA\u7ACB\u5B89\u5168\u8FDE\u63A5\u3002</p><p>\u5728\u5B9E\u9645\u53D1\u9001\u5185\u5BB9\u8BF7\u6C42\u4E4B\u524D\uFF0C\u8FD9\u9700\u8981\u4E0E\u670D\u52A1\u5668\u8FDB\u884C\u4E09\u6B21\u4EE5\u4E0A\u7684\u5F80\u8FD4\u3002</p><h2 id="\u8BF7\u6C42\u548C\u54CD\u5E94" tabindex="-1">\u8BF7\u6C42\u548C\u54CD\u5E94 <a class="header-anchor" href="#\u8BF7\u6C42\u548C\u54CD\u5E94" aria-hidden="true">#</a></h2><p>\u4E00\u65E6\u6211\u4EEC\u4E0E Web \u670D\u52A1\u5668\u5EFA\u7ACB\u4E86\u8FDE\u63A5\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u4EE3\u8868\u7528\u6237\u53D1\u9001\u4E00\u4E2A\u521D\u59CB HTTPGET \u8BF7\u6C42\uFF0C\u5BF9\u4E8E\u7F51\u7AD9\u6765\u8BF4\uFF0C\u8FD9\u901A\u5E38\u662F\u4E00\u4E2A HTML \u6587\u4EF6\u3002</p><p>\u4E00\u65E6\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\uFF0C\u5B83\u4F1A\u56DE\u590D\u76F8\u5173\u7684\u54CD\u5E94\u5934\u548C HTML \u7684\u5185\u5BB9\u3002</p><h3 id="tcp-\u6162\u542F\u52A8-14kb-\u89C4\u5219" tabindex="-1">TCP \u6162\u542F\u52A8/14KB \u89C4\u5219 <a class="header-anchor" href="#tcp-\u6162\u542F\u52A8-14kb-\u89C4\u5219" aria-hidden="true">#</a></h3><p>\u7B2C\u4E00\u4E2A\u54CD\u5E94\u6570\u636E\u5305\u5C06\u662F 14KB\u3002\u8FD9\u662F TCP \u6162\u542F\u52A8\u7684\u4E00\u90E8\u5206\uFF0C\u4E00\u79CD\u5E73\u8861\u7F51\u7EDC\u8FDE\u63A5\u901F\u5EA6\u7684\u7B97\u6CD5\u3002\u6162\u542F\u52A8\u9010\u6E10\u589E\u52A0\u4F20\u8F93\u7684\u6570\u636E\u91CF\uFF0C\u76F4\u5230\u53EF\u4EE5\u786E\u5B9A\u7F51\u7EDC\u7684\u6700\u5927\u5E26\u5BBD\u3002</p><p>\u5728 TCP \u6162\u542F\u52A8\u4E2D\uFF0C\u5728\u6536\u5230\u521D\u59CB\u6570\u636E\u5305\u540E\uFF0C\u670D\u52A1\u5668\u5C06\u4E0B\u4E00\u4E2A\u6570\u636E\u5305\u7684\u5927\u5C0F\u52A0\u500D\u5230 28KB \u5DE6\u53F3\u3002\u540E\u7EED\u6570\u636E\u5305\u7684\u5927\u5C0F\u4F1A\u589E\u52A0\uFF0C\u76F4\u5230\u8FBE\u5230\u9884\u5B9A\u9608\u503C\u6216\u51FA\u73B0\u62E5\u585E\u3002</p><p>\u5982\u679C\u60A8\u542C\u8BF4\u8FC7\u521D\u59CB\u9875\u9762\u52A0\u8F7D\u7684 14KB \u89C4\u5219\uFF0CTCP \u6162\u542F\u52A8\u662F\u521D\u59CB\u54CD\u5E94\u4E3A 14KB \u7684\u539F\u56E0\uFF0C\u4E5F\u662F Web \u6027\u80FD\u4F18\u5316\u8981\u6C42\u9488\u5BF9\u521D\u59CB 14KB \u54CD\u5E94\u8FDB\u884C\u96C6\u4E2D\u4F18\u5316\u7684\u539F\u56E0\u3002TCP \u6162\u542F\u52A8\u9010\u6E10\u5EFA\u7ACB\u9002\u5408\u7F51\u7EDC\u80FD\u529B\u7684\u4F20\u8F93\u901F\u5EA6\u4EE5\u907F\u514D\u62E5\u585E\u3002</p><h2 id="\u89E3\u6790" tabindex="-1">\u89E3\u6790 <a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a></h2><p>\u4E00\u65E6\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u7B2C\u4E00\u5757\u6570\u636E\uFF0C\u5B83\u5C31\u53EF\u4EE5\u5F00\u59CB\u89E3\u6790\u63A5\u6536\u5230\u7684\u4FE1\u606F\u3002</p><p>\u89E3\u6790\u662F\u6D4F\u89C8\u5668\u5C06\u5176\u901A\u8FC7\u7F51\u7EDC\u63A5\u6536\u7684\u6570\u636E\u8F6C\u6362\u4E3A DOM \u548C CSSOM \u7684\u6B65\u9AA4\uFF0C\u6E32\u67D3\u5668\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\u5C06\u9875\u9762\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\u3002</p><p>\u5373\u4F7F\u8BF7\u6C42\u9875\u9762\u7684 HTML \u5927\u4E8E\u521D\u59CB\u7684 14KB \u6570\u636E\u5305\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4F1A\u5F00\u59CB\u89E3\u6790\u5E76\u5C1D\u8BD5\u6839\u636E\u5176\u62E5\u6709\u7684\u6570\u636E\u5448\u73B0\u4F53\u9A8C\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u5728\u524D 14 KB \u4E2D\u5305\u542B\u6D4F\u89C8\u5668\u5F00\u59CB\u5448\u73B0\u9875\u9762\u6240\u9700\u7684\u6240\u6709\u5185\u5BB9\u6216\u81F3\u5C11\u5305\u542B\u9875\u9762\u6A21\u677F\uFF08\u9996\u6B21\u5448\u73B0\u6240\u9700\u7684 CSS \u548C HTML\uFF09\u5BF9\u4E8E Web \u6027\u80FD\u4F18\u5316\u5F88\u91CD\u8981\u3002\u4F46\u5728\u5C06\u4EFB\u4F55\u5185\u5BB9\u5448\u73B0\u5230\u5C4F\u5E55\u4E4B\u524D\uFF0C\u5FC5\u987B\u89E3\u6790 HTML\u3001CSS \u548C JavaScript\u3002</p><h2 id="\u6E32\u67D3" tabindex="-1">\u6E32\u67D3 <a class="header-anchor" href="#\u6E32\u67D3" aria-hidden="true">#</a></h2><h3 id="\u6784\u5EFA-dom-\u6811" tabindex="-1">\u6784\u5EFA DOM \u6811 <a class="header-anchor" href="#\u6784\u5EFA-dom-\u6811" aria-hidden="true">#</a></h3><p>html \u5143\u7D20\u662F\u6587\u6863\u6811\u7684\u7B2C\u4E00\u4E2A\u6807\u8BB0\u548C\u6839\u8282\u70B9\u3002DOM \u8282\u70B9\u7684\u6570\u91CF\u8D8A\u591A\uFF0C\u6784\u5EFA DOM \u6811\u6240\u9700\u7684\u65F6\u95F4\u5C31\u8D8A\u957F\u3002</p><p>\u5F53\u89E3\u6790\u5668\u627E\u5230\u975E\u963B\u585E\u8D44\u6E90\uFF08\u4F8B\u5982\u56FE\u50CF\uFF09\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u8BF7\u6C42\u8FD9\u4E9B\u8D44\u6E90\u5E76\u7EE7\u7EED\u89E3\u6790\u3002</p><p>\u5F53\u9047\u5230 CSS \u6587\u4EF6\u65F6\uFF0C\u89E3\u6790\u53EF\u4EE5\u7EE7\u7EED\u3002</p><p>\u5F53\u9047\u5230 script \u6587\u4EF6\u65F6\uFF0C\u5C24\u5176\u662F\u90A3\u4E9B\u6CA1\u6709 async/defer \u5C5E\u6027\u7684\u6807\u7B7E\u4F1A\u963B\u6B62\u6E32\u67D3\uFF0C\u5E76\u6682\u505C HTML \u7684\u89E3\u6790\u3002</p><p>\u5C3D\u7BA1\u6D4F\u89C8\u5668\u7684\u9884\u52A0\u8F7D\u626B\u63CF\u5668\u52A0\u5FEB\u4E86\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u4F46\u8FC7\u591A\u7684\u811A\u672C\u4ECD\u7136\u662F\u4E00\u4E2A\u91CD\u8981\u7684\u74F6\u9888\u3002</p><h3 id="\u6784\u5EFA-cssom-\u6811" tabindex="-1">\u6784\u5EFA CSSOM \u6811 <a class="header-anchor" href="#\u6784\u5EFA-cssom-\u6811" aria-hidden="true">#</a></h3><p>\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\u7684\u7B2C\u4E8C\u6B65\u662F\u5904\u7406 CSS \u548C\u6784\u5EFA CSSOM \u6811\u3002</p><p>\u6784\u5EFA CSSOM \u975E\u5E38\u975E\u5E38\u5FEB\u3002</p><p>\u5728\u5F53\u524D\u7684\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u4E2D\u4E0D\u4F1A\u4EE5\u72EC\u7279\u7684\u989C\u8272\u663E\u793A\u3002\u76F8\u53CD\uFF0C\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177\u4E2D\u7684\u201C\u91CD\u65B0\u8BA1\u7B97\u6837\u5F0F\u201D\u663E\u793A\u4E86\u89E3\u6790 CSS\u3001\u6784\u5EFA CSSOM \u6811\u548C\u9012\u5F52\u8BA1\u7B97\u8BA1\u7B97\u6837\u5F0F\u6240\u82B1\u8D39\u7684\u603B\u65F6\u95F4\u3002</p><p>\u5728 Web \u6027\u80FD\u4F18\u5316\u65B9\u9762\uFF0C\u6709\u66F4\u5BB9\u6613\u5B9E\u73B0\u7684\u6210\u679C\uFF0C\u56E0\u4E3A\u521B\u5EFA CSSOM \u7684\u603B\u65F6\u95F4\u901A\u5E38\u5C11\u4E8E\u4E00\u6B21 DNS \u67E5\u627E\u6240\u9700\u7684\u65F6\u95F4\u3002</p><h3 id="\u7EC4\u5408-dom-\u548C-cssom-\u6210\u6E32\u67D3\u6811" tabindex="-1">\u7EC4\u5408 DOM \u548C CSSOM \u6210\u6E32\u67D3\u6811 <a class="header-anchor" href="#\u7EC4\u5408-dom-\u548C-cssom-\u6210\u6E32\u67D3\u6811" aria-hidden="true">#</a></h3><p>\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\u7684\u7B2C\u4E09\u6B65\u662F\u5C06 DOM \u548C CSSOM \u7EC4\u5408\u6210\u6E32\u67D3\u6811\u3002\u8BA1\u7B97\u6837\u5F0F\u6811\u6216\u6E32\u67D3\u6811\u7684\u6784\u9020\u4ECE DOM \u6811\u7684\u6839\u5F00\u59CB\uFF0C\u904D\u5386\u6BCF\u4E2A\u53EF\u89C1\u8282\u70B9\u3002</p><h3 id="\u5E03\u5C40" tabindex="-1">\u5E03\u5C40 <a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a></h3><p>\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\u4E2D\u7684\u7B2C\u56DB\u6B65\u662F\u5728\u6E32\u67D3\u6811\u4E0A\u5E03\u5C40\u3002</p><p>\u5E03\u5C40\u662F<strong>\u521D\u59CB</strong>\u786E\u5B9A\u6E32\u67D3\u6811\u4E2D\u6240\u6709\u8282\u70B9\u7684<strong>\u5927\u5C0F\u548C\u4F4D\u7F6E</strong>\u7684\u8FC7\u7A0B\u3002</p><p>\u91CD\u6392\u662F<strong>\u540E\u7EED</strong>\u786E\u5B9A\u9875\u9762\u90E8\u5206\u6216\u6574\u4E2A\u6587\u6863\u7684<strong>\u5927\u5C0F\u548C\u4F4D\u7F6E</strong>\u7684\u8FC7\u7A0B\u3002</p><p>\u4E00\u65E6\u6784\u5EFA\u4E86\u6E32\u67D3\u6811\uFF0C\u5E03\u5C40\u5C31\u5F00\u59CB\u4E86\u3002\u6E32\u67D3\u6811\u8BC6\u522B\u663E\u793A\u54EA\u4E9B\u8282\u70B9\uFF08\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF09\u53CA\u5176\u8BA1\u7B97\u6837\u5F0F\uFF0C\u4F46\u4E0D\u8BC6\u522B\u6BCF\u4E2A\u8282\u70B9\u7684\u5C3A\u5BF8\u6216\u4F4D\u7F6E\u3002\u4E3A\u4E86\u786E\u5B9A\u6BCF\u4E2A\u5BF9\u8C61\u7684\u786E\u5207\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF0C\u6D4F\u89C8\u5668\u4ECE\u6E32\u67D3\u6811\u7684\u6839\u5F00\u59CB\u5E76\u904D\u5386\u5B83\u3002</p><p>\u5E03\u5C40\u4E00\u822C\u4ECE body \u5F00\u59CB\uFF0C\u5E03\u5C40\u6240\u6709 body \u7684\u540E\u4EE3\u5C3A\u5BF8\uFF0C\u6BCF\u4E2A\u5143\u7D20\u7684\u76D2\u6A21\u578B\u5C5E\u6027\uFF0C\u4E3A\u4E0D\u77E5\u9053\u5C3A\u5BF8\u7684\u66FF\u6362\u5143\u7D20\u63D0\u4F9B\u5360\u4F4D\u7B26\u7A7A\u95F4\uFF0C\u4F8B\u5982 image\u3002</p><p>\u5047\u8BBE\u521D\u59CB\u5E03\u5C40\u53D1\u751F\u5728\u8FD4\u56DE\u56FE\u50CF\u4E4B\u524D\u3002\u7531\u4E8E\u6211\u4EEC\u6CA1\u6709\u58F0\u660E\u56FE\u50CF\u7684\u5927\u5C0F\uFF0C\u56E0\u6B64\u4E00\u65E6\u77E5\u9053\u56FE\u50CF\u5927\u5C0F\u5C31\u4F1A\u8FDB\u884C\u91CD\u6392\uFF08\u56DE\u6D41\uFF09\u3002</p><h3 id="\u7ED8\u753B" tabindex="-1">\u7ED8\u753B <a class="header-anchor" href="#\u7ED8\u753B" aria-hidden="true">#</a></h3><p>\u5173\u952E\u6E32\u67D3\u8DEF\u5F84\u7684\u6700\u540E\u4E00\u6B65\u662F\u5C06\u5404\u4E2A\u8282\u70B9\u7528\u50CF\u7D20\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\u3002</p><p>\u7ED8\u753B\u6D89\u53CA\u5C06\u5143\u7D20\u7684\u6BCF\u4E2A\u89C6\u89C9\u90E8\u5206\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\uFF0C\u5305\u62EC\u6587\u672C\u3001\u989C\u8272\u3001\u8FB9\u6846\u3001\u9634\u5F71\u548C\u66FF\u6362\u5143\u7D20\uFF08\u5982\u6309\u94AE\u548C\u56FE\u50CF\uFF09\u3002\u6D4F\u89C8\u5668\u9700\u8981\u975E\u5E38\u5FEB\u901F\u5730\u5B8C\u6210\u8FD9\u9879\u5DE5\u4F5C\u3002</p><p>\u4E3A\u4E86\u786E\u4FDD\u6D41\u7545\u7684\u6EDA\u52A8\u548C\u52A8\u753B\uFF0C\u6240\u6709\u5360\u7528\u4E3B\u7EBF\u7A0B\u7684\u4E1C\u897F\uFF0C\u5305\u62EC\u8BA1\u7B97\u6837\u5F0F\uFF0C\u4EE5\u53CA\u56DE\u6D41\u548C\u7ED8\u5236\uFF0C\u90FD\u5FC5\u987B\u8BA9\u6D4F\u89C8\u5668\u5728 16.67 \u6BEB\u79D2\u5185\u5B8C\u6210\u3002</p><p>\u5728 2048 X 1536 \u4E0B\uFF0CiPad \u6709\u8D85\u8FC7 3,145,000 \u4E2A\u50CF\u7D20\u8981\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\u3002\u8FD9\u662F\u5F88\u591A\u50CF\u7D20\uFF0C\u5FC5\u987B\u975E\u5E38\u5FEB\u901F\u5730\u7ED8\u5236\u3002\u4E3A\u4E86\u786E\u4FDD\u91CD\u7ED8\u53EF\u4EE5\u6BD4\u521D\u59CB\u7ED8\u5236\u66F4\u5FEB\u5730\u5B8C\u6210\uFF0C\u5C4F\u5E55\u4E0A\u7684\u7ED8\u56FE\u901A\u5E38\u88AB\u5206\u89E3\u6210\u51E0\u5C42\u3002\u5982\u679C\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5219\u9700\u8981\u8FDB\u884C\u5408\u6210\u3002</p><p>\u7ED8\u753B\u53EF\u4EE5\u5C06\u5E03\u5C40\u6811\u4E2D\u7684\u5143\u7D20\u5206\u89E3\u6210\u5C42\u3002</p><p>\u5C06\u5185\u5BB9\u63D0\u5347\u5230 GPU \u4E0A\u7684\u5C42\uFF08\u800C\u4E0D\u662F CPU \u4E0A\u7684\u4E3B\u7EBF\u7A0B\uFF09\u53EF\u4EE5\u63D0\u9AD8\u7ED8\u5236\u548C\u91CD\u7ED8\u6027\u80FD\u3002</p><p>\u6709\u4E00\u4E9B\u7279\u5B9A\u7684\u5C5E\u6027\u548C\u5143\u7D20\u53EF\u4EE5\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5C42\uFF0C\u5305\u62EC<code>&lt;video&gt;</code>\u548C<code>&lt;canvas&gt;</code>\uFF0C\u4EE5\u53CA\u4EFB\u4F55\u5177\u6709 CSS \u5C5E\u6027 opacity3D transform\u3001will-change \u548C\u5176\u4ED6\u4E00\u4E9B\u5143\u7D20\u7684\u5143\u7D20\u3002\u8FD9\u4E9B\u8282\u70B9\u5C06\u8FDE\u540C\u5B83\u4EEC\u7684\u540E\u4EE3\u4E00\u8D77\u7ED8\u5236\u5230\u5B83\u4EEC\u81EA\u5DF1\u7684\u5C42\u4E0A\uFF0C\u9664\u975E\u540E\u4EE3\u51FA\u4E8E\u4E0A\u8FF0\u4E00\u4E2A\uFF08\u6216\u591A\u4E2A\uFF09\u539F\u56E0\u9700\u8981\u5B83\u81EA\u5DF1\u7684\u5C42\u3002</p><p>\u5C42\u786E\u5B9E\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\uFF0C\u4F46\u5728\u5185\u5B58\u7BA1\u7406\u65B9\u9762\u4EE3\u4EF7\u9AD8\u6602\uFF0C\u56E0\u6B64\u4E0D\u5E94\u5C06\u5176\u8FC7\u5EA6\u7528\u4F5C Web \u6027\u80FD\u4F18\u5316\u7B56\u7565\u7684\u4E00\u90E8\u5206\u3002</p><h4 id="\u5408\u6210" tabindex="-1">\u5408\u6210 <a class="header-anchor" href="#\u5408\u6210" aria-hidden="true">#</a></h4><p>\u5F53\u6587\u6863\u7684\u5404\u4E2A\u90E8\u5206\u7ED8\u5236\u5728\u4E0D\u540C\u7684\u5C42\u4E2D\u5E76\u76F8\u4E92\u91CD\u53E0\u65F6\uFF0C\u5408\u6210\u662F\u5FC5\u8981\u7684\uFF0C\u4EE5\u786E\u4FDD\u5B83\u4EEC\u4EE5\u6B63\u786E\u7684\u987A\u5E8F\u7ED8\u5236\u5230\u5C4F\u5E55\u4E0A\u5E76\u4E14\u5185\u5BB9\u88AB\u6B63\u786E\u5448\u73B0\u3002</p><p>\u968F\u7740\u9875\u9762\u7EE7\u7EED\u52A0\u8F7D\u8D44\u4EA7\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u56DE\u6D41\uFF08\u56DE\u60F3\u4E00\u4E0B\u6211\u4EEC\u8FDF\u5230\u7684\u793A\u4F8B\u56FE\u50CF\uFF09\u3002\u56DE\u6D41\u4F1A\u5F15\u53D1\u91CD\u7ED8\u548C\u91CD\u65B0\u5408\u6210\u3002\u5982\u679C\u6211\u4EEC\u5B9A\u4E49\u4E86\u56FE\u50CF\u7684\u5927\u5C0F\uFF0C\u5C31\u4E0D\u9700\u8981\u56DE\u6D41\uFF0C\u53EA\u6709\u9700\u8981\u91CD\u7ED8\u7684\u56FE\u5C42\u624D\u4F1A\u88AB\u91CD\u7ED8\uFF0C\u5E76\u5728\u5FC5\u8981\u65F6\u8FDB\u884C\u5408\u6210\u3002\u4F46\u662F\u6211\u4EEC\u6CA1\u6709\u5305\u62EC\u56FE\u50CF\u5927\u5C0F\uFF01\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u56FE\u50CF\u540E\uFF0C\u6E32\u67D3\u8FC7\u7A0B\u8FD4\u56DE\u5230\u5E03\u5C40\u6B65\u9AA4\u5E76\u4ECE\u90A3\u91CC\u91CD\u65B0\u5F00\u59CB\u3002</p><h2 id="\u4E92\u52A8\u6027" tabindex="-1">\u4E92\u52A8\u6027 <a class="header-anchor" href="#\u4E92\u52A8\u6027" aria-hidden="true">#</a></h2><p>\u4E3B\u7EBF\u7A0B\u5B8C\u6210\u9875\u9762\u7ED8\u5236\u540E\uFF0C\u60A8\u4F1A\u8BA4\u4E3A\u6211\u4EEC\u201C\u4E00\u5207\u5C31\u7EEA\u201D\u3002\u4E0D\u4E00\u5B9A\u662F\u8FD9\u6837\u3002\u5982\u679C\u52A0\u8F7D\u5305\u62EC\u6B63\u786E\u5EF6\u8FDF\u7684 JavaScript\uFF0C\u5E76\u4E14\u4EC5\u5728 onload \u4E8B\u4EF6\u89E6\u53D1\u540E\u6267\u884C\uFF0C\u5219\u4E3B\u7EBF\u7A0B\u53EF\u80FD\u5F88\u5FD9\uFF0C\u65E0\u6CD5\u7528\u4E8E\u6EDA\u52A8\u3001\u89E6\u6478\u548C\u5176\u4ED6\u4EA4\u4E92\u3002</p><p>\u4EA4\u4E92\u65F6\u95F4(TTI) \u8861\u91CF\u7684\u662F\u4ECE\u5BFC\u81F4 DNS \u67E5\u627E\u548C SSL \u8FDE\u63A5\u7684\u7B2C\u4E00\u4E2A\u8BF7\u6C42\u5230\u9875\u9762\u4EA4\u4E92\u65F6\u6240\u7528\u7684\u65F6\u95F4\u2014\u2014\u4EA4\u4E92\u662F\u5728\u7B2C\u4E00\u6B21\u5185\u5BB9\u7ED8\u5236\u4E4B\u540E\u9875\u9762\u54CD\u5E94\u65F6\u7684\u65F6\u95F4\u70B9 50 \u6BEB\u79D2\u5185\u7684\u7528\u6237\u4EA4\u4E92\u3002\u5982\u679C\u4E3B\u7EBF\u7A0B\u5FD9\u4E8E\u89E3\u6790\u3001\u7F16\u8BD1\u548C\u6267\u884C JavaScript\uFF0C\u5219\u5B83\u4E0D\u53EF\u7528\uFF0C\u56E0\u6B64\u65E0\u6CD5\u53CA\u65F6\uFF08\u5C0F\u4E8E 50 \u6BEB\u79D2\uFF09\u54CD\u5E94\u7528\u6237\u4EA4\u4E92\u3002</p><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work" target="_blank" rel="noreferrer">MDN \u6D4F\u89C8\u5668\u5982\u4F55\u5DE5\u4F5C\u7684</a><a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" target="_blank" rel="noreferrer">MDN \u6D4F\u89C8\u5668\u6E32\u67D3</a></p>',69),p=[d];function h(n,s,c,o,S,b){return i(),a("div",null,p)}const m=e(t,[["render",h]]);export{g as __pageData,m as default};