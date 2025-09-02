# Selection.toString API 兼容性数据

## 基本信息

- **API名称**: `Selection.toString`
- **MDN文档**: [Selection.toString](https://developer.mozilla.org/docs/Web/API/Selection/toString)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-stringifier)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.toString API');
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.toString是否支持
function isSelectionToStringSupported() {
    return 'toString' in selection && typeof selection.toString === 'function';
}

if (isSelectionToStringSupported()) {
    console.log('Selection.toString 支持');
    // 使用Selection.toString
} else {
    console.log('Selection.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.toString polyfill
if (!selection.toString) {
    // 在这里添加polyfill实现
    console.log('加载Selection.toString polyfill');
}
```

