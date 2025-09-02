# Selection.removeRange API 兼容性数据

## 基本信息

- **API名称**: `Selection.removeRange`
- **MDN文档**: [Selection.removeRange](https://developer.mozilla.org/docs/Web/API/Selection/removeRange)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-removerange)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.removeRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.removeRange API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 45 |  |
| Opera Android | 43 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 58

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 45
- **支持版本**: ≤12.1
- **移除版本**: 15

### Opera Android

- **支持版本**: 43
- **支持版本**: ≤12.1
- **移除版本**: 14

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.removeRange是否支持
function isSelectionRemoveRangeSupported() {
    return 'removeRange' in selection && typeof selection.removeRange === 'function';
}

if (isSelectionRemoveRangeSupported()) {
    console.log('Selection.removeRange 支持');
    // 使用Selection.removeRange
} else {
    console.log('Selection.removeRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.removeRange polyfill
if (!selection.removeRange) {
    // 在这里添加polyfill实现
    console.log('加载Selection.removeRange polyfill');
}
```

