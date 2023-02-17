### 配置环境变量

安装 dotenv-cli `npm instatll dotenv-cli` 创建 **.env** 文件，文件开头必须为 REACT_APP 开头，在 **package.json** 文件中配置打包命令。**类似：** `"build:test": "dotenv -e .env.test react-scripts build"`
