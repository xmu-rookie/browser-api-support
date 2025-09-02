# BaseAudioContext.statechange_event API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.statechange_event`
- **MDN文档**: [BaseAudioContext.statechange_event](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/statechange_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-onstatechange)
- **标签**: `web-features:web-audio`
- **描述**: `statechange` event

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.statechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.statechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 40 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 40

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.statechange_event是否支持
function isBaseAudioContextStatechange_eventSupported() {
    return 'statechange_event' in baseaudiocontext && typeof baseaudiocontext.statechange_event === 'function';
}

if (isBaseAudioContextStatechange_eventSupported()) {
    console.log('BaseAudioContext.statechange_event 支持');
    // 使用BaseAudioContext.statechange_event
} else {
    console.log('BaseAudioContext.statechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.statechange_event polyfill
if (!baseaudiocontext.statechange_event) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.statechange_event polyfill');
}
```

