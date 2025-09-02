# AudioScheduledSourceNode.stop API 兼容性数据

## 基本信息

- **API名称**: `AudioScheduledSourceNode.stop`
- **MDN文档**: [AudioScheduledSourceNode.stop](https://developer.mozilla.org/docs/Web/API/AudioScheduledSourceNode/stop)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioscheduledsourcenode-stop)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioScheduledSourceNode.stop 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioScheduledSourceNode.stop API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioScheduledSourceNode.stop是否支持
function isAudioScheduledSourceNodeStopSupported() {
    return 'stop' in audioscheduledsourcenode && typeof audioscheduledsourcenode.stop === 'function';
}

if (isAudioScheduledSourceNodeStopSupported()) {
    console.log('AudioScheduledSourceNode.stop 支持');
    // 使用AudioScheduledSourceNode.stop
} else {
    console.log('AudioScheduledSourceNode.stop 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioScheduledSourceNode.stop polyfill
if (!audioscheduledsourcenode.stop) {
    // 在这里添加polyfill实现
    console.log('加载AudioScheduledSourceNode.stop polyfill');
}
```

