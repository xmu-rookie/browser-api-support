# SharedWorker.SharedWorker.options_type_parameter API 兼容性数据

## 基本信息

- **API名称**: `SharedWorker.SharedWorker.options_type_parameter`
- **标签**: `web-features:js-modules-shared-workers`
- **描述**: `options.type` parameter

## 使用示例

### 基本用法

```javascript
// SharedWorker.SharedWorker.options_type_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedWorker.SharedWorker.options_type_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 114

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedWorker.SharedWorker.options_type_parameter是否支持
function isSharedWorkerSharedWorkerSupported() {
    return 'SharedWorker' in sharedworker && typeof sharedworker.SharedWorker === 'function';
}

if (isSharedWorkerSharedWorkerSupported()) {
    console.log('SharedWorker.SharedWorker.options_type_parameter 支持');
    // 使用SharedWorker.SharedWorker.options_type_parameter
} else {
    console.log('SharedWorker.SharedWorker.options_type_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedWorker.SharedWorker.options_type_parameter polyfill
if (!sharedworker.SharedWorker) {
    // 在这里添加polyfill实现
    console.log('加载SharedWorker.SharedWorker.options_type_parameter polyfill');
}
```

