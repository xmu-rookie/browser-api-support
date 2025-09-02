# MIDIInput.midimessage_event API 兼容性数据

## 基本信息

- **API名称**: `MIDIInput.midimessage_event`
- **MDN文档**: [MIDIInput.midimessage_event](https://developer.mozilla.org/docs/Web/API/MIDIInput/midimessage_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midiinput-onmidimessage)
- **标签**: `web-features:web-midi`
- **描述**: `midimessage` event

## 使用示例

### 基本用法

```javascript
// MIDIInput.midimessage_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIInput.midimessage_event API');
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
// 检查MIDIInput.midimessage_event是否支持
function isMIDIInputMidimessage_eventSupported() {
    return 'midimessage_event' in midiinput && typeof midiinput.midimessage_event === 'function';
}

if (isMIDIInputMidimessage_eventSupported()) {
    console.log('MIDIInput.midimessage_event 支持');
    // 使用MIDIInput.midimessage_event
} else {
    console.log('MIDIInput.midimessage_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIInput.midimessage_event polyfill
if (!midiinput.midimessage_event) {
    // 在这里添加polyfill实现
    console.log('加载MIDIInput.midimessage_event polyfill');
}
```

