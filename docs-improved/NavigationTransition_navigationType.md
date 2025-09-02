# NavigationTransition.navigationType API 兼容性数据

## 基本信息

- **API名称**: `NavigationTransition.navigationType`
- **MDN文档**: [NavigationTransition.navigationType](https://developer.mozilla.org/docs/Web/API/NavigationTransition/navigationType)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-navigationtransition-navigationtype-dev)
- **标签**: `web-features:navigation`

## 使用示例

### 基本用法

```javascript
// NavigationTransition.navigationType 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigationTransition.navigationType API');
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
// 检查NavigationTransition.navigationType是否支持
function isNavigationTransitionNavigationTypeSupported() {
    return 'navigationType' in navigationtransition && typeof navigationtransition.navigationType === 'function';
}

if (isNavigationTransitionNavigationTypeSupported()) {
    console.log('NavigationTransition.navigationType 支持');
    // 使用NavigationTransition.navigationType
} else {
    console.log('NavigationTransition.navigationType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigationTransition.navigationType polyfill
if (!navigationtransition.navigationType) {
    // 在这里添加polyfill实现
    console.log('加载NavigationTransition.navigationType polyfill');
}
```

