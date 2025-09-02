# CSSFontFaceDescriptors.fontFamily API 兼容性数据

## 基本信息

- **API名称**: `CSSFontFaceDescriptors.fontFamily`
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#dom-cssfontfacedescriptors-fontfamily)

## 使用示例

### 基本用法

```javascript
// CSSFontFaceDescriptors.fontFamily 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontFaceDescriptors.fontFamily API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSFontFaceDescriptors.fontFamily是否支持
function isCSSFontFaceDescriptorsFontFamilySupported() {
    return 'fontFamily' in cssfontfacedescriptors && typeof cssfontfacedescriptors.fontFamily === 'function';
}

if (isCSSFontFaceDescriptorsFontFamilySupported()) {
    console.log('CSSFontFaceDescriptors.fontFamily 支持');
    // 使用CSSFontFaceDescriptors.fontFamily
} else {
    console.log('CSSFontFaceDescriptors.fontFamily 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontFaceDescriptors.fontFamily polyfill
if (!cssfontfacedescriptors.fontFamily) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontFaceDescriptors.fontFamily polyfill');
}
```

