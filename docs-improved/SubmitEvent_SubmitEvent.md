# SubmitEvent.SubmitEvent API 兼容性数据

## 基本信息

- **API名称**: `SubmitEvent.SubmitEvent`
- **MDN文档**: [SubmitEvent.SubmitEvent](https://developer.mozilla.org/docs/Web/API/SubmitEvent/SubmitEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#submitevent)
- **标签**: `web-features:form`
- **描述**: `SubmitEvent()` constructor

## 使用示例

### 基本用法

```javascript
// SubmitEvent.SubmitEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SubmitEvent.SubmitEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 75

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查SubmitEvent.SubmitEvent是否支持
function isSubmitEventSubmitEventSupported() {
    return 'SubmitEvent' in submitevent && typeof submitevent.SubmitEvent === 'function';
}

if (isSubmitEventSubmitEventSupported()) {
    console.log('SubmitEvent.SubmitEvent 支持');
    // 使用SubmitEvent.SubmitEvent
} else {
    console.log('SubmitEvent.SubmitEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SubmitEvent.SubmitEvent polyfill
if (!submitevent.SubmitEvent) {
    // 在这里添加polyfill实现
    console.log('加载SubmitEvent.SubmitEvent polyfill');
}
```

