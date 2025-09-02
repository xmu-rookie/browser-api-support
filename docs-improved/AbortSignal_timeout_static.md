# AbortSignal.timeout_static API 兼容性数据

## 基本信息

- **API名称**: `AbortSignal.timeout_static`
- **MDN文档**: [AbortSignal.timeout_static](https://developer.mozilla.org/docs/Web/API/AbortSignal/timeout_static)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-abortsignal-timeout①)
- **标签**: `web-features:aborting`
- **描述**: `timeout()` static method

## 使用示例

### 基本用法

```javascript
// AbortSignal.timeout_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortSignal.timeout_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.20 |  |
| Edge | 同主版本 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 17.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 124
- **支持版本**: 103
- **移除版本**: 124
- **部分实现**: 是
- **注意事项**:
  - Always aborts with an `AbortError` on timeout, not a `TimeoutError`.

### Deno

- **支持版本**: 1.20

### Firefox

- **支持版本**: 100

### Node.js

- **支持版本**: 17.3.0
- **支持版本**: 16.14.0
- **移除版本**: 17.0.0

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查AbortSignal.timeout_static是否支持
function isAbortSignalTimeout_staticSupported() {
    return 'timeout_static' in abortsignal && typeof abortsignal.timeout_static === 'function';
}

if (isAbortSignalTimeout_staticSupported()) {
    console.log('AbortSignal.timeout_static 支持');
    // 使用AbortSignal.timeout_static
} else {
    console.log('AbortSignal.timeout_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbortSignal.timeout_static polyfill
if (!abortsignal.timeout_static) {
    // 在这里添加polyfill实现
    console.log('加载AbortSignal.timeout_static polyfill');
}
```

