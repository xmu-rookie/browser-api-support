# Selection.getComposedRanges.returns_multiple_ranges API 兼容性数据

## 基本信息

- **API名称**: `Selection.getComposedRanges.returns_multiple_ranges`
- **描述**: Returned array can contain multiple ranges

## 使用示例

### 基本用法

```javascript
// Selection.getComposedRanges.returns_multiple_ranges 使用示例
// 请查阅MDN文档了解具体用法
console.log('Selection.getComposedRanges.returns_multiple_ranges API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: preview

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Selection.getComposedRanges.returns_multiple_ranges是否支持
function isSelectionGetComposedRangesSupported() {
    return 'getComposedRanges' in selection && typeof selection.getComposedRanges === 'function';
}

if (isSelectionGetComposedRangesSupported()) {
    console.log('Selection.getComposedRanges.returns_multiple_ranges 支持');
    // 使用Selection.getComposedRanges.returns_multiple_ranges
} else {
    console.log('Selection.getComposedRanges.returns_multiple_ranges 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Selection.getComposedRanges.returns_multiple_ranges polyfill
if (!selection.getComposedRanges) {
    // 在这里添加polyfill实现
    console.log('加载Selection.getComposedRanges.returns_multiple_ranges polyfill');
}
```

