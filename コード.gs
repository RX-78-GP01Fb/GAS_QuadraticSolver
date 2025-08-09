function doGet(e) {
  const output = HtmlService.createTemplateFromFile('index').evaluate()
  output
    .setTitle("二次方程式の解を求めるwebサイト")
    .setFaviconUrl("https://drive.google.com/uc?id=1yJ0Nd_sTvytM2Wl1mEIzDbsay4Imjx_3&.png");
  return output;
}
