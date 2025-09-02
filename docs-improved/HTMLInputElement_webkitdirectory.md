# HTMLInputElement.webkitdirectory API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.webkitdirectory`
- **MDN文档**: [HTMLInputElement.webkitdirectory](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-htmlinputelement-webkitdirectory)

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.webkitdirectory 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.webkitdirectory API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 132 |  |
| Edge | 13 |  |
| Firefox | 50 |  |
| Firefox Android | 142 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 18.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Chrome Android

- **支持版本**: 132
- **支持版本**: 131
- **移除版本**: 132
- **部分实现**: 是
- **注意事项**:
  - In Chrome for Android 131, if a user selects a directory, the browser crashes (see [bug 376834374](https://crbug.com/376834374)).
- **支持版本**: 18
- **移除版本**: 131
- **部分实现**: 是
- **注意事项**:
  - The property reflects the attribute, but users cannot choose a directory, only individual files (see [bug 40248532](https://crbug.com/40248532).

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 50

### Firefox Android

- **支持版本**: 142
- **支持版本**: 141
- **移除版本**: 142
- **部分实现**: 是
- **注意事项**:
  - `File` entries returned for a selected directory have an empty string for `webkitRelativePath` ([bug 1973726](https://bugzil.la/1973726)).

### Safari

- **支持版本**: 11.1

### Safari iOS

- **支持版本**: 18.4
- **支持版本**: 11.3
- **移除版本**: 18.4
- **部分实现**: 是
- **注意事项**:
  - The property can be set, but has no effect (see [bug 271705](https://webkit.org/b/271705)).

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.webkitdirectory是否支持
function isHTMLInputElementWebkitdirectorySupported() {
    return 'webkitdirectory' in htmlinputelement && typeof htmlinputelement.webkitdirectory === 'function';
}

if (isHTMLInputElementWebkitdirectorySupported()) {
    console.log('HTMLInputElement.webkitdirectory 支持');
    // 使用HTMLInputElement.webkitdirectory
} else {
    console.log('HTMLInputElement.webkitdirectory 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.webkitdirectory polyfill
if (!htmlinputelement.webkitdirectory) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.webkitdirectory polyfill');
}
```

