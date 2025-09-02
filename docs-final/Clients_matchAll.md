# Clients.matchAll API 兼容性数据

## 基本信息

- **API名称**: `Clients.matchAll`
- **MDN文档**: [Clients.matchAll](https://developer.mozilla.org/docs/Web/API/Clients/matchAll)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#clients-matchall)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Clients.matchAll 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clients.matchAll API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 | `Client` objects returned in most recent focus order. |
| Chrome Android | 同主版本 |  |
| Edge | 17 | `Client` objects returned in most recent focus order. |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 29 |  |
| Opera Android | 29 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42
- **注意事项**:
  - `Client` objects returned in most recent focus order.

### Edge

- **支持版本**: 17
- **注意事项**:
  - `Client` objects returned in most recent focus order.

### Firefox

- **支持版本**: 54
- **支持版本**: 44
- **移除版本**: 54
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 54, `Client` objects were not returned in the most recent focus order as required by the specification.

### Opera

- **支持版本**: 29

### Opera Android

- **支持版本**: 29

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 相关子API

该API包含以下子功能：

- **options_includeUncontrolled_parameter**: `options.includeUncontrolled` parameter

