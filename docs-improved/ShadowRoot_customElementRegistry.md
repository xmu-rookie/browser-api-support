# ShadowRoot.customElementRegistry API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.customElementRegistry`
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-documentorshadowroot-customelementregistry)
- **标签**: `web-features:scoped-custom-element-registries`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.customElementRegistry 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.customElementRegistry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.customElementRegistry是否支持
function isShadowRootCustomElementRegistrySupported() {
    return 'customElementRegistry' in shadowroot && typeof shadowroot.customElementRegistry === 'function';
}

if (isShadowRootCustomElementRegistrySupported()) {
    console.log('ShadowRoot.customElementRegistry 支持');
    // 使用ShadowRoot.customElementRegistry
} else {
    console.log('ShadowRoot.customElementRegistry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.customElementRegistry polyfill
if (!shadowroot.customElementRegistry) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.customElementRegistry polyfill');
}
```

