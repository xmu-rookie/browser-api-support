# HTMLOptGroupElement.disabled API 兼容性数据

## 基本信息

- **API名称**: `HTMLOptGroupElement.disabled`
- **MDN文档**: [HTMLOptGroupElement.disabled](https://developer.mozilla.org/docs/Web/API/HTMLOptGroupElement/disabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-optgroup-disabled)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLOptGroupElement.disabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLOptGroupElement.disabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 7 |  |
| Safari iOS | 1 | The property can be set, but has no effect (see [bug 227042](https://webkit.org/b/227042)). |
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

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 7
- **支持版本**: 3
- **移除版本**: 7
- **部分实现**: 是
- **注意事项**:
  - The property can be set, but has no effect (see [bug 227042](https://webkit.org/b/227042)).

### Safari iOS

- **支持版本**: 1
- **部分实现**: 是
- **注意事项**:
  - The property can be set, but has no effect (see [bug 227042](https://webkit.org/b/227042)).

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLOptGroupElement.disabled是否支持
function isHTMLOptGroupElementDisabledSupported() {
    return 'disabled' in htmloptgroupelement && typeof htmloptgroupelement.disabled === 'function';
}

if (isHTMLOptGroupElementDisabledSupported()) {
    console.log('HTMLOptGroupElement.disabled 支持');
    // 使用HTMLOptGroupElement.disabled
} else {
    console.log('HTMLOptGroupElement.disabled 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLOptGroupElement.disabled polyfill
if (!htmloptgroupelement.disabled) {
    // 在这里添加polyfill实现
    console.log('加载HTMLOptGroupElement.disabled polyfill');
}
```

