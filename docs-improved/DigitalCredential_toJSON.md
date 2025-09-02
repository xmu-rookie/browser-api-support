# DigitalCredential.toJSON API 兼容性数据

## 基本信息

- **API名称**: `DigitalCredential.toJSON`
- **规范文档**: [查看规范](https://w3c-fedid.github.io/digital-credentials/#dom-digitalcredential)

## 使用示例

### 基本用法

```javascript
// DigitalCredential.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('DigitalCredential.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DigitalCredential.toJSON是否支持
function isDigitalCredentialToJSONSupported() {
    return 'toJSON' in digitalcredential && typeof digitalcredential.toJSON === 'function';
}

if (isDigitalCredentialToJSONSupported()) {
    console.log('DigitalCredential.toJSON 支持');
    // 使用DigitalCredential.toJSON
} else {
    console.log('DigitalCredential.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DigitalCredential.toJSON polyfill
if (!digitalcredential.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载DigitalCredential.toJSON polyfill');
}
```

