# Request.mode.navigate_mode API 兼容性数据

## 基本信息

- **API名称**: `Request.mode.navigate_mode`
- **标签**: `web-features:fetch`
- **描述**: `navigate` mode

## 使用示例

### 基本用法

```javascript
// Request.mode.navigate_mode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.mode.navigate_mode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | ≤18 |  |
| Firefox | 46 |  |
| Firefox Android | 不支持 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 不支持 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 46

### Firefox Android

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 10.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.mode.navigate_mode是否支持
function isRequestModeSupported() {
    return 'mode' in request && typeof request.mode === 'function';
}

if (isRequestModeSupported()) {
    console.log('Request.mode.navigate_mode 支持');
    // 使用Request.mode.navigate_mode
} else {
    console.log('Request.mode.navigate_mode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.mode.navigate_mode polyfill
if (!request.mode) {
    // 在这里添加polyfill实现
    console.log('加载Request.mode.navigate_mode polyfill');
}
```

