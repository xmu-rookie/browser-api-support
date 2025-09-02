# Document.location API 兼容性数据

## 基本信息

- **API名称**: `Document.location`
- **MDN文档**: [Document.location](https://developer.mozilla.org/docs/Web/API/Document/location)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Document.location 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.location API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
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

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4
- **支持版本**: 1
- **移除版本**: 4
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.location是否支持
function isDocumentLocationSupported() {
    return 'location' in document && typeof document.location === 'function';
}

if (isDocumentLocationSupported()) {
    console.log('Document.location 支持');
    // 使用Document.location
} else {
    console.log('Document.location 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.location polyfill
if (!document.location) {
    // 在这里添加polyfill实现
    console.log('加载Document.location polyfill');
}
```

