# Range.deleteContents API 兼容性数据

## 基本信息

- **API名称**: `Range.deleteContents`
- **MDN文档**: [Range.deleteContents](https://developer.mozilla.org/docs/Web/API/Range/deleteContents)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-range-deletecontents)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Range.deleteContents 使用示例
// 请查阅MDN文档了解具体用法
console.log('Range.deleteContents API');
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
// 检查Range.deleteContents是否支持
function isRangeDeleteContentsSupported() {
    return 'deleteContents' in range && typeof range.deleteContents === 'function';
}

if (isRangeDeleteContentsSupported()) {
    console.log('Range.deleteContents 支持');
    // 使用Range.deleteContents
} else {
    console.log('Range.deleteContents 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Range.deleteContents polyfill
if (!range.deleteContents) {
    // 在这里添加polyfill实现
    console.log('加载Range.deleteContents polyfill');
}
```

