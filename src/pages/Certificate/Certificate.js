import React, { useState } from 'react';
import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import Controls from '../../components/controls/Controls';
import { Grid, makeStyles, InputAdornment, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Search } from '@material-ui/icons';
import { API_URL, CERTIFICATES } from '../../utils/constants';
import useFetch from '../../hooks/useFetch';
import CertificationTable from './CertificationTable';
import CertificateForm from './CertificateForm';
import Popup from '../../components/Popup';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '100%',
  },
  newButton: {
    position: 'relative',
  },
}));

const Certificate = () => {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const { response, isLoading } = useFetch(`${API_URL}/${CERTIFICATES}`);
  const classes = useStyles();
  const handleSearch = (e) => {
    let target = e.target;
  };
  const addOrEdit = (employee, resetForm) => {};
  return isLoading ? (
    <Spinner />
  ) : (
    <React.Fragment>
      <Title>Certificados</Title>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Controls.Input
            label='Buscar Certificados'
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box display='flex' justifyContent='center'>
            <Controls.Button
              text='Agregar Nuevo'
              variant='outlined'
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <CertificationTable data={response.data} />
        </Grid>
        <Popup
          title='Nuevo Certificado'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <CertificateForm
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
          />
        </Popup>
      </Grid>
    </React.Fragment>
  );
};

export default Certificate;
