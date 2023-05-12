const database = getData();


function fill() {

  //Pegar o total de abas
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var abas = planilha.getSheets();
  var totalAbas = abas.length;

  var arrayLinks = [];

  for (let i = 1; i <= totalAbas; i++) {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var aba = planilha.getSheetByName(i);

    if (aba) {
      var sheetId = aba.getSheetId();
      var linkAba = planilha.getUrl() + '#gid=' + sheetId;
      arrayLinks.push(linkAba);
    } else {
      Logger.log('Aba não encontrada.');
    }
  }

  // Obter a planilha ativa e a faixa de dados
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getDataRange();

  // Obter os valores da planilha
  const values = range.getValues();

  // Percorrer cada linha e verificar o valor na coluna A
  for (let i = 0; i < values.length; i++) {
    const row = values[i];

    //Percorrer cada elemento da base de dados
    for (let id in database) {

      // Verificar se o valor na coluna A é igual a "valor de exemplo"
      if (row[0].trim() === database[id].title) {
        // Preencher as colunas B e C com o texto desejado
        sheet.getRange(`B${i + 1}`).setValue(database[id].about);
        sheet.getRange(`C${i + 1}`).setValue(database[id].solve);

        // Preencher o link para as abas
        var richText = SpreadsheetApp.newRichTextValue()
          .setText('Clique aqui')
          .setLinkUrl(arrayLinks[i - 1])
          .build();

        sheet.getRange(`E${i + 1}`).setRichTextValue(richText);
      }
    }
  }
}