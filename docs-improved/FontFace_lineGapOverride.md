# FontFace.lineGapOverride API 兼容性数据

## 基本信息

- **API名称**: `FontFace.lineGapOverride`
- **MDN文档**: [FontFace.lineGapOverride](https://developer.mozilla.org/docs/Web/API/FontFace/lineGapOverride)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#dom-fontfacedescriptors-linegapoverride)
- **标签**: `web-features:font-metric-overrides`

## 使用示例

### 基本用法

```javascript
// FontFace.lineGapOverride 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFace.lineGapOverride API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 89 |  |
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

- **支持版本**: 87

### Firefox

- **支持版本**: 89

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFace.lineGapOverride是否支持
function isFontFaceLineGapOverrideSupported() {
    return 'lineGapOverride' in fontface && typeof fontface.lineGapOverride === 'function';
}

if (isFontFaceLineGapOverrideSupported()) {
    console.log('FontFace.lineGapOverride 支持');
    // 使用FontFace.lineGapOverride
} else {
    console.log('FontFace.lineGapOverride 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFace.lineGapOverride polyfill
if (!fontface.lineGapOverride) {
    // 在这里添加polyfill实现
    console.log('加载FontFace.lineGapOverride polyfill');
}
```

