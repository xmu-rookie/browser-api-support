# TextTrack.activeCues API 兼容性数据

## 基本信息

- **API名称**: `TextTrack.activeCues`
- **MDN文档**: [TextTrack.activeCues](https://developer.mozilla.org/docs/Web/API/TextTrack/activeCues)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-texttrack-activecues-dev)
- **标签**: `web-features:text-tracks`

## 使用示例

### 基本用法

```javascript
// TextTrack.activeCues 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrack.activeCues API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 | Starting in Firefox 69, cues are no longer incorrectly loaded when the `TextTrack`'s `mode` is `disa... |
| Firefox Android | 31 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 7 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 31
- **注意事项**:
  - Starting in Firefox 69, cues are no longer incorrectly loaded when the `TextTrack`'s `mode` is `disabled`; if that's the case, the returned list is empty.

### Firefox Android

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 7

