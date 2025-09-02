# Document.queryCommandValue API 兼容性数据

## 基本信息

- **API名称**: `Document.queryCommandValue`
- **标签**: `web-features:execcommand`

## 使用示例

### 基本用法

```javascript
// Document.queryCommandValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.queryCommandValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 2 |  |
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

- **支持版本**: 69
- **支持版本**: 1
- **移除版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.queryCommandValue是否支持
function isDocumentQueryCommandValueSupported() {
    return 'queryCommandValue' in document && typeof document.queryCommandValue === 'function';
}

if (isDocumentQueryCommandValueSupported()) {
    console.log('Document.queryCommandValue 支持');
    // 使用Document.queryCommandValue
} else {
    console.log('Document.queryCommandValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.queryCommandValue polyfill
if (!document.queryCommandValue) {
    // 在这里添加polyfill实现
    console.log('加载Document.queryCommandValue polyfill');
}
```

