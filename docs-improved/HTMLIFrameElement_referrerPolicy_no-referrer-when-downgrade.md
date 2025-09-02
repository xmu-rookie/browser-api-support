# HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade`
- **标签**: `web-features:referrer-policy`
- **描述**: no-referrer-when-downgrade

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52

### Firefox

- **支持版本**: 61
- **移除版本**: 92

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade是否支持
function isHTMLIFrameElementReferrerPolicySupported() {
    return 'referrerPolicy' in htmliframeelement && typeof htmliframeelement.referrerPolicy === 'function';
}

if (isHTMLIFrameElementReferrerPolicySupported()) {
    console.log('HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade 支持');
    // 使用HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade
} else {
    console.log('HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade polyfill
if (!htmliframeelement.referrerPolicy) {
    // 在这里添加polyfill实现
    console.log('加载HTMLIFrameElement.referrerPolicy.no-referrer-when-downgrade polyfill');
}
```

