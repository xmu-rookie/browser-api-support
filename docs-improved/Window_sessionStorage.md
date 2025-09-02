# Window.sessionStorage API 兼容性数据

## 基本信息

- **API名称**: `Window.sessionStorage`
- **MDN文档**: [Window.sessionStorage](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webstorage.html#dom-sessionstorage-dev)
- **标签**: `web-features:localstorage`

## 使用示例

### 基本用法

```javascript
// Window.sessionStorage 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.sessionStorage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.10 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.10

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.sessionStorage是否支持
function isWindowSessionStorageSupported() {
    return 'sessionStorage' in window && typeof window.sessionStorage === 'function';
}

if (isWindowSessionStorageSupported()) {
    console.log('Window.sessionStorage 支持');
    // 使用Window.sessionStorage
} else {
    console.log('Window.sessionStorage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.sessionStorage polyfill
if (!window.sessionStorage) {
    // 在这里添加polyfill实现
    console.log('加载Window.sessionStorage polyfill');
}
```

