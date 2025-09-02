# Document.afterscriptexecute_event API 兼容性数据

## 基本信息

- **API名称**: `Document.afterscriptexecute_event`
- **MDN文档**: [Document.afterscriptexecute_event](https://developer.mozilla.org/docs/Web/API/Document/afterscriptexecute_event)
- **描述**: `afterscriptexecute` event

## 使用示例

### 基本用法

```javascript
// Document.afterscriptexecute_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.afterscriptexecute_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 9 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 9

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.afterscriptexecute_event是否支持
function isDocumentAfterscriptexecute_eventSupported() {
    return 'afterscriptexecute_event' in document && typeof document.afterscriptexecute_event === 'function';
}

if (isDocumentAfterscriptexecute_eventSupported()) {
    console.log('Document.afterscriptexecute_event 支持');
    // 使用Document.afterscriptexecute_event
} else {
    console.log('Document.afterscriptexecute_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.afterscriptexecute_event polyfill
if (!document.afterscriptexecute_event) {
    // 在这里添加polyfill实现
    console.log('加载Document.afterscriptexecute_event polyfill');
}
```

