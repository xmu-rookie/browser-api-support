# Range.comparePoint API 兼容性数据

## 基本信息

- **API名称**: `Range.comparePoint`
- **MDN文档**: [Range.comparePoint](https://developer.mozilla.org/docs/Web/API/Range/comparePoint)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-range-comparepoint①)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Range.comparePoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('Range.comparePoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 1

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Range.comparePoint是否支持
function isRangeComparePointSupported() {
    return 'comparePoint' in range && typeof range.comparePoint === 'function';
}

if (isRangeComparePointSupported()) {
    console.log('Range.comparePoint 支持');
    // 使用Range.comparePoint
} else {
    console.log('Range.comparePoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Range.comparePoint polyfill
if (!range.comparePoint) {
    // 在这里添加polyfill实现
    console.log('加载Range.comparePoint polyfill');
}
```

