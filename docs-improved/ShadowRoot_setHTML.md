# ShadowRoot.setHTML API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.setHTML`
- **MDN文档**: [ShadowRoot.setHTML](https://developer.mozilla.org/docs/Web/API/ShadowRoot/setHTML)
- **规范文档**: [查看规范](https://wicg.github.io/sanitizer-api/#dom-shadowroot-sethtml)
- **标签**: `web-features:sanitizer`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.setHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.setHTML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: preview

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.setHTML是否支持
function isShadowRootSetHTMLSupported() {
    return 'setHTML' in shadowroot && typeof shadowroot.setHTML === 'function';
}

if (isShadowRootSetHTMLSupported()) {
    console.log('ShadowRoot.setHTML 支持');
    // 使用ShadowRoot.setHTML
} else {
    console.log('ShadowRoot.setHTML 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.setHTML polyfill
if (!shadowroot.setHTML) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.setHTML polyfill');
}
```

