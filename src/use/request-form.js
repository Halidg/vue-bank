import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn){
 const {isSubmitting,handleSubmit}=useForm({
     initialValues:{
        status:'active' 
     }
 })
 
 const {value:fio,errorMessage:fError,handleblur:fBlur} =useField(
    'fio',
     yup.string()  
        .trim()  
        .required('введите ФИО клиента')
    )
const {value:tel,errorMessage:tError,handleblur:tBlur} =useField(
    'tel',
     yup.string()
        .trim()  
        .required('введите номер телефона')
    )
const {value:amount,errorMessage:aError,handleblur:aBlur} =useField(
    'amount',
     yup.number()
        .required('введите сумму')
        .min(0,'Сумма не может быть меньше 0')
    )
const {value:status,errorMessage:sError,handleblur:sBlur} =useField('status')

const onSubmit = handleSubmit(fn)

return{
   status,
   isSubmitting,
   onSubmit,
   fio,
   fBlur,
   fError,
   tel,
   amount,
   tBlur,
   aBlur,
   tError,
   aError,
}
}

 
 