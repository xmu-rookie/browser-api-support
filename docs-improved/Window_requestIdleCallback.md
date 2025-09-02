# Window.requestIdleCallback API 兼容性数据

## 基本信息

- **API名称**: `Window.requestIdleCallback`
- **MDN文档**: [Window.requestIdleCallback](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)
- **规范文档**: [查看规范](https://w3c.github.io/requestidlecallback/#the-requestidlecallback-method)
- **标签**: `web-features:requestidlecallback`

## 使用示例

### 基本用法

```javascript
// Window.requestIdleCallback 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.requestIdleCallback API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
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

- **支持版本**: 47

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.requestIdleCallback是否支持
function isWindowRequestIdleCallbackSupported() {
    return 'requestIdleCallback' in window && typeof window.requestIdleCallback === 'function';
}

if (isWindowRequestIdleCallbackSupported()) {
    console.log('Window.requestIdleCallback 支持');
    // 使用Window.requestIdleCallback
} else {
    console.log('Window.requestIdleCallback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.requestIdleCallback polyfill
if (!window.requestIdleCallback) {
    // 在这里添加polyfill实现
    console.log('加载Window.requestIdleCallback polyfill');
}
```

