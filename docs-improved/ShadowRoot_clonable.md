# ShadowRoot.clonable API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.clonable`
- **MDN文档**: [ShadowRoot.clonable](https://developer.mozilla.org/docs/Web/API/ShadowRoot/clonable)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-shadowroot-clonable)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.clonable 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.clonable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 123 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 124

### Firefox

- **支持版本**: 123

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.clonable是否支持
function isShadowRootClonableSupported() {
    return 'clonable' in shadowroot && typeof shadowroot.clonable === 'function';
}

if (isShadowRootClonableSupported()) {
    console.log('ShadowRoot.clonable 支持');
    // 使用ShadowRoot.clonable
} else {
    console.log('ShadowRoot.clonable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.clonable polyfill
if (!shadowroot.clonable) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.clonable polyfill');
}
```

