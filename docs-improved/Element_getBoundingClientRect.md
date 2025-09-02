# Element.getBoundingClientRect API 兼容性数据

## 基本信息

- **API名称**: `Element.getBoundingClientRect`
- **MDN文档**: [Element.getBoundingClientRect](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-getboundingclientrect)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getBoundingClientRect 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getBoundingClientRect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 3.2 | Safari for iOS will modify the effective viewport based on the user zoom. This results in incorrect ... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 2 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3.2
- **注意事项**:
  - Safari for iOS will modify the effective viewport based on the user zoom. This results in incorrect values whenever the user has zoomed.

### WebView Android

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getBoundingClientRect是否支持
function isElementGetBoundingClientRectSupported() {
    return 'getBoundingClientRect' in element && typeof element.getBoundingClientRect === 'function';
}

if (isElementGetBoundingClientRectSupported()) {
    console.log('Element.getBoundingClientRect 支持');
    // 使用Element.getBoundingClientRect
} else {
    console.log('Element.getBoundingClientRect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getBoundingClientRect polyfill
if (!element.getBoundingClientRect) {
    // 在这里添加polyfill实现
    console.log('加载Element.getBoundingClientRect polyfill');
}
```

