# Selection.collapse.node_parameter_nullable API 兼容性数据

## 基本信息

- **API名称**: `Selection.collapse.node_parameter_nullable`
- **描述**: `node` parameter is nullable

## 使用示例

### 基本用法

```javascript
// Selection.collapse.node_parameter_nullable 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.collapse.node_parameter_nullable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 39 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
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

- **支持版本**: 39

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.collapse.node_parameter_nullable是否支持
function isSelectionCollapseSupported() {
    return 'collapse' in selection && typeof selection.collapse === 'function';
}

if (isSelectionCollapseSupported()) {
    console.log('Selection.collapse.node_parameter_nullable 支持');
    // 使用Selection.collapse.node_parameter_nullable
} else {
    console.log('Selection.collapse.node_parameter_nullable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.collapse.node_parameter_nullable polyfill
if (!selection.collapse) {
    // 在这里添加polyfill实现
    console.log('加载Selection.collapse.node_parameter_nullable polyfill');
}
```

