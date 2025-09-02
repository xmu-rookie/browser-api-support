# Element.insertAdjacentElement API 兼容性数据

## 基本信息

- **API名称**: `Element.insertAdjacentElement`
- **MDN文档**: [Element.insertAdjacentElement](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-insertadjacentelement)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.insertAdjacentElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.insertAdjacentElement API');
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
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
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

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.insertAdjacentElement是否支持
function isElementInsertAdjacentElementSupported() {
    return 'insertAdjacentElement' in element && typeof element.insertAdjacentElement === 'function';
}

if (isElementInsertAdjacentElementSupported()) {
    console.log('Element.insertAdjacentElement 支持');
    // 使用Element.insertAdjacentElement
} else {
    console.log('Element.insertAdjacentElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.insertAdjacentElement polyfill
if (!element.insertAdjacentElement) {
    // 在这里添加polyfill实现
    console.log('加载Element.insertAdjacentElement polyfill');
}
```

