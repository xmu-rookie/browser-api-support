# Request.credentials.default_same-origin API 兼容性数据

## 基本信息

- **API名称**: `Request.credentials.default_same-origin`
- **标签**: `web-features:fetch`
- **描述**: Default value `same-origin`

## 使用示例

### 基本用法

```javascript
// Request.credentials.default_same-origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.credentials.default_same-origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 18 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 55 |  |
| Opera Android | 不支持 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 61

### Node.js

- **支持版本**: 18.0.0

### Opera

- **支持版本**: 55

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.credentials.default_same-origin是否支持
function isRequestCredentialsSupported() {
    return 'credentials' in request && typeof request.credentials === 'function';
}

if (isRequestCredentialsSupported()) {
    console.log('Request.credentials.default_same-origin 支持');
    // 使用Request.credentials.default_same-origin
} else {
    console.log('Request.credentials.default_same-origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.credentials.default_same-origin polyfill
if (!request.credentials) {
    // 在这里添加polyfill实现
    console.log('加载Request.credentials.default_same-origin polyfill');
}
```

