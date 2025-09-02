# fetch.init_priority_parameter API 兼容性数据

## 基本信息

- **API名称**: `fetch.init_priority_parameter`
- **标签**: `web-features:fetch-priority`
- **描述**: `init.priority` parameter

## 使用示例

### 基本用法

```javascript
// fetch.init_priority_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('fetch.init_priority_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 101 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 101

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查fetch.init_priority_parameter是否支持
function isfetchInit_priority_parameterSupported() {
    return 'init_priority_parameter' in fetch && typeof fetch.init_priority_parameter === 'function';
}

if (isfetchInit_priority_parameterSupported()) {
    console.log('fetch.init_priority_parameter 支持');
    // 使用fetch.init_priority_parameter
} else {
    console.log('fetch.init_priority_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// fetch.init_priority_parameter polyfill
if (!fetch.init_priority_parameter) {
    // 在这里添加polyfill实现
    console.log('加载fetch.init_priority_parameter polyfill');
}
```

