function validateUpload() {
  var fileInput = document.getElementById('fileInput');
  var uploadButton = document.getElementById('uploadButton');

  // ファイルが選択されているかをチェック
  if (fileInput.files.length > 0) {
    uploadButton.disabled = false; // 選択されていればボタンを有効化
  } else {
    uploadButton.disabled = true; // 選択されていなければボタンを無効化
  }
}

// ページ読み込み時に初期状態を確認
document.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('fileInput');
  var uploadButton = document.getElementById('uploadButton');

  // 初期状態でファイルが選択されているかをチェック
  validateUpload();

  // ファイル選択時のイベントリスナーを設定
  fileInput.addEventListener('change', validateUpload);

  uploadButton.addEventListener("click", function (event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('uploadForm'));

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php", true);

    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);
        document.querySelector('.answer').innerText = response.answer;
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(formData);
  }, false);
});
