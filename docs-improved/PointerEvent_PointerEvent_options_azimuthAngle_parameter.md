# PointerEvent.PointerEvent.options_azimuthAngle_parameter API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.PointerEvent.options_azimuthAngle_parameter`
- **标签**: `web-features:pointer-events-api`
- **描述**: `options.azimuthAngle` parameter

## 使用示例

### 基本用法

```javascript
// PointerEvent.PointerEvent.options_azimuthAngle_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.PointerEvent.options_azimuthAngle_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 131 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 131

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查PointerEvent.PointerEvent.options_azimuthAngle_parameter是否支持
function isPointerEventPointerEventSupported() {
    return 'PointerEvent' in pointerevent && typeof pointerevent.PointerEvent === 'function';
}

if (isPointerEventPointerEventSupported()) {
    console.log('PointerEvent.PointerEvent.options_azimuthAngle_parameter 支持');
    // 使用PointerEvent.PointerEvent.options_azimuthAngle_parameter
} else {
    console.log('PointerEvent.PointerEvent.options_azimuthAngle_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.PointerEvent.options_azimuthAngle_parameter polyfill
if (!pointerevent.PointerEvent) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.PointerEvent.options_azimuthAngle_parameter polyfill');
}
```

