# IDBIndex.name.renaming_through_name_setter API 兼容性数据

## 基本信息

- **API名称**: `IDBIndex.name.renaming_through_name_setter`
- **标签**: `web-features:indexeddb`
- **描述**: Renaming through `name` setter

## 使用示例

### 基本用法

```javascript
// IDBIndex.name.renaming_through_name_setter 使用示例
// 请查阅MDN文档了解具体用法
console.log('IDBIndex.name.renaming_through_name_setter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IDBIndex.name.renaming_through_name_setter是否支持
function isIDBIndexNameSupported() {
    return 'name' in idbindex && typeof idbindex.name === 'function';
}

if (isIDBIndexNameSupported()) {
    console.log('IDBIndex.name.renaming_through_name_setter 支持');
    // 使用IDBIndex.name.renaming_through_name_setter
} else {
    console.log('IDBIndex.name.renaming_through_name_setter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IDBIndex.name.renaming_through_name_setter polyfill
if (!idbindex.name) {
    // 在这里添加polyfill实现
    console.log('加载IDBIndex.name.renaming_through_name_setter polyfill');
}
```

