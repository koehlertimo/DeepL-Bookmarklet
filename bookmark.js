javascript: (function () {
  //change this for default language settings
  const fromLang = "en";
  const toLang = "de";

  const url =
    "https://www.deepl.com/" +
    fromLang +
    "/translator#" +
    fromLang +
    "/" +
    toLang +
    "/";

  function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  }

  let textToTranslate = "";
  textToTranslate = prompt(
    "Enter the text you want to translate:",
    getSelectionText()
  );
  if (textToTranslate != null) {
    window.open(url + encodeURIComponent(textToTranslate), "_blank").focus();
  } else if (textToTranslate == "") {
    window.open("https://www.deepl.com/", "_blank").focus();
  }
})();
