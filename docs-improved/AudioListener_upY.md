# AudioListener.upY API 兼容性数据

## 基本信息

- **API名称**: `AudioListener.upY`
- **MDN文档**: [AudioListener.upY](https://developer.mozilla.org/docs/Web/API/AudioListener/upY)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiolistener-upy)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioListener.upY 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioListener.upY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 | Supports a deprecated way of setting orientation - the `setOrientation()` method. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52

### Firefox

- **支持版本**: 不支持
- **注意事项**:
  - Supports a deprecated way of setting orientation - the `setOrientation()` method.

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioListener.upY是否支持
function isAudioListenerUpYSupported() {
    return 'upY' in audiolistener && typeof audiolistener.upY === 'function';
}

if (isAudioListenerUpYSupported()) {
    console.log('AudioListener.upY 支持');
    // 使用AudioListener.upY
} else {
    console.log('AudioListener.upY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioListener.upY polyfill
if (!audiolistener.upY) {
    // 在这里添加polyfill实现
    console.log('加载AudioListener.upY polyfill');
}
```

