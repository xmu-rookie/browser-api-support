# CreateMonitor API 兼容性数据

## 基本信息

- **API名称**: `CreateMonitor`
- **MDN文档**: [CreateMonitor](https://developer.mozilla.org/docs/Web/API/CreateMonitor)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/writing-assistance-apis/#createmonitor)

## 使用示例

### 基本用法

```javascript
// CreateMonitor 使用示例
// 请查阅MDN文档了解具体用法
console.log('CreateMonitor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 | Availability may be subject to geographical restrictions. |
| Chrome Android | ❌ 不支持 |  |
| deno | ❌ 不支持 |  |
| Edge | 138 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 138
- **注意事项**:
  - Availability may be subject to geographical restrictions.

### Chrome Android

- **支持版本**: 不支持

### deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 138

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CreateMonitor是否支持
function isCreateMonitorSupported() {
    return 'CreateMonitor' in window || typeof CreateMonitor !== 'undefined';
}

if (isCreateMonitorSupported()) {
    console.log('CreateMonitor 支持');
    // 使用CreateMonitor
} else {
    console.log('CreateMonitor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CreateMonitor polyfill
if (!window.CreateMonitor) {
    // 在这里添加polyfill实现
    console.log('加载CreateMonitor polyfill');
}
```

