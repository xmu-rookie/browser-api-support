# console.profileEnd_static API 兼容性数据

## 基本信息

- **API名称**: `console.profileEnd_static`
- **MDN文档**: [console.profileEnd_static](https://developer.mozilla.org/docs/Web/API/console/profileEnd_static)
- **描述**: `profileEnd()` static method

## 使用示例

### 基本用法

```javascript
// console.profileEnd_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.profileEnd_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.29 |  |
| Edge | 12 |  |
| Firefox | 16 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 8.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### Deno

- **支持版本**: 1.29

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 16
- **移除版本**: 102

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 8.0.0
- **需要标志**: 
  - --inspect: true

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.profileEnd_static是否支持
function isconsoleProfileEnd_staticSupported() {
    return 'profileEnd_static' in console && typeof console.profileEnd_static === 'function';
}

if (isconsoleProfileEnd_staticSupported()) {
    console.log('console.profileEnd_static 支持');
    // 使用console.profileEnd_static
} else {
    console.log('console.profileEnd_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.profileEnd_static polyfill
if (!console.profileEnd_static) {
    // 在这里添加polyfill实现
    console.log('加载console.profileEnd_static polyfill');
}
```

