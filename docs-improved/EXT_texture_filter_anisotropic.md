# EXT_texture_filter_anisotropic API 兼容性数据

## 基本信息

- **API名称**: `EXT_texture_filter_anisotropic`
- **MDN文档**: [EXT_texture_filter_anisotropic](https://developer.mozilla.org/docs/Web/API/EXT_texture_filter_anisotropic)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_texture_filter_anisotropic/)
- **标签**: `web-features:ext-texture-filter-anisotropic`

## 使用示例

### 基本用法

```javascript
// EXT_texture_filter_anisotropic 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_texture_filter_anisotropic API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 34 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 47 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 34
- **支持版本**: 35
- **前缀**: WEBKIT_

### Edge

- **支持版本**: 12
- **支持版本**: 79
- **前缀**: WEBKIT_

### Firefox

- **支持版本**: 47

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 9.1

### Samsung Internet

- **支持版本**: 3.0
- **支持版本**: 4.0
- **前缀**: WEBKIT_

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_texture_filter_anisotropic是否支持
function isEXT_texture_filter_anisotropicSupported() {
    return 'EXT_texture_filter_anisotropic' in window || typeof EXT_texture_filter_anisotropic !== 'undefined';
}

if (isEXT_texture_filter_anisotropicSupported()) {
    console.log('EXT_texture_filter_anisotropic 支持');
    // 使用EXT_texture_filter_anisotropic
} else {
    console.log('EXT_texture_filter_anisotropic 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_texture_filter_anisotropic polyfill
if (!window.EXT_texture_filter_anisotropic) {
    // 在这里添加polyfill实现
    console.log('加载EXT_texture_filter_anisotropic polyfill');
}
```

