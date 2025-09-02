# ExtendableCookieChangeEvent.deleted.partitioned_property API 兼容性数据

## 基本信息

- **API名称**: `ExtendableCookieChangeEvent.deleted.partitioned_property`
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#dom-cookielistitem-partitioned)
- **标签**: `web-features:partitioned-cookies`
- **描述**: `partitioned` property

## 使用示例

### 基本用法

```javascript
// ExtendableCookieChangeEvent.deleted.partitioned_property 使用示例
// 请查阅MDN文档了解具体用法
console.log('ExtendableCookieChangeEvent.deleted.partitioned_property API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 114 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 114

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ExtendableCookieChangeEvent.deleted.partitioned_property是否支持
function isExtendableCookieChangeEventDeletedSupported() {
    return 'deleted' in extendablecookiechangeevent && typeof extendablecookiechangeevent.deleted === 'function';
}

if (isExtendableCookieChangeEventDeletedSupported()) {
    console.log('ExtendableCookieChangeEvent.deleted.partitioned_property 支持');
    // 使用ExtendableCookieChangeEvent.deleted.partitioned_property
} else {
    console.log('ExtendableCookieChangeEvent.deleted.partitioned_property 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ExtendableCookieChangeEvent.deleted.partitioned_property polyfill
if (!extendablecookiechangeevent.deleted) {
    // 在这里添加polyfill实现
    console.log('加载ExtendableCookieChangeEvent.deleted.partitioned_property polyfill');
}
```

