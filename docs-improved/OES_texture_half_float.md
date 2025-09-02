# OES_texture_half_float API 兼容性数据

## 基本信息

- **API名称**: `OES_texture_half_float`
- **MDN文档**: [OES_texture_half_float](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_texture_half_float/)
- **标签**: `web-features:oes-texture-half-float`

## 使用示例

### 基本用法

```javascript
// OES_texture_half_float 使用示例
// 请查阅MDN文档了解具体用法
console.log('OES_texture_half_float API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 29 |  |
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

- **支持版本**: 27

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 29

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查OES_texture_half_float是否支持
function isOES_texture_half_floatSupported() {
    return 'OES_texture_half_float' in window || typeof OES_texture_half_float !== 'undefined';
}

if (isOES_texture_half_floatSupported()) {
    console.log('OES_texture_half_float 支持');
    // 使用OES_texture_half_float
} else {
    console.log('OES_texture_half_float 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OES_texture_half_float polyfill
if (!window.OES_texture_half_float) {
    // 在这里添加polyfill实现
    console.log('加载OES_texture_half_float polyfill');
}
```

