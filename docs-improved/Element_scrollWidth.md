# Element.scrollWidth API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollWidth`
- **MDN文档**: [Element.scrollWidth](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scrollwidth)
- **标签**: `web-features:scroll-elements`

## 使用示例

### 基本用法

```javascript
// Element.scrollWidth 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollWidth API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | In Internet Explorer 5 through 7, if padding is set, the value of `scrollWidth` is equal to the sum ... |
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

- **支持版本**: 5
- **注意事项**:
  - In Internet Explorer 5 through 7, if padding is set, the value of `scrollWidth` is equal to the sum of the left and right padding. This behavior was fixed in Internet Explorer 8.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.scrollWidth是否支持
function isElementScrollWidthSupported() {
    return 'scrollWidth' in element && typeof element.scrollWidth === 'function';
}

if (isElementScrollWidthSupported()) {
    console.log('Element.scrollWidth 支持');
    // 使用Element.scrollWidth
} else {
    console.log('Element.scrollWidth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.scrollWidth polyfill
if (!element.scrollWidth) {
    // 在这里添加polyfill实现
    console.log('加载Element.scrollWidth polyfill');
}
```

