# OES_texture_half_float_linear API 兼容性数据

## 基本信息

- **API名称**: `OES_texture_half_float_linear`
- **MDN文档**: [OES_texture_half_float_linear](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float_linear)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_texture_half_float_linear/)
- **标签**: `web-features:oes-texture-half-float-linear`

## 使用示例

### 基本用法

```javascript
// OES_texture_half_float_linear 使用示例
// 请查阅MDN文档了解具体用法
console.log('OES_texture_half_float_linear API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 30 |  |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.5 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 30

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 8

### Samsung Internet

- **支持版本**: 1.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查OES_texture_half_float_linear是否支持
function isOES_texture_half_float_linearSupported() {
    return 'OES_texture_half_float_linear' in window || typeof OES_texture_half_float_linear !== 'undefined';
}

if (isOES_texture_half_float_linearSupported()) {
    console.log('OES_texture_half_float_linear 支持');
    // 使用OES_texture_half_float_linear
} else {
    console.log('OES_texture_half_float_linear 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OES_texture_half_float_linear polyfill
if (!window.OES_texture_half_float_linear) {
    // 在这里添加polyfill实现
    console.log('加载OES_texture_half_float_linear polyfill');
}
```

