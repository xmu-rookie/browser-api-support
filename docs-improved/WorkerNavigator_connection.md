# WorkerNavigator.connection API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.connection`
- **MDN文档**: [WorkerNavigator.connection](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/connection)
- **规范文档**: [查看规范](https://wicg.github.io/netinfo/#connection-attribute)
- **标签**: `web-features:network-information`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.connection 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.connection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 38 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 53 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 37 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 50 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Chrome Android

- **支持版本**: 38

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Firefox Android

- **支持版本**: 53
- **移除版本**: 99

### Opera Android

- **支持版本**: 37

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.connection是否支持
function isWorkerNavigatorConnectionSupported() {
    return 'connection' in workernavigator && typeof workernavigator.connection === 'function';
}

if (isWorkerNavigatorConnectionSupported()) {
    console.log('WorkerNavigator.connection 支持');
    // 使用WorkerNavigator.connection
} else {
    console.log('WorkerNavigator.connection 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.connection polyfill
if (!workernavigator.connection) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.connection polyfill');
}
```

