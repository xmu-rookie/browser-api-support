# NavigationDestination.index API 兼容性数据

## 基本信息

- **API名称**: `NavigationDestination.index`
- **MDN文档**: [NavigationDestination.index](https://developer.mozilla.org/docs/Web/API/NavigationDestination/index)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-navigationdestination-interface:dom-navigationdestination-index-2)
- **标签**: `web-features:navigation`

## 使用示例

### 基本用法

```javascript
// NavigationDestination.index 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigationDestination.index API');
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
// 检查NavigationDestination.index是否支持
function isNavigationDestinationIndexSupported() {
    return 'index' in navigationdestination && typeof navigationdestination.index === 'function';
}

if (isNavigationDestinationIndexSupported()) {
    console.log('NavigationDestination.index 支持');
    // 使用NavigationDestination.index
} else {
    console.log('NavigationDestination.index 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigationDestination.index polyfill
if (!navigationdestination.index) {
    // 在这里添加polyfill实现
    console.log('加载NavigationDestination.index polyfill');
}
```

