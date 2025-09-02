# TimeEvent API 兼容性数据

## 基本信息

- **API名称**: `TimeEvent`
- **MDN文档**: [TimeEvent](https://developer.mozilla.org/docs/Web/API/TimeEvent)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#InterfaceTimeEvent)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// TimeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TimeEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | ❌ 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 4

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TimeEvent是否支持
function isTimeEventSupported() {
    return 'TimeEvent' in window || typeof TimeEvent !== 'undefined';
}

if (isTimeEventSupported()) {
    console.log('TimeEvent 支持');
    // 使用TimeEvent
} else {
    console.log('TimeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TimeEvent polyfill
if (!window.TimeEvent) {
    // 在这里添加polyfill实现
    console.log('加载TimeEvent polyfill');
}
```

