# NDEFRecord.toRecords API 兼容性数据

## 基本信息

- **API名称**: `NDEFRecord.toRecords`
- **MDN文档**: [NDEFRecord.toRecords](https://developer.mozilla.org/docs/Web/API/NDEFRecord/toRecords)
- **规范文档**: [查看规范](https://w3c.github.io/web-nfc/#dom-ndefrecord-torecords)
- **标签**: `web-features:web-nfc`

## 使用示例

### 基本用法

```javascript
// NDEFRecord.toRecords 使用示例
// 请查阅MDN文档了解具体用法
console.log('NDEFRecord.toRecords API');
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
// 检查NDEFRecord.toRecords是否支持
function isNDEFRecordToRecordsSupported() {
    return 'toRecords' in ndefrecord && typeof ndefrecord.toRecords === 'function';
}

if (isNDEFRecordToRecordsSupported()) {
    console.log('NDEFRecord.toRecords 支持');
    // 使用NDEFRecord.toRecords
} else {
    console.log('NDEFRecord.toRecords 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NDEFRecord.toRecords polyfill
if (!ndefrecord.toRecords) {
    // 在这里添加polyfill实现
    console.log('加载NDEFRecord.toRecords polyfill');
}
```

