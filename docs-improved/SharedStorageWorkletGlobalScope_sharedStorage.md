# SharedStorageWorkletGlobalScope.sharedStorage API 兼容性数据

## 基本信息

- **API名称**: `SharedStorageWorkletGlobalScope.sharedStorage`
- **MDN文档**: [SharedStorageWorkletGlobalScope.sharedStorage](https://developer.mozilla.org/docs/Web/API/SharedStorageWorkletGlobalScope/sharedStorage)
- **规范文档**: [查看规范](https://wicg.github.io/shared-storage/#dom-sharedstorageworkletglobalscope-sharedstorage)
- **标签**: `web-features:shared-storage`

## 使用示例

### 基本用法

```javascript
// 使用Web Share API
if (navigator.share) {
    navigator.share({
        title: '分享标题',
        text: '分享内容',
        url: 'https://example.com'
    }).then(() => {
        console.log('分享成功');
    }).catch(err => {
        console.error('分享失败:', err);
    });
} else {
    console.log('浏览器不支持Web Share API');
}
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
// 检查SharedStorageWorkletGlobalScope.sharedStorage是否支持
function isSharedStorageWorkletGlobalScopeSharedStorageSupported() {
    return 'sharedStorage' in sharedstorageworkletglobalscope && typeof sharedstorageworkletglobalscope.sharedStorage === 'function';
}

if (isSharedStorageWorkletGlobalScopeSharedStorageSupported()) {
    console.log('SharedStorageWorkletGlobalScope.sharedStorage 支持');
    // 使用SharedStorageWorkletGlobalScope.sharedStorage
} else {
    console.log('SharedStorageWorkletGlobalScope.sharedStorage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedStorageWorkletGlobalScope.sharedStorage polyfill
if (!sharedstorageworkletglobalscope.sharedStorage) {
    // 在这里添加polyfill实现
    console.log('加载SharedStorageWorkletGlobalScope.sharedStorage polyfill');
}
```

