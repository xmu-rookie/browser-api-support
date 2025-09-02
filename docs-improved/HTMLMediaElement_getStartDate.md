# HTMLMediaElement.getStartDate API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.getStartDate`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-getstartdate)

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.getStartDate 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.getStartDate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.getStartDate是否支持
function isHTMLMediaElementGetStartDateSupported() {
    return 'getStartDate' in htmlmediaelement && typeof htmlmediaelement.getStartDate === 'function';
}

if (isHTMLMediaElementGetStartDateSupported()) {
    console.log('HTMLMediaElement.getStartDate 支持');
    // 使用HTMLMediaElement.getStartDate
} else {
    console.log('HTMLMediaElement.getStartDate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.getStartDate polyfill
if (!htmlmediaelement.getStartDate) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.getStartDate polyfill');
}
```

