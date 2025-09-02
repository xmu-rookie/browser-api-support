# WorkerNavigator.locks API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.locks`
- **MDN文档**: [WorkerNavigator.locks](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/locks)
- **规范文档**: [查看规范](https://w3c.github.io/web-locks/#dom-navigatorlocks-locks)
- **标签**: `web-features:web-locks`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.locks 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.locks API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 96 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 96

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.locks是否支持
function isWorkerNavigatorLocksSupported() {
    return 'locks' in workernavigator && typeof workernavigator.locks === 'function';
}

if (isWorkerNavigatorLocksSupported()) {
    console.log('WorkerNavigator.locks 支持');
    // 使用WorkerNavigator.locks
} else {
    console.log('WorkerNavigator.locks 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.locks polyfill
if (!workernavigator.locks) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.locks polyfill');
}
```

