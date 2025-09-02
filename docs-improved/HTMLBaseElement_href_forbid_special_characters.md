# HTMLBaseElement.href.forbid_special_characters API 兼容性数据

## 基本信息

- **API名称**: `HTMLBaseElement.href.forbid_special_characters`
- **描述**: tab, newline, and &lt; are not allowed (dangling markup prevention)

## 使用示例

### 基本用法

```javascript
// HTMLBaseElement.href.forbid_special_characters 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLBaseElement.href.forbid_special_characters API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLBaseElement.href.forbid_special_characters是否支持
function isHTMLBaseElementHrefSupported() {
    return 'href' in htmlbaseelement && typeof htmlbaseelement.href === 'function';
}

if (isHTMLBaseElementHrefSupported()) {
    console.log('HTMLBaseElement.href.forbid_special_characters 支持');
    // 使用HTMLBaseElement.href.forbid_special_characters
} else {
    console.log('HTMLBaseElement.href.forbid_special_characters 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLBaseElement.href.forbid_special_characters polyfill
if (!htmlbaseelement.href) {
    // 在这里添加polyfill实现
    console.log('加载HTMLBaseElement.href.forbid_special_characters polyfill');
}
```

