# CSSTransformComponent.is2D API 兼容性数据

## 基本信息

- **API名称**: `CSSTransformComponent.is2D`
- **MDN文档**: [CSSTransformComponent.is2D](https://developer.mozilla.org/docs/Web/API/CSSTransformComponent/is2D)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-csstransformcomponent-is2d)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSTransformComponent.is2D 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSTransformComponent.is2D API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSTransformComponent.is2D是否支持
function isCSSTransformComponentIs2DSupported() {
    return 'is2D' in csstransformcomponent && typeof csstransformcomponent.is2D === 'function';
}

if (isCSSTransformComponentIs2DSupported()) {
    console.log('CSSTransformComponent.is2D 支持');
    // 使用CSSTransformComponent.is2D
} else {
    console.log('CSSTransformComponent.is2D 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSTransformComponent.is2D polyfill
if (!csstransformcomponent.is2D) {
    // 在这里添加polyfill实现
    console.log('加载CSSTransformComponent.is2D polyfill');
}
```

