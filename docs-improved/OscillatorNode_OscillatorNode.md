# OscillatorNode.OscillatorNode API 兼容性数据

## 基本信息

- **API名称**: `OscillatorNode.OscillatorNode`
- **MDN文档**: [OscillatorNode.OscillatorNode](https://developer.mozilla.org/docs/Web/API/OscillatorNode/OscillatorNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-oscillatornode-oscillatornode)
- **标签**: `web-features:web-audio`
- **描述**: `OscillatorNode()` constructor

## 使用示例

### 基本用法

```javascript
// OscillatorNode.OscillatorNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('OscillatorNode.OscillatorNode API');
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
// 检查OscillatorNode.OscillatorNode是否支持
function isOscillatorNodeOscillatorNodeSupported() {
    return 'OscillatorNode' in oscillatornode && typeof oscillatornode.OscillatorNode === 'function';
}

if (isOscillatorNodeOscillatorNodeSupported()) {
    console.log('OscillatorNode.OscillatorNode 支持');
    // 使用OscillatorNode.OscillatorNode
} else {
    console.log('OscillatorNode.OscillatorNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OscillatorNode.OscillatorNode polyfill
if (!oscillatornode.OscillatorNode) {
    // 在这里添加polyfill实现
    console.log('加载OscillatorNode.OscillatorNode polyfill');
}
```

