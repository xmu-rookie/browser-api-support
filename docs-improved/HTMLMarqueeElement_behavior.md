# HTMLMarqueeElement.behavior API 兼容性数据

## 基本信息

- **API名称**: `HTMLMarqueeElement.behavior`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-marquee-behavior)

## 使用示例

### 基本用法

```javascript
// HTMLMarqueeElement.behavior 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMarqueeElement.behavior API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 2 |  |
| Oculus | 同主版本 |  |
| Opera | 7.2 |  |
| Opera Android | 10.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 10

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 65

### Internet Explorer

- **支持版本**: 2

### Opera

- **支持版本**: 7.2

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMarqueeElement.behavior是否支持
function isHTMLMarqueeElementBehaviorSupported() {
    return 'behavior' in htmlmarqueeelement && typeof htmlmarqueeelement.behavior === 'function';
}

if (isHTMLMarqueeElementBehaviorSupported()) {
    console.log('HTMLMarqueeElement.behavior 支持');
    // 使用HTMLMarqueeElement.behavior
} else {
    console.log('HTMLMarqueeElement.behavior 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMarqueeElement.behavior polyfill
if (!htmlmarqueeelement.behavior) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMarqueeElement.behavior polyfill');
}
```

