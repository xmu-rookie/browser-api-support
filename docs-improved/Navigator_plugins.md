# Navigator.plugins API 兼容性数据

## 基本信息

- **API名称**: `Navigator.plugins`
- **MDN文档**: [Navigator.plugins](https://developer.mozilla.org/docs/Web/API/Navigator/plugins)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-plugins)

## 使用示例

### 基本用法

```javascript
// Navigator.plugins 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.plugins API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.plugins是否支持
function isNavigatorPluginsSupported() {
    return 'plugins' in navigator && typeof navigator.plugins === 'function';
}

if (isNavigatorPluginsSupported()) {
    console.log('Navigator.plugins 支持');
    // 使用Navigator.plugins
} else {
    console.log('Navigator.plugins 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.plugins polyfill
if (!navigator.plugins) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.plugins polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **returns_plugins**: Returns plugins rather than hard-coded PDF plugin values

