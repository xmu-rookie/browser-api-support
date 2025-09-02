# OES_fbo_render_mipmap API 兼容性数据

## 基本信息

- **API名称**: `OES_fbo_render_mipmap`
- **MDN文档**: [OES_fbo_render_mipmap](https://developer.mozilla.org/docs/Web/API/OES_fbo_render_mipmap)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_fbo_render_mipmap/)
- **标签**: `web-features:oes-fbo-render-mipmap`

## 使用示例

### 基本用法

```javascript
// OES_fbo_render_mipmap 使用示例
// 请查阅MDN文档了解具体用法
console.log('OES_fbo_render_mipmap API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 71 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 71

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查OES_fbo_render_mipmap是否支持
function isOES_fbo_render_mipmapSupported() {
    return 'OES_fbo_render_mipmap' in window || typeof OES_fbo_render_mipmap !== 'undefined';
}

if (isOES_fbo_render_mipmapSupported()) {
    console.log('OES_fbo_render_mipmap 支持');
    // 使用OES_fbo_render_mipmap
} else {
    console.log('OES_fbo_render_mipmap 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OES_fbo_render_mipmap polyfill
if (!window.OES_fbo_render_mipmap) {
    // 在这里添加polyfill实现
    console.log('加载OES_fbo_render_mipmap polyfill');
}
```

