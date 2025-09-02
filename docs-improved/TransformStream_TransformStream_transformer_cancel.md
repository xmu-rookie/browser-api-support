# TransformStream.TransformStream.transformer_cancel API 兼容性数据

## 基本信息

- **API名称**: `TransformStream.TransformStream.transformer_cancel`
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#dom-transformer-cancel)
- **标签**: `web-features:transformstream-transformer-cancel`
- **描述**: `transformer.cancel` method

## 使用示例

### 基本用法

```javascript
// TransformStream.TransformStream.transformer_cancel 使用示例
// 请查阅MDN文档了解具体用法
console.log('TransformStream.TransformStream.transformer_cancel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.38 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 21.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 1.38

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 21.5.0
- **支持版本**: 20.14.0
- **移除版本**: 21.0.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TransformStream.TransformStream.transformer_cancel是否支持
function isTransformStreamTransformStreamSupported() {
    return 'TransformStream' in transformstream && typeof transformstream.TransformStream === 'function';
}

if (isTransformStreamTransformStreamSupported()) {
    console.log('TransformStream.TransformStream.transformer_cancel 支持');
    // 使用TransformStream.TransformStream.transformer_cancel
} else {
    console.log('TransformStream.TransformStream.transformer_cancel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TransformStream.TransformStream.transformer_cancel polyfill
if (!transformstream.TransformStream) {
    // 在这里添加polyfill实现
    console.log('加载TransformStream.TransformStream.transformer_cancel polyfill');
}
```

