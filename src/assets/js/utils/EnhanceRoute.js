/**
 * @function 自动导入路由
 * @description
 * ## 约定式路由
 * 以 . 或 _ 开头的文件或目录
 * 以 d.ts 结尾的类型定义文件
 * 以 test.ts、spec.ts、e2e.ts 结尾的测试文件（适用于 .js、.jsx 和 .tsx 文件）
 * components 和 component 目录
 * utils 和 util 目录
 * 不是 .js、.jsx、.ts 或 .tsx 文件
 * 文件内容不包含 JSX 元素
 */
// TODO:
class EnhanceRoute {
  constructor(options = {}) {
    this._options = options;
  }
}

module.exports = EnhanceRoute;
