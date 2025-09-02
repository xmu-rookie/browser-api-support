# FontFaceSet.loading_event API 兼容性数据

## 基本信息

- **API名称**: `FontFaceSet.loading_event`
- **MDN文档**: [FontFaceSet.loading_event](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loading_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-font-loading/#dom-fontfaceset-onloading)
- **标签**: `web-features:font-loading`
- **描述**: `loading` event

## 使用示例

### 基本用法

```javascript
// FontFaceSet.loading_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFaceSet.loading_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFaceSet.loading_event是否支持
function isFontFaceSetLoading_eventSupported() {
    return 'loading_event' in fontfaceset && typeof fontfaceset.loading_event === 'function';
}

if (isFontFaceSetLoading_eventSupported()) {
    console.log('FontFaceSet.loading_event 支持');
    // 使用FontFaceSet.loading_event
} else {
    console.log('FontFaceSet.loading_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFaceSet.loading_event polyfill
if (!fontfaceset.loading_event) {
    // 在这里添加polyfill实现
    console.log('加载FontFaceSet.loading_event polyfill');
}
```

