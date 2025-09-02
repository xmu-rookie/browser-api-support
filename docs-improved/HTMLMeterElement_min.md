# HTMLMeterElement.min API 兼容性数据

## 基本信息

- **API名称**: `HTMLMeterElement.min`
- **MDN文档**: [HTMLMeterElement.min](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/min)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-meter-min)
- **标签**: `web-features:meter`

## 使用示例

### 基本用法

```javascript
// HTMLMeterElement.min 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMeterElement.min API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 16 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 16

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMeterElement.min是否支持
function isHTMLMeterElementMinSupported() {
    return 'min' in htmlmeterelement && typeof htmlmeterelement.min === 'function';
}

if (isHTMLMeterElementMinSupported()) {
    console.log('HTMLMeterElement.min 支持');
    // 使用HTMLMeterElement.min
} else {
    console.log('HTMLMeterElement.min 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMeterElement.min polyfill
if (!htmlmeterelement.min) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMeterElement.min polyfill');
}
```

