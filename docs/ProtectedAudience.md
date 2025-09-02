# ProtectedAudience API 兼容性数据

## 基本信息

- **API名称**: `ProtectedAudience`
- **规范文档**: [查看规范](https://wicg.github.io/turtledove/#protectedaudience)

## 使用示例

### 基本用法

```javascript
// ProtectedAudience 使用示例
// 请查阅MDN文档了解具体用法
console.log('ProtectedAudience API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 127 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 127

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ProtectedAudience是否支持
function isProtectedAudienceSupported() {
    return 'ProtectedAudience' in window || typeof ProtectedAudience !== 'undefined';
}

if (isProtectedAudienceSupported()) {
    console.log('ProtectedAudience 支持');
    // 使用ProtectedAudience
} else {
    console.log('ProtectedAudience 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ProtectedAudience polyfill
if (!window.ProtectedAudience) {
    // 在这里添加polyfill实现
    console.log('加载ProtectedAudience polyfill');
}
```

