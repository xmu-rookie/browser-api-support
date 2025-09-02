# ContactAddress.phone API 兼容性数据

## 基本信息

- **API名称**: `ContactAddress.phone`
- **MDN文档**: [ContactAddress.phone](https://developer.mozilla.org/docs/Web/API/ContactAddress/phone)
- **规范文档**: [查看规范](https://w3c.github.io/contact-picker/#dom-contactaddress-phone)
- **标签**: `web-features:contact-picker`

## 使用示例

### 基本用法

```javascript
// ContactAddress.phone 使用示例
// 请查阅MDN文档了解具体用法
console.log('ContactAddress.phone API');
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
// 检查ContactAddress.phone是否支持
function isContactAddressPhoneSupported() {
    return 'phone' in contactaddress && typeof contactaddress.phone === 'function';
}

if (isContactAddressPhoneSupported()) {
    console.log('ContactAddress.phone 支持');
    // 使用ContactAddress.phone
} else {
    console.log('ContactAddress.phone 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ContactAddress.phone polyfill
if (!contactaddress.phone) {
    // 在这里添加polyfill实现
    console.log('加载ContactAddress.phone polyfill');
}
```

