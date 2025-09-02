# WorkerGlobalScope.dump API 兼容性数据

## 基本信息

- **API名称**: `WorkerGlobalScope.dump`
- **MDN文档**: [WorkerGlobalScope.dump](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/dump)

## 使用示例

### 基本用法

```javascript
// WorkerGlobalScope.dump 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerGlobalScope.dump API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 3.5 | This method exists but has no effect. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 3.5
- **部分实现**: 是
- **注意事项**:
  - This method exists but has no effect.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerGlobalScope.dump是否支持
function isWorkerGlobalScopeDumpSupported() {
    return 'dump' in workerglobalscope && typeof workerglobalscope.dump === 'function';
}

if (isWorkerGlobalScopeDumpSupported()) {
    console.log('WorkerGlobalScope.dump 支持');
    // 使用WorkerGlobalScope.dump
} else {
    console.log('WorkerGlobalScope.dump 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerGlobalScope.dump polyfill
if (!workerglobalscope.dump) {
    // 在这里添加polyfill实现
    console.log('加载WorkerGlobalScope.dump polyfill');
}
```

