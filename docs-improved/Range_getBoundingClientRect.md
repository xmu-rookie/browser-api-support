# Range.getBoundingClientRect API 兼容性数据

## 基本信息

- **API名称**: `Range.getBoundingClientRect`
- **MDN文档**: [Range.getBoundingClientRect](https://developer.mozilla.org/docs/Web/API/Range/getBoundingClientRect)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-range-getboundingclientrect)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Range.getBoundingClientRect 使用示例
// 请查阅MDN文档了解具体用法
console.log('Range.getBoundingClientRect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Range.getBoundingClientRect是否支持
function isRangeGetBoundingClientRectSupported() {
    return 'getBoundingClientRect' in range && typeof range.getBoundingClientRect === 'function';
}

if (isRangeGetBoundingClientRectSupported()) {
    console.log('Range.getBoundingClientRect 支持');
    // 使用Range.getBoundingClientRect
} else {
    console.log('Range.getBoundingClientRect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Range.getBoundingClientRect polyfill
if (!range.getBoundingClientRect) {
    // 在这里添加polyfill实现
    console.log('加载Range.getBoundingClientRect polyfill');
}
```

