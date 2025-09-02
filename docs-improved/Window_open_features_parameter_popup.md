# Window.open.features_parameter_popup API 兼容性数据

## 基本信息

- **API名称**: `Window.open.features_parameter_popup`
- **标签**: `web-features:window`
- **描述**: `features` parameter accepts `"popup"` value

## 使用示例

### 基本用法

```javascript
// Window.open.features_parameter_popup 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.open.features_parameter_popup API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 98 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 96 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 不支持 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 98

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 96

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.open.features_parameter_popup是否支持
function isWindowOpenSupported() {
    return 'open' in window && typeof window.open === 'function';
}

if (isWindowOpenSupported()) {
    console.log('Window.open.features_parameter_popup 支持');
    // 使用Window.open.features_parameter_popup
} else {
    console.log('Window.open.features_parameter_popup 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.open.features_parameter_popup polyfill
if (!window.open) {
    // 在这里添加polyfill实现
    console.log('加载Window.open.features_parameter_popup polyfill');
}
```

