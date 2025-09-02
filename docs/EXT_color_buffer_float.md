# EXT_color_buffer_float API 兼容性数据

## 基本信息

- **API名称**: `EXT_color_buffer_float`
- **MDN文档**: [EXT_color_buffer_float](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_float)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_color_buffer_float/)
- **标签**: `web-features:ext-color-buffer-float`

## 使用示例

### 基本用法

```javascript
// EXT_color_buffer_float 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_color_buffer_float API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Firefox

- **支持版本**: 51

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_color_buffer_float是否支持
function isEXT_color_buffer_floatSupported() {
    return 'EXT_color_buffer_float' in window || typeof EXT_color_buffer_float !== 'undefined';
}

if (isEXT_color_buffer_floatSupported()) {
    console.log('EXT_color_buffer_float 支持');
    // 使用EXT_color_buffer_float
} else {
    console.log('EXT_color_buffer_float 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_color_buffer_float polyfill
if (!window.EXT_color_buffer_float) {
    // 在这里添加polyfill实现
    console.log('加载EXT_color_buffer_float polyfill');
}
```

