# WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures API 兼容性数据

## 基本信息

- **API名称**: `WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/wgsl/#language_extension-readonly_and_readwrite_storage_textures)
- **标签**: `web-features:webgpu`
- **描述**: `readonly_and_readwrite_storage_textures` extension

## 使用示例

### 基本用法

```javascript
// WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures 使用示例
// 请查阅MDN文档了解具体用法
console.log('WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 124
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures是否支持
function isWGSLLanguageFeaturesExtension_readonly_and_readwrite_storage_texturesSupported() {
    return 'extension_readonly_and_readwrite_storage_textures' in wgsllanguagefeatures && typeof wgsllanguagefeatures.extension_readonly_and_readwrite_storage_textures === 'function';
}

if (isWGSLLanguageFeaturesExtension_readonly_and_readwrite_storage_texturesSupported()) {
    console.log('WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures 支持');
    // 使用WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures
} else {
    console.log('WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures polyfill
if (!wgsllanguagefeatures.extension_readonly_and_readwrite_storage_textures) {
    // 在这里添加polyfill实现
    console.log('加载WGSLLanguageFeatures.extension_readonly_and_readwrite_storage_textures polyfill');
}
```

