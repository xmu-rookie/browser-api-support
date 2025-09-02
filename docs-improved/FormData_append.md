# FormData.append API 兼容性数据

## 基本信息

- **API名称**: `FormData.append`
- **MDN文档**: [FormData.append](https://developer.mozilla.org/docs/Web/API/FormData/append)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-formdata-append)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// FormData.append 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData.append API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 4 | Before Firefox 7, specifying a [`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) as the data... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | With the "Include local directory pass when uploading files to a server" option enabled, IE will cha... |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 | XHR in Android 4.0 sends empty content for `FormData` with `blob`. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4
- **注意事项**:
  - Before Firefox 7, specifying a [`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) as the data to append to the object, the filename reported in the `Content-Disposition` HTTP header was an empty string, resulting in errors on some servers. Starting with Firefox 7, the filename `blob` is sent.

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - With the "Include local directory pass when uploading files to a server" option enabled, IE will change the filename inside the [`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) on the fly. To have direct control of the sent filename, the developer should send the filename as the third parameter value, i.e. `formData.append(name, value, filename)`.

### Node.js

- **支持版本**: 18.0.0

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 3
- **注意事项**:
  - XHR in Android 4.0 sends empty content for `FormData` with `blob`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查FormData.append是否支持
function isFormDataAppendSupported() {
    return 'append' in formdata && typeof formdata.append === 'function';
}

if (isFormDataAppendSupported()) {
    console.log('FormData.append 支持');
    // 使用FormData.append
} else {
    console.log('FormData.append 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormData.append polyfill
if (!formdata.append) {
    // 在这里添加polyfill实现
    console.log('加载FormData.append polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **filename_parameter**: `filename` parameter

