import moment from 'moment';

export const formatCentsToCurrency = (cents:number, options:any = { locale: 'pt-BR', currency: 'BRL' }) =>
  new Intl.NumberFormat(options.locale, { style: 'currency', currency: options.currency }).format(cents / 100.0);

export const formatDate = (date:string, format:any = 'DD/MM/YY') => moment(date).format(format);

export const formatDateHour = (date:string, format = 'DD/MM/YY HH[h]mm') => moment(date).format(format);

export const formatCPF = (value:string) => value && value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

export const formatZipCode = (value:string) => value && value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');

export const formatCNPJ = (value:string) => value && value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

export const formatPhoneNumber = (value:string) =>
  value && value.replace(/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 ($2) $3 $4-$5');
