# XMLHttpRequest.responseURL API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.responseURL`
- **MDN文档**: [XMLHttpRequest.responseURL](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseURL)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-responseurl-attribute)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.responseURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.responseURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 32 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 32

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.responseURL是否支持
function isXMLHttpRequestResponseURLSupported() {
    return 'responseURL' in xmlhttprequest && typeof xmlhttprequest.responseURL === 'function';
}

if (isXMLHttpRequestResponseURLSupported()) {
    console.log('XMLHttpRequest.responseURL 支持');
    // 使用XMLHttpRequest.responseURL
} else {
    console.log('XMLHttpRequest.responseURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.responseURL polyfill
if (!xmlhttprequest.responseURL) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.responseURL polyfill');
}
```

