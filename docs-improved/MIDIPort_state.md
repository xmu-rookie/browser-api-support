# MIDIPort.state API 兼容性数据

## 基本信息

- **API名称**: `MIDIPort.state`
- **MDN文档**: [MIDIPort.state](https://developer.mozilla.org/docs/Web/API/MIDIPort/state)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midiport-state)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIPort.state 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIPort.state API');
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
// 检查MIDIPort.state是否支持
function isMIDIPortStateSupported() {
    return 'state' in midiport && typeof midiport.state === 'function';
}

if (isMIDIPortStateSupported()) {
    console.log('MIDIPort.state 支持');
    // 使用MIDIPort.state
} else {
    console.log('MIDIPort.state 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIPort.state polyfill
if (!midiport.state) {
    // 在这里添加polyfill实现
    console.log('加载MIDIPort.state polyfill');
}
```

