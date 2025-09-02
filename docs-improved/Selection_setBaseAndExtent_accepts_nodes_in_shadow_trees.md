# Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees API 兼容性数据

## 基本信息

- **API名称**: `Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees`
- **描述**: Accepts `anchorNode` and `focusNode` arguments in different shadow trees

## 使用示例

### 基本用法

```javascript
// Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 142 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 137

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees是否支持
function isSelectionSetBaseAndExtentSupported() {
    return 'setBaseAndExtent' in selection && typeof selection.setBaseAndExtent === 'function';
}

if (isSelectionSetBaseAndExtentSupported()) {
    console.log('Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees 支持');
    // 使用Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees
} else {
    console.log('Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees polyfill
if (!selection.setBaseAndExtent) {
    // 在这里添加polyfill实现
    console.log('加载Selection.setBaseAndExtent.accepts_nodes_in_shadow_trees polyfill');
}
```

