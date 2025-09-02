# IDBIndex.locale API 兼容性数据

## 基本信息

- **API名称**: `IDBIndex.locale`
- **MDN文档**: [IDBIndex.locale](https://developer.mozilla.org/docs/Web/API/IDBIndex/locale)

## 使用示例

### 基本用法

```javascript
// IDBIndex.locale 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBIndex.locale API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 43 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 43
- **需要标志**: 
  - dom.indexedDB.experimental: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBIndex.locale是否支持
function isIDBIndexLocaleSupported() {
    return 'locale' in idbindex && typeof idbindex.locale === 'function';
}

if (isIDBIndexLocaleSupported()) {
    console.log('IDBIndex.locale 支持');
    // 使用IDBIndex.locale
} else {
    console.log('IDBIndex.locale 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBIndex.locale polyfill
if (!idbindex.locale) {
    // 在这里添加polyfill实现
    console.log('加载IDBIndex.locale polyfill');
}
```

