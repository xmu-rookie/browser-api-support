# WEBGL_compressed_texture_s3tc API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_compressed_texture_s3tc`
- **MDN文档**: [WEBGL_compressed_texture_s3tc](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc/)
- **标签**: `web-features:webgl-compressed-texture-s3tc`

## 使用示例

### 基本用法

```javascript
// WEBGL_compressed_texture_s3tc 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_compressed_texture_s3tc API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 不支持 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 不支持 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26
- **支持版本**: 26
- **移除版本**: 56
- **前缀**: WEBKIT_

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22
- **支持版本**: 15
- **移除版本**: 58
- **前缀**: MOZ_

### Firefox Android

- **支持版本**: 不支持

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_compressed_texture_s3tc是否支持
function isWEBGL_compressed_texture_s3tcSupported() {
    return 'WEBGL_compressed_texture_s3tc' in window || typeof WEBGL_compressed_texture_s3tc !== 'undefined';
}

if (isWEBGL_compressed_texture_s3tcSupported()) {
    console.log('WEBGL_compressed_texture_s3tc 支持');
    // 使用WEBGL_compressed_texture_s3tc
} else {
    console.log('WEBGL_compressed_texture_s3tc 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_compressed_texture_s3tc polyfill
if (!window.WEBGL_compressed_texture_s3tc) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_compressed_texture_s3tc polyfill');
}
```

