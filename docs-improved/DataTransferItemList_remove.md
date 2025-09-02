# DataTransferItemList.remove API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItemList.remove`
- **MDN文档**: [DataTransferItemList.remove](https://developer.mozilla.org/docs/Web/API/DataTransferItemList/remove)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransferitemlist-remove-dev)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransferItemList.remove 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItemList.remove API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | ≤14 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

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
// 检查DataTransferItemList.remove是否支持
function isDataTransferItemListRemoveSupported() {
    return 'remove' in datatransferitemlist && typeof datatransferitemlist.remove === 'function';
}

if (isDataTransferItemListRemoveSupported()) {
    console.log('DataTransferItemList.remove 支持');
    // 使用DataTransferItemList.remove
} else {
    console.log('DataTransferItemList.remove 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItemList.remove polyfill
if (!datatransferitemlist.remove) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItemList.remove polyfill');
}
```

