# WEBGL_draw_buffers API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_draw_buffers`
- **MDN文档**: [WEBGL_draw_buffers](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_draw_buffers/)
- **标签**: `web-features:webgl-draw-buffers`

## 使用示例

### 基本用法

```javascript
// WEBGL_draw_buffers 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_draw_buffers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 不支持 |  |
| Edge | 17 |  |
| Firefox | 28 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 15 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 28

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 9

### Safari iOS

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_draw_buffers是否支持
function isWEBGL_draw_buffersSupported() {
    return 'WEBGL_draw_buffers' in window || typeof WEBGL_draw_buffers !== 'undefined';
}

if (isWEBGL_draw_buffersSupported()) {
    console.log('WEBGL_draw_buffers 支持');
    // 使用WEBGL_draw_buffers
} else {
    console.log('WEBGL_draw_buffers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_draw_buffers polyfill
if (!window.WEBGL_draw_buffers) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_draw_buffers polyfill');
}
```

