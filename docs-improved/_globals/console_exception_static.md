# console.exception_static API 兼容性数据

## 基本信息

- **API名称**: `console.exception_static`
- **描述**: `exception()` static method (an alias for `error()`)

## 使用示例

### 基本用法

```javascript
// console.exception_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.exception_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 13 |  |
| Firefox | 28 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 13
- **移除版本**: 79

### Firefox

- **支持版本**: 28

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.exception_static是否支持
function isconsoleException_staticSupported() {
    return 'exception_static' in console && typeof console.exception_static === 'function';
}

if (isconsoleException_staticSupported()) {
    console.log('console.exception_static 支持');
    // 使用console.exception_static
} else {
    console.log('console.exception_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.exception_static polyfill
if (!console.exception_static) {
    // 在这里添加polyfill实现
    console.log('加载console.exception_static polyfill');
}
```

