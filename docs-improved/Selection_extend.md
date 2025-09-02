# Selection.extend API 兼容性数据

## 基本信息

- **API名称**: `Selection.extend`
- **MDN文档**: [Selection.extend](https://developer.mozilla.org/docs/Web/API/Selection/extend)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-extend)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.extend 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.extend API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
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

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.extend是否支持
function isSelectionExtendSupported() {
    return 'extend' in selection && typeof selection.extend === 'function';
}

if (isSelectionExtendSupported()) {
    console.log('Selection.extend 支持');
    // 使用Selection.extend
} else {
    console.log('Selection.extend 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.extend polyfill
if (!selection.extend) {
    // 在这里添加polyfill实现
    console.log('加载Selection.extend polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **accepts_nodes_in_shadow_trees**: Accepts `node` parameter in any tree/shadow tree
- **offset_parameter_optional**: `offset` parameter is optional

