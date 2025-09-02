# ElementInternals.ariaAtomic API 兼容性数据

## 基本信息

- **API名称**: `ElementInternals.ariaAtomic`
- **MDN文档**: [ElementInternals.ariaAtomic](https://developer.mozilla.org/docs/Web/API/ElementInternals/ariaAtomic)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariaatomic)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// ElementInternals.ariaAtomic 使用示例
// 请查阅MDN文档了解具体用法
console.log('ElementInternals.ariaAtomic API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 119

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ElementInternals.ariaAtomic是否支持
function isElementInternalsAriaAtomicSupported() {
    return 'ariaAtomic' in elementinternals && typeof elementinternals.ariaAtomic === 'function';
}

if (isElementInternalsAriaAtomicSupported()) {
    console.log('ElementInternals.ariaAtomic 支持');
    // 使用ElementInternals.ariaAtomic
} else {
    console.log('ElementInternals.ariaAtomic 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ElementInternals.ariaAtomic polyfill
if (!elementinternals.ariaAtomic) {
    // 在这里添加polyfill实现
    console.log('加载ElementInternals.ariaAtomic polyfill');
}
```

