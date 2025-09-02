# XMLHttpRequestEventTarget API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequestEventTarget`
- **MDN文档**: [XMLHttpRequestEventTarget](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#xmlhttprequesteventtarget)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequestEventTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequestEventTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 7 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 7

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequestEventTarget是否支持
function isXMLHttpRequestEventTargetSupported() {
    return 'XMLHttpRequestEventTarget' in window || typeof XMLHttpRequestEventTarget !== 'undefined';
}

if (isXMLHttpRequestEventTargetSupported()) {
    console.log('XMLHttpRequestEventTarget 支持');
    // 使用XMLHttpRequestEventTarget
} else {
    console.log('XMLHttpRequestEventTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequestEventTarget polyfill
if (!window.XMLHttpRequestEventTarget) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequestEventTarget polyfill');
}
```

