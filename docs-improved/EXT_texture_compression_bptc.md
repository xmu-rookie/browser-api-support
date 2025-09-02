# EXT_texture_compression_bptc API 兼容性数据

## 基本信息

- **API名称**: `EXT_texture_compression_bptc`
- **MDN文档**: [EXT_texture_compression_bptc](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/)
- **标签**: `web-features:ext-texture-compression-bptc`

## 使用示例

### 基本用法

```javascript
// EXT_texture_compression_bptc 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_texture_compression_bptc API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 92 |  |
| Edge | 同主版本 |  |
| Firefox | 68 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 不支持 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93
- **支持版本**: 92
- **移除版本**: 93
- **部分实现**: 是
- **注意事项**:
  - Only supported on macOS.

### Chrome Android

- **支持版本**: 92

### Firefox

- **支持版本**: 68

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 16

### Safari iOS

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_texture_compression_bptc是否支持
function isEXT_texture_compression_bptcSupported() {
    return 'EXT_texture_compression_bptc' in window || typeof EXT_texture_compression_bptc !== 'undefined';
}

if (isEXT_texture_compression_bptcSupported()) {
    console.log('EXT_texture_compression_bptc 支持');
    // 使用EXT_texture_compression_bptc
} else {
    console.log('EXT_texture_compression_bptc 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_texture_compression_bptc polyfill
if (!window.EXT_texture_compression_bptc) {
    // 在这里添加polyfill实现
    console.log('加载EXT_texture_compression_bptc polyfill');
}
```

