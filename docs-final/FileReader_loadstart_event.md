# FileReader.loadstart_event API 兼容性数据

## 基本信息

- **API名称**: `FileReader.loadstart_event`
- **MDN文档**: [FileReader.loadstart_event](https://developer.mozilla.org/docs/Web/API/FileReader/loadstart_event)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-loadstart-event,https://w3c.github.io/FileAPI/#dfn-onloadstart)
- **标签**: `web-features:file`
- **描述**: `loadstart` event

## 使用示例

### 基本用法

```javascript
// FileReader.loadstart_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.loadstart_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 79 |  |
| Firefox Android | 79 |  |
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

- **支持版本**: 79
- **支持版本**: 3.6
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - `loadstart` event dispatches synchronously (should be asynchronously as per spec).

### Firefox Android

- **支持版本**: 79
- **支持版本**: 32
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - `loadstart` event dispatches synchronously (should be asynchronously as per spec).

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

