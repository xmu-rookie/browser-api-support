# FormData.keys API 兼容性数据

## 基本信息

- **API名称**: `FormData.keys`
- **MDN文档**: [FormData.keys](https://developer.mozilla.org/docs/Web/API/FormData/keys)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// FormData.keys 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData.keys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 18 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 50

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 44

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FormData.keys是否支持
function isFormDataKeysSupported() {
    return 'keys' in formdata && typeof formdata.keys === 'function';
}

if (isFormDataKeysSupported()) {
    console.log('FormData.keys 支持');
    // 使用FormData.keys
} else {
    console.log('FormData.keys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormData.keys polyfill
if (!formdata.keys) {
    // 在这里添加polyfill实现
    console.log('加载FormData.keys polyfill');
}
```

