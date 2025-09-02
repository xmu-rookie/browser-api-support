# FontFace.worker_support API 兼容性数据

## 基本信息

- **API名称**: `FontFace.worker_support`
- **标签**: `web-features:font-loading`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// FontFace.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('FontFace.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 105 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 105

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查FontFace.worker_support是否支持
function isFontFaceWorker_supportSupported() {
    return 'worker_support' in fontface && typeof fontface.worker_support === 'function';
}

if (isFontFaceWorker_supportSupported()) {
    console.log('FontFace.worker_support 支持');
    // 使用FontFace.worker_support
} else {
    console.log('FontFace.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FontFace.worker_support polyfill
if (!fontface.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载FontFace.worker_support polyfill');
}
```

