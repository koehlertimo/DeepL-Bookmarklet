javascript: (function () {
  /*change this for default language settings*/
  const fromLang = "en";
  const toLang = "de";

  const c55f4db1 =
    "https://www.deepl.com/" +
    fromLang +
    "/translator#" +
    fromLang +
    "/" +
    toLang +
    "/";

  function getSelectionText() {
    var bb51b383 = "";
    if (window.getSelection) {
      bb51b383 = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      bb51b383 = document.selection.createRange().text;
    }
    return bb51b383;
  }

  let f814ed3a0ce4 = "";
  f814ed3a0ce4 = prompt(
    "Enter the text you want to translate:",
    getSelectionText()
  );
  if (f814ed3a0ce4 != null) {
    window.open(c55f4db1 + encodeURIComponent(f814ed3a0ce4), "_blank").focus();
  } else if (f814ed3a0ce4 == "") {
    window.open("https://www.deepl.com/", "_blank").focus();
  }
})();
