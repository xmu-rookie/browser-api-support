# Navigator.vendorSub API 兼容性数据

## 基本信息

- **API名称**: `Navigator.vendorSub`
- **MDN文档**: [Navigator.vendorSub](https://developer.mozilla.org/docs/Web/API/Navigator/vendorSub)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-vendorsub-dev)

## 使用示例

### 基本用法

```javascript
// Navigator.vendorSub 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.vendorSub API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.vendorSub是否支持
function isNavigatorVendorSubSupported() {
    return 'vendorSub' in navigator && typeof navigator.vendorSub === 'function';
}

if (isNavigatorVendorSubSupported()) {
    console.log('Navigator.vendorSub 支持');
    // 使用Navigator.vendorSub
} else {
    console.log('Navigator.vendorSub 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.vendorSub polyfill
if (!navigator.vendorSub) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.vendorSub polyfill');
}
```

