# StorageBucket.setExpires API 兼容性数据

## 基本信息

- **API名称**: `StorageBucket.setExpires`
- **规范文档**: [查看规范](https://wicg.github.io/storage-buckets/#dom-storagebucket-setexpires)
- **标签**: `web-features:storage-buckets`

## 使用示例

### 基本用法

```javascript
// StorageBucket.setExpires 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageBucket.setExpires API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 122 |  |
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

- **支持版本**: 122

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageBucket.setExpires是否支持
function isStorageBucketSetExpiresSupported() {
    return 'setExpires' in storagebucket && typeof storagebucket.setExpires === 'function';
}

if (isStorageBucketSetExpiresSupported()) {
    console.log('StorageBucket.setExpires 支持');
    // 使用StorageBucket.setExpires
} else {
    console.log('StorageBucket.setExpires 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageBucket.setExpires polyfill
if (!storagebucket.setExpires) {
    // 在这里添加polyfill实现
    console.log('加载StorageBucket.setExpires polyfill');
}
```

