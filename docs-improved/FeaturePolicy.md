# FeaturePolicy API 兼容性数据

## 基本信息

- **API名称**: `FeaturePolicy`
- **MDN文档**: [FeaturePolicy](https://developer.mozilla.org/docs/Web/API/FeaturePolicy)

## 使用示例

### 基本用法

```javascript
// FeaturePolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('FeaturePolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 65
- **需要标志**: 
  - dom.security.featurePolicy.webidl.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FeaturePolicy是否支持
function isFeaturePolicySupported() {
    return 'FeaturePolicy' in window || typeof FeaturePolicy !== 'undefined';
}

if (isFeaturePolicySupported()) {
    console.log('FeaturePolicy 支持');
    // 使用FeaturePolicy
} else {
    console.log('FeaturePolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FeaturePolicy polyfill
if (!window.FeaturePolicy) {
    // 在这里添加polyfill实现
    console.log('加载FeaturePolicy polyfill');
}
```

