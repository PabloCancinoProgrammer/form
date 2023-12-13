import { useForm } from "react-hook-form";
import styles from "./form.module.css"

const Form = () => {
  const { register, handleSubmit, formState: { errors} } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const registerOptions = {
    name: { required: "Name is required"},
    email: {required: "Email is required"},
    password: { required: "Password is required"},
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters"
    }
   
  }
   return (
    <div className={styles.titulo}>
      <h2 className={styles.titulo}>Form 1</h2>


      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <br />
          <label>Name</label>
          <input name="name" type="text" {...register('firstName', registerOptions.name)}/> 
          <small className="text-danger">{errors?.name && errors.name.message}</small>
        </div>
        <br />
        <div>
          <label>Email</label>
          <input type="email" name="email" {...register('email', registerOptions.email)}/>
          <small className="text-danger">{errors?.email && errors.email.message}</small>
        </div>
        
        <br />
        <div>
          <label>Password</label>
          <input type="password" name="password" {...register('password', registerOptions.password)} />
          <small className="text-danger">{ errors?.password && errors.password.message }</small>
        </div>
        <button>Submit</button>
        <br />
        <div>
          <label>Country</label>
          <select>
            <option value="es">Spain</option>
            <option value="it">Italy</option>
            <option value="fr">France</option> 
            <option value="es">United States of America</option>
            <option value="it">Canada</option>
            <option value="fr">Great Britain</option>
            <option value="es">Mexico</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>

          </select>
        </div>
          <input type="submit" value="Send"></input>
      </form>
    </div>
  );
};

export default Form;
