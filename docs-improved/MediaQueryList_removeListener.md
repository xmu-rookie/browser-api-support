# MediaQueryList.removeListener API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryList.removeListener`
- **MDN文档**: [MediaQueryList.removeListener](https://developer.mozilla.org/docs/Web/API/MediaQueryList/removeListener)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mediaquerylist-removelistener)
- **描述**: `removeListener()`

## 使用示例

### 基本用法

```javascript
// MediaQueryList.removeListener 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryList.removeListener API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaQueryList.removeListener是否支持
function isMediaQueryListRemoveListenerSupported() {
    return 'removeListener' in mediaquerylist && typeof mediaquerylist.removeListener === 'function';
}

if (isMediaQueryListRemoveListenerSupported()) {
    console.log('MediaQueryList.removeListener 支持');
    // 使用MediaQueryList.removeListener
} else {
    console.log('MediaQueryList.removeListener 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryList.removeListener polyfill
if (!mediaquerylist.removeListener) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryList.removeListener polyfill');
}
```

