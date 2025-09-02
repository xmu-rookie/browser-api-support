# NodeList.entries API 兼容性数据

## 基本信息

- **API名称**: `NodeList.entries`
- **MDN文档**: [NodeList.entries](https://developer.mozilla.org/docs/Web/API/NodeList/entries)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// NodeList.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('NodeList.entries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查NodeList.entries是否支持
function isNodeListEntriesSupported() {
    return 'entries' in nodelist && typeof nodelist.entries === 'function';
}

if (isNodeListEntriesSupported()) {
    console.log('NodeList.entries 支持');
    // 使用NodeList.entries
} else {
    console.log('NodeList.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NodeList.entries polyfill
if (!nodelist.entries) {
    // 在这里添加polyfill实现
    console.log('加载NodeList.entries polyfill');
}
```

