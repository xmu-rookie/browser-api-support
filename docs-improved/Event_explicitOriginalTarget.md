# Event.explicitOriginalTarget API 兼容性数据

## 基本信息

- **API名称**: `Event.explicitOriginalTarget`
- **MDN文档**: [Event.explicitOriginalTarget](https://developer.mozilla.org/docs/Web/API/Event/explicitOriginalTarget)

## 使用示例

### 基本用法

```javascript
// Event.explicitOriginalTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.explicitOriginalTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1.5

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.explicitOriginalTarget是否支持
function isEventExplicitOriginalTargetSupported() {
    return 'explicitOriginalTarget' in event && typeof event.explicitOriginalTarget === 'function';
}

if (isEventExplicitOriginalTargetSupported()) {
    console.log('Event.explicitOriginalTarget 支持');
    // 使用Event.explicitOriginalTarget
} else {
    console.log('Event.explicitOriginalTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.explicitOriginalTarget polyfill
if (!event.explicitOriginalTarget) {
    // 在这里添加polyfill实现
    console.log('加载Event.explicitOriginalTarget polyfill');
}
```

