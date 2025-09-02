# Window.postMessage.options_includeUserActivation_parameter API 兼容性数据

## 基本信息

- **API名称**: `Window.postMessage.options_includeUserActivation_parameter`
- **描述**: `options.includeUserActivation` parameter

## 使用示例

### 基本用法

```javascript
// Window.postMessage.options_includeUserActivation_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.postMessage.options_includeUserActivation_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 72

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.postMessage.options_includeUserActivation_parameter是否支持
function isWindowPostMessageSupported() {
    return 'postMessage' in window && typeof window.postMessage === 'function';
}

if (isWindowPostMessageSupported()) {
    console.log('Window.postMessage.options_includeUserActivation_parameter 支持');
    // 使用Window.postMessage.options_includeUserActivation_parameter
} else {
    console.log('Window.postMessage.options_includeUserActivation_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.postMessage.options_includeUserActivation_parameter polyfill
if (!window.postMessage) {
    // 在这里添加polyfill实现
    console.log('加载Window.postMessage.options_includeUserActivation_parameter polyfill');
}
```

