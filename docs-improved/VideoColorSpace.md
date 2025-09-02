# VideoColorSpace API 兼容性数据

## 基本信息

- **API名称**: `VideoColorSpace`
- **MDN文档**: [VideoColorSpace](https://developer.mozilla.org/docs/Web/API/VideoColorSpace)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#videocolorspace)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoColorSpace 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoColorSpace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 130 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94

### Firefox

- **支持版本**: 130

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoColorSpace是否支持
function isVideoColorSpaceSupported() {
    return 'VideoColorSpace' in window || typeof VideoColorSpace !== 'undefined';
}

if (isVideoColorSpaceSupported()) {
    console.log('VideoColorSpace 支持');
    // 使用VideoColorSpace
} else {
    console.log('VideoColorSpace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoColorSpace polyfill
if (!window.VideoColorSpace) {
    // 在这里添加polyfill实现
    console.log('加载VideoColorSpace polyfill');
}
```

