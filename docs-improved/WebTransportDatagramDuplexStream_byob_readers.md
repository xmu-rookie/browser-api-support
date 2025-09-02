# WebTransportDatagramDuplexStream.byob_readers API 兼容性数据

## 基本信息

- **API名称**: `WebTransportDatagramDuplexStream.byob_readers`
- **标签**: `web-features:webtransport`
- **描述**: BYOB reader support

## 使用示例

### 基本用法

```javascript
// WebTransportDatagramDuplexStream.byob_readers 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransportDatagramDuplexStream.byob_readers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 109 |  |
| Chrome Android | 同主版本 |  |
| Deno | 2.2 |  |
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

- **支持版本**: 109

### Deno

- **支持版本**: 2.2
- **需要标志**: 
  - --unstable-net: true

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransportDatagramDuplexStream.byob_readers是否支持
function isWebTransportDatagramDuplexStreamByob_readersSupported() {
    return 'byob_readers' in webtransportdatagramduplexstream && typeof webtransportdatagramduplexstream.byob_readers === 'function';
}

if (isWebTransportDatagramDuplexStreamByob_readersSupported()) {
    console.log('WebTransportDatagramDuplexStream.byob_readers 支持');
    // 使用WebTransportDatagramDuplexStream.byob_readers
} else {
    console.log('WebTransportDatagramDuplexStream.byob_readers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransportDatagramDuplexStream.byob_readers polyfill
if (!webtransportdatagramduplexstream.byob_readers) {
    // 在这里添加polyfill实现
    console.log('加载WebTransportDatagramDuplexStream.byob_readers polyfill');
}
```

