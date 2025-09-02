# CustomElementRegistry.get API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry.get`
- **MDN文档**: [CustomElementRegistry.get](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/get)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-get-dev)
- **标签**: `web-features:autonomous-custom-elements`

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry.get 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry.get API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 | Supports 'Autonomous custom elements' but not 'Customized built-in elements'. See [bug 182671](https... |
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
- **部分实现**: 是
- **注意事项**:
  - Supports 'Autonomous custom elements' but not 'Customized built-in elements'. See [bug 182671](https://webkit.org/b/182671).

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomElementRegistry.get是否支持
function isCustomElementRegistryGetSupported() {
    return 'get' in customelementregistry && typeof customelementregistry.get === 'function';
}

if (isCustomElementRegistryGetSupported()) {
    console.log('CustomElementRegistry.get 支持');
    // 使用CustomElementRegistry.get
} else {
    console.log('CustomElementRegistry.get 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry.get polyfill
if (!customelementregistry.get) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry.get polyfill');
}
```

