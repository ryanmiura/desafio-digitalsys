import React from 'react';

const ExperienciaProfissional = ({ data, updateData, errors }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiencias = [...data];
    newExperiencias[index] = { ...newExperiencias[index], [name]: value };
    updateData(newExperiencias);
  };

  const addExperiencia = () => {
    updateData([...data, { cargo: '', empresa: '', data_inicio: '', data_fim: '', descricao: '' }]);
  };

  return (
    <div>
      <h2>Experiência Profissional</h2>
      {data.map((exp, index) => (
        <div key={index}>
          <label htmlFor={`cargo-${index}`}>Cargo:</label>
          <input
            type="text"
            id={`cargo-${index}`}
            name="cargo"
            value={exp.cargo}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`empresa-${index}`}>Empresa:</label>
          <input
            type="text"
            id={`empresa-${index}`}
            name="empresa"
            value={exp.empresa}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`data_inicio-${index}`}>Data de Início:</label>
          <input
            type="date"
            id={`data_inicio-${index}`}
            name="data_inicio"
            value={exp.data_inicio}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`data_fim-${index}`}>Data de Término:</label>
          <input
            type="date"
            id={`data_fim-${index}`}
            name="data_fim"
            value={exp.data_fim}
            onChange={(e) => handleChange(index, e)}
          />
          <label htmlFor={`descricao-${index}`}>Descrição das atividades:</label>
          <textarea
            id={`descricao-${index}`}
            name="descricao"
            value={exp.descricao}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      {errors.experiencia && <span className="error">{errors.experiencia}</span>}
      <button type="button" onClick={addExperiencia}>Adicionar + 1 Experiência</button>
    </div>
  );
};

export default ExperienciaProfissional;

