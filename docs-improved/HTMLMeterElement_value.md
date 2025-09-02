# HTMLMeterElement.value API 兼容性数据

## 基本信息

- **API名称**: `HTMLMeterElement.value`
- **MDN文档**: [HTMLMeterElement.value](https://developer.mozilla.org/docs/Web/API/HTMLMeterElement/value)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-meter-value)
- **标签**: `web-features:meter`

## 使用示例

### 基本用法

```javascript
// HTMLMeterElement.value 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMeterElement.value API');
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
// 检查HTMLMeterElement.value是否支持
function isHTMLMeterElementValueSupported() {
    return 'value' in htmlmeterelement && typeof htmlmeterelement.value === 'function';
}

if (isHTMLMeterElementValueSupported()) {
    console.log('HTMLMeterElement.value 支持');
    // 使用HTMLMeterElement.value
} else {
    console.log('HTMLMeterElement.value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMeterElement.value polyfill
if (!htmlmeterelement.value) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMeterElement.value polyfill');
}
```

