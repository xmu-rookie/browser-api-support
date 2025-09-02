# File.webkitRelativePath API 兼容性数据

## 基本信息

- **API名称**: `File.webkitRelativePath`
- **MDN文档**: [File.webkitRelativePath](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-file-webkitrelativepath)

## 使用示例

### 基本用法

```javascript
// File.webkitRelativePath 使用示例
// 请查阅MDN文档了解具体用法
console.log('File.webkitRelativePath API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 13 |  |
| Firefox | 50 |  |
| Firefox Android | 142 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
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

- **支持版本**: 13

### Firefox

- **支持版本**: 50

### Firefox Android

- **支持版本**: 142
- **支持版本**: 141
- **移除版本**: 142
- **部分实现**: 是
- **注意事项**:
  - Always an empty string ([bug 1973726](https://bugzil.la/1973726)).

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查File.webkitRelativePath是否支持
function isFileWebkitRelativePathSupported() {
    return 'webkitRelativePath' in file && typeof file.webkitRelativePath === 'function';
}

if (isFileWebkitRelativePathSupported()) {
    console.log('File.webkitRelativePath 支持');
    // 使用File.webkitRelativePath
} else {
    console.log('File.webkitRelativePath 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// File.webkitRelativePath polyfill
if (!file.webkitRelativePath) {
    // 在这里添加polyfill实现
    console.log('加载File.webkitRelativePath polyfill');
}
```

