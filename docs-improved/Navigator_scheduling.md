# Navigator.scheduling API 兼容性数据

## 基本信息

- **API名称**: `Navigator.scheduling`
- **MDN文档**: [Navigator.scheduling](https://developer.mozilla.org/docs/Web/API/Navigator/scheduling)
- **规范文档**: [查看规范](https://wicg.github.io/is-input-pending/#dom-navigator-scheduling)
- **标签**: `web-features:is-input-pending`

## 使用示例

### 基本用法

```javascript
// Navigator.scheduling 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.scheduling API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 74 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 74

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.scheduling是否支持
function isNavigatorSchedulingSupported() {
    return 'scheduling' in navigator && typeof navigator.scheduling === 'function';
}

if (isNavigatorSchedulingSupported()) {
    console.log('Navigator.scheduling 支持');
    // 使用Navigator.scheduling
} else {
    console.log('Navigator.scheduling 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.scheduling polyfill
if (!navigator.scheduling) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.scheduling polyfill');
}
```

