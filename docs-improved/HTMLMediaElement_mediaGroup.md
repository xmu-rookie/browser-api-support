# HTMLMediaElement.mediaGroup API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.mediaGroup`
- **MDN文档**: [HTMLMediaElement.mediaGroup](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/mediaGroup)

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.mediaGroup 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.mediaGroup API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 17 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 17
- **移除版本**: 36

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.mediaGroup是否支持
function isHTMLMediaElementMediaGroupSupported() {
    return 'mediaGroup' in htmlmediaelement && typeof htmlmediaelement.mediaGroup === 'function';
}

if (isHTMLMediaElementMediaGroupSupported()) {
    console.log('HTMLMediaElement.mediaGroup 支持');
    // 使用HTMLMediaElement.mediaGroup
} else {
    console.log('HTMLMediaElement.mediaGroup 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.mediaGroup polyfill
if (!htmlmediaelement.mediaGroup) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.mediaGroup polyfill');
}
```

