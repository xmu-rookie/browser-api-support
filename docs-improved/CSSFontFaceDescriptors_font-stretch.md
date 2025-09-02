# CSSFontFaceDescriptors.font-stretch API 兼容性数据

## 基本信息

- **API名称**: `CSSFontFaceDescriptors.font-stretch`
- **规范文档**: [查看规范](https://drafts.csswg.org/css-fonts/#dom-cssfontfacedescriptors-font-stretch)

## 使用示例

### 基本用法

```javascript
// CSSFontFaceDescriptors.font-stretch 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSFontFaceDescriptors.font-stretch API');
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
// 检查CSSFontFaceDescriptors.font-stretch是否支持
function isCSSFontFaceDescriptorsFont-stretchSupported() {
    return 'font-stretch' in cssfontfacedescriptors && typeof cssfontfacedescriptors.font-stretch === 'function';
}

if (isCSSFontFaceDescriptorsFont-stretchSupported()) {
    console.log('CSSFontFaceDescriptors.font-stretch 支持');
    // 使用CSSFontFaceDescriptors.font-stretch
} else {
    console.log('CSSFontFaceDescriptors.font-stretch 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSFontFaceDescriptors.font-stretch polyfill
if (!cssfontfacedescriptors.font-stretch) {
    // 在这里添加polyfill实现
    console.log('加载CSSFontFaceDescriptors.font-stretch polyfill');
}
```

