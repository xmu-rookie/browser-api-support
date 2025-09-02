# FormData.set API 兼容性数据

## 基本信息

- **API名称**: `FormData.set`
- **MDN文档**: [FormData.set](https://developer.mozilla.org/docs/Web/API/FormData/set)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-formdata-set)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// FormData.set 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData.set API');
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
// 检查FormData.set是否支持
function isFormDataSetSupported() {
    return 'set' in formdata && typeof formdata.set === 'function';
}

if (isFormDataSetSupported()) {
    console.log('FormData.set 支持');
    // 使用FormData.set
} else {
    console.log('FormData.set 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormData.set polyfill
if (!formdata.set) {
    // 在这里添加polyfill实现
    console.log('加载FormData.set polyfill');
}
```

