import React from 'react';

const DadosPessoais = ({ data, updateData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Dados Pessoais</h2>
      <div>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={data.nome}
          onChange={handleChange}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}
      </div>
      <div>
        <label htmlFor="data_nascimento">Data de Nascimento:</label>
        <input
          type="date"
          id="data_nascimento"
          name="data_nascimento"
          value={data.data_nascimento}
          onChange={handleChange}
        />
        {errors.data_nascimento && <span className="error">{errors.data_nascimento}</span>}
      </div>
    </div>
  );
};

export default DadosPessoais;
