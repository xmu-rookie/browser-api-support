# DataTransferItem.webkitGetAsEntry API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItem.webkitGetAsEntry`
- **MDN文档**: [DataTransferItem.webkitGetAsEntry](https://developer.mozilla.org/docs/Web/API/DataTransferItem/webkitGetAsEntry)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-datatransferitem-webkitgetasentry)

## 使用示例

### 基本用法

```javascript
// DataTransferItem.webkitGetAsEntry 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItem.webkitGetAsEntry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 50 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 50

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransferItem.webkitGetAsEntry是否支持
function isDataTransferItemWebkitGetAsEntrySupported() {
    return 'webkitGetAsEntry' in datatransferitem && typeof datatransferitem.webkitGetAsEntry === 'function';
}

if (isDataTransferItemWebkitGetAsEntrySupported()) {
    console.log('DataTransferItem.webkitGetAsEntry 支持');
    // 使用DataTransferItem.webkitGetAsEntry
} else {
    console.log('DataTransferItem.webkitGetAsEntry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItem.webkitGetAsEntry polyfill
if (!datatransferitem.webkitGetAsEntry) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItem.webkitGetAsEntry polyfill');
}
```

