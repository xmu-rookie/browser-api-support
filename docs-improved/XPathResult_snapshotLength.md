# XPathResult.snapshotLength API 兼容性数据

## 基本信息

- **API名称**: `XPathResult.snapshotLength`
- **MDN文档**: [XPathResult.snapshotLength](https://developer.mozilla.org/docs/Web/API/XPathResult/snapshotLength)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-xpathresult-snapshotlength)
- **标签**: `web-features:xpath`

## 使用示例

### 基本用法

```javascript
// XPathResult.snapshotLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('XPathResult.snapshotLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查XPathResult.snapshotLength是否支持
function isXPathResultSnapshotLengthSupported() {
    return 'snapshotLength' in xpathresult && typeof xpathresult.snapshotLength === 'function';
}

if (isXPathResultSnapshotLengthSupported()) {
    console.log('XPathResult.snapshotLength 支持');
    // 使用XPathResult.snapshotLength
} else {
    console.log('XPathResult.snapshotLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XPathResult.snapshotLength polyfill
if (!xpathresult.snapshotLength) {
    // 在这里添加polyfill实现
    console.log('加载XPathResult.snapshotLength polyfill');
}
```

