# WEBGL_compressed_texture_etc1 API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_compressed_texture_etc1`
- **MDN文档**: [WEBGL_compressed_texture_etc1](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc1)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc1/)
- **标签**: `web-features:webgl-compressed-texture-etc1`

## 使用示例

### 基本用法

```javascript
// WEBGL_compressed_texture_etc1 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_compressed_texture_etc1 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 30 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 不支持

### Firefox Android

- **支持版本**: 30

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_compressed_texture_etc1是否支持
function isWEBGL_compressed_texture_etc1Supported() {
    return 'WEBGL_compressed_texture_etc1' in window || typeof WEBGL_compressed_texture_etc1 !== 'undefined';
}

if (isWEBGL_compressed_texture_etc1Supported()) {
    console.log('WEBGL_compressed_texture_etc1 支持');
    // 使用WEBGL_compressed_texture_etc1
} else {
    console.log('WEBGL_compressed_texture_etc1 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_compressed_texture_etc1 polyfill
if (!window.WEBGL_compressed_texture_etc1) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_compressed_texture_etc1 polyfill');
}
```

