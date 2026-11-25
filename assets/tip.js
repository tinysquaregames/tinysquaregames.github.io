// Seção de gorjetas (Lightning), igual em todas as páginas.
// Uso: <div data-tip></div> + este script depois do qrcode.min.js.
(function () {
  const LNURL = 'LNURL1DP68GURN8GHJ7AMPD3KX2AR0VEEKZAR0WD5XJTNRDAKJ7TNHV4KXCTTTDEHHWM30D3H82UNVWQHHZAT9V4HXC7TVV9JXGETJXU6SK5WG7A';
  const ADDRESS = 'queenlyladder75@walletofsatoshi.com';
  document.querySelectorAll('[data-tip]').forEach((slot) => {
    slot.innerHTML = `
      <h2>Support the studio</h2>
      <p>Enjoying the games? You can leave a tip in bitcoin over the Lightning Network. Scan the code with any Lightning wallet, or tap the button on your phone.</p>
      <div class="tip">
        <div class="qr" aria-label="Lightning tip QR code"></div>
        <div>
          <a class="button" href="lightning:${LNURL}">⚡ Tip with Lightning</a>
          <p class="small">Lightning address:<br><code>${ADDRESS}</code></p>
          <button class="copy" type="button">Copy address</button>
        </div>
      </div>`;
    new QRCode(slot.querySelector('.qr'), {
      text: 'lightning:' + LNURL, width: 168, height: 168,
      colorDark: '#23214a', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M,
    });
    const button = slot.querySelector('.copy');
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(ADDRESS); button.textContent = 'Copied!'; }
      catch { button.textContent = 'Select and copy the address above'; }
    });
  });
})();
