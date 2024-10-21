import React from 'react';

const FormacaoAcademica = ({ data, updateData, errors }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFormacoes = [...data];
    newFormacoes[index] = { ...newFormacoes[index], [name]: value };
    updateData(newFormacoes);
  };

  const addFormacao = () => {
    updateData([...data, { instituicao: '', curso: '', data_inicio: '', data_fim: '' }]);
  };

  return (
    <div>
      <h2>Formação Acadêmica</h2>
      {data.map((formacao, index) => (
        <div key={index}>
          <label htmlFor={`instituicao-${index}`}>Instituição:</label>
          <input
            type="text"
            id={`instituicao-${index}`}
            name="instituicao"
            value={formacao.instituicao}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`curso-${index}`}>Curso:</label>
          <input
            type="text"
            id={`curso-${index}`}
            name="curso"
            value={formacao.curso}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`data_inicio-${index}`}>Data de Início:</label>
          <input
            type="date"
            id={`data_inicio-${index}`}
            name="data_inicio"
            value={formacao.data_inicio}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`data_fim-${index}`}>Data de Conclusão:</label>
          <input
            type="date"
            id={`data_fim-${index}`}
            name="data_fim"
            value={formacao.data_fim}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      {errors.formacao && <span className="error">{errors.formacao}</span>}
      <button type="button" onClick={addFormacao}>Adicionar + 1 Formação</button>
    </div>
  );
};

export default FormacaoAcademica;

