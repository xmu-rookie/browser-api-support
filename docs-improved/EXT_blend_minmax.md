# EXT_blend_minmax API 兼容性数据

## 基本信息

- **API名称**: `EXT_blend_minmax`
- **MDN文档**: [EXT_blend_minmax](https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_blend_minmax/)
- **标签**: `web-features:ext-blend-minmax`

## 使用示例

### 基本用法

```javascript
// EXT_blend_minmax 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_blend_minmax API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 47 |  |
| Firefox Android | 35 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 47
- **支持版本**: 35
- **移除版本**: 47
- **部分实现**: 是
- **注意事项**:
  - Not supported on Windows.

### Firefox Android

- **支持版本**: 35

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_blend_minmax是否支持
function isEXT_blend_minmaxSupported() {
    return 'EXT_blend_minmax' in window || typeof EXT_blend_minmax !== 'undefined';
}

if (isEXT_blend_minmaxSupported()) {
    console.log('EXT_blend_minmax 支持');
    // 使用EXT_blend_minmax
} else {
    console.log('EXT_blend_minmax 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_blend_minmax polyfill
if (!window.EXT_blend_minmax) {
    // 在这里添加polyfill实现
    console.log('加载EXT_blend_minmax polyfill');
}
```

