function formatTime(time) {
    const now = Date.now();
    const s = Math.round((now - time) / 1000);

    // 0..15s - Just now
    if (s <= 15) return 'Just now';

    // 16..59s - [x]s ago
    if (s <= 59) return s + 's ago';

    // 1..59min - [x]min ago
    const min = Math.floor(s / 60);
    if (min <= 59) return min + 'min ago';

    // 1..23h - [x]h ago
    const h = Math.floor(min / 60);
    if (h <= 23) return h + 'h ago';

    // 1..7d - [x]d ago
    const d = Math.floor(h / 24);
    if (d <= 7) return d + 'd ago';

    // 1..4w - [x]w ago
    const w = Math.floor(d / 7);
    if (w <= 4) return w + 'w ago';

    // 1..11m - [x]m ago
    const m = Math.floor(d / 30);
    if (m <= 11) return m + 'mth ago';

    // 1y - [x]y ago
    const y = Math.floor(d / 365.25);
    return y + 'y ago';
}

export {formatTime}