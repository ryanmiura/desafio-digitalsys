import React from 'react';

const Contato = ({ data, updateData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Contato</h2>
      <div>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <input
          type="tel"
          name="telefone"
          value={data.telefone}
          onChange={handleChange}
          placeholder="Telefone"
        />
        {errors.telefone && <span className="error">{errors.telefone}</span>}
      </div>
      <div>
        <textarea
          name="endereco"
          value={data.endereco}
          onChange={handleChange}
          placeholder="Endereço"
        />
      </div>
    </div>
  );
};

export default Contato;

