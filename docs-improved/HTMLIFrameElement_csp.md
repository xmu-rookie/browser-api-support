# HTMLIFrameElement.csp API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.csp`
- **MDN文档**: [HTMLIFrameElement.csp](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/csp)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-cspee/#dom-htmliframeelement-csp)
- **标签**: `web-features:csp`

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.csp 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.csp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
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

- **支持版本**: 61

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLIFrameElement.csp是否支持
function isHTMLIFrameElementCspSupported() {
    return 'csp' in htmliframeelement && typeof htmliframeelement.csp === 'function';
}

if (isHTMLIFrameElementCspSupported()) {
    console.log('HTMLIFrameElement.csp 支持');
    // 使用HTMLIFrameElement.csp
} else {
    console.log('HTMLIFrameElement.csp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLIFrameElement.csp polyfill
if (!htmliframeelement.csp) {
    // 在这里添加polyfill实现
    console.log('加载HTMLIFrameElement.csp polyfill');
}
```

