# HTMLMediaElement.controller API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.controller`
- **MDN文档**: [HTMLMediaElement.controller](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/controller)
- **标签**: `web-features:mediacontroller`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.controller 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.controller API');
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
// 检查HTMLMediaElement.controller是否支持
function isHTMLMediaElementControllerSupported() {
    return 'controller' in htmlmediaelement && typeof htmlmediaelement.controller === 'function';
}

if (isHTMLMediaElementControllerSupported()) {
    console.log('HTMLMediaElement.controller 支持');
    // 使用HTMLMediaElement.controller
} else {
    console.log('HTMLMediaElement.controller 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.controller polyfill
if (!htmlmediaelement.controller) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.controller polyfill');
}
```

