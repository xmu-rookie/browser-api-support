# TimeRanges.end API 兼容性数据

## 基本信息

- **API名称**: `TimeRanges.end`
- **MDN文档**: [TimeRanges.end](https://developer.mozilla.org/docs/Web/API/TimeRanges/end)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-timeranges-end-dev)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// TimeRanges.end 使用示例
// 请查阅MDN文档了解具体用法
console.log('TimeRanges.end API');
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
// 检查TimeRanges.end是否支持
function isTimeRangesEndSupported() {
    return 'end' in timeranges && typeof timeranges.end === 'function';
}

if (isTimeRangesEndSupported()) {
    console.log('TimeRanges.end 支持');
    // 使用TimeRanges.end
} else {
    console.log('TimeRanges.end 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TimeRanges.end polyfill
if (!timeranges.end) {
    // 在这里添加polyfill实现
    console.log('加载TimeRanges.end polyfill');
}
```

