# ConvolverNode.ConvolverNode API 兼容性数据

## 基本信息

- **API名称**: `ConvolverNode.ConvolverNode`
- **MDN文档**: [ConvolverNode.ConvolverNode](https://developer.mozilla.org/docs/Web/API/ConvolverNode/ConvolverNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-convolvernode-convolvernode)
- **标签**: `web-features:web-audio`
- **描述**: `ConvolverNode()` constructor

## 使用示例

### 基本用法

```javascript
// ConvolverNode.ConvolverNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('ConvolverNode.ConvolverNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ConvolverNode.ConvolverNode是否支持
function isConvolverNodeConvolverNodeSupported() {
    return 'ConvolverNode' in convolvernode && typeof convolvernode.ConvolverNode === 'function';
}

if (isConvolverNodeConvolverNodeSupported()) {
    console.log('ConvolverNode.ConvolverNode 支持');
    // 使用ConvolverNode.ConvolverNode
} else {
    console.log('ConvolverNode.ConvolverNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ConvolverNode.ConvolverNode polyfill
if (!convolvernode.ConvolverNode) {
    // 在这里添加polyfill实现
    console.log('加载ConvolverNode.ConvolverNode polyfill');
}
```

