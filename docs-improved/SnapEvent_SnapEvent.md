# SnapEvent.SnapEvent API 兼容性数据

## 基本信息

- **API名称**: `SnapEvent.SnapEvent`
- **MDN文档**: [SnapEvent.SnapEvent](https://developer.mozilla.org/docs/Web/API/SnapEvent/SnapEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-scroll-snap-2/#dom-snapevent-snapevent)
- **标签**: `web-features:scroll-snap-events`
- **描述**: `SnapEvent()` constructor

## 使用示例

### 基本用法

```javascript
// SnapEvent.SnapEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SnapEvent.SnapEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 138
- **需要标志**: 
  - #enable-experimental-web-platform-features: true

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SnapEvent.SnapEvent是否支持
function isSnapEventSnapEventSupported() {
    return 'SnapEvent' in snapevent && typeof snapevent.SnapEvent === 'function';
}

if (isSnapEventSnapEventSupported()) {
    console.log('SnapEvent.SnapEvent 支持');
    // 使用SnapEvent.SnapEvent
} else {
    console.log('SnapEvent.SnapEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SnapEvent.SnapEvent polyfill
if (!snapevent.SnapEvent) {
    // 在这里添加polyfill实现
    console.log('加载SnapEvent.SnapEvent polyfill');
}
```

