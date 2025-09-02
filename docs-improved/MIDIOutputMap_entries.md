# MIDIOutputMap.entries API 兼容性数据

## 基本信息

- **API名称**: `MIDIOutputMap.entries`
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIOutputMap.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIOutputMap.entries API');
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
// 检查MIDIOutputMap.entries是否支持
function isMIDIOutputMapEntriesSupported() {
    return 'entries' in midioutputmap && typeof midioutputmap.entries === 'function';
}

if (isMIDIOutputMapEntriesSupported()) {
    console.log('MIDIOutputMap.entries 支持');
    // 使用MIDIOutputMap.entries
} else {
    console.log('MIDIOutputMap.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIOutputMap.entries polyfill
if (!midioutputmap.entries) {
    // 在这里添加polyfill实现
    console.log('加载MIDIOutputMap.entries polyfill');
}
```

