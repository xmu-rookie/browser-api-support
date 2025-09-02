# Document.queryCommandEnabled API 兼容性数据

## 基本信息

- **API名称**: `Document.queryCommandEnabled`
- **MDN文档**: [Document.queryCommandEnabled](https://developer.mozilla.org/docs/Web/API/Document/queryCommandEnabled)
- **标签**: `web-features:execcommand`

## 使用示例

### 基本用法

```javascript
// Document.queryCommandEnabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.queryCommandEnabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 69
- **支持版本**: 41
- **移除版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.
- **支持版本**: 1
- **移除版本**: 41
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.
  - `queryCommandEnabled` with arguments `cut`, `copy` or `paste` would throw errors unless the script had special privileges.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 2

