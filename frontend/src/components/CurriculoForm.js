import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import Contato from './Contato';
import ExperienciaProfissional from './ExperienciaProfissional';
import FormacaoAcademica from './FormacaoAcademica';

const CurriculoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    data_nascimento: '',
    contato: { email: '', telefone: '', endereco: '' },
    experiencias: [{ cargo: '', empresa: '', data_inicio: '', data_fim: '', descricao: '' }],
    formacoes: [{ instituicao: '', curso: '', data_inicio: '', data_fim: '' }]
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validação de Dados Pessoais
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    if (!formData.data_nascimento) {
      newErrors.data_nascimento = 'Data de nascimento é obrigatória';
    }

    // Validação de Contato
    if (!formData.contato.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.contato.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.contato.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    // Validação de Experiência Profissional
    if (formData.experiencias.length === 0 || !formData.experiencias[0].cargo.trim()) {
      newErrors.experiencia = 'Pelo menos uma experiência profissional é obrigatória';
    }

    // Validação de Formação Acadêmica
    if (formData.formacoes.length === 0 || !formData.formacoes[0].curso.trim()) {
      newErrors.formacao = 'Pelo menos uma formação acadêmica é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log('Enviando dados:', JSON.stringify(formData, null, 2));
        const response = await fetch('http://localhost:8000/api/candidatos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);

        if (response.ok) {
          alert('Currículo enviado com sucesso!');
          // Limpar o formulário após o envio bem-sucedido
          setFormData({
            nome: '',
            data_nascimento: '',
            contato: { email: '', telefone: '', endereco: '' },
            experiencias: [{ cargo: '', empresa: '', data_inicio: '', data_fim: '', descricao: '' }],
            formacoes: [{ instituicao: '', curso: '', data_inicio: '', data_fim: '' }]
          });
        } else {
          alert(`Erro ao enviar o currículo. Detalhes: ${JSON.stringify(responseData)}`);
        }
      } catch (error) {
        console.error('Erro ao enviar o currículo:', error);
        alert(`Erro ao enviar o currículo. Detalhes: ${error.message}`);
      }
    } else {
      alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
  };

  const updateFormData = (section, data) => {
    if (section === 'dadosPessoais') {
      setFormData(prevData => ({
        ...prevData,
        nome: data.nome,
        data_nascimento: data.data_nascimento
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [section]: data
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DadosPessoais 
        data={{ nome: formData.nome, data_nascimento: formData.data_nascimento }}
        updateData={(data) => updateFormData('dadosPessoais', data)}
        errors={errors}
      />
      <Contato 
        data={formData.contato} 
        updateData={(data) => updateFormData('contato', data)}
        errors={errors}
      />
      <ExperienciaProfissional 
        data={formData.experiencias} 
        updateData={(data) => updateFormData('experiencias', data)}
        errors={errors}
      />
      <FormacaoAcademica 
        data={formData.formacoes} 
        updateData={(data) => updateFormData('formacoes', data)}
        errors={errors}
      />
      <button type="submit">Enviar Currículo</button>
    </form>
  );
};

export default CurriculoForm;
