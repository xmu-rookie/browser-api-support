# Window.cancelIdleCallback API 兼容性数据

## 基本信息

- **API名称**: `Window.cancelIdleCallback`
- **MDN文档**: [Window.cancelIdleCallback](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)
- **规范文档**: [查看规范](https://w3c.github.io/requestidlecallback/#the-cancelidlecallback-method)
- **标签**: `web-features:requestidlecallback`

## 使用示例

### 基本用法

```javascript
// Window.cancelIdleCallback 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.cancelIdleCallback API');
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
// 检查Window.cancelIdleCallback是否支持
function isWindowCancelIdleCallbackSupported() {
    return 'cancelIdleCallback' in window && typeof window.cancelIdleCallback === 'function';
}

if (isWindowCancelIdleCallbackSupported()) {
    console.log('Window.cancelIdleCallback 支持');
    // 使用Window.cancelIdleCallback
} else {
    console.log('Window.cancelIdleCallback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.cancelIdleCallback polyfill
if (!window.cancelIdleCallback) {
    // 在这里添加polyfill实现
    console.log('加载Window.cancelIdleCallback polyfill');
}
```

