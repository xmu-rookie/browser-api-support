# MutationObserver.takeRecords API 兼容性数据

## 基本信息

- **API名称**: `MutationObserver.takeRecords`
- **MDN文档**: [MutationObserver.takeRecords](https://developer.mozilla.org/docs/Web/API/MutationObserver/takeRecords)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-mutationobserver-takerecords①)
- **标签**: `web-features:mutationobserver`

## 使用示例

### 基本用法

```javascript
// MutationObserver.takeRecords 使用示例
// 请查阅MDN文档了解具体用法
console.log('MutationObserver.takeRecords API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 14 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 14

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查MutationObserver.takeRecords是否支持
function isMutationObserverTakeRecordsSupported() {
    return 'takeRecords' in mutationobserver && typeof mutationobserver.takeRecords === 'function';
}

if (isMutationObserverTakeRecordsSupported()) {
    console.log('MutationObserver.takeRecords 支持');
    // 使用MutationObserver.takeRecords
} else {
    console.log('MutationObserver.takeRecords 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MutationObserver.takeRecords polyfill
if (!mutationobserver.takeRecords) {
    // 在这里添加polyfill实现
    console.log('加载MutationObserver.takeRecords polyfill');
}
```

