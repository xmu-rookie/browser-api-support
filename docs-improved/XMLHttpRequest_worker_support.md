# XMLHttpRequest.worker_support API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.worker_support`
- **标签**: `web-features:xhr`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.worker_support是否支持
function isXMLHttpRequestWorker_supportSupported() {
    return 'worker_support' in xmlhttprequest && typeof xmlhttprequest.worker_support === 'function';
}

if (isXMLHttpRequestWorker_supportSupported()) {
    console.log('XMLHttpRequest.worker_support 支持');
    // 使用XMLHttpRequest.worker_support
} else {
    console.log('XMLHttpRequest.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.worker_support polyfill
if (!xmlhttprequest.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.worker_support polyfill');
}
```

