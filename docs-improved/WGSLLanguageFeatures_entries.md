# WGSLLanguageFeatures.entries API 兼容性数据

## 基本信息

- **API名称**: `WGSLLanguageFeatures.entries`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#gpuwgsllanguagefeatures)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// WGSLLanguageFeatures.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('WGSLLanguageFeatures.entries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 115 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| Edge | 同主版本 |  |
| Firefox | 141 | Currently supported on Windows only, in all contexts except for service workers. |
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

- **支持版本**: 115
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 121

### Firefox

- **支持版本**: 141
- **部分实现**: 是
- **注意事项**:
  - Currently supported on Windows only, in all contexts except for service workers.

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查WGSLLanguageFeatures.entries是否支持
function isWGSLLanguageFeaturesEntriesSupported() {
    return 'entries' in wgsllanguagefeatures && typeof wgsllanguagefeatures.entries === 'function';
}

if (isWGSLLanguageFeaturesEntriesSupported()) {
    console.log('WGSLLanguageFeatures.entries 支持');
    // 使用WGSLLanguageFeatures.entries
} else {
    console.log('WGSLLanguageFeatures.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WGSLLanguageFeatures.entries polyfill
if (!wgsllanguagefeatures.entries) {
    // 在这里添加polyfill实现
    console.log('加载WGSLLanguageFeatures.entries polyfill');
}
```

