---
tags:
  - Environment
date: 2024-01-28-周日
cdate: 2024-01-28 12:18
mdate: 2024-01-28 12:18
status: done
title: node
hours: "1"
---
## node安装卸载
nvm list   
node -v  
 nvm uninstall 16    
 nvm install 16  
nvm list   
## yarn 安装
npm i -g yarn
yarn   
yarn dev  

(npm 上 yarn 包 24.1.28 默认latest版本是1.22.21，自己装 3.X版本会有环境兼容问题，所以yarn目前装的都是 1.X版本)
## 换源
curl -s https://gist.githubusercontent.com/sunven/d7c012df96195ef5faaaeca92d5d14eb/raw/3c58ad77d6d0d334a33e1ceeccb220867a887a74/npm.mirror.sh | bash

curl -s https://gist.githubusercontent.com/menglingling/ca30a7d784fc3e7fde2c91d2898f9e7a/raw/7b09b4fbc847bdd99992109a4286ea8704d33d0a/npm_mirrors.sh | bash

