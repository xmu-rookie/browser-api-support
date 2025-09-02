# MIDIInputMap.entries API 兼容性数据

## 基本信息

- **API名称**: `MIDIInputMap.entries`
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIInputMap.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIInputMap.entries API');
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
// 检查MIDIInputMap.entries是否支持
function isMIDIInputMapEntriesSupported() {
    return 'entries' in midiinputmap && typeof midiinputmap.entries === 'function';
}

if (isMIDIInputMapEntriesSupported()) {
    console.log('MIDIInputMap.entries 支持');
    // 使用MIDIInputMap.entries
} else {
    console.log('MIDIInputMap.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIInputMap.entries polyfill
if (!midiinputmap.entries) {
    // 在这里添加polyfill实现
    console.log('加载MIDIInputMap.entries polyfill');
}
```

