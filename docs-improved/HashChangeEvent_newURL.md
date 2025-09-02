# HashChangeEvent.newURL API 兼容性数据

## 基本信息

- **API名称**: `HashChangeEvent.newURL`
- **MDN文档**: [HashChangeEvent.newURL](https://developer.mozilla.org/docs/Web/API/HashChangeEvent/newURL)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-hashchangeevent-newurl-dev)
- **标签**: `web-features:hashchange`

## 使用示例

### 基本用法

```javascript
// HashChangeEvent.newURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('HashChangeEvent.newURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HashChangeEvent.newURL是否支持
function isHashChangeEventNewURLSupported() {
    return 'newURL' in hashchangeevent && typeof hashchangeevent.newURL === 'function';
}

if (isHashChangeEventNewURLSupported()) {
    console.log('HashChangeEvent.newURL 支持');
    // 使用HashChangeEvent.newURL
} else {
    console.log('HashChangeEvent.newURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HashChangeEvent.newURL polyfill
if (!hashchangeevent.newURL) {
    // 在这里添加polyfill实现
    console.log('加载HashChangeEvent.newURL polyfill');
}
```

