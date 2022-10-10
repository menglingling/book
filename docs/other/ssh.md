# SSH 相关 （自己熟用版）
  - 1 检测本地主机是否存在SSH   cd .ssh 
  - 2 生成key   ssh-keygen -t rsa -C "xxxx@qq.com"   
  - 3 获取key   cat id_rsa.pub 
  - 4 去github添加key  
  - 5 验证是否成功   ssh -T git@github.com
  - 6 如果有代理干扰则修改SSH中 config 文件,见https://docs.github.com/cn/authentication/troubleshooting-ssh/using-ssh-over-the-https-port
     ```
     Host github.com
     Hostname ssh.github.com
     Port 443
     User git
     ```