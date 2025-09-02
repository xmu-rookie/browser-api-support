# console.timeStamp_static API 兼容性数据

## 基本信息

- **API名称**: `console.timeStamp_static`
- **MDN文档**: [console.timeStamp_static](https://developer.mozilla.org/docs/Web/API/console/timeStamp_static)
- **描述**: `timeStamp()` static method

## 使用示例

### 基本用法

```javascript
// console.timeStamp_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.timeStamp_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.29 |  |
| Edge | 12 |  |
| Firefox | 39 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Node.js | 8.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 15

### Deno

- **支持版本**: 1.29

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 39

### Internet Explorer

- **支持版本**: 11

### Node.js

- **支持版本**: 8.0.0
- **需要标志**: 
  - --inspect: true

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.timeStamp_static是否支持
function isconsoleTimeStamp_staticSupported() {
    return 'timeStamp_static' in console && typeof console.timeStamp_static === 'function';
}

if (isconsoleTimeStamp_staticSupported()) {
    console.log('console.timeStamp_static 支持');
    // 使用console.timeStamp_static
} else {
    console.log('console.timeStamp_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.timeStamp_static polyfill
if (!console.timeStamp_static) {
    // 在这里添加polyfill实现
    console.log('加载console.timeStamp_static polyfill');
}
```

