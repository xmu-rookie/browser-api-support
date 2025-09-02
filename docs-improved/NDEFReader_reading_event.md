# NDEFReader.reading_event API 兼容性数据

## 基本信息

- **API名称**: `NDEFReader.reading_event`
- **MDN文档**: [NDEFReader.reading_event](https://developer.mozilla.org/docs/Web/API/NDEFReader/reading_event)
- **规范文档**: [查看规范](https://w3c.github.io/web-nfc/#dom-ndefreader-onreading)
- **标签**: `web-features:web-nfc`
- **描述**: `reading` event

## 使用示例

### 基本用法

```javascript
// NDEFReader.reading_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('NDEFReader.reading_event API');
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
// 检查NDEFReader.reading_event是否支持
function isNDEFReaderReading_eventSupported() {
    return 'reading_event' in ndefreader && typeof ndefreader.reading_event === 'function';
}

if (isNDEFReaderReading_eventSupported()) {
    console.log('NDEFReader.reading_event 支持');
    // 使用NDEFReader.reading_event
} else {
    console.log('NDEFReader.reading_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NDEFReader.reading_event polyfill
if (!ndefreader.reading_event) {
    // 在这里添加polyfill实现
    console.log('加载NDEFReader.reading_event polyfill');
}
```

