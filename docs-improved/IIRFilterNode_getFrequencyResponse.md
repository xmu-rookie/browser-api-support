# IIRFilterNode.getFrequencyResponse API 兼容性数据

## 基本信息

- **API名称**: `IIRFilterNode.getFrequencyResponse`
- **MDN文档**: [IIRFilterNode.getFrequencyResponse](https://developer.mozilla.org/docs/Web/API/IIRFilterNode/getFrequencyResponse)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-iirfilternode-getfrequencyresponse)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// IIRFilterNode.getFrequencyResponse 使用示例
// 请查阅MDN文档了解具体用法
console.log('IIRFilterNode.getFrequencyResponse API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 50 |  |
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

- **支持版本**: 49

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IIRFilterNode.getFrequencyResponse是否支持
function isIIRFilterNodeGetFrequencyResponseSupported() {
    return 'getFrequencyResponse' in iirfilternode && typeof iirfilternode.getFrequencyResponse === 'function';
}

if (isIIRFilterNodeGetFrequencyResponseSupported()) {
    console.log('IIRFilterNode.getFrequencyResponse 支持');
    // 使用IIRFilterNode.getFrequencyResponse
} else {
    console.log('IIRFilterNode.getFrequencyResponse 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IIRFilterNode.getFrequencyResponse polyfill
if (!iirfilternode.getFrequencyResponse) {
    // 在这里添加polyfill实现
    console.log('加载IIRFilterNode.getFrequencyResponse polyfill');
}
```

