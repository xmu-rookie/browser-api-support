# FontFaceSetLoadEvent.fontfaces API 兼容性数据

## 基本信息

- **API名称**: `FontFaceSetLoadEvent.fontfaces`
- **MDN文档**: [FontFaceSetLoadEvent.fontfaces](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent/fontfaces)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#dom-fontfacesetloadevent-fontfaces)
- **标签**: `web-features:font-loading`

## 使用示例

### 基本用法

```javascript
// FontFaceSetLoadEvent.fontfaces 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFaceSetLoadEvent.fontfaces API');
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
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFaceSetLoadEvent.fontfaces是否支持
function isFontFaceSetLoadEventFontfacesSupported() {
    return 'fontfaces' in fontfacesetloadevent && typeof fontfacesetloadevent.fontfaces === 'function';
}

if (isFontFaceSetLoadEventFontfacesSupported()) {
    console.log('FontFaceSetLoadEvent.fontfaces 支持');
    // 使用FontFaceSetLoadEvent.fontfaces
} else {
    console.log('FontFaceSetLoadEvent.fontfaces 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFaceSetLoadEvent.fontfaces polyfill
if (!fontfacesetloadevent.fontfaces) {
    // 在这里添加polyfill实现
    console.log('加载FontFaceSetLoadEvent.fontfaces polyfill');
}
```

