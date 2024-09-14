const { sequelize } = require('./models');

// Arquivo que cria/sobrescreve as tabelas e força
// a sincronização com o banco de dados
sequelize.sync({ force: true }).then(() => {
    console.log("Tabelas criadas com sucesso!");
})