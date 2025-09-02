# Selection.setPosition API 兼容性数据

## 基本信息

- **API名称**: `Selection.setPosition`
- **MDN文档**: [Selection.setPosition](https://developer.mozilla.org/docs/Web/API/Selection/setPosition)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-collapse)
- **标签**: `web-features:selection-api`
- **描述**: `setPosition()` as alias of `collapse()`

## 使用示例

### 基本用法

```javascript
// Selection.setPosition 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.setPosition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1.3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.setPosition是否支持
function isSelectionSetPositionSupported() {
    return 'setPosition' in selection && typeof selection.setPosition === 'function';
}

if (isSelectionSetPositionSupported()) {
    console.log('Selection.setPosition 支持');
    // 使用Selection.setPosition
} else {
    console.log('Selection.setPosition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.setPosition polyfill
if (!selection.setPosition) {
    // 在这里添加polyfill实现
    console.log('加载Selection.setPosition polyfill');
}
```

