import React from 'react';

import useLanguage from '@/lang/useLanguage';
import AdminCrudModule from '@/modules/AdminCrudModule';
import AdminForm from '@/forms/AdminForm';

export default function Admin() {
  const entity = 'admin';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['email'];

  const readColumns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Role d'utilisateur", dataIndex: 'role' },
  ];

  const dataTableColumns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname' },
    { title: 'Email', dataIndex: 'email' },
    { title: "Role d'utilisateur", dataIndex: 'role' },
  ];

  const getLang = useLanguage();

  const Labels = {
    PANEL_TITLE: getLang('admin'),
    DATATABLE_TITLE: getLang('admin_list'),
    ADD_NEW_ENTITY: getLang('add_new_admin'),
    ENTITY_NAME: getLang('admin'),
    CREATE_ENTITY: getLang('save'),
    UPDATE_ENTITY: getLang('update'),
    RECORD_ENTITY: getLang('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}