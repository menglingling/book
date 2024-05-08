---
tags:
  - AIUse
date: 2024-01-06-周六
cdate: 2024-01-06 11:25:12
mdate: 2024-01-14 11:25:12
status: done
title: whisper 语音识别
---
# whisper 语音识别

准备环境

- 下载 conda 安装包安装 https://docs.conda.io/projects/miniconda/en/latest/
- 查看环境列表 `conda evn list`
- 创建环境 `conda create -n openai-whisper python=3.9`
- 进入环境 `conda activate openai-whisper`
- 离开环境 `conda deactivate`

进入环境后安装

- 安装 `pip install -U openai-whisper`
- 安装 `brew install ffmpeg`
- 执行 `whisper  1.1-2.mp3 --model small`