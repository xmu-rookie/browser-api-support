# NavigateEvent.downloadRequest API 兼容性数据

## 基本信息

- **API名称**: `NavigateEvent.downloadRequest`
- **MDN文档**: [NavigateEvent.downloadRequest](https://developer.mozilla.org/docs/Web/API/NavigateEvent/downloadRequest)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-navigateevent-downloadrequest-dev)
- **标签**: `web-features:navigation`

## 使用示例

### 基本用法

```javascript
// NavigateEvent.downloadRequest 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigateEvent.downloadRequest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 102

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigateEvent.downloadRequest是否支持
function isNavigateEventDownloadRequestSupported() {
    return 'downloadRequest' in navigateevent && typeof navigateevent.downloadRequest === 'function';
}

if (isNavigateEventDownloadRequestSupported()) {
    console.log('NavigateEvent.downloadRequest 支持');
    // 使用NavigateEvent.downloadRequest
} else {
    console.log('NavigateEvent.downloadRequest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigateEvent.downloadRequest polyfill
if (!navigateevent.downloadRequest) {
    // 在这里添加polyfill实现
    console.log('加载NavigateEvent.downloadRequest polyfill');
}
```

