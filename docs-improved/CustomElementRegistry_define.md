# CustomElementRegistry.define API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry.define`
- **MDN文档**: [CustomElementRegistry.define](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-define-dev)
- **标签**: `web-features:autonomous-custom-elements`

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry.define 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry.define API');
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
// 检查CustomElementRegistry.define是否支持
function isCustomElementRegistryDefineSupported() {
    return 'define' in customelementregistry && typeof customelementregistry.define === 'function';
}

if (isCustomElementRegistryDefineSupported()) {
    console.log('CustomElementRegistry.define 支持');
    // 使用CustomElementRegistry.define
} else {
    console.log('CustomElementRegistry.define 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry.define polyfill
if (!customelementregistry.define) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry.define polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **connectedMoveCallback_lifecycle_callback**: `connectedMoveCallback()` lifecycle callback
- **disabledFeatures_static_property**: Supports `disabledFeatures` static property

