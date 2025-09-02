# Translator.availability_static API 兼容性数据

## 基本信息

- **API名称**: `Translator.availability_static`
- **MDN文档**: [Translator.availability_static](https://developer.mozilla.org/docs/Web/API/Translator/availability_static)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/translation-api/#dom-translator-availability)
- **描述**: `availability()` static method

## 使用示例

### 基本用法

```javascript
// Translator.availability_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Translator.availability_static API');
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
// 检查Translator.availability_static是否支持
function isTranslatorAvailability_staticSupported() {
    return 'availability_static' in translator && typeof translator.availability_static === 'function';
}

if (isTranslatorAvailability_staticSupported()) {
    console.log('Translator.availability_static 支持');
    // 使用Translator.availability_static
} else {
    console.log('Translator.availability_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Translator.availability_static polyfill
if (!translator.availability_static) {
    // 在这里添加polyfill实现
    console.log('加载Translator.availability_static polyfill');
}
```

