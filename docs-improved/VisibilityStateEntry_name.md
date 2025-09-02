# VisibilityStateEntry.name API 兼容性数据

## 基本信息

- **API名称**: `VisibilityStateEntry.name`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#visibilitystateentry-name)
- **标签**: `web-features:page-visibility-state`

## 使用示例

### 基本用法

```javascript
// VisibilityStateEntry.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisibilityStateEntry.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 115 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 115

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查VisibilityStateEntry.name是否支持
function isVisibilityStateEntryNameSupported() {
    return 'name' in visibilitystateentry && typeof visibilitystateentry.name === 'function';
}

if (isVisibilityStateEntryNameSupported()) {
    console.log('VisibilityStateEntry.name 支持');
    // 使用VisibilityStateEntry.name
} else {
    console.log('VisibilityStateEntry.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisibilityStateEntry.name polyfill
if (!visibilitystateentry.name) {
    // 在这里添加polyfill实现
    console.log('加载VisibilityStateEntry.name polyfill');
}
```

