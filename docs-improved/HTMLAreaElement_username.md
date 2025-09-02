# HTMLAreaElement.username API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.username`
- **MDN文档**: [HTMLAreaElement.username](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/username)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-username-dev)
- **标签**: `web-features:image-maps`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.username 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.username API');
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
// 检查HTMLAreaElement.username是否支持
function isHTMLAreaElementUsernameSupported() {
    return 'username' in htmlareaelement && typeof htmlareaelement.username === 'function';
}

if (isHTMLAreaElementUsernameSupported()) {
    console.log('HTMLAreaElement.username 支持');
    // 使用HTMLAreaElement.username
} else {
    console.log('HTMLAreaElement.username 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.username polyfill
if (!htmlareaelement.username) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.username polyfill');
}
```

