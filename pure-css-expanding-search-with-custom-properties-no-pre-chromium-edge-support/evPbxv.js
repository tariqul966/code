const TXT = 'watch me code this',
_LNK = document.createElement('a');

_LNK.textContent = _LNK.dataset.txt = TXT;
_LNK.href = `https://youtu.be/${ID}`;
_LNK.setAttribute('target', '_blank');
document.body.appendChild(_LNK);
_LNK.setAttribute('id', 'btn--yp');