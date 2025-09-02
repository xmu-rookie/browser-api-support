# CSSStyleDeclaration.getPropertyCSSValue API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleDeclaration.getPropertyCSSValue`
- **MDN文档**: [CSSStyleDeclaration.getPropertyCSSValue](https://developer.mozilla.org/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue)

## 使用示例

### 基本用法

```javascript
// CSSStyleDeclaration.getPropertyCSSValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleDeclaration.getPropertyCSSValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 不支持 |  |
| Firefox | 1 | Only returns a result if called on the result of `getComputedStyle()`. |
| Firefox Android | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 40

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1
- **移除版本**: 61
- **注意事项**:
  - Only returns a result if called on the result of `getComputedStyle()`.

### Firefox Android

- **支持版本**: 4
- **移除版本**: 61

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 4.4
- **移除版本**: 41

