# TextEncoder.encodeInto API 兼容性数据

## 基本信息

- **API名称**: `TextEncoder.encodeInto`
- **MDN文档**: [TextEncoder.encodeInto](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
- **规范文档**: [查看规范](https://encoding.spec.whatwg.org/#ref-for-dom-textencoder-encodeinto①)
- **标签**: `web-features:text-encoding`

## 使用示例

### 基本用法

```javascript
// TextEncoder.encodeInto 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextEncoder.encodeInto API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 66 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 12.11.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 50 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 74

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 66

### Node.js

- **支持版本**: 12.11.0

### Opera Android

- **支持版本**: 50

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextEncoder.encodeInto是否支持
function isTextEncoderEncodeIntoSupported() {
    return 'encodeInto' in textencoder && typeof textencoder.encodeInto === 'function';
}

if (isTextEncoderEncodeIntoSupported()) {
    console.log('TextEncoder.encodeInto 支持');
    // 使用TextEncoder.encodeInto
} else {
    console.log('TextEncoder.encodeInto 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextEncoder.encodeInto polyfill
if (!textencoder.encodeInto) {
    // 在这里添加polyfill实现
    console.log('加载TextEncoder.encodeInto polyfill');
}
```

