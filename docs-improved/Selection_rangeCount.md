# Selection.rangeCount API 兼容性数据

## 基本信息

- **API名称**: `Selection.rangeCount`
- **MDN文档**: [Selection.rangeCount](https://developer.mozilla.org/docs/Web/API/Selection/rangeCount)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-rangecount)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.rangeCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.rangeCount API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

### Internet Explorer

- **支持版本**: 9

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
// 检查Selection.rangeCount是否支持
function isSelectionRangeCountSupported() {
    return 'rangeCount' in selection && typeof selection.rangeCount === 'function';
}

if (isSelectionRangeCountSupported()) {
    console.log('Selection.rangeCount 支持');
    // 使用Selection.rangeCount
} else {
    console.log('Selection.rangeCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.rangeCount polyfill
if (!selection.rangeCount) {
    // 在这里添加polyfill实现
    console.log('加载Selection.rangeCount polyfill');
}
```

