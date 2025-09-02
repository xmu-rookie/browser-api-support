# Navigator.ink API 兼容性数据

## 基本信息

- **API名称**: `Navigator.ink`
- **MDN文档**: [Navigator.ink](https://developer.mozilla.org/docs/Web/API/Navigator/ink)
- **规范文档**: [查看规范](https://wicg.github.io/ink-enhancement/#navigator-interface-extensions)
- **标签**: `web-features:ink`

## 使用示例

### 基本用法

```javascript
// Navigator.ink 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.ink API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 93 |  |
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

- **支持版本**: 94

### Edge

- **支持版本**: 93

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.ink是否支持
function isNavigatorInkSupported() {
    return 'ink' in navigator && typeof navigator.ink === 'function';
}

if (isNavigatorInkSupported()) {
    console.log('Navigator.ink 支持');
    // 使用Navigator.ink
} else {
    console.log('Navigator.ink 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.ink polyfill
if (!navigator.ink) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.ink polyfill');
}
```

