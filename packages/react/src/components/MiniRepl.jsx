import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useInView } from 'react-hook-inview';
import useRepl from '../hooks/useRepl.mjs';
import cx from '../cx';
import useHighlighting from '../hooks/useHighlighting.mjs';
import CodeMirror6 from './CodeMirror6';
import 'tailwindcss/tailwind.css';
import './style.css';
import styles from './MiniRepl.module.css';
import { Icon } from './Icon';

export function MiniRepl({ tune, defaultSynth, hideOutsideView = false, theme, init, onEvent }) {
  const { code, setCode, pattern, activeCode, activateCode, evaluateOnly, error, cycle, dirty, togglePlay, stop } =
    useRepl({
      tune,
      defaultSynth,
      autolink: false,
      onEvent,
    });
  useEffect(() => {
    init && evaluateOnly();
  }, [tune, init]);
  const [view, setView] = useState();
  const [ref, isVisible] = useInView({
    threshold: 0.01,
  });
  const wasVisible = useRef();
  const show = useMemo(() => {
    if (isVisible || !hideOutsideView) {
      wasVisible.current = true;
    }
    return isVisible || wasVisible.current;
  }, [isVisible, hideOutsideView]);
  useHighlighting({ view, pattern, active: cycle.started && !activeCode?.includes('strudel disable-highlighting') });
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button className={cx(styles.button, cycle.started ? 'sc-animate-pulse' : '')} onClick={() => togglePlay()}>
            <Icon type={cycle.started ? 'pause' : 'play'} />
          </button>
          <button className={cx(dirty ? styles.button : styles.buttonDisabled)} onClick={() => activateCode()}>
            <Icon type="refresh" />
          </button>
          <button className={cx(styles.button)} onClick={() => stop(true)}>
            <Icon type="stop" />
          </button>
        </div>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
      <div className={styles.body}>
        {show && <CodeMirror6 theme={theme} value={code} onChange={setCode} onViewChanged={setView} />}
      </div>
    </div>
  );
}
