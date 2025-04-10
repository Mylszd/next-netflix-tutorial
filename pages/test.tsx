// 定义一个名为 MyPage 的函数组件
const MyPage = () => {
    // 该组件返回一个带有红色文字的 h1 标题
    return (
        // 使用内联样式将标题文字颜色设置为红色
        <h1 style={{ color: 'red' }}>Hello New Page</h1>
    )
}

// 导出 MyPage 组件，以便其他文件可以引入使用
export default MyPage;    