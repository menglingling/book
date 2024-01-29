# git 相关

- 添加项目 git 管理
  - 删除项目默认生成的 git 文件
  - 在 github 上面创建仓库，只需要选 private 即可
  - 给本地项目添加 gitignore 文件
  - 1 control+` 打开 vscode 命令行 git init 将本地初始化成 git 项目
  - 2 git status 可查看当前 git 状态
  - 3 git add . 添加所有文件到暂存区
  - 4 git commit -m "remark" 提交代码到本地仓库
  - 5 跟远程仓库做关联 ，远程添加源 git remote add origin git@github.com:xxxx.git
  - 6 将本地代码 推送到远程仓库 git push -u origin master
  - 1234 步骤可通过图形化界面操作，点击代码管理图标 ，点击仓库初始化，此刻已经完成 git init 操作
  - 点击 勾 图标 提交代码到本地仓库，可在输入框输入 remark
  - 可查看 changes 和 staged changes 观察当前状态，staged changes 表示已经 add 过的文件
  - 之后同 56
  - git remote remove origin 解除远程仓库的关联
- 用到的 linux 命令
  - cd .ssh SSH 查看
  - cd ~ 进入 user 目录
  - cd ./ 进入当前目录
  - ll 查看目录列表
  - open . 用访达打开当前目录

