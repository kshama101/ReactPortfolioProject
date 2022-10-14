// React Hook Form is a library that helps us validate forms in React
import { useForm } from "react-hook-form";

                                         
 function FormValidation() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); //useForm Hook returns an object containing a few properties-register, ....
  //register method helps us register an input field into React Hook Form so that it is available for the validation, 
  //and its value can be tracked for changes.
  //formState: { errors } is to access the errors object
 
  const handleRegistration = (data) => {
    console.log(data);
    reset()

  }
 
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { 
      required: "Email is required", 
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Please enter a valid email !"
    }
    },
    subject: { required: "subject is required" },
    comment: { required: "comment is required" },
    
  };

  return (
    // To register the input, we are passing the register method into the input field
    //handleSubmit needs to be passed as the value to the onSubmit prop.
    //handleRegistration function will be invoked along with the registered field values when 
    //the form validation is successful. The second function handleError is called with errors when the validation fails.

    <form noValidate onSubmit={handleSubmit(handleRegistration, handleError)} >
      <div className='mb-2'>
        <input name="name"
         type="text" 
         placeholder='Name'
         className='form-control form-control-lg'
         {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div className='mb-2'>
        <input
          type="email"
          name="email"
          placeholder='Email'
          className='form-control form-control-lg'
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div className='mb-2'>
        <input
          type="text"
          name="subject"
          placeholder='Subject'
          className='form-control form-control-lg'
          {...register('subject', registerOptions.subject)}
        />
        <small className="text-danger">
        {errors?.subject && errors.subject.message}
        </small>
      </div>
      <div className='mb-2'>
        <textarea
          type="text"
          rows="5"
          placeholder='Project-Details'
          className='form-control form-control-lg'
          name="comment"
          {...register('comment', registerOptions.comment)}
        />
        <small className="text-danger">
        {errors?.comment && errors.comment.message}
        </small>
      </div>
      <div className='button-container-div mb-4'>
      <input type="submit" id='submit' className="btn btn-success" value="Submit"></input>
      </div>
    </form>
  );        
}
export default FormValidation;
