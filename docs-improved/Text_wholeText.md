# Text.wholeText API 兼容性数据

## 基本信息

- **API名称**: `Text.wholeText`
- **MDN文档**: [Text.wholeText](https://developer.mozilla.org/docs/Web/API/Text/wholeText)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-text-wholetext①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Text.wholeText 使用示例
// 请查阅MDN文档了解具体用法
console.log('Text.wholeText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Text.wholeText是否支持
function isTextWholeTextSupported() {
    return 'wholeText' in text && typeof text.wholeText === 'function';
}

if (isTextWholeTextSupported()) {
    console.log('Text.wholeText 支持');
    // 使用Text.wholeText
} else {
    console.log('Text.wholeText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Text.wholeText polyfill
if (!text.wholeText) {
    // 在这里添加polyfill实现
    console.log('加载Text.wholeText polyfill');
}
```

