# fetch.blob_data_support API 兼容性数据

## 基本信息

- **API名称**: `fetch.blob_data_support`
- **标签**: `web-features:fetch`
- **描述**: Support for blob: and data:

## 使用示例

### 基本用法

```javascript
// fetch.blob_data_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('fetch.blob_data_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.9 |  |
| Edge | 同主版本 |  |
| Firefox | 39 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 43 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 48

### Deno

- **支持版本**: 1.9

### Firefox

- **支持版本**: 39

### Safari

- **支持版本**: 10.1

### WebView Android

- **支持版本**: 43

## 兼容性检查代码

### 特性检测

```javascript
// 检查fetch.blob_data_support是否支持
function isfetchBlob_data_supportSupported() {
    return 'blob_data_support' in fetch && typeof fetch.blob_data_support === 'function';
}

if (isfetchBlob_data_supportSupported()) {
    console.log('fetch.blob_data_support 支持');
    // 使用fetch.blob_data_support
} else {
    console.log('fetch.blob_data_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// fetch.blob_data_support polyfill
if (!fetch.blob_data_support) {
    // 在这里添加polyfill实现
    console.log('加载fetch.blob_data_support polyfill');
}
```

