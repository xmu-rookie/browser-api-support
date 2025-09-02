# Element.querySelector API 兼容性数据

## 基本信息

- **API名称**: `Element.querySelector`
- **MDN文档**: [Element.querySelector](https://developer.mozilla.org/docs/Web/API/Element/querySelector)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-parentnode-queryselectorall①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.querySelector 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.querySelector API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10 |  |
| Opera Android | 10.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9
- **支持版本**: 8
- **移除版本**: 9
- **部分实现**: 是
- **注意事项**:
  - `querySelector()` is supported, but only for CSS 2.1 selectors.

### Opera

- **支持版本**: 10

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.querySelector是否支持
function isElementQuerySelectorSupported() {
    return 'querySelector' in element && typeof element.querySelector === 'function';
}

if (isElementQuerySelectorSupported()) {
    console.log('Element.querySelector 支持');
    // 使用Element.querySelector
} else {
    console.log('Element.querySelector 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.querySelector polyfill
if (!element.querySelector) {
    // 在这里添加polyfill实现
    console.log('加载Element.querySelector polyfill');
}
```

