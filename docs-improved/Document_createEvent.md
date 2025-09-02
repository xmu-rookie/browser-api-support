# Document.createEvent API 兼容性数据

## 基本信息

- **API名称**: `Document.createEvent`
- **MDN文档**: [Document.createEvent](https://developer.mozilla.org/docs/Web/API/Document/createEvent)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-document-createevent)

## 使用示例

### 基本用法

```javascript
// Document.createEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.createEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | From version 67, creating touch events using this method is no longer supported. |
| Firefox Android | 4 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
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
- **注意事项**:
  - From version 67, creating touch events using this method is no longer supported.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.createEvent是否支持
function isDocumentCreateEventSupported() {
    return 'createEvent' in document && typeof document.createEvent === 'function';
}

if (isDocumentCreateEventSupported()) {
    console.log('Document.createEvent 支持');
    // 使用Document.createEvent
} else {
    console.log('Document.createEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.createEvent polyfill
if (!document.createEvent) {
    // 在这里添加polyfill实现
    console.log('加载Document.createEvent polyfill');
}
```

