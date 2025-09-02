# FontFace API 兼容性数据

## 基本信息

- **API名称**: `FontFace`
- **MDN文档**: [FontFace](https://developer.mozilla.org/docs/Web/API/FontFace)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#fontface-interface)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFace 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

### Samsung Internet

- **支持版本**: 4.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFace是否支持
function isFontFaceSupported() {
    return 'FontFace' in window || typeof FontFace !== 'undefined';
}

if (isFontFaceSupported()) {
    console.log('FontFace 支持');
    // 使用FontFace
} else {
    console.log('FontFace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFace polyfill
if (!window.FontFace) {
    // 在这里添加polyfill实现
    console.log('加载FontFace polyfill');
}
```

