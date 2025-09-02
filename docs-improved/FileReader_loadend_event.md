# FileReader.loadend_event API 兼容性数据

## 基本信息

- **API名称**: `FileReader.loadend_event`
- **MDN文档**: [FileReader.loadend_event](https://developer.mozilla.org/docs/Web/API/FileReader/loadend_event)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-loadend-event,https://w3c.github.io/FileAPI/#dfn-onloadend)
- **标签**: `web-features:file`
- **描述**: `loadend` event

## 使用示例

### 基本用法

```javascript
// FileReader.loadend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.loadend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 32 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6

### Firefox Android

- **支持版本**: 32

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReader.loadend_event是否支持
function isFileReaderLoadend_eventSupported() {
    return 'loadend_event' in filereader && typeof filereader.loadend_event === 'function';
}

if (isFileReaderLoadend_eventSupported()) {
    console.log('FileReader.loadend_event 支持');
    // 使用FileReader.loadend_event
} else {
    console.log('FileReader.loadend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReader.loadend_event polyfill
if (!filereader.loadend_event) {
    // 在这里添加polyfill实现
    console.log('加载FileReader.loadend_event polyfill');
}
```

