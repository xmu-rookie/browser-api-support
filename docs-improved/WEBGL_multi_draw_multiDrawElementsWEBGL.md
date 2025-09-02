# WEBGL_multi_draw.multiDrawElementsWEBGL API 兼容性数据

## 基本信息

- **API名称**: `WEBGL_multi_draw.multiDrawElementsWEBGL`
- **MDN文档**: [WEBGL_multi_draw.multiDrawElementsWEBGL](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/WEBGL_multi_draw/)
- **标签**: `web-features:webgl-multi-draw`

## 使用示例

### 基本用法

```javascript
// WEBGL_multi_draw.multiDrawElementsWEBGL 使用示例
// 请查阅MDN文档了解具体用法
console.log('WEBGL_multi_draw.multiDrawElementsWEBGL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 不支持 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查WEBGL_multi_draw.multiDrawElementsWEBGL是否支持
function isWEBGL_multi_drawMultiDrawElementsWEBGLSupported() {
    return 'multiDrawElementsWEBGL' in webgl_multi_draw && typeof webgl_multi_draw.multiDrawElementsWEBGL === 'function';
}

if (isWEBGL_multi_drawMultiDrawElementsWEBGLSupported()) {
    console.log('WEBGL_multi_draw.multiDrawElementsWEBGL 支持');
    // 使用WEBGL_multi_draw.multiDrawElementsWEBGL
} else {
    console.log('WEBGL_multi_draw.multiDrawElementsWEBGL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WEBGL_multi_draw.multiDrawElementsWEBGL polyfill
if (!webgl_multi_draw.multiDrawElementsWEBGL) {
    // 在这里添加polyfill实现
    console.log('加载WEBGL_multi_draw.multiDrawElementsWEBGL polyfill');
}
```

