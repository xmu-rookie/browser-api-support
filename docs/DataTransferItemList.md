# DataTransferItemList API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItemList`
- **MDN文档**: [DataTransferItemList](https://developer.mozilla.org/docs/Web/API/DataTransferItemList)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransferitemlist-interface)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransferItemList 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItemList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | ≤14 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 50

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransferItemList是否支持
function isDataTransferItemListSupported() {
    return 'DataTransferItemList' in window || typeof DataTransferItemList !== 'undefined';
}

if (isDataTransferItemListSupported()) {
    console.log('DataTransferItemList 支持');
    // 使用DataTransferItemList
} else {
    console.log('DataTransferItemList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItemList polyfill
if (!window.DataTransferItemList) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItemList polyfill');
}
```

