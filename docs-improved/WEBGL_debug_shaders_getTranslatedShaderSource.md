# WEBGL_debug_shaders.getTranslatedShaderSource API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_debug_shaders.getTranslatedShaderSource`
- **MDN文档**: [WEBGL_debug_shaders.getTranslatedShaderSource](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_debug_shaders/)
- **标签**: `web-features:webgl-debug-shaders`

## 使用示例

### 基本用法

```javascript
// WEBGL_debug_shaders.getTranslatedShaderSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_debug_shaders.getTranslatedShaderSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 56 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Firefox

- **支持版本**: 56

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_debug_shaders.getTranslatedShaderSource是否支持
function isWEBGL_debug_shadersGetTranslatedShaderSourceSupported() {
    return 'getTranslatedShaderSource' in webgl_debug_shaders && typeof webgl_debug_shaders.getTranslatedShaderSource === 'function';
}

if (isWEBGL_debug_shadersGetTranslatedShaderSourceSupported()) {
    console.log('WEBGL_debug_shaders.getTranslatedShaderSource 支持');
    // 使用WEBGL_debug_shaders.getTranslatedShaderSource
} else {
    console.log('WEBGL_debug_shaders.getTranslatedShaderSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_debug_shaders.getTranslatedShaderSource polyfill
if (!webgl_debug_shaders.getTranslatedShaderSource) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_debug_shaders.getTranslatedShaderSource polyfill');
}
```

