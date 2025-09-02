# WEBGL_depth_texture API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_depth_texture`
- **MDN文档**: [WEBGL_depth_texture](https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_depth_texture/)
- **标签**: `web-features:webgl-depth-texture`

## 使用示例

### 基本用法

```javascript
// WEBGL_depth_texture 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_depth_texture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26
- **支持版本**: 22
- **前缀**: WEBKIT_

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22
- **支持版本**: 17
- **移除版本**: 58
- **前缀**: MOZ_

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_depth_texture是否支持
function isWEBGL_depth_textureSupported() {
    return 'WEBGL_depth_texture' in window || typeof WEBGL_depth_texture !== 'undefined';
}

if (isWEBGL_depth_textureSupported()) {
    console.log('WEBGL_depth_texture 支持');
    // 使用WEBGL_depth_texture
} else {
    console.log('WEBGL_depth_texture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_depth_texture polyfill
if (!window.WEBGL_depth_texture) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_depth_texture polyfill');
}
```

