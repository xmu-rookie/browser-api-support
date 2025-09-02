# FormData.get API 兼容性数据

## 基本信息

- **API名称**: `FormData.get`
- **MDN文档**: [FormData.get](https://developer.mozilla.org/docs/Web/API/FormData/get)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-formdata-get)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// FormData.get 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData.get API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 18 |  |
| Firefox | 39 |  |
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

- **支持版本**: 39

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FormData.get是否支持
function isFormDataGetSupported() {
    return 'get' in formdata && typeof formdata.get === 'function';
}

if (isFormDataGetSupported()) {
    console.log('FormData.get 支持');
    // 使用FormData.get
} else {
    console.log('FormData.get 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormData.get polyfill
if (!formdata.get) {
    // 在这里添加polyfill实现
    console.log('加载FormData.get polyfill');
}
```

