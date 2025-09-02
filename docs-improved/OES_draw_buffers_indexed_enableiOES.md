# OES_draw_buffers_indexed.enableiOES API 兼容性数据

## 基本信息

- **API名称**: `OES_draw_buffers_indexed.enableiOES`
- **MDN文档**: [OES_draw_buffers_indexed.enableiOES](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/enableiOES)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_draw_buffers_indexed/)
- **标签**: `web-features:webgl-oes-draw-buffers-indexed`

## 使用示例

### 基本用法

```javascript
// OES_draw_buffers_indexed.enableiOES 使用示例
// 请查阅MDN文档了解具体用法
console.log('OES_draw_buffers_indexed.enableiOES API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 100

### Firefox

- **支持版本**: 108

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查OES_draw_buffers_indexed.enableiOES是否支持
function isOES_draw_buffers_indexedEnableiOESSupported() {
    return 'enableiOES' in oes_draw_buffers_indexed && typeof oes_draw_buffers_indexed.enableiOES === 'function';
}

if (isOES_draw_buffers_indexedEnableiOESSupported()) {
    console.log('OES_draw_buffers_indexed.enableiOES 支持');
    // 使用OES_draw_buffers_indexed.enableiOES
} else {
    console.log('OES_draw_buffers_indexed.enableiOES 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OES_draw_buffers_indexed.enableiOES polyfill
if (!oes_draw_buffers_indexed.enableiOES) {
    // 在这里添加polyfill实现
    console.log('加载OES_draw_buffers_indexed.enableiOES polyfill');
}
```

