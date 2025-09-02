# AbortSignal.aborted API 兼容性数据

## 基本信息

- **API名称**: `AbortSignal.aborted`
- **MDN文档**: [AbortSignal.aborted](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-abortsignal-aborted①)
- **标签**: `web-features:aborting`

## 使用示例

### 基本用法

```javascript
// AbortSignal.aborted 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortSignal.aborted API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.17.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 66

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 14.17.0

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AbortSignal.aborted是否支持
function isAbortSignalAbortedSupported() {
    return 'aborted' in abortsignal && typeof abortsignal.aborted === 'function';
}

if (isAbortSignalAbortedSupported()) {
    console.log('AbortSignal.aborted 支持');
    // 使用AbortSignal.aborted
} else {
    console.log('AbortSignal.aborted 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbortSignal.aborted polyfill
if (!abortsignal.aborted) {
    // 在这里添加polyfill实现
    console.log('加载AbortSignal.aborted polyfill');
}
```

