# TextFormat.TextFormat API 兼容性数据

## 基本信息

- **API名称**: `TextFormat.TextFormat`
- **MDN文档**: [TextFormat.TextFormat](https://developer.mozilla.org/docs/Web/API/TextFormat/TextFormat)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-textformat-constructor)
- **标签**: `web-features:edit-context`
- **描述**: `TextFormat()` constructor

## 使用示例

### 基本用法

```javascript
// TextFormat.TextFormat 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextFormat.TextFormat API');
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
// 检查TextFormat.TextFormat是否支持
function isTextFormatTextFormatSupported() {
    return 'TextFormat' in textformat && typeof textformat.TextFormat === 'function';
}

if (isTextFormatTextFormatSupported()) {
    console.log('TextFormat.TextFormat 支持');
    // 使用TextFormat.TextFormat
} else {
    console.log('TextFormat.TextFormat 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextFormat.TextFormat polyfill
if (!textformat.TextFormat) {
    // 在这里添加polyfill实现
    console.log('加载TextFormat.TextFormat polyfill');
}
```

