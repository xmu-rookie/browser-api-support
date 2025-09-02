# HTMLAreaElement.referrerPolicy API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.referrerPolicy`
- **MDN文档**: [HTMLAreaElement.referrerPolicy](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/referrerPolicy)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/image-maps.html#dom-area-referrerpolicy)
- **标签**: `web-features:referrer-policy`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.referrerPolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.referrerPolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52
- **支持版本**: 51
- **移除版本**: 52

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAreaElement.referrerPolicy是否支持
function isHTMLAreaElementReferrerPolicySupported() {
    return 'referrerPolicy' in htmlareaelement && typeof htmlareaelement.referrerPolicy === 'function';
}

if (isHTMLAreaElementReferrerPolicySupported()) {
    console.log('HTMLAreaElement.referrerPolicy 支持');
    // 使用HTMLAreaElement.referrerPolicy
} else {
    console.log('HTMLAreaElement.referrerPolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.referrerPolicy polyfill
if (!htmlareaelement.referrerPolicy) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.referrerPolicy polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **no-referrer-when-downgrade**: no-referrer-when-downgrade
- **origin-when-cross-origin**: origin-when-cross-origin
- **unsafe-url**: unsafe-url

