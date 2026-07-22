/**
 * Ultra-light first-paint splash — tiny WebP + CSS only, ~0.5s.
 * No JS timers; never blocks interaction; skipped for reduced motion.
 */
export function TreeSplash() {
  return (
    <div className="tree-splash" aria-hidden="true">
      <div className="tree-splash__stage">
        <img
          className="tree-splash__img"
          src="/images/perf/v2/splash-tree.webp"
          alt=""
          width={140}
          height={140}
          decoding="async"
          fetchPriority="high"
          draggable={false}
        />
        <p className="tree-splash__wordmark">TreeDraw</p>
      </div>
    </div>
  );
}
