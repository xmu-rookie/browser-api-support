# HTMLImageElement.complete API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.complete`
- **MDN文档**: [HTMLImageElement.complete](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/complete)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-complete-dev)
- **标签**: `web-features:img`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.complete 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.complete API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 | IE reports `false` for broken images. |
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

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5
- **注意事项**:
  - IE reports `false` for broken images.

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
// 检查HTMLImageElement.complete是否支持
function isHTMLImageElementCompleteSupported() {
    return 'complete' in htmlimageelement && typeof htmlimageelement.complete === 'function';
}

if (isHTMLImageElementCompleteSupported()) {
    console.log('HTMLImageElement.complete 支持');
    // 使用HTMLImageElement.complete
} else {
    console.log('HTMLImageElement.complete 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.complete polyfill
if (!htmlimageelement.complete) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.complete polyfill');
}
```

