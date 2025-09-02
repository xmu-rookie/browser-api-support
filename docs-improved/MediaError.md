# MediaError API 兼容性数据

## 基本信息

- **API名称**: `MediaError`
- **MDN文档**: [MediaError](https://developer.mozilla.org/docs/Web/API/MediaError)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#error-codes)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// MediaError 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
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

- **支持版本**: 3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4
- **支持版本**: 3.5
- **移除版本**: 4

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
// 检查MediaError是否支持
function isMediaErrorSupported() {
    return 'MediaError' in window || typeof MediaError !== 'undefined';
}

if (isMediaErrorSupported()) {
    console.log('MediaError 支持');
    // 使用MediaError
} else {
    console.log('MediaError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaError polyfill
if (!window.MediaError) {
    // 在这里添加polyfill实现
    console.log('加载MediaError polyfill');
}
```

