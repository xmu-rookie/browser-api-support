# AnalyserNode.maxDecibels API 兼容性数据

## 基本信息

- **API名称**: `AnalyserNode.maxDecibels`
- **MDN文档**: [AnalyserNode.maxDecibels](https://developer.mozilla.org/docs/Web/API/AnalyserNode/maxDecibels)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-analysernode-maxdecibels)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AnalyserNode.maxDecibels 使用示例
// 请查阅MDN文档了解具体用法
console.log('AnalyserNode.maxDecibels API');
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
// 检查AnalyserNode.maxDecibels是否支持
function isAnalyserNodeMaxDecibelsSupported() {
    return 'maxDecibels' in analysernode && typeof analysernode.maxDecibels === 'function';
}

if (isAnalyserNodeMaxDecibelsSupported()) {
    console.log('AnalyserNode.maxDecibels 支持');
    // 使用AnalyserNode.maxDecibels
} else {
    console.log('AnalyserNode.maxDecibels 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AnalyserNode.maxDecibels polyfill
if (!analysernode.maxDecibels) {
    // 在这里添加polyfill实现
    console.log('加载AnalyserNode.maxDecibels polyfill');
}
```

