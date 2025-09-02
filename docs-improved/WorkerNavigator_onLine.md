# WorkerNavigator.onLine API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.onLine`
- **MDN文档**: [WorkerNavigator.onLine](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/onLine)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-online-dev)
- **标签**: `web-features:online`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.onLine 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.onLine API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | Since Firefox 4 the browser returns `true` when 'Work Offline' mode is disabled and `false` when it ... |
| Firefox Android | 4 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 | From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an... |
| Opera Android | 11 | From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an... |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 | Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933). |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5
- **注意事项**:
  - Since Firefox 4 the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity. Since Firefox 41, on OS X and Windows, the returned values follow the actual network connectivity, unless 'Work offline' mode is selected (where it will always return `false`).

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 10.6
- **注意事项**:
  - From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity.

### Opera Android

- **支持版本**: 11
- **注意事项**:
  - From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled and `false` when it is enabled, regardless of actual connectivity.

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 4.4
- **部分实现**: 是
- **注意事项**:
  - Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933).

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.onLine是否支持
function isWorkerNavigatorOnLineSupported() {
    return 'onLine' in workernavigator && typeof workernavigator.onLine === 'function';
}

if (isWorkerNavigatorOnLineSupported()) {
    console.log('WorkerNavigator.onLine 支持');
    // 使用WorkerNavigator.onLine
} else {
    console.log('WorkerNavigator.onLine 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.onLine polyfill
if (!workernavigator.onLine) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.onLine polyfill');
}
```

