# MIDIPort.statechange_event API 兼容性数据

## 基本信息

- **API名称**: `MIDIPort.statechange_event`
- **MDN文档**: [MIDIPort.statechange_event](https://developer.mozilla.org/docs/Web/API/MIDIPort/statechange_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midiport-onstatechange)
- **标签**: `web-features:web-midi`
- **描述**: `statechange` event

## 使用示例

### 基本用法

```javascript
// MIDIPort.statechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIPort.statechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Firefox

- **支持版本**: 108

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MIDIPort.statechange_event是否支持
function isMIDIPortStatechange_eventSupported() {
    return 'statechange_event' in midiport && typeof midiport.statechange_event === 'function';
}

if (isMIDIPortStatechange_eventSupported()) {
    console.log('MIDIPort.statechange_event 支持');
    // 使用MIDIPort.statechange_event
} else {
    console.log('MIDIPort.statechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIPort.statechange_event polyfill
if (!midiport.statechange_event) {
    // 在这里添加polyfill实现
    console.log('加载MIDIPort.statechange_event polyfill');
}
```

