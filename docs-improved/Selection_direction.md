# Selection.direction API 兼容性数据

## 基本信息

- **API名称**: `Selection.direction`
- **MDN文档**: [Selection.direction](https://developer.mozilla.org/docs/Web/API/Selection/direction)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-direction)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.direction 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.direction API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 137

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.direction是否支持
function isSelectionDirectionSupported() {
    return 'direction' in selection && typeof selection.direction === 'function';
}

if (isSelectionDirectionSupported()) {
    console.log('Selection.direction 支持');
    // 使用Selection.direction
} else {
    console.log('Selection.direction 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.direction polyfill
if (!selection.direction) {
    // 在这里添加polyfill实现
    console.log('加载Selection.direction polyfill');
}
```

