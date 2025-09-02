# TransformStreamDefaultController API 兼容性数据

## 基本信息

- **API名称**: `TransformStreamDefaultController`
- **MDN文档**: [TransformStreamDefaultController](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ts-default-controller-class)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// TransformStreamDefaultController 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransformStreamDefaultController API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 同主版本 |  |
| Firefox | 102 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
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

- **支持版本**: 1.11
- **支持版本**: 1.0
- **移除版本**: 1.11
- **部分实现**: 是
- **注意事项**:
  - `TransformStreamDefaultController` is not exposed on the global scope.

### Firefox

- **支持版本**: 102

### Node.js

- **支持版本**: 18.0.0
- **支持版本**: 16.5.0
- **移除版本**: 18.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `stream/web` module.

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TransformStreamDefaultController是否支持
function isTransformStreamDefaultControllerSupported() {
    return 'TransformStreamDefaultController' in window || typeof TransformStreamDefaultController !== 'undefined';
}

if (isTransformStreamDefaultControllerSupported()) {
    console.log('TransformStreamDefaultController 支持');
    // 使用TransformStreamDefaultController
} else {
    console.log('TransformStreamDefaultController 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransformStreamDefaultController polyfill
if (!window.TransformStreamDefaultController) {
    // 在这里添加polyfill实现
    console.log('加载TransformStreamDefaultController polyfill');
}
```

