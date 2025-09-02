# Element.getElementsByClassName API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByClassName`
- **MDN文档**: [Element.getElementsByClassName](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-getelementsbyclassname)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getElementsByClassName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getElementsByClassName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 3 | Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change... |
| Firefox Android | 4 |  |
| Internet Explorer | 9 | Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all ... |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
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

- **支持版本**: 16
- **支持版本**: 12
- **移除版本**: 16
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Firefox

- **支持版本**: 3
- **注意事项**:
  - Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change in the spec.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getElementsByClassName是否支持
function isElementGetElementsByClassNameSupported() {
    return 'getElementsByClassName' in element && typeof element.getElementsByClassName === 'function';
}

if (isElementGetElementsByClassNameSupported()) {
    console.log('Element.getElementsByClassName 支持');
    // 使用Element.getElementsByClassName
} else {
    console.log('Element.getElementsByClassName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getElementsByClassName polyfill
if (!element.getElementsByClassName) {
    // 在这里添加polyfill实现
    console.log('加载Element.getElementsByClassName polyfill');
}
```

