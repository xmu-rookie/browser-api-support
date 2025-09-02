# MerchantValidationEvent.MerchantValidationEvent API 兼容性数据

## 基本信息

- **API名称**: `MerchantValidationEvent.MerchantValidationEvent`
- **MDN文档**: [MerchantValidationEvent.MerchantValidationEvent](https://developer.mozilla.org/docs/Web/API/MerchantValidationEvent/MerchantValidationEvent)
- **描述**: `MerchantValidationEvent()` constructor

## 使用示例

### 基本用法

```javascript
// MerchantValidationEvent.MerchantValidationEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MerchantValidationEvent.MerchantValidationEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview | Available only in Nightly builds. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: preview
- **需要标志**: 
  - dom.payments.request.supportedRegions: A comma-delineated list of one or more 2-character ISO country codes indicating the countries in which to support payments (for example, <code>US,CA</code>.
- **注意事项**:
  - Available only in Nightly builds.

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MerchantValidationEvent.MerchantValidationEvent是否支持
function isMerchantValidationEventMerchantValidationEventSupported() {
    return 'MerchantValidationEvent' in merchantvalidationevent && typeof merchantvalidationevent.MerchantValidationEvent === 'function';
}

if (isMerchantValidationEventMerchantValidationEventSupported()) {
    console.log('MerchantValidationEvent.MerchantValidationEvent 支持');
    // 使用MerchantValidationEvent.MerchantValidationEvent
} else {
    console.log('MerchantValidationEvent.MerchantValidationEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MerchantValidationEvent.MerchantValidationEvent polyfill
if (!merchantvalidationevent.MerchantValidationEvent) {
    // 在这里添加polyfill实现
    console.log('加载MerchantValidationEvent.MerchantValidationEvent polyfill');
}
```

