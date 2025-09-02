# LanguageDetector.inputQuota API 兼容性数据

## 基本信息

- **API名称**: `LanguageDetector.inputQuota`
- **MDN文档**: [LanguageDetector.inputQuota](https://developer.mozilla.org/docs/Web/API/LanguageDetector/inputQuota)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/translation-api/#dom-languagedetector-inputquota)
- **描述**: `inputQuota` property

## 使用示例

### 基本用法

```javascript
// LanguageDetector.inputQuota 使用示例
// 请查阅MDN文档了解具体用法
console.log('LanguageDetector.inputQuota API');
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
// 检查LanguageDetector.inputQuota是否支持
function isLanguageDetectorInputQuotaSupported() {
    return 'inputQuota' in languagedetector && typeof languagedetector.inputQuota === 'function';
}

if (isLanguageDetectorInputQuotaSupported()) {
    console.log('LanguageDetector.inputQuota 支持');
    // 使用LanguageDetector.inputQuota
} else {
    console.log('LanguageDetector.inputQuota 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LanguageDetector.inputQuota polyfill
if (!languagedetector.inputQuota) {
    // 在这里添加polyfill实现
    console.log('加载LanguageDetector.inputQuota polyfill');
}
```

