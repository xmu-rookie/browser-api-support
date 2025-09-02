# AbortSignal API 兼容性数据

## 基本信息

- **API名称**: `AbortSignal`
- **MDN文档**: [AbortSignal](https://developer.mozilla.org/docs/Web/API/AbortSignal)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-AbortSignal)
- **标签**: `web-features:aborting`

## 使用示例

### 基本用法

```javascript
// AbortSignal 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbortSignal API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.17.0 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 66

### deno

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
// 检查AbortSignal是否支持
function isAbortSignalSupported() {
    return 'AbortSignal' in window || typeof AbortSignal !== 'undefined';
}

if (isAbortSignalSupported()) {
    console.log('AbortSignal 支持');
    // 使用AbortSignal
} else {
    console.log('AbortSignal 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbortSignal polyfill
if (!window.AbortSignal) {
    // 在这里添加polyfill实现
    console.log('加载AbortSignal polyfill');
}
```

