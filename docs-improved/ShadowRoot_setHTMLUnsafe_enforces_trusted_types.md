# ShadowRoot.setHTMLUnsafe.enforces_trusted_types API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.setHTMLUnsafe.enforces_trusted_types`
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#dom-xss-injection-sinks)
- **标签**: `web-features:trusted-types`
- **描述**: Requires `TrustedHTML` instance when trusted types are enforced

## 使用示例

### 基本用法

```javascript
// ShadowRoot.setHTMLUnsafe.enforces_trusted_types 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.setHTMLUnsafe.enforces_trusted_types API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 135 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 124

### Firefox

- **支持版本**: 135
- **需要标志**: 
  - dom.security.trusted_types.enabled: true

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.setHTMLUnsafe.enforces_trusted_types是否支持
function isShadowRootSetHTMLUnsafeSupported() {
    return 'setHTMLUnsafe' in shadowroot && typeof shadowroot.setHTMLUnsafe === 'function';
}

if (isShadowRootSetHTMLUnsafeSupported()) {
    console.log('ShadowRoot.setHTMLUnsafe.enforces_trusted_types 支持');
    // 使用ShadowRoot.setHTMLUnsafe.enforces_trusted_types
} else {
    console.log('ShadowRoot.setHTMLUnsafe.enforces_trusted_types 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.setHTMLUnsafe.enforces_trusted_types polyfill
if (!shadowroot.setHTMLUnsafe) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.setHTMLUnsafe.enforces_trusted_types polyfill');
}
```

