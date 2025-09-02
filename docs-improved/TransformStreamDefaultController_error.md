# TransformStreamDefaultController.error API 兼容性数据

## 基本信息

- **API名称**: `TransformStreamDefaultController.error`
- **MDN文档**: [TransformStreamDefaultController.error](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ts-default-controller-error)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// TransformStreamDefaultController.error 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransformStreamDefaultController.error API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 102 |  |
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

- **支持版本**: 67

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 102

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TransformStreamDefaultController.error是否支持
function isTransformStreamDefaultControllerErrorSupported() {
    return 'error' in transformstreamdefaultcontroller && typeof transformstreamdefaultcontroller.error === 'function';
}

if (isTransformStreamDefaultControllerErrorSupported()) {
    console.log('TransformStreamDefaultController.error 支持');
    // 使用TransformStreamDefaultController.error
} else {
    console.log('TransformStreamDefaultController.error 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransformStreamDefaultController.error polyfill
if (!transformstreamdefaultcontroller.error) {
    // 在这里添加polyfill实现
    console.log('加载TransformStreamDefaultController.error polyfill');
}
```

