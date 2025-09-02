# ShadowRoot.pointerLockElement API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.pointerLockElement`
- **MDN文档**: [ShadowRoot.pointerLockElement](https://developer.mozilla.org/docs/Web/API/ShadowRoot/pointerLockElement)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-documentorshadowroot-pointerlockelement)
- **标签**: `web-features:pointer-lock`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.pointerLockElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.pointerLockElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10.1

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.pointerLockElement是否支持
function isShadowRootPointerLockElementSupported() {
    return 'pointerLockElement' in shadowroot && typeof shadowroot.pointerLockElement === 'function';
}

if (isShadowRootPointerLockElementSupported()) {
    console.log('ShadowRoot.pointerLockElement 支持');
    // 使用ShadowRoot.pointerLockElement
} else {
    console.log('ShadowRoot.pointerLockElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.pointerLockElement polyfill
if (!shadowroot.pointerLockElement) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.pointerLockElement polyfill');
}
```

