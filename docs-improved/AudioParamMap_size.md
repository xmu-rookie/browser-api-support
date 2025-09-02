# AudioParamMap.size API 兼容性数据

## 基本信息

- **API名称**: `AudioParamMap.size`
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParamMap.size 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParamMap.size API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioParamMap.size是否支持
function isAudioParamMapSizeSupported() {
    return 'size' in audioparammap && typeof audioparammap.size === 'function';
}

if (isAudioParamMapSizeSupported()) {
    console.log('AudioParamMap.size 支持');
    // 使用AudioParamMap.size
} else {
    console.log('AudioParamMap.size 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioParamMap.size polyfill
if (!audioparammap.size) {
    // 在这里添加polyfill实现
    console.log('加载AudioParamMap.size polyfill');
}
```

