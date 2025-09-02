# Worker.Worker.ecmascript_modules API 兼容性数据

## 基本信息

- **API名称**: `Worker.Worker.ecmascript_modules`
- **标签**: `web-features:js-modules-workers`
- **描述**: Support for ECMAScript modules

## 使用示例

### 基本用法

```javascript
// Worker.Worker.ecmascript_modules 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.Worker.ecmascript_modules API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 12.17.0 | ECMAScript modules are enabled for files ending with `.mjs` and for files ending with `.js` when the... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 | Nested workers support was introduced in Safari 15.5.; Script loading in nested workers was introduc... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 114

### Node.js

- **支持版本**: 12.17.0
- **部分实现**: 是
- **注意事项**:
  - ECMAScript modules are enabled for files ending with `.mjs` and for files ending with `.js` when the nearest parent `package.json` file contains a top-level field `"type"` with a value of `"module"`.

### Safari

- **支持版本**: 15
- **注意事项**:
  - Nested workers support was introduced in Safari 15.5.
  - Script loading in nested workers was introduced in Safari 16.4.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.Worker.ecmascript_modules是否支持
function isWorkerWorkerSupported() {
    return 'Worker' in worker && typeof worker.Worker === 'function';
}

if (isWorkerWorkerSupported()) {
    console.log('Worker.Worker.ecmascript_modules 支持');
    // 使用Worker.Worker.ecmascript_modules
} else {
    console.log('Worker.Worker.ecmascript_modules 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.Worker.ecmascript_modules polyfill
if (!worker.Worker) {
    // 在这里添加polyfill实现
    console.log('加载Worker.Worker.ecmascript_modules polyfill');
}
```

