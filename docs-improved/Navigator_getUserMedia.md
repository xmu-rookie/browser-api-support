# Navigator.getUserMedia API 兼容性数据

## 基本信息

- **API名称**: `Navigator.getUserMedia`
- **MDN文档**: [Navigator.getUserMedia](https://developer.mozilla.org/docs/Web/API/Navigator/getUserMedia)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-navigator-getusermedia)

## 使用示例

### 基本用法

```javascript
// Navigator.getUserMedia 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.getUserMedia API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 24 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 40 |  |
| Opera Android | 41 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 53 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53
- **支持版本**: 21
- **前缀**: webkit

### Edge

- **支持版本**: 12
- **支持版本**: 79
- **前缀**: webkit

### Firefox

- **支持版本**: 17
- **前缀**: moz

### Firefox Android

- **支持版本**: 24
- **前缀**: moz

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 40
- **支持版本**: 15
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 15

### Opera Android

- **支持版本**: 41
- **支持版本**: 14
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 14

### Safari

- **支持版本**: 11
- **移除版本**: 12

### WebView Android

- **支持版本**: 53
- **支持版本**: 40
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.getUserMedia是否支持
function isNavigatorGetUserMediaSupported() {
    return 'getUserMedia' in navigator && typeof navigator.getUserMedia === 'function';
}

if (isNavigatorGetUserMediaSupported()) {
    console.log('Navigator.getUserMedia 支持');
    // 使用Navigator.getUserMedia
} else {
    console.log('Navigator.getUserMedia 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.getUserMedia polyfill
if (!navigator.getUserMedia) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.getUserMedia polyfill');
}
```

