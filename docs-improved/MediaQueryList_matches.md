# MediaQueryList.matches API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryList.matches`
- **MDN文档**: [MediaQueryList.matches](https://developer.mozilla.org/docs/Web/API/MediaQueryList/matches)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mediaquerylist-matches)
- **标签**: `web-features:matchmedia`

## 使用示例

### 基本用法

```javascript
// MediaQueryList.matches 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryList.matches API');
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
// 检查MediaQueryList.matches是否支持
function isMediaQueryListMatchesSupported() {
    return 'matches' in mediaquerylist && typeof mediaquerylist.matches === 'function';
}

if (isMediaQueryListMatchesSupported()) {
    console.log('MediaQueryList.matches 支持');
    // 使用MediaQueryList.matches
} else {
    console.log('MediaQueryList.matches 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryList.matches polyfill
if (!mediaquerylist.matches) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryList.matches polyfill');
}
```

