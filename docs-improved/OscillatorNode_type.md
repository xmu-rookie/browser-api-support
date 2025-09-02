# OscillatorNode.type API 兼容性数据

## 基本信息

- **API名称**: `OscillatorNode.type`
- **MDN文档**: [OscillatorNode.type](https://developer.mozilla.org/docs/Web/API/OscillatorNode/type)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-oscillatornode-type)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// OscillatorNode.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('OscillatorNode.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查OscillatorNode.type是否支持
function isOscillatorNodeTypeSupported() {
    return 'type' in oscillatornode && typeof oscillatornode.type === 'function';
}

if (isOscillatorNodeTypeSupported()) {
    console.log('OscillatorNode.type 支持');
    // 使用OscillatorNode.type
} else {
    console.log('OscillatorNode.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OscillatorNode.type polyfill
if (!oscillatornode.type) {
    // 在这里添加polyfill实现
    console.log('加载OscillatorNode.type polyfill');
}
```

