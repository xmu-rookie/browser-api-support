# MIDIInputMap.forEach API 兼容性数据

## 基本信息

- **API名称**: `MIDIInputMap.forEach`
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIInputMap.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIInputMap.forEach API');
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
// 检查MIDIInputMap.forEach是否支持
function isMIDIInputMapForEachSupported() {
    return 'forEach' in midiinputmap && typeof midiinputmap.forEach === 'function';
}

if (isMIDIInputMapForEachSupported()) {
    console.log('MIDIInputMap.forEach 支持');
    // 使用MIDIInputMap.forEach
} else {
    console.log('MIDIInputMap.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIInputMap.forEach polyfill
if (!midiinputmap.forEach) {
    // 在这里添加polyfill实现
    console.log('加载MIDIInputMap.forEach polyfill');
}
```

