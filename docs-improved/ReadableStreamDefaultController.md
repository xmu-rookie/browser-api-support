# ReadableStreamDefaultController API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultController`
- **MDN文档**: [ReadableStreamDefaultController](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#rs-default-controller-class)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// ReadableStreamDefaultController 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamDefaultController API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.7
- **支持版本**: 1.0
- **移除版本**: 1.7
- **部分实现**: 是
- **注意事项**:
  - `ReadableStreamDefaultController` is not exposed on the global scope.

### Firefox

- **支持版本**: 65

### Node.js

- **支持版本**: 18.0.0
- **支持版本**: 16.5.0
- **移除版本**: 18.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `stream/web` module.

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStreamDefaultController是否支持
function isReadableStreamDefaultControllerSupported() {
    return 'ReadableStreamDefaultController' in window || typeof ReadableStreamDefaultController !== 'undefined';
}

if (isReadableStreamDefaultControllerSupported()) {
    console.log('ReadableStreamDefaultController 支持');
    // 使用ReadableStreamDefaultController
} else {
    console.log('ReadableStreamDefaultController 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStreamDefaultController polyfill
if (!window.ReadableStreamDefaultController) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStreamDefaultController polyfill');
}
```

