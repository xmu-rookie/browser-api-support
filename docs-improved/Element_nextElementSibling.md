# Element.nextElementSibling API 兼容性数据

## 基本信息

- **API名称**: `Element.nextElementSibling`
- **MDN文档**: [Element.nextElementSibling](https://developer.mozilla.org/docs/Web/API/Element/nextElementSibling)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-nondocumenttypechildnode-nextelementsibling②)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.nextElementSibling 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.nextElementSibling API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 10

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.nextElementSibling是否支持
function isElementNextElementSiblingSupported() {
    return 'nextElementSibling' in element && typeof element.nextElementSibling === 'function';
}

if (isElementNextElementSiblingSupported()) {
    console.log('Element.nextElementSibling 支持');
    // 使用Element.nextElementSibling
} else {
    console.log('Element.nextElementSibling 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.nextElementSibling polyfill
if (!element.nextElementSibling) {
    // 在这里添加polyfill实现
    console.log('加载Element.nextElementSibling polyfill');
}
```

