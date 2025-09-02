# NDEFRecord.lang API 兼容性数据

## 基本信息

- **API名称**: `NDEFRecord.lang`
- **MDN文档**: [NDEFRecord.lang](https://developer.mozilla.org/docs/Web/API/NDEFRecord/lang)
- **规范文档**: [查看规范](https://w3c.github.io/web-nfc/#dom-ndefrecord-lang)
- **标签**: `web-features:web-nfc`

## 使用示例

### 基本用法

```javascript
// NDEFRecord.lang 使用示例
// 请查阅MDN文档了解具体用法
console.log('NDEFRecord.lang API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 89 |  |
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

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 89

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NDEFRecord.lang是否支持
function isNDEFRecordLangSupported() {
    return 'lang' in ndefrecord && typeof ndefrecord.lang === 'function';
}

if (isNDEFRecordLangSupported()) {
    console.log('NDEFRecord.lang 支持');
    // 使用NDEFRecord.lang
} else {
    console.log('NDEFRecord.lang 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NDEFRecord.lang polyfill
if (!ndefrecord.lang) {
    // 在这里添加polyfill实现
    console.log('加载NDEFRecord.lang polyfill');
}
```

