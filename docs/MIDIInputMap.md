# MIDIInputMap API 兼容性数据

## 基本信息

- **API名称**: `MIDIInputMap`
- **MDN文档**: [MIDIInputMap](https://developer.mozilla.org/docs/Web/API/MIDIInputMap)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#midiinputmap-interface)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIInputMap 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIInputMap API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 |  |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查MIDIInputMap是否支持
function isMIDIInputMapSupported() {
    return 'MIDIInputMap' in window || typeof MIDIInputMap !== 'undefined';
}

if (isMIDIInputMapSupported()) {
    console.log('MIDIInputMap 支持');
    // 使用MIDIInputMap
} else {
    console.log('MIDIInputMap 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIInputMap polyfill
if (!window.MIDIInputMap) {
    // 在这里添加polyfill实现
    console.log('加载MIDIInputMap polyfill');
}
```

