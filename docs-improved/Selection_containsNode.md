# Selection.containsNode API 兼容性数据

## 基本信息

- **API名称**: `Selection.containsNode`
- **MDN文档**: [Selection.containsNode](https://developer.mozilla.org/docs/Web/API/Selection/containsNode)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-containsnode)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Selection.containsNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.containsNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 35, the method didn't throw if `node` was `null`. |
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
- **注意事项**:
  - Before Firefox 35, the method didn't throw if `node` was `null`.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.containsNode是否支持
function isSelectionContainsNodeSupported() {
    return 'containsNode' in selection && typeof selection.containsNode === 'function';
}

if (isSelectionContainsNodeSupported()) {
    console.log('Selection.containsNode 支持');
    // 使用Selection.containsNode
} else {
    console.log('Selection.containsNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.containsNode polyfill
if (!selection.containsNode) {
    // 在这里添加polyfill实现
    console.log('加载Selection.containsNode polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **partialContainment_parameter_optional**: `partialContainment` parameter is optional

