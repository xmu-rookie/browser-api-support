# Window.webkitConvertPointFromPageToNode API 兼容性数据

## 基本信息

- **API名称**: `Window.webkitConvertPointFromPageToNode`
- **MDN文档**: [Window.webkitConvertPointFromPageToNode](https://developer.mozilla.org/docs/Web/API/Window/webkitConvertPointFromPageToNode)

## 使用示例

### 基本用法

```javascript
// Window.webkitConvertPointFromPageToNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.webkitConvertPointFromPageToNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 39

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.webkitConvertPointFromPageToNode是否支持
function isWindowWebkitConvertPointFromPageToNodeSupported() {
    return 'webkitConvertPointFromPageToNode' in window && typeof window.webkitConvertPointFromPageToNode === 'function';
}

if (isWindowWebkitConvertPointFromPageToNodeSupported()) {
    console.log('Window.webkitConvertPointFromPageToNode 支持');
    // 使用Window.webkitConvertPointFromPageToNode
} else {
    console.log('Window.webkitConvertPointFromPageToNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.webkitConvertPointFromPageToNode polyfill
if (!window.webkitConvertPointFromPageToNode) {
    // 在这里添加polyfill实现
    console.log('加载Window.webkitConvertPointFromPageToNode polyfill');
}
```

