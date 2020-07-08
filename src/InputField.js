const InputField = ({ label, name, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Field
        as={TextField}
        label={label}
        name={name}
        id='title'
        margin='dense'
        fullWidth
      />
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};
