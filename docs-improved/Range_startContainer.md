# Range.startContainer API 兼容性数据

## 基本信息

- **API名称**: `Range.startContainer`
- **MDN文档**: [Range.startContainer](https://developer.mozilla.org/docs/Web/API/Range/startContainer)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-range-startcontainer①)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Range.startContainer 使用示例
// 请查阅MDN文档了解具体用法
console.log('Range.startContainer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Range.startContainer是否支持
function isRangeStartContainerSupported() {
    return 'startContainer' in range && typeof range.startContainer === 'function';
}

if (isRangeStartContainerSupported()) {
    console.log('Range.startContainer 支持');
    // 使用Range.startContainer
} else {
    console.log('Range.startContainer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Range.startContainer polyfill
if (!range.startContainer) {
    // 在这里添加polyfill实现
    console.log('加载Range.startContainer polyfill');
}
```

