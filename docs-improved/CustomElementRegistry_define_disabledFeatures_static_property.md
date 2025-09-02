# CustomElementRegistry.define.disabledFeatures_static_property API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry.define.disabledFeatures_static_property`
- **标签**: `web-features:autonomous-custom-elements`
- **描述**: Supports `disabledFeatures` static property

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry.define.disabledFeatures_static_property 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry.define.disabledFeatures_static_property API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 92 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 92

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomElementRegistry.define.disabledFeatures_static_property是否支持
function isCustomElementRegistryDefineSupported() {
    return 'define' in customelementregistry && typeof customelementregistry.define === 'function';
}

if (isCustomElementRegistryDefineSupported()) {
    console.log('CustomElementRegistry.define.disabledFeatures_static_property 支持');
    // 使用CustomElementRegistry.define.disabledFeatures_static_property
} else {
    console.log('CustomElementRegistry.define.disabledFeatures_static_property 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry.define.disabledFeatures_static_property polyfill
if (!customelementregistry.define) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry.define.disabledFeatures_static_property polyfill');
}
```

