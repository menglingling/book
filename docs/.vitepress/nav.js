const fs = require("fs");
const path = require("path");
const marked = require("marked");
const matter = require("gray-matter");

// 在此数组中添加你想要忽略的文件夹名称
const ignoredDirs = ["page", "public"];
// 在这里添加你想要忽略的文件名
const ignoredFiles = ["index.md"];

function generateNav(itemPath) {
  let items = [];
  let files = fs.readdirSync(itemPath);

  files.sort((a, b) => {
    return (
      fs.statSync(path.join(itemPath, a)).birthtime -
      fs.statSync(path.join(itemPath, b)).birthtime
    );
  });

  files.forEach((file) => {
    // 跳过以"."开头的文件或目录以及忽略的文件夹以及被忽略的文件
    if (
      file.startsWith(".") ||
      ignoredDirs.includes(file) ||
      ignoredFiles.includes(file)
    ) {
      return;
    }

    let fullPath = path.join(itemPath, file);
    let isDirectory = fs.lstatSync(fullPath).isDirectory();

    if (isDirectory) {
      items.push({
        text: file,
        //link: `/${path.relative("docs/", fullPath)}`,
        items: generateNav(fullPath),
      });
      return;
    }

    if (fs.statSync(fullPath).isFile() && path.extname(file) === ".md") {
      let fileContent = fs.readFileSync(fullPath, "utf-8");

      // 使用 marked 解析文件然后获取第一个标题
      // 去掉yaml信息
      let fileContentWithoutFrontmatter = matter(fileContent).content;
      let tokens = marked.lexer(fileContentWithoutFrontmatter);
      let titleToken = tokens.find((token) => token.type === "heading");
      let linkText = titleToken ? titleToken.text : path.basename(file, ".md");
      linkText = linkText === "README" ? itemPath : linkText;

      items.push({
        text: linkText,
        link: `/${path.relative("docs/", fullPath).slice(0, -3)}`,
      });
    }
  });

  return items;
}

const nav = generateNav("./docs");
//fs.writeFileSync("./docs/.vitepress/config.json", JSON.stringify({ nav }));
console.log({ 输出: JSON.stringify({ nav }) });
export default nav;
