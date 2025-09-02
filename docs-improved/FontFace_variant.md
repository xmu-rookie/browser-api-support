# FontFace.variant API 兼容性数据

## 基本信息

- **API名称**: `FontFace.variant`
- **MDN文档**: [FontFace.variant](https://developer.mozilla.org/docs/Web/API/FontFace/variant)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFace.variant 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFace.variant API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 10
- **移除版本**: 13.1

### Samsung Internet

- **支持版本**: 4.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFace.variant是否支持
function isFontFaceVariantSupported() {
    return 'variant' in fontface && typeof fontface.variant === 'function';
}

if (isFontFaceVariantSupported()) {
    console.log('FontFace.variant 支持');
    // 使用FontFace.variant
} else {
    console.log('FontFace.variant 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFace.variant polyfill
if (!fontface.variant) {
    // 在这里添加polyfill实现
    console.log('加载FontFace.variant polyfill');
}
```

