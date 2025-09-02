# URLPattern.hasRegExpGroups API 兼容性数据

## 基本信息

- **API名称**: `URLPattern.hasRegExpGroups`
- **MDN文档**: [URLPattern.hasRegExpGroups](https://developer.mozilla.org/docs/Web/API/URLPattern/hasRegExpGroups)
- **规范文档**: [查看规范](https://urlpattern.spec.whatwg.org/#dom-urlpattern-hasregexpgroups)
- **标签**: `web-features:urlpattern`

## 使用示例

### 基本用法

```javascript
// URLPattern.hasRegExpGroups 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLPattern.hasRegExpGroups API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 122 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.46 |  |
| Edge | 同主版本 |  |
| Firefox | 142 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 122

### Deno

- **支持版本**: 1.46

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLPattern.hasRegExpGroups是否支持
function isURLPatternHasRegExpGroupsSupported() {
    return 'hasRegExpGroups' in urlpattern && typeof urlpattern.hasRegExpGroups === 'function';
}

if (isURLPatternHasRegExpGroupsSupported()) {
    console.log('URLPattern.hasRegExpGroups 支持');
    // 使用URLPattern.hasRegExpGroups
} else {
    console.log('URLPattern.hasRegExpGroups 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLPattern.hasRegExpGroups polyfill
if (!urlpattern.hasRegExpGroups) {
    // 在这里添加polyfill实现
    console.log('加载URLPattern.hasRegExpGroups polyfill');
}
```

