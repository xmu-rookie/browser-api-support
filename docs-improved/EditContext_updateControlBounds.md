# EditContext.updateControlBounds API 兼容性数据

## 基本信息

- **API名称**: `EditContext.updateControlBounds`
- **MDN文档**: [EditContext.updateControlBounds](https://developer.mozilla.org/docs/Web/API/EditContext/updateControlBounds)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-editcontext-updatecontrolbounds)
- **标签**: `web-features:edit-context`

## 使用示例

### 基本用法

```javascript
// EditContext.updateControlBounds 使用示例
// 请查阅MDN文档了解具体用法
console.log('EditContext.updateControlBounds API');
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
// 检查EditContext.updateControlBounds是否支持
function isEditContextUpdateControlBoundsSupported() {
    return 'updateControlBounds' in editcontext && typeof editcontext.updateControlBounds === 'function';
}

if (isEditContextUpdateControlBoundsSupported()) {
    console.log('EditContext.updateControlBounds 支持');
    // 使用EditContext.updateControlBounds
} else {
    console.log('EditContext.updateControlBounds 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EditContext.updateControlBounds polyfill
if (!editcontext.updateControlBounds) {
    // 在这里添加polyfill实现
    console.log('加载EditContext.updateControlBounds polyfill');
}
```

