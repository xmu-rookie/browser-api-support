# Translator.targetLanguage API 兼容性数据

## 基本信息

- **API名称**: `Translator.targetLanguage`
- **MDN文档**: [Translator.targetLanguage](https://developer.mozilla.org/docs/Web/API/Translator/targetLanguage)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/translation-api/#dom-translator-targetlanguage)
- **描述**: `targetLanguage` property

## 使用示例

### 基本用法

```javascript
// Translator.targetLanguage 使用示例
// 请查阅MDN文档了解具体用法
console.log('Translator.targetLanguage API');
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
// 检查Translator.targetLanguage是否支持
function isTranslatorTargetLanguageSupported() {
    return 'targetLanguage' in translator && typeof translator.targetLanguage === 'function';
}

if (isTranslatorTargetLanguageSupported()) {
    console.log('Translator.targetLanguage 支持');
    // 使用Translator.targetLanguage
} else {
    console.log('Translator.targetLanguage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Translator.targetLanguage polyfill
if (!translator.targetLanguage) {
    // 在这里添加polyfill实现
    console.log('加载Translator.targetLanguage polyfill');
}
```

