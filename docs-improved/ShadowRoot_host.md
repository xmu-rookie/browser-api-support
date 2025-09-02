# ShadowRoot.host API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.host`
- **MDN文档**: [ShadowRoot.host](https://developer.mozilla.org/docs/Web/API/ShadowRoot/host)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-shadowroot-host)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.host 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.host API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
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

- **支持版本**: 53

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.host是否支持
function isShadowRootHostSupported() {
    return 'host' in shadowroot && typeof shadowroot.host === 'function';
}

if (isShadowRootHostSupported()) {
    console.log('ShadowRoot.host 支持');
    // 使用ShadowRoot.host
} else {
    console.log('ShadowRoot.host 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.host polyfill
if (!shadowroot.host) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.host polyfill');
}
```

