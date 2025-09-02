# Screen.orientationchange_event API 兼容性数据

## 基本信息

- **API名称**: `Screen.orientationchange_event`
- **MDN文档**: [Screen.orientationchange_event](https://developer.mozilla.org/docs/Web/API/Screen/orientationchange_event)
- **描述**: `orientationchange` event

## 使用示例

### 基本用法

```javascript
// Screen.orientationchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.orientationchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 14 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79
- **前缀**: ms

### Firefox

- **支持版本**: 不支持

### Firefox Android

- **支持版本**: 14
- **前缀**: moz

### Internet Explorer

- **支持版本**: 11
- **前缀**: ms

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.orientationchange_event是否支持
function isScreenOrientationchange_eventSupported() {
    return 'orientationchange_event' in screen && typeof screen.orientationchange_event === 'function';
}

if (isScreenOrientationchange_eventSupported()) {
    console.log('Screen.orientationchange_event 支持');
    // 使用Screen.orientationchange_event
} else {
    console.log('Screen.orientationchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.orientationchange_event polyfill
if (!screen.orientationchange_event) {
    // 在这里添加polyfill实现
    console.log('加载Screen.orientationchange_event polyfill');
}
```

