# Document.rootElement API 兼容性数据

## 基本信息

- **API名称**: `Document.rootElement`
- **MDN文档**: [Document.rootElement](https://developer.mozilla.org/docs/Web/API/Document/rootElement)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/struct.html#__svg__SVGDocument__rootElement)

## 使用示例

### 基本用法

```javascript
// Document.rootElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.rootElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 34 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 52 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 34

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 52

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.rootElement是否支持
function isDocumentRootElementSupported() {
    return 'rootElement' in document && typeof document.rootElement === 'function';
}

if (isDocumentRootElementSupported()) {
    console.log('Document.rootElement 支持');
    // 使用Document.rootElement
} else {
    console.log('Document.rootElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.rootElement polyfill
if (!document.rootElement) {
    // 在这里添加polyfill实现
    console.log('加载Document.rootElement polyfill');
}
```

