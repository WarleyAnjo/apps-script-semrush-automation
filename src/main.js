const database = getData();

function fill() {
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
      }
    }
  }
}