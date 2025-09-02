# EditContext.updateCharacterBounds API 兼容性数据

## 基本信息

- **API名称**: `EditContext.updateCharacterBounds`
- **MDN文档**: [EditContext.updateCharacterBounds](https://developer.mozilla.org/docs/Web/API/EditContext/updateCharacterBounds)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-editcontext-updatecharacterbounds)
- **标签**: `web-features:edit-context`

## 使用示例

### 基本用法

```javascript
// EditContext.updateCharacterBounds 使用示例
// 请查阅MDN文档了解具体用法
console.log('EditContext.updateCharacterBounds API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 121

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EditContext.updateCharacterBounds是否支持
function isEditContextUpdateCharacterBoundsSupported() {
    return 'updateCharacterBounds' in editcontext && typeof editcontext.updateCharacterBounds === 'function';
}

if (isEditContextUpdateCharacterBoundsSupported()) {
    console.log('EditContext.updateCharacterBounds 支持');
    // 使用EditContext.updateCharacterBounds
} else {
    console.log('EditContext.updateCharacterBounds 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EditContext.updateCharacterBounds polyfill
if (!editcontext.updateCharacterBounds) {
    // 在这里添加polyfill实现
    console.log('加载EditContext.updateCharacterBounds polyfill');
}
```

