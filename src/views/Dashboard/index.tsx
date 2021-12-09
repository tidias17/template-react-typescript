import React from 'react';
import { DataTable } from 'click-management-components';
import { formatDate } from 'utils/formatters';

const Dashboard = () => {
  const columns = [
    {
      title: 'Data',
      dataIndex: 'date',
      render: (value: string) => formatDate(value),
    },
    {
      title: 'Tipo',
      dataIndex: 'type',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    }
  ];

  const content = [
    {
      "date": "2021-03-10T00:00:00Z",
      "type": "Normal",
      "description": "Este é um teste de um conteúdo de uma tabela.",
      "status": "Concluído",
    },
    {
      "date": "2021-03-10T00:00:00Z",
      "type": "Normal",
      "description": "Este é um teste de um conteúdo de uma tabela.",
      "status": "Concluído",
    },
    {
      "date": "2021-03-10T00:00:00Z",
      "type": "Normal",
      "description": "Este é um teste de um conteúdo de uma tabela.",
      "status": "Concluído",
    }
  ];

  return (
    <>
      <p>Dashboard View</p>
      <DataTable
          title="Tabela de exemplo"
          subtitle="Detalhaento do descritivo"
          columns={columns}
          rows={content || []}
          emptyText="Não foram localizados dados a serem exibidos"
          expandedRowRender={() => (
            <p>Conteúdo detalhado</p>
          )}
        />
    </>
  );
};

export default Dashboard;
