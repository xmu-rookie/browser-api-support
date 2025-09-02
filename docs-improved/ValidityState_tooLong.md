# ValidityState.tooLong API 兼容性数据

## 基本信息

- **API名称**: `ValidityState.tooLong`
- **MDN文档**: [ValidityState.tooLong](https://developer.mozilla.org/docs/Web/API/ValidityState/tooLong)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-validitystate-toolong-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// ValidityState.tooLong 使用示例
// 请查阅MDN文档了解具体用法
console.log('ValidityState.tooLong API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Not supported in the unlikely case of the value being initially set too long, and then changed by th... |
| Firefox | 4 | Not supported in the unlikely case of the value being initially set too long, and then changed by th... |
| Firefox Android | 64 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12
- **注意事项**:
  - Not supported in the unlikely case of the value being initially set too long, and then changed by the user to a still incorrect state. Per caniuse.com.

### Firefox

- **支持版本**: 4
- **注意事项**:
  - Not supported in the unlikely case of the value being initially set too long, and then changed by the user to a still incorrect state. Per caniuse.com.

### Firefox Android

- **支持版本**: 64

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ValidityState.tooLong是否支持
function isValidityStateTooLongSupported() {
    return 'tooLong' in validitystate && typeof validitystate.tooLong === 'function';
}

if (isValidityStateTooLongSupported()) {
    console.log('ValidityState.tooLong 支持');
    // 使用ValidityState.tooLong
} else {
    console.log('ValidityState.tooLong 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ValidityState.tooLong polyfill
if (!validitystate.tooLong) {
    // 在这里添加polyfill实现
    console.log('加载ValidityState.tooLong polyfill');
}
```

