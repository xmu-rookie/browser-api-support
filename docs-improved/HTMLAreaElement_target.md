# HTMLAreaElement.target API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.target`
- **MDN文档**: [HTMLAreaElement.target](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/target)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/image-maps.html#dom-area-target)
- **标签**: `web-features:image-maps`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.target 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.target API');
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
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAreaElement.target是否支持
function isHTMLAreaElementTargetSupported() {
    return 'target' in htmlareaelement && typeof htmlareaelement.target === 'function';
}

if (isHTMLAreaElementTargetSupported()) {
    console.log('HTMLAreaElement.target 支持');
    // 使用HTMLAreaElement.target
} else {
    console.log('HTMLAreaElement.target 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.target polyfill
if (!htmlareaelement.target) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.target polyfill');
}
```

