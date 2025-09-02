# Navigation.back API 兼容性数据

## 基本信息

- **API名称**: `Navigation.back`
- **MDN文档**: [Navigation.back](https://developer.mozilla.org/docs/Web/API/Navigation/back)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-navigation-back-dev)
- **标签**: `web-features:navigation`

## 使用示例

### 基本用法

```javascript
// Navigation.back 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigation.back API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 102

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigation.back是否支持
function isNavigationBackSupported() {
    return 'back' in navigation && typeof navigation.back === 'function';
}

if (isNavigationBackSupported()) {
    console.log('Navigation.back 支持');
    // 使用Navigation.back
} else {
    console.log('Navigation.back 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigation.back polyfill
if (!navigation.back) {
    // 在这里添加polyfill实现
    console.log('加载Navigation.back polyfill');
}
```

