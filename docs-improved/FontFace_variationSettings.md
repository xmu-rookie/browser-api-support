# FontFace.variationSettings API 兼容性数据

## 基本信息

- **API名称**: `FontFace.variationSettings`
- **MDN文档**: [FontFace.variationSettings](https://developer.mozilla.org/docs/Web/API/FontFace/variationSettings)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#dom-fontfacedescriptors-variationsettings)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFace.variationSettings 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFace.variationSettings API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 140 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 62 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 140

### Firefox

- **支持版本**: 62

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFace.variationSettings是否支持
function isFontFaceVariationSettingsSupported() {
    return 'variationSettings' in fontface && typeof fontface.variationSettings === 'function';
}

if (isFontFaceVariationSettingsSupported()) {
    console.log('FontFace.variationSettings 支持');
    // 使用FontFace.variationSettings
} else {
    console.log('FontFace.variationSettings 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFace.variationSettings polyfill
if (!fontface.variationSettings) {
    // 在这里添加polyfill实现
    console.log('加载FontFace.variationSettings polyfill');
}
```

