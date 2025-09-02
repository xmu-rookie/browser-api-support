# FileList API 兼容性数据

## 基本信息

- **API名称**: `FileList`
- **MDN文档**: [FileList](https://developer.mozilla.org/docs/Web/API/FileList)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#filelist-section,https://html.spec.whatwg.org/multipage/input.html#dom-input-files-dev)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// FileList 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| deno | ❌ 不支持 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 11.1 |  |
| Opera Android | 11.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 11.1

### Opera Android

- **支持版本**: 11.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileList是否支持
function isFileListSupported() {
    return 'FileList' in window || typeof FileList !== 'undefined';
}

if (isFileListSupported()) {
    console.log('FileList 支持');
    // 使用FileList
} else {
    console.log('FileList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileList polyfill
if (!window.FileList) {
    // 在这里添加polyfill实现
    console.log('加载FileList polyfill');
}
```

