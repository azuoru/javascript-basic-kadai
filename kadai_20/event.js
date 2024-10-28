const countBtn = document.getElementById('btn');

const change = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {

   change.textContent = 'ボタンをクリックしました';

});
