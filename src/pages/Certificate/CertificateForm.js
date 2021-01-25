import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];

const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? '' : 'Minimum 10 numbers required.';
    if ('departmentId' in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  /*useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);*/

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Controls.Input
            name='fullName'
            label='Clave del Certificado'
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.DatePicker
            name='hireDate'
            label='Fecha de Inspección'
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Lugar de Inspección'
            name='email'
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label='Inspector'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label='Engomado'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Etiqueta'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controls.Select
            name='departmentId'
            label='Contacto'
            value={values.departmentId}
            onChange={handleInputChange}
            options={getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.Input
            label='Telefono'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Email'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Códido'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Foto'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type='submit' text='Guardar' />
            {/*<Controls.Button text='Reset' color='default' onClick={resetForm} />*/}
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
