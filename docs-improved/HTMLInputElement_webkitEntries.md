# HTMLInputElement.webkitEntries API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.webkitEntries`
- **MDN文档**: [HTMLInputElement.webkitEntries](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitEntries)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-htmlinputelement-webkitentries)

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.webkitEntries 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.webkitEntries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 22

### Firefox

- **支持版本**: 50

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.webkitEntries是否支持
function isHTMLInputElementWebkitEntriesSupported() {
    return 'webkitEntries' in htmlinputelement && typeof htmlinputelement.webkitEntries === 'function';
}

if (isHTMLInputElementWebkitEntriesSupported()) {
    console.log('HTMLInputElement.webkitEntries 支持');
    // 使用HTMLInputElement.webkitEntries
} else {
    console.log('HTMLInputElement.webkitEntries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.webkitEntries polyfill
if (!htmlinputelement.webkitEntries) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.webkitEntries polyfill');
}
```

