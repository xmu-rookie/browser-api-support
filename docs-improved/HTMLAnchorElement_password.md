# HTMLAnchorElement.password API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.password`
- **MDN文档**: [HTMLAnchorElement.password](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/password)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-password-dev)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.password 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.password API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 26 |  |
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

- **支持版本**: 32

### Firefox

- **支持版本**: 26

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAnchorElement.password是否支持
function isHTMLAnchorElementPasswordSupported() {
    return 'password' in htmlanchorelement && typeof htmlanchorelement.password === 'function';
}

if (isHTMLAnchorElementPasswordSupported()) {
    console.log('HTMLAnchorElement.password 支持');
    // 使用HTMLAnchorElement.password
} else {
    console.log('HTMLAnchorElement.password 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.password polyfill
if (!htmlanchorelement.password) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.password polyfill');
}
```

