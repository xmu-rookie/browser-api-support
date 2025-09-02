# Element.scrollIntoView API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollIntoView`
- **MDN文档**: [Element.scrollIntoView](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scrollintoview)
- **标签**: `web-features:scroll-into-view`

## 使用示例

### 基本用法

```javascript
// Element.scrollIntoView 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollIntoView API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all ... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 | No support for `center` option.; Before Safari 15.4, there was no support for the `smooth` behavior. |
| Safari iOS | 1 | No support for `center` option.; Before iOS 15.4, there was no support for the `smooth` behavior. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 79
- **支持版本**: 17
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - The only parameter supported is `alignToTop`.
- **支持版本**: 12
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).
  - No support for `smooth` behavior.

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).
  - No support for `smooth` behavior or `center` options.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3
- **注意事项**:
  - No support for `center` option.
  - Before Safari 15.4, there was no support for the `smooth` behavior.

### Safari iOS

- **支持版本**: 1
- **注意事项**:
  - No support for `center` option.
  - Before iOS 15.4, there was no support for the `smooth` behavior.

## 相关子API

该API包含以下子功能：

- **options_container_parameter**: `options.container` parameter
- **options_parameter**: `options` parameter

