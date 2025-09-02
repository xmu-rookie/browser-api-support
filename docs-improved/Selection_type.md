# Selection.type API 兼容性数据

## 基本信息

- **API名称**: `Selection.type`
- **MDN文档**: [Selection.type](https://developer.mozilla.org/docs/Web/API/Selection/type)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-type)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 57 |  |
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

- **支持版本**: 12

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.type是否支持
function isSelectionTypeSupported() {
    return 'type' in selection && typeof selection.type === 'function';
}

if (isSelectionTypeSupported()) {
    console.log('Selection.type 支持');
    // 使用Selection.type
} else {
    console.log('Selection.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.type polyfill
if (!selection.type) {
    // 在这里添加polyfill实现
    console.log('加载Selection.type polyfill');
}
```

