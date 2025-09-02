# TrackEvent.TrackEvent API 兼容性数据

## 基本信息

- **API名称**: `TrackEvent.TrackEvent`
- **MDN文档**: [TrackEvent.TrackEvent](https://developer.mozilla.org/docs/Web/API/TrackEvent/TrackEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#the-trackevent-interface)
- **描述**: `TrackEvent()` constructor

## 使用示例

### 基本用法

```javascript
// TrackEvent.TrackEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrackEvent.TrackEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 7 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 27

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查TrackEvent.TrackEvent是否支持
function isTrackEventTrackEventSupported() {
    return 'TrackEvent' in trackevent && typeof trackevent.TrackEvent === 'function';
}

if (isTrackEventTrackEventSupported()) {
    console.log('TrackEvent.TrackEvent 支持');
    // 使用TrackEvent.TrackEvent
} else {
    console.log('TrackEvent.TrackEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrackEvent.TrackEvent polyfill
if (!trackevent.TrackEvent) {
    // 在这里添加polyfill实现
    console.log('加载TrackEvent.TrackEvent polyfill');
}
```

