(function () {
    document.querySelectorAll('a.row[data-tip-status]').forEach(function (row) {
        var tip = row.querySelector('.tip');
        if (!tip) return;

        var status  = (row.dataset.tipStatus || '').toUpperCase();
        var tests   = row.dataset.tipTests || '';
        var runtime = row.dataset.tipRuntime || '';
        var rBeat   = row.dataset.tipRuntimeBeat || '';
        var memory  = row.dataset.tipMemory || '';
        var mBeat   = row.dataset.tipMemoryBeat || '';
        var date    = row.dataset.tipDate || '';

        tip.innerHTML =
            '<div class="tip-status accepted">' + status + '</div>' +
            '<div class="tip-tests">' + tests + '</div>' +
            '<hr class="tip-divider">' +
            '<div class="tip-row">' +
            '<div><span class="tip-label">RUNTIME </span><span class="tip-value">' + runtime + '</span></div>' +
            '<div class="tip-beat">BEATS ' + rBeat + '</div>' +
            '</div>' +
            '<div class="tip-row">' +
            '<div><span class="tip-label">MEMORY </span><span class="tip-value">' + memory + '</span></div>' +
            '<div class="tip-beat">BEATS ' + mBeat + '</div>' +
            '</div>' +
            (date ? '<div class="tip-date">SUBMITTED ' + date.toUpperCase() + '</div>' : '');
    });

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var f = btn.dataset.filter;
            document.querySelectorAll('.row[data-diff]').forEach(function (r) {
                r.setAttribute('data-hidden', f !== 'all' && r.dataset.diff !== f ? 'true' : 'false');
            });
            document.querySelectorAll('.category-label').forEach(function (cat) {
                var diff = cat.textContent.trim().toLowerCase();
                if (diff === 'med') diff = 'medium';
                cat.style.display = (f === 'all' || diff === f) ? '' : 'none';
            });
        });
    });
})();