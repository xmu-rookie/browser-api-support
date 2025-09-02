# SpeechSynthesisEvent.elapsedTime.milliseconds API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesisEvent.elapsedTime.milliseconds`
- **描述**: `elapsedTime` in milliseconds

## 使用示例

### 基本用法

```javascript
// SpeechSynthesisEvent.elapsedTime.milliseconds 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechSynthesisEvent.elapsedTime.milliseconds API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 49 | Windows and macOS only. |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 21 |  |
| Opera Android | 不支持 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 49
- **移除版本**: 95
- **部分实现**: 是
- **注意事项**:
  - Windows and macOS only.

### Firefox Android

- **支持版本**: 不支持

### Opera

- **支持版本**: 21

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 7
- **移除版本**: 14.1

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechSynthesisEvent.elapsedTime.milliseconds是否支持
function isSpeechSynthesisEventElapsedTimeSupported() {
    return 'elapsedTime' in speechsynthesisevent && typeof speechsynthesisevent.elapsedTime === 'function';
}

if (isSpeechSynthesisEventElapsedTimeSupported()) {
    console.log('SpeechSynthesisEvent.elapsedTime.milliseconds 支持');
    // 使用SpeechSynthesisEvent.elapsedTime.milliseconds
} else {
    console.log('SpeechSynthesisEvent.elapsedTime.milliseconds 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechSynthesisEvent.elapsedTime.milliseconds polyfill
if (!speechsynthesisevent.elapsedTime) {
    // 在这里添加polyfill实现
    console.log('加载SpeechSynthesisEvent.elapsedTime.milliseconds polyfill');
}
```

