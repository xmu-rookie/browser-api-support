# Screen.left API 兼容性数据

## 基本信息

- **API名称**: `Screen.left`
- **MDN文档**: [Screen.left](https://developer.mozilla.org/docs/Web/API/ScreenDetailed/left)

## 使用示例

### 基本用法

```javascript
// Screen.left 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.left API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.left是否支持
function isScreenLeftSupported() {
    return 'left' in screen && typeof screen.left === 'function';
}

if (isScreenLeftSupported()) {
    console.log('Screen.left 支持');
    // 使用Screen.left
} else {
    console.log('Screen.left 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.left polyfill
if (!screen.left) {
    // 在这里添加polyfill实现
    console.log('加载Screen.left polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **relative-multi-screen**: Relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

