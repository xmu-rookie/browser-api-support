# Window.orientationchange_event API 兼容性数据

## 基本信息

- **API名称**: `Window.orientationchange_event`
- **MDN文档**: [Window.orientationchange_event](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)
- **规范文档**: [查看规范](https://compat.spec.whatwg.org/#event-orientationchange)
- **描述**: `orientationchange` event

## 使用示例

### 基本用法

```javascript
// Window.orientationchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.orientationchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 18 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 44 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | ≤14 |  |
| Safari | 不支持 |  |
| Safari iOS | ≤3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 18

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Firefox Android

- **支持版本**: 44

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.orientationchange_event是否支持
function isWindowOrientationchange_eventSupported() {
    return 'orientationchange_event' in window && typeof window.orientationchange_event === 'function';
}

if (isWindowOrientationchange_eventSupported()) {
    console.log('Window.orientationchange_event 支持');
    // 使用Window.orientationchange_event
} else {
    console.log('Window.orientationchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.orientationchange_event polyfill
if (!window.orientationchange_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.orientationchange_event polyfill');
}
```

