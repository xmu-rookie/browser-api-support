# Element.tagName API 兼容性数据

## 基本信息

- **API名称**: `Element.tagName`
- **MDN文档**: [Element.tagName](https://developer.mozilla.org/docs/Web/API/Element/tagName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-tagname①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.tagName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.tagName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
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

- **支持版本**: 5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.tagName是否支持
function isElementTagNameSupported() {
    return 'tagName' in element && typeof element.tagName === 'function';
}

if (isElementTagNameSupported()) {
    console.log('Element.tagName 支持');
    // 使用Element.tagName
} else {
    console.log('Element.tagName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.tagName polyfill
if (!element.tagName) {
    // 在这里添加polyfill实现
    console.log('加载Element.tagName polyfill');
}
```

