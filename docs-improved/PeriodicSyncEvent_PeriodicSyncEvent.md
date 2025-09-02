# PeriodicSyncEvent.PeriodicSyncEvent API 兼容性数据

## 基本信息

- **API名称**: `PeriodicSyncEvent.PeriodicSyncEvent`
- **MDN文档**: [PeriodicSyncEvent.PeriodicSyncEvent](https://developer.mozilla.org/docs/Web/API/PeriodicSyncEvent/PeriodicSyncEvent)
- **规范文档**: [查看规范](https://wicg.github.io/periodic-background-sync/#dom-periodicsyncevent-periodicsyncevent)
- **描述**: `PeriodicSyncEvent()` constructor

## 使用示例

### 基本用法

```javascript
// PeriodicSyncEvent.PeriodicSyncEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PeriodicSyncEvent.PeriodicSyncEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PeriodicSyncEvent.PeriodicSyncEvent是否支持
function isPeriodicSyncEventPeriodicSyncEventSupported() {
    return 'PeriodicSyncEvent' in periodicsyncevent && typeof periodicsyncevent.PeriodicSyncEvent === 'function';
}

if (isPeriodicSyncEventPeriodicSyncEventSupported()) {
    console.log('PeriodicSyncEvent.PeriodicSyncEvent 支持');
    // 使用PeriodicSyncEvent.PeriodicSyncEvent
} else {
    console.log('PeriodicSyncEvent.PeriodicSyncEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PeriodicSyncEvent.PeriodicSyncEvent polyfill
if (!periodicsyncevent.PeriodicSyncEvent) {
    // 在这里添加polyfill实现
    console.log('加载PeriodicSyncEvent.PeriodicSyncEvent polyfill');
}
```

