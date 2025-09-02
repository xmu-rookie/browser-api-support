# TimeRanges.length API 兼容性数据

## 基本信息

- **API名称**: `TimeRanges.length`
- **MDN文档**: [TimeRanges.length](https://developer.mozilla.org/docs/Web/API/TimeRanges/length)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-timeranges-length-dev)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// TimeRanges.length 使用示例
// 请查阅MDN文档了解具体用法
console.log('TimeRanges.length API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 6

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

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TimeRanges.length是否支持
function isTimeRangesLengthSupported() {
    return 'length' in timeranges && typeof timeranges.length === 'function';
}

if (isTimeRangesLengthSupported()) {
    console.log('TimeRanges.length 支持');
    // 使用TimeRanges.length
} else {
    console.log('TimeRanges.length 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TimeRanges.length polyfill
if (!timeranges.length) {
    // 在这里添加polyfill实现
    console.log('加载TimeRanges.length polyfill');
}
```

