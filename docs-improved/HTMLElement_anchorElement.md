# HTMLElement.anchorElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.anchorElement`
- **MDN文档**: [HTMLElement.anchorElement](https://developer.mozilla.org/docs/Web/API/HTMLElement/anchorElement)

## 使用示例

### 基本用法

```javascript
// HTMLElement.anchorElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.anchorElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | preview |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: preview
- **需要标志**: 
  - #enable-experimental-web-platform-features: Enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.anchorElement是否支持
function isHTMLElementAnchorElementSupported() {
    return 'anchorElement' in htmlelement && typeof htmlelement.anchorElement === 'function';
}

if (isHTMLElementAnchorElementSupported()) {
    console.log('HTMLElement.anchorElement 支持');
    // 使用HTMLElement.anchorElement
} else {
    console.log('HTMLElement.anchorElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.anchorElement polyfill
if (!htmlelement.anchorElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.anchorElement polyfill');
}
```

