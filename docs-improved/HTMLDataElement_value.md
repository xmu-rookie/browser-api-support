# HTMLDataElement.value API 兼容性数据

## 基本信息

- **API名称**: `HTMLDataElement.value`
- **MDN文档**: [HTMLDataElement.value](https://developer.mozilla.org/docs/Web/API/HTMLDataElement/value)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/text-level-semantics.html#dom-data-value)
- **标签**: `web-features:data`

## 使用示例

### 基本用法

```javascript
// HTMLDataElement.value 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLDataElement.value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 62

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLDataElement.value是否支持
function isHTMLDataElementValueSupported() {
    return 'value' in htmldataelement && typeof htmldataelement.value === 'function';
}

if (isHTMLDataElementValueSupported()) {
    console.log('HTMLDataElement.value 支持');
    // 使用HTMLDataElement.value
} else {
    console.log('HTMLDataElement.value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLDataElement.value polyfill
if (!htmldataelement.value) {
    // 在这里添加polyfill实现
    console.log('加载HTMLDataElement.value polyfill');
}
```

