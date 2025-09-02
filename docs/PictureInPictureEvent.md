# PictureInPictureEvent API 兼容性数据

## 基本信息

- **API名称**: `PictureInPictureEvent`
- **MDN文档**: [PictureInPictureEvent](https://developer.mozilla.org/docs/Web/API/PictureInPictureEvent)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#event-types)
- **标签**: `web-features:picture-in-picture`

## 使用示例

### 基本用法

```javascript
// PictureInPictureEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PictureInPictureEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 105 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 未知 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Chrome Android

- **支持版本**: 105

### Firefox

- **支持版本**: 不支持

### Safari


### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PictureInPictureEvent是否支持
function isPictureInPictureEventSupported() {
    return 'PictureInPictureEvent' in window || typeof PictureInPictureEvent !== 'undefined';
}

if (isPictureInPictureEventSupported()) {
    console.log('PictureInPictureEvent 支持');
    // 使用PictureInPictureEvent
} else {
    console.log('PictureInPictureEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PictureInPictureEvent polyfill
if (!window.PictureInPictureEvent) {
    // 在这里添加polyfill实现
    console.log('加载PictureInPictureEvent polyfill');
}
```

