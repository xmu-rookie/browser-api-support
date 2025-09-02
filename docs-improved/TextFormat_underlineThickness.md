# TextFormat.underlineThickness API 兼容性数据

## 基本信息

- **API名称**: `TextFormat.underlineThickness`
- **MDN文档**: [TextFormat.underlineThickness](https://developer.mozilla.org/docs/Web/API/TextFormat/underlineThickness)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-textformat-underlinethickness)
- **标签**: `web-features:edit-context`

## 使用示例

### 基本用法

```javascript
// TextFormat.underlineThickness 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextFormat.underlineThickness API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 121

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextFormat.underlineThickness是否支持
function isTextFormatUnderlineThicknessSupported() {
    return 'underlineThickness' in textformat && typeof textformat.underlineThickness === 'function';
}

if (isTextFormatUnderlineThicknessSupported()) {
    console.log('TextFormat.underlineThickness 支持');
    // 使用TextFormat.underlineThickness
} else {
    console.log('TextFormat.underlineThickness 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextFormat.underlineThickness polyfill
if (!textformat.underlineThickness) {
    // 在这里添加polyfill实现
    console.log('加载TextFormat.underlineThickness polyfill');
}
```

