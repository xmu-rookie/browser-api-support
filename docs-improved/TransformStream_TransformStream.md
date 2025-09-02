# TransformStream.TransformStream API 兼容性数据

## 基本信息

- **API名称**: `TransformStream.TransformStream`
- **MDN文档**: [TransformStream.TransformStream](https://developer.mozilla.org/docs/Web/API/TransformStream/TransformStream)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-ts-constructor④)
- **标签**: `web-features:streams`
- **描述**: `TransformStream()` constructor

## 使用示例

### 基本用法

```javascript
// TransformStream.TransformStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransformStream.TransformStream API');
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
// 检查TransformStream.TransformStream是否支持
function isTransformStreamTransformStreamSupported() {
    return 'TransformStream' in transformstream && typeof transformstream.TransformStream === 'function';
}

if (isTransformStreamTransformStreamSupported()) {
    console.log('TransformStream.TransformStream 支持');
    // 使用TransformStream.TransformStream
} else {
    console.log('TransformStream.TransformStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransformStream.TransformStream polyfill
if (!transformstream.TransformStream) {
    // 在这里添加polyfill实现
    console.log('加载TransformStream.TransformStream polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **transformer_cancel**: `transformer.cancel` method

