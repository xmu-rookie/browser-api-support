# Worker API 兼容性数据

## 基本信息

- **API名称**: `Worker`
- **MDN文档**: [Worker](https://developer.mozilla.org/docs/Web/API/Worker)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-worker-interface)
- **标签**: `web-features:dedicated-workers`

## 使用示例

### 基本用法

```javascript
// Worker 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 (部分支持) | Inherits from a Node `EventEmitter` instead of DOM `EventTarget`.; Also supports CommonJS modules, enabled for files ending with `.cjs` and for files ending with `.js` when the nearest parent `package.json` file contains a top-level field `"type"` with a value not of `"commonjs"`.; Available as a part of the `worker_threads` module. |
| oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0
- **部分实现**: 是
- **注意事项**:
  - Inherits from a Node `EventEmitter` instead of DOM `EventTarget`.
  - Also supports CommonJS modules, enabled for files ending with `.cjs` and for files ending with `.js` when the nearest parent `package.json` file contains a top-level field `"type"` with a value not of `"commonjs"`.
  - Available as a part of the `worker_threads` module.

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
// 检查Worker是否支持
function isWorkerSupported() {
    return 'Worker' in window || typeof Worker !== 'undefined';
}

if (isWorkerSupported()) {
    console.log('Worker 支持');
    // 使用Worker
} else {
    console.log('Worker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker polyfill
if (!window.Worker) {
    // 在这里添加polyfill实现
    console.log('加载Worker polyfill');
}
```

