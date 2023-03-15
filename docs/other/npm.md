# npm 相关

## 项目安装不上的问题，解决步骤

- 切换国内镜像
- 再不行，就删除 node_modules, package-lock.json,再重新执行 npm install
- 再不行，就删除 node_modules, package-lock.json 的同时，清除 npm 缓存 `npm cache clean –-force`,再重新执行 npm install

## nrm

- `npm i -g nrm` 安装管理 npm 源的工具
- `nrm ls` 查看有哪些源, \* 为目前用的
- `nrm user taobao` 使用一个源，
- `nrm ls` 再使用命令，查看切换 \* 好了没
