# MIDIOutput.clear API 兼容性数据

## 基本信息

- **API名称**: `MIDIOutput.clear`
- **MDN文档**: [MIDIOutput.clear](https://developer.mozilla.org/docs/Web/API/MIDIOutput/clear)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midioutput-clear)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIOutput.clear 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIOutput.clear API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 108

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MIDIOutput.clear是否支持
function isMIDIOutputClearSupported() {
    return 'clear' in midioutput && typeof midioutput.clear === 'function';
}

if (isMIDIOutputClearSupported()) {
    console.log('MIDIOutput.clear 支持');
    // 使用MIDIOutput.clear
} else {
    console.log('MIDIOutput.clear 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIOutput.clear polyfill
if (!midioutput.clear) {
    // 在这里添加polyfill实现
    console.log('加载MIDIOutput.clear polyfill');
}
```

