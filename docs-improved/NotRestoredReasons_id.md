# NotRestoredReasons.id API 兼容性数据

## 基本信息

- **API名称**: `NotRestoredReasons.id`
- **MDN文档**: [NotRestoredReasons.id](https://developer.mozilla.org/docs/Web/API/NotRestoredReasons/id)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-not-restored-reasons-id)
- **标签**: `web-features:bfcache-blocking-reasons`

## 使用示例

### 基本用法

```javascript
// NotRestoredReasons.id 使用示例
// 请查阅MDN文档了解具体用法
console.log('NotRestoredReasons.id API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
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

- **支持版本**: 125

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NotRestoredReasons.id是否支持
function isNotRestoredReasonsIdSupported() {
    return 'id' in notrestoredreasons && typeof notrestoredreasons.id === 'function';
}

if (isNotRestoredReasonsIdSupported()) {
    console.log('NotRestoredReasons.id 支持');
    // 使用NotRestoredReasons.id
} else {
    console.log('NotRestoredReasons.id 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NotRestoredReasons.id polyfill
if (!notrestoredreasons.id) {
    // 在这里添加polyfill实现
    console.log('加载NotRestoredReasons.id polyfill');
}
```

