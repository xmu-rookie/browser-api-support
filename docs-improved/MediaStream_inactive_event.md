# MediaStream.inactive_event API 兼容性数据

## 基本信息

- **API名称**: `MediaStream.inactive_event`
- **描述**: `inactive` event

## 使用示例

### 基本用法

```javascript
// MediaStream.inactive_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream.inactive_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 42

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream.inactive_event是否支持
function isMediaStreamInactive_eventSupported() {
    return 'inactive_event' in mediastream && typeof mediastream.inactive_event === 'function';
}

if (isMediaStreamInactive_eventSupported()) {
    console.log('MediaStream.inactive_event 支持');
    // 使用MediaStream.inactive_event
} else {
    console.log('MediaStream.inactive_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream.inactive_event polyfill
if (!mediastream.inactive_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream.inactive_event polyfill');
}
```

