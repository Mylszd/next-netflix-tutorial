// 使用JSDoc类型注释，明确告知该模块导出的是Tailwind CSS的配置对象，辅助编辑器进行类型检查和代码提示
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content属性用于指定Tailwind CSS会扫描哪些文件，以识别其中使用的类名，从而生成对应的样式
  content: [
      // 匹配项目中app目录及其所有子目录下，扩展名为.js、.ts、.jsx、.tsx的文件
      "./app/**/*.{js,ts,jsx,tsx}",
      // 匹配项目中pages目录及其所有子目录下，扩展名为.js、.ts、.jsx、.tsx的文件
      "./pages/**/*.{js,ts,jsx,tsx}",
      // 匹配项目中components目录及其所有子目录下，扩展名为.js、.ts、.jsx、.tsx的文件
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  // theme属性用于配置Tailwind CSS的主题相关内容
  theme: {
      // extend对象用于在Tailwind CSS默认主题基础上进行扩展，当前为空，暂未进行扩展配置
      extend: {}
  },
  // plugins属性用于配置Tailwind CSS使用的插件，当前数组为空，未使用任何插件
  plugins: []
};