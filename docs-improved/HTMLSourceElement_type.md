# HTMLSourceElement.type API 兼容性数据

## 基本信息

- **API名称**: `HTMLSourceElement.type`
- **MDN文档**: [HTMLSourceElement.type](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/type)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-source-type)

## 使用示例

### 基本用法

```javascript
// HTMLSourceElement.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSourceElement.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
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

- **支持版本**: 3.5

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
// 检查HTMLSourceElement.type是否支持
function isHTMLSourceElementTypeSupported() {
    return 'type' in htmlsourceelement && typeof htmlsourceelement.type === 'function';
}

if (isHTMLSourceElementTypeSupported()) {
    console.log('HTMLSourceElement.type 支持');
    // 使用HTMLSourceElement.type
} else {
    console.log('HTMLSourceElement.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSourceElement.type polyfill
if (!htmlsourceelement.type) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSourceElement.type polyfill');
}
```

