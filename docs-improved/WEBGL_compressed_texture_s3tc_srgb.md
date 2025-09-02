# WEBGL_compressed_texture_s3tc_srgb API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_compressed_texture_s3tc_srgb`
- **MDN文档**: [WEBGL_compressed_texture_s3tc_srgb](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/)
- **标签**: `web-features:webgl-compressed-texture-s3tc-srgb`

## 使用示例

### 基本用法

```javascript
// WEBGL_compressed_texture_s3tc_srgb 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_compressed_texture_s3tc_srgb API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 80 |  |
| Firefox | 55 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 80

### Firefox

- **支持版本**: 55

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_compressed_texture_s3tc_srgb是否支持
function isWEBGL_compressed_texture_s3tc_srgbSupported() {
    return 'WEBGL_compressed_texture_s3tc_srgb' in window || typeof WEBGL_compressed_texture_s3tc_srgb !== 'undefined';
}

if (isWEBGL_compressed_texture_s3tc_srgbSupported()) {
    console.log('WEBGL_compressed_texture_s3tc_srgb 支持');
    // 使用WEBGL_compressed_texture_s3tc_srgb
} else {
    console.log('WEBGL_compressed_texture_s3tc_srgb 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_compressed_texture_s3tc_srgb polyfill
if (!window.WEBGL_compressed_texture_s3tc_srgb) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_compressed_texture_s3tc_srgb polyfill');
}
```

