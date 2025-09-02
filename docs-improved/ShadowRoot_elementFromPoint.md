# ShadowRoot.elementFromPoint API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.elementFromPoint`
- **MDN文档**: [ShadowRoot.elementFromPoint](https://developer.mozilla.org/docs/Web/API/ShadowRoot/elementFromPoint)

## 使用示例

### 基本用法

```javascript
// ShadowRoot.elementFromPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.elementFromPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 | Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug ... |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53
- **注意事项**:
  - Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug 40537452](https://crbug.com/40537452).

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.elementFromPoint是否支持
function isShadowRootElementFromPointSupported() {
    return 'elementFromPoint' in shadowroot && typeof shadowroot.elementFromPoint === 'function';
}

if (isShadowRootElementFromPointSupported()) {
    console.log('ShadowRoot.elementFromPoint 支持');
    // 使用ShadowRoot.elementFromPoint
} else {
    console.log('ShadowRoot.elementFromPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.elementFromPoint polyfill
if (!shadowroot.elementFromPoint) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.elementFromPoint polyfill');
}
```

