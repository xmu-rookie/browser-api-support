# MediaError.message API 兼容性数据

## 基本信息

- **API名称**: `MediaError.message`
- **MDN文档**: [MediaError.message](https://developer.mozilla.org/docs/Web/API/MediaError/message)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-mediaerror-message-dev)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// MediaError.message 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaError.message API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 52 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Firefox

- **支持版本**: 52

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaError.message是否支持
function isMediaErrorMessageSupported() {
    return 'message' in mediaerror && typeof mediaerror.message === 'function';
}

if (isMediaErrorMessageSupported()) {
    console.log('MediaError.message 支持');
    // 使用MediaError.message
} else {
    console.log('MediaError.message 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaError.message polyfill
if (!mediaerror.message) {
    // 在这里添加polyfill实现
    console.log('加载MediaError.message polyfill');
}
```

