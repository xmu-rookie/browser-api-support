# PromiseRejectionEvent.reason API 兼容性数据

## 基本信息

- **API名称**: `PromiseRejectionEvent.reason`
- **MDN文档**: [PromiseRejectionEvent.reason](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/reason)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-promiserejectionevent-reason)

## 使用示例

### 基本用法

```javascript
// PromiseRejectionEvent.reason 使用示例
// 请查阅MDN文档了解具体用法
console.log('PromiseRejectionEvent.reason API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.24 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 11.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 1.24

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 11

### Safari iOS

- **支持版本**: 11.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查PromiseRejectionEvent.reason是否支持
function isPromiseRejectionEventReasonSupported() {
    return 'reason' in promiserejectionevent && typeof promiserejectionevent.reason === 'function';
}

if (isPromiseRejectionEventReasonSupported()) {
    console.log('PromiseRejectionEvent.reason 支持');
    // 使用PromiseRejectionEvent.reason
} else {
    console.log('PromiseRejectionEvent.reason 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PromiseRejectionEvent.reason polyfill
if (!promiserejectionevent.reason) {
    // 在这里添加polyfill实现
    console.log('加载PromiseRejectionEvent.reason polyfill');
}
```

