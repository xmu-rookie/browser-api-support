# AnalyserNode API 兼容性数据

## 基本信息

- **API名称**: `AnalyserNode`
- **MDN文档**: [AnalyserNode](https://developer.mozilla.org/docs/Web/API/AnalyserNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#AnalyserNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AnalyserNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnalyserNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 |  |
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
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 14

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查AnalyserNode是否支持
function isAnalyserNodeSupported() {
    return 'AnalyserNode' in window || typeof AnalyserNode !== 'undefined';
}

if (isAnalyserNodeSupported()) {
    console.log('AnalyserNode 支持');
    // 使用AnalyserNode
} else {
    console.log('AnalyserNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnalyserNode polyfill
if (!window.AnalyserNode) {
    // 在这里添加polyfill实现
    console.log('加载AnalyserNode polyfill');
}
```

