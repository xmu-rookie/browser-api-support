# WorkerNavigator.product API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.product`
- **MDN文档**: [WorkerNavigator.product](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/product)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-product-dev)

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.product 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.product API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.product是否支持
function isWorkerNavigatorProductSupported() {
    return 'product' in workernavigator && typeof workernavigator.product === 'function';
}

if (isWorkerNavigatorProductSupported()) {
    console.log('WorkerNavigator.product 支持');
    // 使用WorkerNavigator.product
} else {
    console.log('WorkerNavigator.product 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.product polyfill
if (!workernavigator.product) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.product polyfill');
}
```

