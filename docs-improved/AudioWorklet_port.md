# AudioWorklet.port API 兼容性数据

## 基本信息

- **API名称**: `AudioWorklet.port`
- **MDN文档**: [AudioWorklet.port](https://developer.mozilla.org/docs/Web/API/AudioWorklet/port)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioworklet-port)

## 使用示例

### 基本用法

```javascript
// AudioWorklet.port 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioWorklet.port API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 138 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 138

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioWorklet.port是否支持
function isAudioWorkletPortSupported() {
    return 'port' in audioworklet && typeof audioworklet.port === 'function';
}

if (isAudioWorkletPortSupported()) {
    console.log('AudioWorklet.port 支持');
    // 使用AudioWorklet.port
} else {
    console.log('AudioWorklet.port 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioWorklet.port polyfill
if (!audioworklet.port) {
    // 在这里添加polyfill实现
    console.log('加载AudioWorklet.port polyfill');
}
```

