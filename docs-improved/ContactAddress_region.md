# ContactAddress.region API 兼容性数据

## 基本信息

- **API名称**: `ContactAddress.region`
- **MDN文档**: [ContactAddress.region](https://developer.mozilla.org/docs/Web/API/ContactAddress/region)
- **规范文档**: [查看规范](https://w3c.github.io/contact-picker/#dom-contactaddress-region)
- **标签**: `web-features:contact-picker`

## 使用示例

### 基本用法

```javascript
// ContactAddress.region 使用示例
// 请查阅MDN文档了解具体用法
console.log('ContactAddress.region API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 84 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 14.0 | This API was exposed but failed upon opening a contact selector. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 84

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 14.0
- **移除版本**: 22.0
- **部分实现**: 是
- **注意事项**:
  - This API was exposed but failed upon opening a contact selector.

## 兼容性检查代码

### 特性检测

```javascript
// 检查ContactAddress.region是否支持
function isContactAddressRegionSupported() {
    return 'region' in contactaddress && typeof contactaddress.region === 'function';
}

if (isContactAddressRegionSupported()) {
    console.log('ContactAddress.region 支持');
    // 使用ContactAddress.region
} else {
    console.log('ContactAddress.region 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ContactAddress.region polyfill
if (!contactaddress.region) {
    // 在这里添加polyfill实现
    console.log('加载ContactAddress.region polyfill');
}
```

