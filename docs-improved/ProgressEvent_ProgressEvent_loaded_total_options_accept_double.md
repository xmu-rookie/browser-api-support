# ProgressEvent.ProgressEvent.loaded_total_options_accept_double API 兼容性数据

## 基本信息

- **API名称**: `ProgressEvent.ProgressEvent.loaded_total_options_accept_double`
- **MDN文档**: [ProgressEvent.ProgressEvent.loaded_total_options_accept_double](https://developer.mozilla.org/docs/Web/API/ProgressEvent/ProgressEvent)
- **标签**: `web-features:xhr`
- **描述**: `loaded` and `total` options accept doubles

## 使用示例

### 基本用法

```javascript
// ProgressEvent.ProgressEvent.loaded_total_options_accept_double 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProgressEvent.ProgressEvent.loaded_total_options_accept_double API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 138 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 同主版本 |  |
| Safari | preview |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 136

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 138

### Opera

- **支持版本**: 不支持

### Safari

- **支持版本**: preview

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProgressEvent.ProgressEvent.loaded_total_options_accept_double是否支持
function isProgressEventProgressEventSupported() {
    return 'ProgressEvent' in progressevent && typeof progressevent.ProgressEvent === 'function';
}

if (isProgressEventProgressEventSupported()) {
    console.log('ProgressEvent.ProgressEvent.loaded_total_options_accept_double 支持');
    // 使用ProgressEvent.ProgressEvent.loaded_total_options_accept_double
} else {
    console.log('ProgressEvent.ProgressEvent.loaded_total_options_accept_double 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProgressEvent.ProgressEvent.loaded_total_options_accept_double polyfill
if (!progressevent.ProgressEvent) {
    // 在这里添加polyfill实现
    console.log('加载ProgressEvent.ProgressEvent.loaded_total_options_accept_double polyfill');
}
```

