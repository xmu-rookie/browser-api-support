# WritableStreamDefaultController API 兼容性数据

## 基本信息

- **API名称**: `WritableStreamDefaultController`
- **MDN文档**: [WritableStreamDefaultController](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ws-default-controller-class)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// WritableStreamDefaultController 使用示例
// 请查阅MDN文档了解具体用法
console.log('WritableStreamDefaultController API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 59

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 100

### Node.js


### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WritableStreamDefaultController是否支持
function isWritableStreamDefaultControllerSupported() {
    return 'WritableStreamDefaultController' in window || typeof WritableStreamDefaultController !== 'undefined';
}

if (isWritableStreamDefaultControllerSupported()) {
    console.log('WritableStreamDefaultController 支持');
    // 使用WritableStreamDefaultController
} else {
    console.log('WritableStreamDefaultController 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WritableStreamDefaultController polyfill
if (!window.WritableStreamDefaultController) {
    // 在这里添加polyfill实现
    console.log('加载WritableStreamDefaultController polyfill');
}
```

