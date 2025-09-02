# HTMLTrackElement.srclang API 兼容性数据

## 基本信息

- **API名称**: `HTMLTrackElement.srclang`
- **MDN文档**: [HTMLTrackElement.srclang](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/srclang)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-track-srclang)
- **标签**: `web-features:text-tracks`

## 使用示例

### 基本用法

```javascript
// HTMLTrackElement.srclang 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTrackElement.srclang API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
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

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTrackElement.srclang是否支持
function isHTMLTrackElementSrclangSupported() {
    return 'srclang' in htmltrackelement && typeof htmltrackelement.srclang === 'function';
}

if (isHTMLTrackElementSrclangSupported()) {
    console.log('HTMLTrackElement.srclang 支持');
    // 使用HTMLTrackElement.srclang
} else {
    console.log('HTMLTrackElement.srclang 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTrackElement.srclang polyfill
if (!htmltrackelement.srclang) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTrackElement.srclang polyfill');
}
```

