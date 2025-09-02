# AbortSignal.abort_static API 兼容性数据

## 基本信息

- **API名称**: `AbortSignal.abort_static`
- **MDN文档**: [AbortSignal.abort_static](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-abortsignal-abort①)
- **标签**: `web-features:aborting`
- **描述**: `abort()` static method

## 使用示例

### 基本用法

```javascript
// AbortSignal.abort_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortSignal.abort_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.9 |  |
| Edge | 同主版本 |  |
| Firefox | 88 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 15.12.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 93

### Deno

- **支持版本**: 1.9

### Firefox

- **支持版本**: 88

### Node.js

- **支持版本**: 15.12.0
- **支持版本**: 14.17.0
- **移除版本**: 15.0.0

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查AbortSignal.abort_static是否支持
function isAbortSignalAbort_staticSupported() {
    return 'abort_static' in abortsignal && typeof abortsignal.abort_static === 'function';
}

if (isAbortSignalAbort_staticSupported()) {
    console.log('AbortSignal.abort_static 支持');
    // 使用AbortSignal.abort_static
} else {
    console.log('AbortSignal.abort_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbortSignal.abort_static polyfill
if (!abortsignal.abort_static) {
    // 在这里添加polyfill实现
    console.log('加载AbortSignal.abort_static polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **reason_parameter**: `reason` parameter

