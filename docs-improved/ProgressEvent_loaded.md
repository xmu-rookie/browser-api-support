# ProgressEvent.loaded API 兼容性数据

## 基本信息

- **API名称**: `ProgressEvent.loaded`
- **MDN文档**: [ProgressEvent.loaded](https://developer.mozilla.org/docs/Web/API/ProgressEvent/loaded)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-progressevent-loaded)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// ProgressEvent.loaded 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProgressEvent.loaded API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProgressEvent.loaded是否支持
function isProgressEventLoadedSupported() {
    return 'loaded' in progressevent && typeof progressevent.loaded === 'function';
}

if (isProgressEventLoadedSupported()) {
    console.log('ProgressEvent.loaded 支持');
    // 使用ProgressEvent.loaded
} else {
    console.log('ProgressEvent.loaded 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProgressEvent.loaded polyfill
if (!progressevent.loaded) {
    // 在这里添加polyfill实现
    console.log('加载ProgressEvent.loaded polyfill');
}
```

