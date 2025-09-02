# SharedStorage.clear API 兼容性数据

## 基本信息

- **API名称**: `SharedStorage.clear`
- **MDN文档**: [SharedStorage.clear](https://developer.mozilla.org/docs/Web/API/SharedStorage/clear)
- **规范文档**: [查看规范](https://wicg.github.io/shared-storage/#dom-sharedstorage-clear)
- **标签**: `web-features:shared-storage`

## 使用示例

### 基本用法

```javascript
// SharedStorage.clear 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedStorage.clear API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
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

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedStorage.clear是否支持
function isSharedStorageClearSupported() {
    return 'clear' in sharedstorage && typeof sharedstorage.clear === 'function';
}

if (isSharedStorageClearSupported()) {
    console.log('SharedStorage.clear 支持');
    // 使用SharedStorage.clear
} else {
    console.log('SharedStorage.clear 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedStorage.clear polyfill
if (!sharedstorage.clear) {
    // 在这里添加polyfill实现
    console.log('加载SharedStorage.clear polyfill');
}
```

