# AudioScheduledSourceNode API 兼容性数据

## 基本信息

- **API名称**: `AudioScheduledSourceNode`
- **MDN文档**: [AudioScheduledSourceNode](https://developer.mozilla.org/docs/Web/API/AudioScheduledSourceNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#AudioScheduledSourceNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioScheduledSourceNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioScheduledSourceNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 未知 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge


### Firefox


### Safari


## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioScheduledSourceNode是否支持
function isAudioScheduledSourceNodeSupported() {
    return 'AudioScheduledSourceNode' in window || typeof AudioScheduledSourceNode !== 'undefined';
}

if (isAudioScheduledSourceNodeSupported()) {
    console.log('AudioScheduledSourceNode 支持');
    // 使用AudioScheduledSourceNode
} else {
    console.log('AudioScheduledSourceNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioScheduledSourceNode polyfill
if (!window.AudioScheduledSourceNode) {
    // 在这里添加polyfill实现
    console.log('加载AudioScheduledSourceNode polyfill');
}
```

