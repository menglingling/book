import{_ as s,c as t,o as e,a}from"./app.d8181bf7.js";const g=JSON.parse('{"title":"SSH 相关 （自己熟用版）","description":"","frontmatter":{},"headers":[],"relativePath":"other/ssh.md"}'),n={name:"other/ssh.md"},o=a(`<h1 id="ssh-相关-自己熟用版" tabindex="-1">SSH 相关 （自己熟用版） <a class="header-anchor" href="#ssh-相关-自己熟用版" aria-hidden="true">#</a></h1><ul><li>1 检测本地主机是否存在SSH cd .ssh</li><li>2 生成key ssh-keygen -t rsa -C &quot;<a href="mailto:xxxx@qq.com" target="_blank" rel="noreferrer">xxxx@qq.com</a>&quot;</li><li>3 获取key cat id_rsa.pub</li><li>4 去github添加key</li><li>5 验证是否成功 ssh -T <a href="mailto:git@github.com" target="_blank" rel="noreferrer">git@github.com</a></li><li>6 如果有代理干扰则修改SSH中 config 文件,见<a href="https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port" target="_blank" rel="noreferrer">https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port</a><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Host github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">Hostname ssh.github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">Port 443</span></span>
<span class="line"><span style="color:#A6ACCD;">User git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,2),r=[o];function i(l,c,h,p,_,d){return e(),t("div",null,r)}const m=s(n,[["render",i]]);export{g as __pageData,m as default};