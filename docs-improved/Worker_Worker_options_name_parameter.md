# Worker.Worker.options_name_parameter API 兼容性数据

## 基本信息

- **API名称**: `Worker.Worker.options_name_parameter`
- **标签**: `web-features:dedicated-workers`
- **描述**: `options.name` parameter

## 使用示例

### 基本用法

```javascript
// Worker.Worker.options_name_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.Worker.options_name_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 18 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 70

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 55

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.Worker.options_name_parameter是否支持
function isWorkerWorkerSupported() {
    return 'Worker' in worker && typeof worker.Worker === 'function';
}

if (isWorkerWorkerSupported()) {
    console.log('Worker.Worker.options_name_parameter 支持');
    // 使用Worker.Worker.options_name_parameter
} else {
    console.log('Worker.Worker.options_name_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.Worker.options_name_parameter polyfill
if (!worker.Worker) {
    // 在这里添加polyfill实现
    console.log('加载Worker.Worker.options_name_parameter polyfill');
}
```

