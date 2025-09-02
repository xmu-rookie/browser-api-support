# ScriptProcessorNode.audioprocess_event API 兼容性数据

## 基本信息

- **API名称**: `ScriptProcessorNode.audioprocess_event`
- **MDN文档**: [ScriptProcessorNode.audioprocess_event](https://developer.mozilla.org/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- **描述**: `audioprocess` event

## 使用示例

### 基本用法

```javascript
// ScriptProcessorNode.audioprocess_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScriptProcessorNode.audioprocess_event API');
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
// 检查ScriptProcessorNode.audioprocess_event是否支持
function isScriptProcessorNodeAudioprocess_eventSupported() {
    return 'audioprocess_event' in scriptprocessornode && typeof scriptprocessornode.audioprocess_event === 'function';
}

if (isScriptProcessorNodeAudioprocess_eventSupported()) {
    console.log('ScriptProcessorNode.audioprocess_event 支持');
    // 使用ScriptProcessorNode.audioprocess_event
} else {
    console.log('ScriptProcessorNode.audioprocess_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScriptProcessorNode.audioprocess_event polyfill
if (!scriptprocessornode.audioprocess_event) {
    // 在这里添加polyfill实现
    console.log('加载ScriptProcessorNode.audioprocess_event polyfill');
}
```

