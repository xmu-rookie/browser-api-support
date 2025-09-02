# isSecureContext.worker_support API 兼容性数据

## 基本信息

- **API名称**: `isSecureContext.worker_support`
- **标签**: `web-features:is-secure-context`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// isSecureContext.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('isSecureContext.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 52 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 40 |  |
| Opera Android | 41 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 52

### Opera

- **支持版本**: 40

### Opera Android

- **支持版本**: 41

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查isSecureContext.worker_support是否支持
function isisSecureContextWorker_supportSupported() {
    return 'worker_support' in issecurecontext && typeof issecurecontext.worker_support === 'function';
}

if (isisSecureContextWorker_supportSupported()) {
    console.log('isSecureContext.worker_support 支持');
    // 使用isSecureContext.worker_support
} else {
    console.log('isSecureContext.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// isSecureContext.worker_support polyfill
if (!issecurecontext.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载isSecureContext.worker_support polyfill');
}
```

