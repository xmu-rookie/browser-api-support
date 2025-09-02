# EXT_texture_norm16 API 兼容性数据

## 基本信息

- **API名称**: `EXT_texture_norm16`
- **MDN文档**: [EXT_texture_norm16](https://developer.mozilla.org/docs/Web/API/EXT_texture_norm16)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_texture_norm16/)
- **标签**: `web-features:ext-texture-norm16`

## 使用示例

### 基本用法

```javascript
// EXT_texture_norm16 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_texture_norm16 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_texture_norm16是否支持
function isEXT_texture_norm16Supported() {
    return 'EXT_texture_norm16' in window || typeof EXT_texture_norm16 !== 'undefined';
}

if (isEXT_texture_norm16Supported()) {
    console.log('EXT_texture_norm16 支持');
    // 使用EXT_texture_norm16
} else {
    console.log('EXT_texture_norm16 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_texture_norm16 polyfill
if (!window.EXT_texture_norm16) {
    // 在这里添加polyfill实现
    console.log('加载EXT_texture_norm16 polyfill');
}
```

