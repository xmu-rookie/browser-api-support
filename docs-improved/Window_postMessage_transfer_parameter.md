# Window.postMessage.transfer_parameter API 兼容性数据

## 基本信息

- **API名称**: `Window.postMessage.transfer_parameter`
- **描述**: `transfer` parameter

## 使用示例

### 基本用法

```javascript
// Window.postMessage.transfer_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.postMessage.transfer_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 20

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.postMessage.transfer_parameter是否支持
function isWindowPostMessageSupported() {
    return 'postMessage' in window && typeof window.postMessage === 'function';
}

if (isWindowPostMessageSupported()) {
    console.log('Window.postMessage.transfer_parameter 支持');
    // 使用Window.postMessage.transfer_parameter
} else {
    console.log('Window.postMessage.transfer_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.postMessage.transfer_parameter polyfill
if (!window.postMessage) {
    // 在这里添加polyfill实现
    console.log('加载Window.postMessage.transfer_parameter polyfill');
}
```

