# HTMLTimeElement.dateTime API 兼容性数据

## 基本信息

- **API名称**: `HTMLTimeElement.dateTime`
- **MDN文档**: [HTMLTimeElement.dateTime](https://developer.mozilla.org/docs/Web/API/HTMLTimeElement/dateTime)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/text-level-semantics.html#dom-time-datetime)
- **标签**: `web-features:time`

## 使用示例

### 基本用法

```javascript
// HTMLTimeElement.dateTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTimeElement.dateTime API');
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
| Opera | 49 |  |
| Opera Android | 46 |  |
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

### Opera

- **支持版本**: 49
- **支持版本**: 11.5
- **移除版本**: 15

### Opera Android

- **支持版本**: 46
- **支持版本**: 11.5
- **移除版本**: 14

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTimeElement.dateTime是否支持
function isHTMLTimeElementDateTimeSupported() {
    return 'dateTime' in htmltimeelement && typeof htmltimeelement.dateTime === 'function';
}

if (isHTMLTimeElementDateTimeSupported()) {
    console.log('HTMLTimeElement.dateTime 支持');
    // 使用HTMLTimeElement.dateTime
} else {
    console.log('HTMLTimeElement.dateTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTimeElement.dateTime polyfill
if (!htmltimeelement.dateTime) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTimeElement.dateTime polyfill');
}
```

