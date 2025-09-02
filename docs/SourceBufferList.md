# SourceBufferList API 兼容性数据

## 基本信息

- **API名称**: `SourceBufferList`
- **MDN文档**: [SourceBufferList](https://developer.mozilla.org/docs/Web/API/SourceBufferList)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#sourcebufferlist)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// SourceBufferList 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBufferList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 41 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 8 |  |
| Safari iOS | 13 (部分支持) | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 未知 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

### Firefox Android

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### Samsung Internet


## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBufferList是否支持
function isSourceBufferListSupported() {
    return 'SourceBufferList' in window || typeof SourceBufferList !== 'undefined';
}

if (isSourceBufferListSupported()) {
    console.log('SourceBufferList 支持');
    // 使用SourceBufferList
} else {
    console.log('SourceBufferList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBufferList polyfill
if (!window.SourceBufferList) {
    // 在这里添加polyfill实现
    console.log('加载SourceBufferList polyfill');
}
```

