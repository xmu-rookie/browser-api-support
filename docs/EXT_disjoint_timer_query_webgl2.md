# EXT_disjoint_timer_query_webgl2 API 兼容性数据

## 基本信息

- **API名称**: `EXT_disjoint_timer_query_webgl2`

## 使用示例

### 基本用法

```javascript
// EXT_disjoint_timer_query_webgl2 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_disjoint_timer_query_webgl2 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | ❌ 不支持 |  |
| Edge | 80 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_disjoint_timer_query_webgl2是否支持
function isEXT_disjoint_timer_query_webgl2Supported() {
    return 'EXT_disjoint_timer_query_webgl2' in window || typeof EXT_disjoint_timer_query_webgl2 !== 'undefined';
}

if (isEXT_disjoint_timer_query_webgl2Supported()) {
    console.log('EXT_disjoint_timer_query_webgl2 支持');
    // 使用EXT_disjoint_timer_query_webgl2
} else {
    console.log('EXT_disjoint_timer_query_webgl2 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_disjoint_timer_query_webgl2 polyfill
if (!window.EXT_disjoint_timer_query_webgl2) {
    // 在这里添加polyfill实现
    console.log('加载EXT_disjoint_timer_query_webgl2 polyfill');
}
```

