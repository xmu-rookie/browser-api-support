# Navigator.registerProtocolHandler.scheme_parameter_magnet API 兼容性数据

## 基本信息

- **API名称**: `Navigator.registerProtocolHandler.scheme_parameter_magnet`
- **标签**: `web-features:registerprotocolhandler`
- **描述**: `scheme` parameter supports `magnet`

## 使用示例

### 基本用法

```javascript
// Navigator.registerProtocolHandler.scheme_parameter_magnet 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.registerProtocolHandler.scheme_parameter_magnet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 2 |  |
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

- **支持版本**: 30

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 2

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.registerProtocolHandler.scheme_parameter_magnet是否支持
function isNavigatorRegisterProtocolHandlerSupported() {
    return 'registerProtocolHandler' in navigator && typeof navigator.registerProtocolHandler === 'function';
}

if (isNavigatorRegisterProtocolHandlerSupported()) {
    console.log('Navigator.registerProtocolHandler.scheme_parameter_magnet 支持');
    // 使用Navigator.registerProtocolHandler.scheme_parameter_magnet
} else {
    console.log('Navigator.registerProtocolHandler.scheme_parameter_magnet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.registerProtocolHandler.scheme_parameter_magnet polyfill
if (!navigator.registerProtocolHandler) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.registerProtocolHandler.scheme_parameter_magnet polyfill');
}
```

