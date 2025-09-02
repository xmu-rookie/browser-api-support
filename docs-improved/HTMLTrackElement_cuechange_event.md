# HTMLTrackElement.cuechange_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLTrackElement.cuechange_event`
- **MDN文档**: [HTMLTrackElement.cuechange_event](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-cuechange,https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncuechange)
- **标签**: `web-features:text-tracks`
- **描述**: `cuechange` event

## 使用示例

### 基本用法

```javascript
// HTMLTrackElement.cuechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTrackElement.cuechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 68 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 19 |  |
| Opera Android | 19 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 32
- **支持版本**: 23
- **移除版本**: 32
- **部分实现**: 是
- **注意事项**:
  - The `oncuechange` event handler property is not supported.

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 68

### Opera

- **支持版本**: 19
- **支持版本**: 15
- **移除版本**: 19
- **部分实现**: 是
- **注意事项**:
  - The `oncuechange` event handler property is not supported.
- **支持版本**: 12
- **移除版本**: 15

### Opera Android

- **支持版本**: 19
- **支持版本**: 14
- **移除版本**: 19
- **部分实现**: 是
- **注意事项**:
  - The `oncuechange` event handler property is not supported.
- **支持版本**: 12
- **移除版本**: 14

### Safari

- **支持版本**: 10
- **支持版本**: 6
- **移除版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `oncuechange` event handler property is not supported.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTrackElement.cuechange_event是否支持
function isHTMLTrackElementCuechange_eventSupported() {
    return 'cuechange_event' in htmltrackelement && typeof htmltrackelement.cuechange_event === 'function';
}

if (isHTMLTrackElementCuechange_eventSupported()) {
    console.log('HTMLTrackElement.cuechange_event 支持');
    // 使用HTMLTrackElement.cuechange_event
} else {
    console.log('HTMLTrackElement.cuechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTrackElement.cuechange_event polyfill
if (!htmltrackelement.cuechange_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTrackElement.cuechange_event polyfill');
}
```

