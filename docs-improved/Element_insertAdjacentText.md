# Element.insertAdjacentText API 兼容性数据

## 基本信息

- **API名称**: `Element.insertAdjacentText`
- **MDN文档**: [Element.insertAdjacentText](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-insertadjacenttext)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.insertAdjacentText 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.insertAdjacentText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all ... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 2.2 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 17
- **支持版本**: 12
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Firefox

- **支持版本**: 48

### Internet Explorer

- **支持版本**: 5
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 4

### WebView Android

- **支持版本**: 2.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.insertAdjacentText是否支持
function isElementInsertAdjacentTextSupported() {
    return 'insertAdjacentText' in element && typeof element.insertAdjacentText === 'function';
}

if (isElementInsertAdjacentTextSupported()) {
    console.log('Element.insertAdjacentText 支持');
    // 使用Element.insertAdjacentText
} else {
    console.log('Element.insertAdjacentText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.insertAdjacentText polyfill
if (!element.insertAdjacentText) {
    // 在这里添加polyfill实现
    console.log('加载Element.insertAdjacentText polyfill');
}
```

