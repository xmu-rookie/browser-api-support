# SVGAElement.ping API 兼容性数据

## 基本信息

- **API名称**: `SVGAElement.ping`
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/linking.html#__svg__SVGAElement__ping)
- **标签**: `web-features:ping`

## 使用示例

### 基本用法

```javascript
// SVGAElement.ping 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAElement.ping API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 | This property is exposed but has no effect if the `browser.send_pings` preference is not set to `tru... |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 61
- **部分实现**: 是
- **注意事项**:
  - This property is exposed but has no effect if the `browser.send_pings` preference is not set to `true`. See [bug 951104](https://bugzil.la/951104).

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAElement.ping是否支持
function isSVGAElementPingSupported() {
    return 'ping' in svgaelement && typeof svgaelement.ping === 'function';
}

if (isSVGAElementPingSupported()) {
    console.log('SVGAElement.ping 支持');
    // 使用SVGAElement.ping
} else {
    console.log('SVGAElement.ping 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAElement.ping polyfill
if (!svgaelement.ping) {
    // 在这里添加polyfill实现
    console.log('加载SVGAElement.ping polyfill');
}
```

