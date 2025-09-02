# SharedStorageClearMethod.SharedStorageClearMethod API 兼容性数据

## 基本信息

- **API名称**: `SharedStorageClearMethod.SharedStorageClearMethod`
- **规范文档**: [查看规范](https://wicg.github.io/shared-storage/#dom-sharedstorageclearmethod-sharedstorageclearmethod)
- **标签**: `web-features:shared-storage-locks`
- **描述**: `SharedStorageClearMethod()` constructor

## 使用示例

### 基本用法

```javascript
// SharedStorageClearMethod.SharedStorageClearMethod 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedStorageClearMethod.SharedStorageClearMethod API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 134 |  |
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
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 134

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedStorageClearMethod.SharedStorageClearMethod是否支持
function isSharedStorageClearMethodSharedStorageClearMethodSupported() {
    return 'SharedStorageClearMethod' in sharedstorageclearmethod && typeof sharedstorageclearmethod.SharedStorageClearMethod === 'function';
}

if (isSharedStorageClearMethodSharedStorageClearMethodSupported()) {
    console.log('SharedStorageClearMethod.SharedStorageClearMethod 支持');
    // 使用SharedStorageClearMethod.SharedStorageClearMethod
} else {
    console.log('SharedStorageClearMethod.SharedStorageClearMethod 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedStorageClearMethod.SharedStorageClearMethod polyfill
if (!sharedstorageclearmethod.SharedStorageClearMethod) {
    // 在这里添加polyfill实现
    console.log('加载SharedStorageClearMethod.SharedStorageClearMethod polyfill');
}
```

