# ContactsManager API 兼容性数据

## 基本信息

- **API名称**: `ContactsManager`
- **MDN文档**: [ContactsManager](https://developer.mozilla.org/docs/Web/API/ContactsManager)
- **规范文档**: [查看规范](https://w3c.github.io/contact-picker/#contacts-manager)
- **标签**: `web-features:contact-picker`

## 使用示例

### 基本用法

```javascript
// ContactsManager 使用示例
// 请查阅MDN文档了解具体用法
console.log('ContactsManager API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | ❌ 不支持 |  |
| Chrome Android | 80 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 14.5 |  |
| Samsung Internet | 14.0 (部分支持) | This API was exposed but failed upon opening a contact selector. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 14.5

### Samsung Internet

- **支持版本**: 14.0
- **移除版本**: 22.0
- **部分实现**: 是
- **注意事项**:
  - This API was exposed but failed upon opening a contact selector.

## 兼容性检查代码

### 特性检测

```javascript
// 检查ContactsManager是否支持
function isContactsManagerSupported() {
    return 'ContactsManager' in window || typeof ContactsManager !== 'undefined';
}

if (isContactsManagerSupported()) {
    console.log('ContactsManager 支持');
    // 使用ContactsManager
} else {
    console.log('ContactsManager 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ContactsManager polyfill
if (!window.ContactsManager) {
    // 在这里添加polyfill实现
    console.log('加载ContactsManager polyfill');
}
```

