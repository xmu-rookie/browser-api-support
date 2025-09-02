# ContentIndex API 兼容性数据

## 基本信息

- **API名称**: `ContentIndex`
- **MDN文档**: [ContentIndex](https://developer.mozilla.org/docs/Web/API/ContentIndex)
- **规范文档**: [查看规范](https://wicg.github.io/content-index/spec/#content-index)
- **标签**: `web-features:content-index`

## 使用示例

### 基本用法

```javascript
// ContentIndex 使用示例
// 请查阅MDN文档了解具体用法
console.log('ContentIndex API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | ❌ 不支持 |  |
| Chrome Android | 84 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 84

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ContentIndex是否支持
function isContentIndexSupported() {
    return 'ContentIndex' in window || typeof ContentIndex !== 'undefined';
}

if (isContentIndexSupported()) {
    console.log('ContentIndex 支持');
    // 使用ContentIndex
} else {
    console.log('ContentIndex 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ContentIndex polyfill
if (!window.ContentIndex) {
    // 在这里添加polyfill实现
    console.log('加载ContentIndex polyfill');
}
```

