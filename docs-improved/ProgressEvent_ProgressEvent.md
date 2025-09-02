# ProgressEvent.ProgressEvent API 兼容性数据

## 基本信息

- **API名称**: `ProgressEvent.ProgressEvent`
- **MDN文档**: [ProgressEvent.ProgressEvent](https://developer.mozilla.org/docs/Web/API/ProgressEvent/ProgressEvent)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-progressevent-progressevent)
- **标签**: `web-features:xhr`
- **描述**: `ProgressEvent()` constructor

## 使用示例

### 基本用法

```javascript
// ProgressEvent.ProgressEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProgressEvent.ProgressEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 14 |  |
| Firefox | 18 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 16

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 18

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProgressEvent.ProgressEvent是否支持
function isProgressEventProgressEventSupported() {
    return 'ProgressEvent' in progressevent && typeof progressevent.ProgressEvent === 'function';
}

if (isProgressEventProgressEventSupported()) {
    console.log('ProgressEvent.ProgressEvent 支持');
    // 使用ProgressEvent.ProgressEvent
} else {
    console.log('ProgressEvent.ProgressEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProgressEvent.ProgressEvent polyfill
if (!progressevent.ProgressEvent) {
    // 在这里添加polyfill实现
    console.log('加载ProgressEvent.ProgressEvent polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **loaded_total_options_accept_double**: `loaded` and `total` options accept doubles

