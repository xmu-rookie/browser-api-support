# File.lastModifiedDate API 兼容性数据

## 基本信息

- **API名称**: `File.lastModifiedDate`
- **MDN文档**: [File.lastModifiedDate](https://developer.mozilla.org/docs/Web/API/File/lastModifiedDate)

## 使用示例

### 基本用法

```javascript
// File.lastModifiedDate 使用示例
// 请查阅MDN文档了解具体用法
console.log('File.lastModifiedDate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 不支持 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15
- **移除版本**: 61

### Firefox Android

- **支持版本**: 不支持

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 7
- **移除版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查File.lastModifiedDate是否支持
function isFileLastModifiedDateSupported() {
    return 'lastModifiedDate' in file && typeof file.lastModifiedDate === 'function';
}

if (isFileLastModifiedDateSupported()) {
    console.log('File.lastModifiedDate 支持');
    // 使用File.lastModifiedDate
} else {
    console.log('File.lastModifiedDate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// File.lastModifiedDate polyfill
if (!file.lastModifiedDate) {
    // 在这里添加polyfill实现
    console.log('加载File.lastModifiedDate polyfill');
}
```

