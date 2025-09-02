# Window.mozInnerScreenY API 兼容性数据

## 基本信息

- **API名称**: `Window.mozInnerScreenY`
- **MDN文档**: [Window.mozInnerScreenY](https://developer.mozilla.org/docs/Web/API/Window/mozInnerScreenY)

## 使用示例

### 基本用法

```javascript
// Window.mozInnerScreenY 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.mozInnerScreenY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 3.6 |  |
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

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 3.6

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.mozInnerScreenY是否支持
function isWindowMozInnerScreenYSupported() {
    return 'mozInnerScreenY' in window && typeof window.mozInnerScreenY === 'function';
}

if (isWindowMozInnerScreenYSupported()) {
    console.log('Window.mozInnerScreenY 支持');
    // 使用Window.mozInnerScreenY
} else {
    console.log('Window.mozInnerScreenY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.mozInnerScreenY polyfill
if (!window.mozInnerScreenY) {
    // 在这里添加polyfill实现
    console.log('加载Window.mozInnerScreenY polyfill');
}
```

