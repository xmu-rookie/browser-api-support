# CustomElementRegistry.builtin_element_support API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry.builtin_element_support`
- **MDN文档**: [CustomElementRegistry.builtin_element_support](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry/define#defining_a_customized_built-in_element)
- **标签**: `web-features:customized-built-in-elements`
- **描述**: Customized built-in element support

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry.builtin_element_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry.builtin_element_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
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

- **支持版本**: 67

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomElementRegistry.builtin_element_support是否支持
function isCustomElementRegistryBuiltin_element_supportSupported() {
    return 'builtin_element_support' in customelementregistry && typeof customelementregistry.builtin_element_support === 'function';
}

if (isCustomElementRegistryBuiltin_element_supportSupported()) {
    console.log('CustomElementRegistry.builtin_element_support 支持');
    // 使用CustomElementRegistry.builtin_element_support
} else {
    console.log('CustomElementRegistry.builtin_element_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry.builtin_element_support polyfill
if (!customelementregistry.builtin_element_support) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry.builtin_element_support polyfill');
}
```

