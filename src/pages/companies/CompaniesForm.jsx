import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-hot-toast';
// @mui
import { Card, CardHeader, Stack, Button, Container, CardContent, CardActions } from '@mui/material';

import CustomTextField from '../../utils/forms/CustomTextField';
import Iconify from '../../components/iconify';
import { CREATE_COMPANY } from '../../graphql/companies/mutations';
import { GET_ALL_COMPANIES, GET_COMPANY } from '../../graphql/companies/queries';

// form validation
const validationSchema = yup.object({
  name: yup.string('Ingrese nombre').required('Nombre requerido'),
  ruc: yup.string('Ingrese RUC').min(13, 'RUC debe contener 13 digitos').max(13, '').required('RUC requerido'),
});


const CompaniesForm = () => {
  // validate if editCompany is using the form
  const location = useLocation();
  // const {id, name, ruc} = location.state;
  const [formType, setformType] = useState('Crear');
  const [selectedCompany, setSelectedCompany] = useState(location.state);
  const [company] = useLazyQuery(GET_COMPANY);
 
  // mutation create company
  const [createCompany, { loading, error }] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{ query: GET_ALL_COMPANIES }],
  }, { errorPolicy: "all" });


   const initialValues = selectedCompany ?? {
    name: "",
    ruc: ""
  }

  console.log("error apolo")
  console.log(error)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response=await createCompany({ variables: { name: values.name, ruc: values.ruc } });
        console.log(response);
        if (!error) {
          toast.success('Empresa creada correctamente');
          formik.handleReset();
        } else {
          toast.error('Error al crear la empresa');
        }
      } catch (error) {
        console.log("error crear company")
        console.log(error);
        toast.error(error.message);
      }

      console.log(values);
    },
  });

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={6} display="flex">
          <Button
            component={Link}
            to="/dashboard/companies"
            variant="text"
            endIcon={<Iconify icon="mdi:building" />}
            startIcon={<Iconify icon="material-symbols:arrow-circle-left-outline" />}
            size="large"
          >
            Empresas
          </Button>

          <Iconify icon="mdi:office-building-plus" width={50} />
        </Stack>
      </Container>

      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Card>
            <CardHeader
              title={`${formType} empresa`}
              sx={{ backgroundColor: 'primary.main', color: 'white', paddingBottom: '1em' }}
            />

            <CardContent>
              <Stack direction="column" spacing="2em">
                <CustomTextField
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  label="Nombre Empresa"
                />
                <CustomTextField
                  id="ruc"
                  name="ruc"
                  value={formik.values.ruc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.ruc && Boolean(formik.errors.ruc)}
                  helperText={formik.touched.ruc && formik.errors.ruc}
                  label="RUC"
                  inputProps={{ maxLength: 13 }}
                />
              </Stack>
            </CardContent>

            <CardActions sx={{ paddingLeft: '2em' }}>
              <Button variant="contained" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                {formType}
              </Button>
            </CardActions>
          </Card>
        </Container>
      </form>
    </>
  );
};

export default CompaniesForm;
