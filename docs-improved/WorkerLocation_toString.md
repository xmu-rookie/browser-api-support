# WorkerLocation.toString API 兼容性数据

## 基本信息

- **API名称**: `WorkerLocation.toString`
- **MDN文档**: [WorkerLocation.toString](https://developer.mozilla.org/docs/Web/API/WorkerLocation/toString)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#workerlocation)
- **标签**: `web-features:dedicated-workers`

## 使用示例

### 基本用法

```javascript
// WorkerLocation.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerLocation.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.7

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerLocation.toString是否支持
function isWorkerLocationToStringSupported() {
    return 'toString' in workerlocation && typeof workerlocation.toString === 'function';
}

if (isWorkerLocationToStringSupported()) {
    console.log('WorkerLocation.toString 支持');
    // 使用WorkerLocation.toString
} else {
    console.log('WorkerLocation.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerLocation.toString polyfill
if (!workerlocation.toString) {
    // 在这里添加polyfill实现
    console.log('加载WorkerLocation.toString polyfill');
}
```

