# FormData.FormData.submitter API 兼容性数据

## 基本信息

- **API名称**: `FormData.FormData.submitter`
- **标签**: `web-features:xhr`
- **描述**: `submitter` parameter

## 使用示例

### 基本用法

```javascript
// FormData.FormData.submitter 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData.FormData.submitter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 112 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 112

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查FormData.FormData.submitter是否支持
function isFormDataFormDataSupported() {
    return 'FormData' in formdata && typeof formdata.FormData === 'function';
}

if (isFormDataFormDataSupported()) {
    console.log('FormData.FormData.submitter 支持');
    // 使用FormData.FormData.submitter
} else {
    console.log('FormData.FormData.submitter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormData.FormData.submitter polyfill
if (!formdata.FormData) {
    // 在这里添加polyfill实现
    console.log('加载FormData.FormData.submitter polyfill');
}
```

