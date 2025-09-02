# Navigator.connection API 兼容性数据

## 基本信息

- **API名称**: `Navigator.connection`
- **MDN文档**: [Navigator.connection](https://developer.mozilla.org/docs/Web/API/Navigator/connection)
- **规范文档**: [查看规范](https://wicg.github.io/netinfo/#connection-attribute)
- **标签**: `web-features:network-information`

## 使用示例

### 基本用法

```javascript
// Navigator.connection 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.connection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 38 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 14 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 37 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 50 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Chrome Android

- **支持版本**: 38

### Firefox

- **支持版本**: 31
- **移除版本**: 32

### Firefox Android

- **支持版本**: 14
- **移除版本**: 99

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 37

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.connection是否支持
function isNavigatorConnectionSupported() {
    return 'connection' in navigator && typeof navigator.connection === 'function';
}

if (isNavigatorConnectionSupported()) {
    console.log('Navigator.connection 支持');
    // 使用Navigator.connection
} else {
    console.log('Navigator.connection 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.connection polyfill
if (!navigator.connection) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.connection polyfill');
}
```

