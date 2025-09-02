# Navigator.taintEnabled API 兼容性数据

## 基本信息

- **API名称**: `Navigator.taintEnabled`
- **MDN文档**: [Navigator.taintEnabled](https://developer.mozilla.org/docs/Web/API/Navigator/taintEnabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-taintenabled)

## 使用示例

### 基本用法

```javascript
// Navigator.taintEnabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.taintEnabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 6

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: ≤12.1
- **移除版本**: 15

### Opera Android

- **支持版本**: ≤12.1
- **移除版本**: 14

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.taintEnabled是否支持
function isNavigatorTaintEnabledSupported() {
    return 'taintEnabled' in navigator && typeof navigator.taintEnabled === 'function';
}

if (isNavigatorTaintEnabledSupported()) {
    console.log('Navigator.taintEnabled 支持');
    // 使用Navigator.taintEnabled
} else {
    console.log('Navigator.taintEnabled 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.taintEnabled polyfill
if (!navigator.taintEnabled) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.taintEnabled polyfill');
}
```

