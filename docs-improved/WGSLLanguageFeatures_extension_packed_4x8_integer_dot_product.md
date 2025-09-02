# WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product API 兼容性数据

## 基本信息

- **API名称**: `WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/wgsl/#language_extension-packed_4x8_integer_dot_product)
- **标签**: `web-features:webgpu`
- **描述**: `packed_4x8_integer_dot_product` extension

## 使用示例

### 基本用法

```javascript
// WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product 使用示例
// 请查阅MDN文档了解具体用法
console.log('WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 123 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 123
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product是否支持
function isWGSLLanguageFeaturesExtension_packed_4x8_integer_dot_productSupported() {
    return 'extension_packed_4x8_integer_dot_product' in wgsllanguagefeatures && typeof wgsllanguagefeatures.extension_packed_4x8_integer_dot_product === 'function';
}

if (isWGSLLanguageFeaturesExtension_packed_4x8_integer_dot_productSupported()) {
    console.log('WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product 支持');
    // 使用WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product
} else {
    console.log('WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product polyfill
if (!wgsllanguagefeatures.extension_packed_4x8_integer_dot_product) {
    // 在这里添加polyfill实现
    console.log('加载WGSLLanguageFeatures.extension_packed_4x8_integer_dot_product polyfill');
}
```

