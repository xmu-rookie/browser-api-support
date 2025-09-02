# fetch.init_keepalive_parameter API 兼容性数据

## 基本信息

- **API名称**: `fetch.init_keepalive_parameter`
- **标签**: `web-features:fetch`
- **描述**: `init.keepalive` parameter

## 使用示例

### 基本用法

```javascript
// fetch.init_keepalive_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('fetch.init_keepalive_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 15 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 133

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查fetch.init_keepalive_parameter是否支持
function isfetchInit_keepalive_parameterSupported() {
    return 'init_keepalive_parameter' in fetch && typeof fetch.init_keepalive_parameter === 'function';
}

if (isfetchInit_keepalive_parameterSupported()) {
    console.log('fetch.init_keepalive_parameter 支持');
    // 使用fetch.init_keepalive_parameter
} else {
    console.log('fetch.init_keepalive_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// fetch.init_keepalive_parameter polyfill
if (!fetch.init_keepalive_parameter) {
    // 在这里添加polyfill实现
    console.log('加载fetch.init_keepalive_parameter polyfill');
}
```

