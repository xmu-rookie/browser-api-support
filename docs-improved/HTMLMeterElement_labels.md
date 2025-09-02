# HTMLMeterElement.labels API 兼容性数据

## 基本信息

- **API名称**: `HTMLMeterElement.labels`
- **MDN文档**: [HTMLMeterElement.labels](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/labels)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/forms.html#dom-lfe-labels-dev)
- **标签**: `web-features:meter`

## 使用示例

### 基本用法

```javascript
// HTMLMeterElement.labels 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMeterElement.labels API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 56 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 56

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMeterElement.labels是否支持
function isHTMLMeterElementLabelsSupported() {
    return 'labels' in htmlmeterelement && typeof htmlmeterelement.labels === 'function';
}

if (isHTMLMeterElementLabelsSupported()) {
    console.log('HTMLMeterElement.labels 支持');
    // 使用HTMLMeterElement.labels
} else {
    console.log('HTMLMeterElement.labels 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMeterElement.labels polyfill
if (!htmlmeterelement.labels) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMeterElement.labels polyfill');
}
```

