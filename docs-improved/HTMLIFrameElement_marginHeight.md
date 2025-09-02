# HTMLIFrameElement.marginHeight API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.marginHeight`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-iframe-marginheight)

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.marginHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.marginHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
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
// 检查HTMLIFrameElement.marginHeight是否支持
function isHTMLIFrameElementMarginHeightSupported() {
    return 'marginHeight' in htmliframeelement && typeof htmliframeelement.marginHeight === 'function';
}

if (isHTMLIFrameElementMarginHeightSupported()) {
    console.log('HTMLIFrameElement.marginHeight 支持');
    // 使用HTMLIFrameElement.marginHeight
} else {
    console.log('HTMLIFrameElement.marginHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLIFrameElement.marginHeight polyfill
if (!htmliframeelement.marginHeight) {
    // 在这里添加polyfill实现
    console.log('加载HTMLIFrameElement.marginHeight polyfill');
}
```

