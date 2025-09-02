# WebGLContextEvent.WebGLContextEvent API 兼容性数据

## 基本信息

- **API名称**: `WebGLContextEvent.WebGLContextEvent`
- **MDN文档**: [WebGLContextEvent.WebGLContextEvent](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent/WebGLContextEvent)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15)
- **标签**: `web-features:webgl`
- **描述**: `WebGLContextEvent()` constructor

## 使用示例

### 基本用法

```javascript
// WebGLContextEvent.WebGLContextEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLContextEvent.WebGLContextEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 17 |  |
| Chrome Android | 25 |  |
| Edge | 12 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 8 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 17

### Chrome Android

- **支持版本**: 25

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 49

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGLContextEvent.WebGLContextEvent是否支持
function isWebGLContextEventWebGLContextEventSupported() {
    return 'WebGLContextEvent' in webglcontextevent && typeof webglcontextevent.WebGLContextEvent === 'function';
}

if (isWebGLContextEventWebGLContextEventSupported()) {
    console.log('WebGLContextEvent.WebGLContextEvent 支持');
    // 使用WebGLContextEvent.WebGLContextEvent
} else {
    console.log('WebGLContextEvent.WebGLContextEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLContextEvent.WebGLContextEvent polyfill
if (!webglcontextevent.WebGLContextEvent) {
    // 在这里添加polyfill实现
    console.log('加载WebGLContextEvent.WebGLContextEvent polyfill');
}
```

