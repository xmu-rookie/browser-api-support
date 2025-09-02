# ScreenOrientation.change_event API 兼容性数据

## 基本信息

- **API名称**: `ScreenOrientation.change_event`
- **MDN文档**: [ScreenOrientation.change_event](https://developer.mozilla.org/docs/Web/API/ScreenOrientation/change_event)
- **规范文档**: [查看规范](https://w3c.github.io/screen-orientation/#dom-screenorientation-onchange)
- **标签**: `web-features:screen-orientation`
- **描述**: `change` event

## 使用示例

### 基本用法

```javascript
// ScreenOrientation.change_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScreenOrientation.change_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 43 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Firefox

- **支持版本**: 43

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ScreenOrientation.change_event是否支持
function isScreenOrientationChange_eventSupported() {
    return 'change_event' in screenorientation && typeof screenorientation.change_event === 'function';
}

if (isScreenOrientationChange_eventSupported()) {
    console.log('ScreenOrientation.change_event 支持');
    // 使用ScreenOrientation.change_event
} else {
    console.log('ScreenOrientation.change_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScreenOrientation.change_event polyfill
if (!screenorientation.change_event) {
    // 在这里添加polyfill实现
    console.log('加载ScreenOrientation.change_event polyfill');
}
```

