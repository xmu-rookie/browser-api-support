# console.group_static API 兼容性数据

## 基本信息

- **API名称**: `console.group_static`
- **MDN文档**: [console.group_static](https://developer.mozilla.org/docs/Web/API/console/group_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#group)
- **标签**: `web-features:console`
- **描述**: `group()` static method

## 使用示例

### 基本用法

```javascript
// console.group_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.group_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 8.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 11

### Node.js

- **支持版本**: 8.5.0

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### WebView Android

- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.group_static是否支持
function isconsoleGroup_staticSupported() {
    return 'group_static' in console && typeof console.group_static === 'function';
}

if (isconsoleGroup_staticSupported()) {
    console.log('console.group_static 支持');
    // 使用console.group_static
} else {
    console.log('console.group_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.group_static polyfill
if (!console.group_static) {
    // 在这里添加polyfill实现
    console.log('加载console.group_static polyfill');
}
```

