document.addEventListener('DOMContentLoaded', function () {
  const fileInput = document.getElementById('fileInput');
  const uploadButton = document.getElementById('uploadButton');

  fileInput.addEventListener('change', function () {
      if (fileInput.files.length > 0) {
          uploadButton.disabled = false;
      } else {
          uploadButton.disabled = true;
      }
  });
});