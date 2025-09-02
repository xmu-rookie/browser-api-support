# FragmentDirective API 兼容性数据

## 基本信息

- **API名称**: `FragmentDirective`
- **MDN文档**: [FragmentDirective](https://developer.mozilla.org/docs/Web/API/FragmentDirective)
- **规范文档**: [查看规范](https://wicg.github.io/scroll-to-text-fragment/#fragmentdirective)
- **标签**: `web-features:scroll-to-text-fragment`

## 使用示例

### 基本用法

```javascript
// FragmentDirective 使用示例
// 请查阅MDN文档了解具体用法
console.log('FragmentDirective API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 83 |  |
| Firefox | 131 |  |
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

- **支持版本**: 81

### Edge

- **支持版本**: 83

### Firefox

- **支持版本**: 131

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查FragmentDirective是否支持
function isFragmentDirectiveSupported() {
    return 'FragmentDirective' in window || typeof FragmentDirective !== 'undefined';
}

if (isFragmentDirectiveSupported()) {
    console.log('FragmentDirective 支持');
    // 使用FragmentDirective
} else {
    console.log('FragmentDirective 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FragmentDirective polyfill
if (!window.FragmentDirective) {
    // 在这里添加polyfill实现
    console.log('加载FragmentDirective polyfill');
}
```

