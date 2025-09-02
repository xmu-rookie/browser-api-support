# EXT_sRGB API 兼容性数据

## 基本信息

- **API名称**: `EXT_sRGB`
- **MDN文档**: [EXT_sRGB](https://developer.mozilla.org/docs/Web/API/EXT_sRGB)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_sRGB/)
- **标签**: `web-features:ext-srgb`

## 使用示例

### 基本用法

```javascript
// EXT_sRGB 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_sRGB API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 80 |  |
| Firefox | 未知 |  |
| Firefox Android | 28 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 80

### Firefox


### Firefox Android

- **支持版本**: 28

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_sRGB是否支持
function isEXT_sRGBSupported() {
    return 'EXT_sRGB' in window || typeof EXT_sRGB !== 'undefined';
}

if (isEXT_sRGBSupported()) {
    console.log('EXT_sRGB 支持');
    // 使用EXT_sRGB
} else {
    console.log('EXT_sRGB 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_sRGB polyfill
if (!window.EXT_sRGB) {
    // 在这里添加polyfill实现
    console.log('加载EXT_sRGB polyfill');
}
```

