# CustomElementRegistry API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry`
- **MDN文档**: [CustomElementRegistry](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-api)
- **标签**: `web-features:autonomous-custom-elements`

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 54

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomElementRegistry是否支持
function isCustomElementRegistrySupported() {
    return 'CustomElementRegistry' in window || typeof CustomElementRegistry !== 'undefined';
}

if (isCustomElementRegistrySupported()) {
    console.log('CustomElementRegistry 支持');
    // 使用CustomElementRegistry
} else {
    console.log('CustomElementRegistry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry polyfill
if (!window.CustomElementRegistry) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry polyfill');
}
```

