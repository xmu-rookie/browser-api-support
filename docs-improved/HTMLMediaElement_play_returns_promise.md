# HTMLMediaElement.play.returns_promise API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.play.returns_promise`
- **标签**: `web-features:video`
- **描述**: Returns a `Promise`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.play.returns_promise 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.play.returns_promise API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 53 |  |
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

- **支持版本**: 50

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.play.returns_promise是否支持
function isHTMLMediaElementPlaySupported() {
    return 'play' in htmlmediaelement && typeof htmlmediaelement.play === 'function';
}

if (isHTMLMediaElementPlaySupported()) {
    console.log('HTMLMediaElement.play.returns_promise 支持');
    // 使用HTMLMediaElement.play.returns_promise
} else {
    console.log('HTMLMediaElement.play.returns_promise 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.play.returns_promise polyfill
if (!htmlmediaelement.play) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.play.returns_promise polyfill');
}
```

