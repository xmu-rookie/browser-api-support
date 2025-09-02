# DataTransferItem API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItem`
- **MDN文档**: [DataTransferItem](https://developer.mozilla.org/docs/Web/API/DataTransferItem)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransferitem-interface)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransferItem 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItem API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 11 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | ≤14 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 11

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 50

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransferItem是否支持
function isDataTransferItemSupported() {
    return 'DataTransferItem' in window || typeof DataTransferItem !== 'undefined';
}

if (isDataTransferItemSupported()) {
    console.log('DataTransferItem 支持');
    // 使用DataTransferItem
} else {
    console.log('DataTransferItem 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItem polyfill
if (!window.DataTransferItem) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItem polyfill');
}
```

