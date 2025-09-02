# Element.getAttribute API 兼容性数据

## 基本信息

- **API名称**: `Element.getAttribute`
- **MDN文档**: [Element.getAttribute](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-getattribute①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getAttribute 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getAttribute API');
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
// 检查Element.getAttribute是否支持
function isElementGetAttributeSupported() {
    return 'getAttribute' in element && typeof element.getAttribute === 'function';
}

if (isElementGetAttributeSupported()) {
    console.log('Element.getAttribute 支持');
    // 使用Element.getAttribute
} else {
    console.log('Element.getAttribute 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getAttribute polyfill
if (!element.getAttribute) {
    // 在这里添加polyfill实现
    console.log('加载Element.getAttribute polyfill');
}
```

