# ContentVisibilityAutoStateChangeEvent.skipped API 兼容性数据

## 基本信息

- **API名称**: `ContentVisibilityAutoStateChangeEvent.skipped`
- **MDN文档**: [ContentVisibilityAutoStateChangeEvent.skipped](https://developer.mozilla.org/docs/Web/API/ContentVisibilityAutoStateChangeEvent/skipped)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-contain/#dom-contentvisibilityautostatechangeevent-skipped)
- **标签**: `web-features:content-visibility`

## 使用示例

### 基本用法

```javascript
// ContentVisibilityAutoStateChangeEvent.skipped 使用示例
// 请查阅MDN文档了解具体用法
console.log('ContentVisibilityAutoStateChangeEvent.skipped API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查ContentVisibilityAutoStateChangeEvent.skipped是否支持
function isContentVisibilityAutoStateChangeEventSkippedSupported() {
    return 'skipped' in contentvisibilityautostatechangeevent && typeof contentvisibilityautostatechangeevent.skipped === 'function';
}

if (isContentVisibilityAutoStateChangeEventSkippedSupported()) {
    console.log('ContentVisibilityAutoStateChangeEvent.skipped 支持');
    // 使用ContentVisibilityAutoStateChangeEvent.skipped
} else {
    console.log('ContentVisibilityAutoStateChangeEvent.skipped 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ContentVisibilityAutoStateChangeEvent.skipped polyfill
if (!contentvisibilityautostatechangeevent.skipped) {
    // 在这里添加polyfill实现
    console.log('加载ContentVisibilityAutoStateChangeEvent.skipped polyfill');
}
```

