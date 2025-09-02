# console.table_static API 兼容性数据

## 基本信息

- **API名称**: `console.table_static`
- **MDN文档**: [console.table_static](https://developer.mozilla.org/docs/Web/API/console/table_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#table)
- **标签**: `web-features:console`
- **描述**: `table()` static method

## 使用示例

### 基本用法

```javascript
// console.table_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.table_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 13 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 10.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 27

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 34

### Node.js

- **支持版本**: 10.0.0

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.table_static是否支持
function isconsoleTable_staticSupported() {
    return 'table_static' in console && typeof console.table_static === 'function';
}

if (isconsoleTable_staticSupported()) {
    console.log('console.table_static 支持');
    // 使用console.table_static
} else {
    console.log('console.table_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.table_static polyfill
if (!console.table_static) {
    // 在这里添加polyfill实现
    console.log('加载console.table_static polyfill');
}
```

