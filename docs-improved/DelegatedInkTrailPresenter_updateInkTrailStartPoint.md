# DelegatedInkTrailPresenter.updateInkTrailStartPoint API 兼容性数据

## 基本信息

- **API名称**: `DelegatedInkTrailPresenter.updateInkTrailStartPoint`
- **MDN文档**: [DelegatedInkTrailPresenter.updateInkTrailStartPoint](https://developer.mozilla.org/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint)
- **规范文档**: [查看规范](https://wicg.github.io/ink-enhancement/#dom-delegatedinktrailpresenter-updateinktrailstartpoint)
- **标签**: `web-features:ink`

## 使用示例

### 基本用法

```javascript
// DelegatedInkTrailPresenter.updateInkTrailStartPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('DelegatedInkTrailPresenter.updateInkTrailStartPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 93 |  |
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

- **支持版本**: 94

### Edge

- **支持版本**: 93

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DelegatedInkTrailPresenter.updateInkTrailStartPoint是否支持
function isDelegatedInkTrailPresenterUpdateInkTrailStartPointSupported() {
    return 'updateInkTrailStartPoint' in delegatedinktrailpresenter && typeof delegatedinktrailpresenter.updateInkTrailStartPoint === 'function';
}

if (isDelegatedInkTrailPresenterUpdateInkTrailStartPointSupported()) {
    console.log('DelegatedInkTrailPresenter.updateInkTrailStartPoint 支持');
    // 使用DelegatedInkTrailPresenter.updateInkTrailStartPoint
} else {
    console.log('DelegatedInkTrailPresenter.updateInkTrailStartPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DelegatedInkTrailPresenter.updateInkTrailStartPoint polyfill
if (!delegatedinktrailpresenter.updateInkTrailStartPoint) {
    // 在这里添加polyfill实现
    console.log('加载DelegatedInkTrailPresenter.updateInkTrailStartPoint polyfill');
}
```

