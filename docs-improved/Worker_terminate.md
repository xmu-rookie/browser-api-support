# Worker.terminate API 兼容性数据

## 基本信息

- **API名称**: `Worker.terminate`
- **MDN文档**: [Worker.terminate](https://developer.mozilla.org/docs/Web/API/Worker/terminate)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-terminate-dev)
- **标签**: `web-features:dedicated-workers`

## 使用示例

### 基本用法

```javascript
// Worker.terminate 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.terminate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 12.5.0 | Returns a `Promise`. |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 12.5.0
- **部分实现**: 是
- **注意事项**:
  - Returns a `Promise`.
- **支持版本**: 11.7.0
- **移除版本**: 12.5.0
- **部分实现**: 是
- **注意事项**:
  - Takes an optional callback parameter to be executed when the worker has terminated.

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.terminate是否支持
function isWorkerTerminateSupported() {
    return 'terminate' in worker && typeof worker.terminate === 'function';
}

if (isWorkerTerminateSupported()) {
    console.log('Worker.terminate 支持');
    // 使用Worker.terminate
} else {
    console.log('Worker.terminate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.terminate polyfill
if (!worker.terminate) {
    // 在这里添加polyfill实现
    console.log('加载Worker.terminate polyfill');
}
```

