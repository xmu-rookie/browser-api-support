# Navigator.productSub API 兼容性数据

## 基本信息

- **API名称**: `Navigator.productSub`
- **MDN文档**: [Navigator.productSub](https://developer.mozilla.org/docs/Web/API/Navigator/productSub)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-productsub-dev)

## 使用示例

### 基本用法

```javascript
// Navigator.productSub 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.productSub API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Always returns `20030107`. |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Always returns `20030107`. |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 | Always returns `20030107`. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Always returns `20030107`.

### Edge

- **支持版本**: 12
- **注意事项**:
  - Always returns `20030107`.

### Firefox

- **支持版本**: 1

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 1
- **注意事项**:
  - Always returns `20030107`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.productSub是否支持
function isNavigatorProductSubSupported() {
    return 'productSub' in navigator && typeof navigator.productSub === 'function';
}

if (isNavigatorProductSubSupported()) {
    console.log('Navigator.productSub 支持');
    // 使用Navigator.productSub
} else {
    console.log('Navigator.productSub 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.productSub polyfill
if (!navigator.productSub) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.productSub polyfill');
}
```

