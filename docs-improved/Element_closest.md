# Element.closest API 兼容性数据

## 基本信息

- **API名称**: `Element.closest`
- **MDN文档**: [Element.closest](https://developer.mozilla.org/docs/Web/API/Element/closest)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-closest①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.closest 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.closest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 9 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 35

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.closest是否支持
function isElementClosestSupported() {
    return 'closest' in element && typeof element.closest === 'function';
}

if (isElementClosestSupported()) {
    console.log('Element.closest 支持');
    // 使用Element.closest
} else {
    console.log('Element.closest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.closest polyfill
if (!element.closest) {
    // 在这里添加polyfill实现
    console.log('加载Element.closest polyfill');
}
```

