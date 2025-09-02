# MIDIConnectionEvent.port API 兼容性数据

## 基本信息

- **API名称**: `MIDIConnectionEvent.port`
- **MDN文档**: [MIDIConnectionEvent.port](https://developer.mozilla.org/docs/Web/API/MIDIConnectionEvent/port)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midiconnectionevent-port)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIConnectionEvent.port 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIConnectionEvent.port API');
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
// 检查MIDIConnectionEvent.port是否支持
function isMIDIConnectionEventPortSupported() {
    return 'port' in midiconnectionevent && typeof midiconnectionevent.port === 'function';
}

if (isMIDIConnectionEventPortSupported()) {
    console.log('MIDIConnectionEvent.port 支持');
    // 使用MIDIConnectionEvent.port
} else {
    console.log('MIDIConnectionEvent.port 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIConnectionEvent.port polyfill
if (!midiconnectionevent.port) {
    // 在这里添加polyfill实现
    console.log('加载MIDIConnectionEvent.port polyfill');
}
```

