# WritableStreamDefaultController.error API 兼容性数据

## 基本信息

- **API名称**: `WritableStreamDefaultController.error`
- **MDN文档**: [WritableStreamDefaultController.error](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/error)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-ws-default-controller-error①)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// WritableStreamDefaultController.error 使用示例
// 请查阅MDN文档了解具体用法
console.log('WritableStreamDefaultController.error API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 59

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 100

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WritableStreamDefaultController.error是否支持
function isWritableStreamDefaultControllerErrorSupported() {
    return 'error' in writablestreamdefaultcontroller && typeof writablestreamdefaultcontroller.error === 'function';
}

if (isWritableStreamDefaultControllerErrorSupported()) {
    console.log('WritableStreamDefaultController.error 支持');
    // 使用WritableStreamDefaultController.error
} else {
    console.log('WritableStreamDefaultController.error 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WritableStreamDefaultController.error polyfill
if (!writablestreamdefaultcontroller.error) {
    // 在这里添加polyfill实现
    console.log('加载WritableStreamDefaultController.error polyfill');
}
```

