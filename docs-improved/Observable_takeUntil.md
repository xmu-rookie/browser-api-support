# Observable.takeUntil API 兼容性数据

## 基本信息

- **API名称**: `Observable.takeUntil`
- **规范文档**: [查看规范](https://wicg.github.io/observable/#dom-observable-takeuntil)
- **标签**: `web-features:observable`

## 使用示例

### 基本用法

```javascript
// Observable.takeUntil 使用示例
// 请查阅MDN文档了解具体用法
console.log('Observable.takeUntil API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 135 |  |
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

- **支持版本**: 135

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Observable.takeUntil是否支持
function isObservableTakeUntilSupported() {
    return 'takeUntil' in observable && typeof observable.takeUntil === 'function';
}

if (isObservableTakeUntilSupported()) {
    console.log('Observable.takeUntil 支持');
    // 使用Observable.takeUntil
} else {
    console.log('Observable.takeUntil 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Observable.takeUntil polyfill
if (!observable.takeUntil) {
    // 在这里添加polyfill实现
    console.log('加载Observable.takeUntil polyfill');
}
```

