# Request.targetAddressSpace API 兼容性数据

## 基本信息

- **API名称**: `Request.targetAddressSpace`
- **规范文档**: [查看规范](https://wicg.github.io/local-network-access/#dom-request-targetaddressspace)
- **标签**: `web-features:local-network-access`

## 使用示例

### 基本用法

```javascript
// Request.targetAddressSpace 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.targetAddressSpace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 138
- **需要标志**: 
  - #local-network-access-check: Enabled
- **支持版本**: 124
- **移除版本**: 138

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.targetAddressSpace是否支持
function isRequestTargetAddressSpaceSupported() {
    return 'targetAddressSpace' in request && typeof request.targetAddressSpace === 'function';
}

if (isRequestTargetAddressSpaceSupported()) {
    console.log('Request.targetAddressSpace 支持');
    // 使用Request.targetAddressSpace
} else {
    console.log('Request.targetAddressSpace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.targetAddressSpace polyfill
if (!request.targetAddressSpace) {
    // 在这里添加polyfill实现
    console.log('加载Request.targetAddressSpace polyfill');
}
```

