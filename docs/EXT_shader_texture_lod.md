# EXT_shader_texture_lod API 兼容性数据

## 基本信息

- **API名称**: `EXT_shader_texture_lod`
- **MDN文档**: [EXT_shader_texture_lod](https://developer.mozilla.org/docs/Web/API/EXT_shader_texture_lod)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_shader_texture_lod/)
- **标签**: `web-features:ext-shader-texture-lod`

## 使用示例

### 基本用法

```javascript
// EXT_shader_texture_lod 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_shader_texture_lod API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 47 |  |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge


### Firefox

- **支持版本**: 47

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_shader_texture_lod是否支持
function isEXT_shader_texture_lodSupported() {
    return 'EXT_shader_texture_lod' in window || typeof EXT_shader_texture_lod !== 'undefined';
}

if (isEXT_shader_texture_lodSupported()) {
    console.log('EXT_shader_texture_lod 支持');
    // 使用EXT_shader_texture_lod
} else {
    console.log('EXT_shader_texture_lod 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_shader_texture_lod polyfill
if (!window.EXT_shader_texture_lod) {
    // 在这里添加polyfill实现
    console.log('加载EXT_shader_texture_lod polyfill');
}
```

