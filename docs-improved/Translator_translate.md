# Translator.translate API 兼容性数据

## 基本信息

- **API名称**: `Translator.translate`
- **MDN文档**: [Translator.translate](https://developer.mozilla.org/docs/Web/API/Translator/translate)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/translation-api/#dom-translator-translate)
- **描述**: `translate()` instance method

## 使用示例

### 基本用法

```javascript
// Translator.translate 使用示例
// 请查阅MDN文档了解具体用法
console.log('Translator.translate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 | Availability may be subject to geographical restrictions. |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
| Edge | 不支持 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 138
- **注意事项**:
  - Availability may be subject to geographical restrictions.

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Translator.translate是否支持
function isTranslatorTranslateSupported() {
    return 'translate' in translator && typeof translator.translate === 'function';
}

if (isTranslatorTranslateSupported()) {
    console.log('Translator.translate 支持');
    // 使用Translator.translate
} else {
    console.log('Translator.translate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Translator.translate polyfill
if (!translator.translate) {
    // 在这里添加polyfill实现
    console.log('加载Translator.translate polyfill');
}
```

